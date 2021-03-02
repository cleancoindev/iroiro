/*
 *     Copyright (C) 2021 TART K.K.
 *
 *     This program is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 *
 *     This program is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 *
 *     You should have received a copy of the GNU General Public License
 *     along with this program.  If not, see https://www.gnu.org/licenses/.
 */

const { accounts, contract } = require("@openzeppelin/test-environment");
const {
  BN,
  expectEvent,
  expectRevert,
  time,
} = require("@openzeppelin/test-helpers");
const { assert, expect } = require("chai");

const Campaign = contract.fromArtifact("CampaignInterfaceV1");
const ERC20Mock = contract.fromArtifact("ERC20Mock");

describe("CampaignInterfaceV1", () => {
  const [owner, alice, link] = accounts;
  let now, future;

  beforeEach(async () => {
    this.abctoken = await ERC20Mock.new("ABCToken", "ABC", owner, 1000000000, {
      from: owner,
    });
    this.xyztoken = await ERC20Mock.new("XYZToken", "XYZ", owner, 1000000000, {
      from: owner,
    });
    now = await time.latest();
    future = now.add(time.duration.weeks(1));
    this.campaign = await Campaign.new(
      this.abctoken.address,
      "campaign info cid",
      "recipients cid",
      100000,
      alice,
      now,
      future,
      { from: owner }
    );
  });

  describe("constructor", async () => {
    it("has a state variables", async () => {
      expect(await this.campaign.campaignToken()).to.be.equal(
        this.abctoken.address
      );
      expect(await this.campaign.campaignInfoCid()).to.be.equal(
        "campaign info cid"
      );
      expect(await this.campaign.recipientsCid()).to.be.equal("recipients cid");
      expect((await this.campaign.claimAmount()).toString()).to.be.equal(
        "100000"
      );
      expect((await this.campaign.claimedNum()).toString()).to.be.equal("0");
      expect(await this.campaign.refundDestination()).to.be.equal(alice);
      expect(await this.campaign.startDate()).to.be.bignumber.equal(now);
      expect(await this.campaign.endDate()).to.be.bignumber.equal(future);
      expect((await this.campaign.status()).toString()).to.be.equal("0");
    });

    it("throws an error if start date is greater than or equal to end date", async () => {
      try {
        await Campaign.new(
          this.abctoken.address,
          "campaign info cid",
          "recipients cid",
          100000,
          alice,
          future,
          now,
          { from: owner }
        );
        assert.fail();
      } catch (error) {
        expect(error.reason).to.equal("Start date must be less than end date");
        assert(true);
      }
      try {
        await Campaign.new(
          this.abctoken.address,
          "campaign info cid",
          "recipients cid",
          100000,
          alice,
          now,
          now,
          { from: owner }
        );
        assert.fail();
      } catch (error) {
        expect(error.reason).to.equal("Start date must be less than end date");
        assert(true);
      }
    });
  });

  describe("cancelCampaign", () => {
    let now, oneweeklater, twoweeklater, campaign;
    describe("success case", () => {
      beforeEach(async () => {
        oneweeklater = (await time.latest()).add(time.duration.weeks(1));
        twoweeklater = future.add(time.duration.weeks(1));
        campaign = await Campaign.new(
          this.abctoken.address,
          "campaign info cid",
          "recipients cid",
          100000,
          owner,
          oneweeklater,
          twoweeklater,
          { from: owner }
        );
        this.abctoken.transfer(campaign.address, 1000000, { from: owner });
        expect(
          await this.abctoken.balanceOf(campaign.address)
        ).to.be.bignumber.equal(new BN(1000000));
        expect(await this.abctoken.balanceOf(owner)).to.be.bignumber.equal(
          new BN(999000000)
        );
      });

      it("update status to cancelled", async () => {
        await campaign.cancelCampaign({ from: owner });
        expect(await campaign.status()).to.be.bignumber.equal(new BN(1));
      });
      it("emits event", async () => {
        const receipt = await campaign.cancelCampaign({ from: owner });
        expectEvent(receipt, "UpdateStatus");
      });
      it("transfer token to refund destination", async () => {
        await campaign.cancelCampaign({ from: owner });
        expect(
          await this.abctoken.balanceOf(campaign.address)
        ).to.be.bignumber.equal(new BN(0));
        expect(await this.abctoken.balanceOf(owner)).to.be.bignumber.equal(
          new BN(1000000000)
        );
      });
    });

    describe("error case", () => {
      beforeEach(async () => {
        now = await time.latest();
        oneweeklater = now.add(time.duration.weeks(1));
        campaign = await Campaign.new(
          this.abctoken.address,
          "campaign info cid",
          "recipients cid",
          100000,
          owner,
          now,
          oneweeklater,
          { from: owner }
        );
        this.abctoken.transfer(campaign.address, 1000000, { from: owner });
        expect(
          await this.abctoken.balanceOf(campaign.address)
        ).to.be.bignumber.equal(new BN(1000000));
        expect(await this.abctoken.balanceOf(owner)).to.be.bignumber.equal(
          new BN(999000000)
        );
      });

      it("fail if current date is greather than or equal to start date", async () => {
        expectRevert(
          campaign.cancelCampaign({ from: owner }),
          "Campaign is already started"
        );
      });

      it("fail if non owner is trying to cancel", async () => {
        try {
          await campaign.cancelCampaign({ from: alice });
          assert.fail();
        } catch (error) {
          expect(error.reason).to.equal("Ownable: caller is not the owner");
          assert(true);
        }
      });
    });
  });

  describe("refundRemainingTokens", () => {
    let now, oneweeklater, twoweeklater, campaign;
    describe("error case", () => {
      beforeEach(async () => {
        now = await time.latest();
        oneweeklater = now.add(time.duration.weeks(1));
        campaign = await Campaign.new(
          this.abctoken.address,
          "campaign info cid",
          "recipients cid",
          100000,
          owner,
          now,
          oneweeklater,
          { from: owner }
        );
        this.abctoken.transfer(campaign.address, 1000000, { from: owner });
        expect(
          await this.abctoken.balanceOf(campaign.address)
        ).to.be.bignumber.equal(new BN(1000000));
        expect(await this.abctoken.balanceOf(owner)).to.be.bignumber.equal(
          new BN(999000000)
        );
      });

      it("fail if current date is less than or equal to start date", async () => {
        try {
          await campaign.refundRemainingTokens({ from: owner });
          assert.fail();
        } catch (error) {
          expect(error.reason).to.equal("Campaign is not ended yet");
          assert(true);
        }
      });
    });

    describe("success case", () => {
      beforeEach(async () => {
        now = await time.latest();
        oneweeklater = now.add(time.duration.weeks(1));
        campaign = await Campaign.new(
          this.abctoken.address,
          "campaign info cid",
          "recipients cid",
          100000,
          owner,
          now,
          oneweeklater,
          { from: owner }
        );
        this.abctoken.transfer(campaign.address, 1000000, { from: owner });
        expect(
          await this.abctoken.balanceOf(campaign.address)
        ).to.be.bignumber.equal(new BN(1000000));
        expect(await this.abctoken.balanceOf(owner)).to.be.bignumber.equal(
          new BN(999000000)
        );
        time.increase(time.duration.weeks(2));
      });

      it("update status to ended", async () => {
        await campaign.refundRemainingTokens({ from: owner });
        expect(await campaign.status()).to.be.bignumber.equal(new BN(2));
      });

      it("emits event", async () => {
        const receipt = await campaign.refundRemainingTokens({ from: owner });
        expectEvent(receipt, "UpdateStatus");
      });

      it("transfer token to refund destination", async () => {
        await campaign.refundRemainingTokens({ from: owner });
        expect(
          await this.abctoken.balanceOf(campaign.address)
        ).to.be.bignumber.equal(new BN(0));
        expect(await this.abctoken.balanceOf(owner)).to.be.bignumber.equal(
          new BN(1000000000)
        );
      });

      it("fail if non owner is trying to cancel", async () => {
        try {
          await campaign.refundRemainingTokens({ from: alice });
          assert.fail();
        } catch (error) {
          expect(error.reason).to.equal("Ownable: caller is not the owner");
          assert(true);
        }
      });
    });
  });
});