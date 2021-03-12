/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { ContractOptions } from "web3-eth-contract";
import { EventLog } from "web3-core";
import { EventEmitter } from "events";
import {
  Callback,
  PayableTransactionObject,
  NonPayableTransactionObject,
  BlockType,
  ContractEventLog,
  BaseContract,
} from "./types";

interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export type Claimed = ContractEventLog<{
  distributionId: string;
  account: string;
  amount: string;
  0: string;
  1: string;
  2: string;
}>;
export type CreateCampaign = ContractEventLog<{
  distributionId: string;
  token: string;
  creator: string;
  merkleTreeCid: string;
  campaignInfoCid: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
}>;
export type OwnershipTransferred = ContractEventLog<{
  previousOwner: string;
  newOwner: string;
  0: string;
  1: string;
}>;
export type UpdateDistributorInfo = ContractEventLog<{
  cid: string;
  0: string;
}>;

export interface UUIDDistributor extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): UUIDDistributor;
  clone(): UUIDDistributor;
  methods: {
    addDistribution(
      newToken: string,
      newMerkleRoot: string | number[],
      allowance: number | string | BN
    ): NonPayableTransactionObject<void>;

    claim(
      distributionId: number | string | BN,
      index: number | string | BN,
      target: string,
      amount: number | string | BN,
      merkleProof: (string | number[])[]
    ): NonPayableTransactionObject<void>;

    distributionMap(
      arg0: number | string | BN
    ): NonPayableTransactionObject<{
      token: string;
      merkleRoot: string;
      remainingAmount: string;
      0: string;
      1: string;
      2: string;
    }>;

    isClaimed(
      distributionId: number | string | BN,
      index: number | string | BN
    ): NonPayableTransactionObject<boolean>;

    merkleRoot(
      distributionId: number | string | BN
    ): NonPayableTransactionObject<string>;

    nextDistributionId(): NonPayableTransactionObject<string>;

    /**
     * Returns the address of the current owner.
     */
    owner(): NonPayableTransactionObject<string>;

    remainingAmount(
      distributionId: number | string | BN
    ): NonPayableTransactionObject<string>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(): NonPayableTransactionObject<void>;

    token(
      distributionId: number | string | BN
    ): NonPayableTransactionObject<string>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(newOwner: string): NonPayableTransactionObject<void>;

    updateDistributorInfo(
      distributorInfoCid: string
    ): NonPayableTransactionObject<void>;

    createCampaign(
      merkleRoot: string | number[],
      token: string,
      merkleTreeCid: string,
      campaignInfoCid: string,
      allowance: number | string | BN
    ): NonPayableTransactionObject<void>;
  };
  events: {
    Claimed(cb?: Callback<Claimed>): EventEmitter;
    Claimed(options?: EventOptions, cb?: Callback<Claimed>): EventEmitter;

    CreateCampaign(cb?: Callback<CreateCampaign>): EventEmitter;
    CreateCampaign(
      options?: EventOptions,
      cb?: Callback<CreateCampaign>
    ): EventEmitter;

    OwnershipTransferred(cb?: Callback<OwnershipTransferred>): EventEmitter;
    OwnershipTransferred(
      options?: EventOptions,
      cb?: Callback<OwnershipTransferred>
    ): EventEmitter;

    UpdateDistributorInfo(cb?: Callback<UpdateDistributorInfo>): EventEmitter;
    UpdateDistributorInfo(
      options?: EventOptions,
      cb?: Callback<UpdateDistributorInfo>
    ): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "Claimed", cb: Callback<Claimed>): void;
  once(event: "Claimed", options: EventOptions, cb: Callback<Claimed>): void;

  once(event: "CreateCampaign", cb: Callback<CreateCampaign>): void;
  once(
    event: "CreateCampaign",
    options: EventOptions,
    cb: Callback<CreateCampaign>
  ): void;

  once(event: "OwnershipTransferred", cb: Callback<OwnershipTransferred>): void;
  once(
    event: "OwnershipTransferred",
    options: EventOptions,
    cb: Callback<OwnershipTransferred>
  ): void;

  once(
    event: "UpdateDistributorInfo",
    cb: Callback<UpdateDistributorInfo>
  ): void;
  once(
    event: "UpdateDistributorInfo",
    options: EventOptions,
    cb: Callback<UpdateDistributorInfo>
  ): void;
}
