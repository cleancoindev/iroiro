/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface WalletDistributorInterface extends ethers.utils.Interface {
  functions: {
    "campaignList(uint256)": FunctionFragment;
    "distributorInfoCid()": FunctionFragment;
    "nextCampaignId()": FunctionFragment;
    "createCampaign(bytes32,address,address,string,string,string,uint32,uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "campaignList",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "distributorInfoCid",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nextCampaignId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "createCampaign",
    values: [
      BytesLike,
      string,
      string,
      string,
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "campaignList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "distributorInfoCid",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nextCampaignId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createCampaign",
    data: BytesLike
  ): Result;

  events: {
    "CreateCampaign(address,address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CreateCampaign"): EventFragment;
}

export class WalletDistributor extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: WalletDistributorInterface;

  functions: {
    campaignList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "campaignList(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    distributorInfoCid(overrides?: CallOverrides): Promise<[string]>;

    "distributorInfoCid()"(overrides?: CallOverrides): Promise<[string]>;

    nextCampaignId(overrides?: CallOverrides): Promise<[BigNumber]>;

    "nextCampaignId()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    createCampaign(
      merkleRoot: BytesLike,
      token: string,
      tokenSender: string,
      campaignInfoCid: string,
      recipientsCid: string,
      merkleTreeCid: string,
      recipientsNum: BigNumberish,
      startDate: BigNumberish,
      endDate: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "createCampaign(bytes32,address,address,string,string,string,uint32,uint256,uint256)"(
      merkleRoot: BytesLike,
      token: string,
      tokenSender: string,
      campaignInfoCid: string,
      recipientsCid: string,
      merkleTreeCid: string,
      recipientsNum: BigNumberish,
      startDate: BigNumberish,
      endDate: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  campaignList(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "campaignList(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  distributorInfoCid(overrides?: CallOverrides): Promise<string>;

  "distributorInfoCid()"(overrides?: CallOverrides): Promise<string>;

  nextCampaignId(overrides?: CallOverrides): Promise<BigNumber>;

  "nextCampaignId()"(overrides?: CallOverrides): Promise<BigNumber>;

  createCampaign(
    merkleRoot: BytesLike,
    token: string,
    tokenSender: string,
    campaignInfoCid: string,
    recipientsCid: string,
    merkleTreeCid: string,
    recipientsNum: BigNumberish,
    startDate: BigNumberish,
    endDate: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "createCampaign(bytes32,address,address,string,string,string,uint32,uint256,uint256)"(
    merkleRoot: BytesLike,
    token: string,
    tokenSender: string,
    campaignInfoCid: string,
    recipientsCid: string,
    merkleTreeCid: string,
    recipientsNum: BigNumberish,
    startDate: BigNumberish,
    endDate: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    campaignList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "campaignList(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    distributorInfoCid(overrides?: CallOverrides): Promise<string>;

    "distributorInfoCid()"(overrides?: CallOverrides): Promise<string>;

    nextCampaignId(overrides?: CallOverrides): Promise<BigNumber>;

    "nextCampaignId()"(overrides?: CallOverrides): Promise<BigNumber>;

    createCampaign(
      merkleRoot: BytesLike,
      token: string,
      tokenSender: string,
      campaignInfoCid: string,
      recipientsCid: string,
      merkleTreeCid: string,
      recipientsNum: BigNumberish,
      startDate: BigNumberish,
      endDate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "createCampaign(bytes32,address,address,string,string,string,uint32,uint256,uint256)"(
      merkleRoot: BytesLike,
      token: string,
      tokenSender: string,
      campaignInfoCid: string,
      recipientsCid: string,
      merkleTreeCid: string,
      recipientsNum: BigNumberish,
      startDate: BigNumberish,
      endDate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    CreateCampaign(
      campaign: string | null,
      token: string | null,
      creator: string | null
    ): EventFilter;
  };

  estimateGas: {
    campaignList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "campaignList(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    distributorInfoCid(overrides?: CallOverrides): Promise<BigNumber>;

    "distributorInfoCid()"(overrides?: CallOverrides): Promise<BigNumber>;

    nextCampaignId(overrides?: CallOverrides): Promise<BigNumber>;

    "nextCampaignId()"(overrides?: CallOverrides): Promise<BigNumber>;

    createCampaign(
      merkleRoot: BytesLike,
      token: string,
      tokenSender: string,
      campaignInfoCid: string,
      recipientsCid: string,
      merkleTreeCid: string,
      recipientsNum: BigNumberish,
      startDate: BigNumberish,
      endDate: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "createCampaign(bytes32,address,address,string,string,string,uint32,uint256,uint256)"(
      merkleRoot: BytesLike,
      token: string,
      tokenSender: string,
      campaignInfoCid: string,
      recipientsCid: string,
      merkleTreeCid: string,
      recipientsNum: BigNumberish,
      startDate: BigNumberish,
      endDate: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    campaignList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "campaignList(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    distributorInfoCid(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "distributorInfoCid()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nextCampaignId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "nextCampaignId()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createCampaign(
      merkleRoot: BytesLike,
      token: string,
      tokenSender: string,
      campaignInfoCid: string,
      recipientsCid: string,
      merkleTreeCid: string,
      recipientsNum: BigNumberish,
      startDate: BigNumberish,
      endDate: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "createCampaign(bytes32,address,address,string,string,string,uint32,uint256,uint256)"(
      merkleRoot: BytesLike,
      token: string,
      tokenSender: string,
      campaignInfoCid: string,
      recipientsCid: string,
      merkleTreeCid: string,
      recipientsNum: BigNumberish,
      startDate: BigNumberish,
      endDate: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
