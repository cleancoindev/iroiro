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

export type CreateToken = ContractEventLog<{
  token: string;
  creator: string;
  name: string;
  symbol: string;
  0: string;
  1: string;
  2: string;
  3: string;
}>;
export type OwnershipTransferred = ContractEventLog<{
  previousOwner: string;
  newOwner: string;
  0: string;
  1: string;
}>;

export interface TokenFactory extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): TokenFactory;
  clone(): TokenFactory;
  methods: {
    /**
     * Returns the address of the current owner.
     */
    owner(): NonPayableTransactionObject<string>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(): NonPayableTransactionObject<void>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(newOwner: string): NonPayableTransactionObject<void>;

    updateCreatorFund(
      newCreatorFund: string
    ): NonPayableTransactionObject<void>;

    createToken(
      name: string,
      symbol: string,
      donationRatio: number | string | BN
    ): NonPayableTransactionObject<void>;

    createExclusiveToken(
      creator: string,
      name: string,
      symbol: string,
      donationRatio: number | string | BN,
      operationRatio: number | string | BN
    ): NonPayableTransactionObject<void>;
  };
  events: {
    CreateToken(cb?: Callback<CreateToken>): EventEmitter;
    CreateToken(
      options?: EventOptions,
      cb?: Callback<CreateToken>
    ): EventEmitter;

    OwnershipTransferred(cb?: Callback<OwnershipTransferred>): EventEmitter;
    OwnershipTransferred(
      options?: EventOptions,
      cb?: Callback<OwnershipTransferred>
    ): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "CreateToken", cb: Callback<CreateToken>): void;
  once(
    event: "CreateToken",
    options: EventOptions,
    cb: Callback<CreateToken>
  ): void;

  once(event: "OwnershipTransferred", cb: Callback<OwnershipTransferred>): void;
  once(
    event: "OwnershipTransferred",
    options: EventOptions,
    cb: Callback<OwnershipTransferred>
  ): void;
}
