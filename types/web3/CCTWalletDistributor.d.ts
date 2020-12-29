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

export type CreateCampaign = ContractEventLog<{
  campaign: string;
  token: string;
  creator: string;
  0: string;
  1: string;
  2: string;
}>;

export interface CCTWalletDistributor extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): CCTWalletDistributor;
  clone(): CCTWalletDistributor;
  methods: {
    campaignList(arg0: number | string): NonPayableTransactionObject<string>;

    distributorInfoCid(): NonPayableTransactionObject<string>;

    link(): NonPayableTransactionObject<string>;

    nextCampaignId(): NonPayableTransactionObject<string>;

    createCampaign(
      token: string,
      tokenSender: string,
      campaignInfoCid: string,
      recipientsCid: string,
      recipientsNum: number | string,
      startDate: number | string,
      endDate: number | string
    ): NonPayableTransactionObject<void>;
  };
  events: {
    CreateCampaign(cb?: Callback<CreateCampaign>): EventEmitter;
    CreateCampaign(
      options?: EventOptions,
      cb?: Callback<CreateCampaign>
    ): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "CreateCampaign", cb: Callback<CreateCampaign>): void;
  once(
    event: "CreateCampaign",
    options: EventOptions,
    cb: Callback<CreateCampaign>
  ): void;
}
