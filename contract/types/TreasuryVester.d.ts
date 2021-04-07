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
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface TreasuryVesterInterface extends ethers.utils.Interface {
  functions: {
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "tokensLastUpdate(address)": FunctionFragment;
    "tokensRecipient(address)": FunctionFragment;
    "tokensVestingAmount(address)": FunctionFragment;
    "tokensVestingEnd(address)": FunctionFragment;
    "tokensVestingStart(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "vestingTokens(address)": FunctionFragment;
    "remainingAmount(address)": FunctionFragment;
    "addVesting(address,address,uint256)": FunctionFragment;
    "redeem(address)": FunctionFragment;
    "redeemableAmountOf(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tokensLastUpdate",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "tokensRecipient",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "tokensVestingAmount",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "tokensVestingEnd",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "tokensVestingStart",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "vestingTokens",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "remainingAmount",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "addVesting",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "redeem", values: [string]): string;
  encodeFunctionData(
    functionFragment: "redeemableAmountOf",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokensLastUpdate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokensRecipient",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokensVestingAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokensVestingEnd",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokensVestingStart",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "vestingTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "remainingAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addVesting", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "redeemableAmountOf",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class TreasuryVester extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: TreasuryVesterInterface;

  functions: {
    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<[string]>;

    /**
     * Returns the address of the current owner.
     */
    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    tokensLastUpdate(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "tokensLastUpdate(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    tokensRecipient(arg0: string, overrides?: CallOverrides): Promise<[string]>;

    "tokensRecipient(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    tokensVestingAmount(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "tokensVestingAmount(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    tokensVestingEnd(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "tokensVestingEnd(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    tokensVestingStart(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "tokensVestingStart(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    vestingTokens(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    "vestingTokens(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    remainingAmount(
      token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "remainingAmount(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    addVesting(
      token: string,
      recipient: string,
      vestingStart: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "addVesting(address,address,uint256)"(
      token: string,
      recipient: string,
      vestingStart: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    redeem(token: string, overrides?: Overrides): Promise<ContractTransaction>;

    "redeem(address)"(
      token: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    redeemableAmountOf(
      token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "redeemableAmountOf(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  /**
   * Returns the address of the current owner.
   */
  owner(overrides?: CallOverrides): Promise<string>;

  /**
   * Returns the address of the current owner.
   */
  "owner()"(overrides?: CallOverrides): Promise<string>;

  /**
   * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
   */
  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  /**
   * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
   */
  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  tokensLastUpdate(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  "tokensLastUpdate(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  tokensRecipient(arg0: string, overrides?: CallOverrides): Promise<string>;

  "tokensRecipient(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<string>;

  tokensVestingAmount(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "tokensVestingAmount(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  tokensVestingEnd(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  "tokensVestingEnd(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  tokensVestingStart(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "tokensVestingStart(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  /**
   * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
   */
  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
   */
  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  vestingTokens(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  "vestingTokens(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  remainingAmount(token: string, overrides?: CallOverrides): Promise<BigNumber>;

  "remainingAmount(address)"(
    token: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  addVesting(
    token: string,
    recipient: string,
    vestingStart: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "addVesting(address,address,uint256)"(
    token: string,
    recipient: string,
    vestingStart: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  redeem(token: string, overrides?: Overrides): Promise<ContractTransaction>;

  "redeem(address)"(
    token: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  redeemableAmountOf(
    token: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "redeemableAmountOf(address)"(
    token: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<string>;

    /**
     * Returns the address of the current owner.
     */
    "owner()"(overrides?: CallOverrides): Promise<string>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    tokensLastUpdate(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "tokensLastUpdate(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokensRecipient(arg0: string, overrides?: CallOverrides): Promise<string>;

    "tokensRecipient(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<string>;

    tokensVestingAmount(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "tokensVestingAmount(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokensVestingEnd(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "tokensVestingEnd(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokensVestingStart(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "tokensVestingStart(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    vestingTokens(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    "vestingTokens(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    remainingAmount(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "remainingAmount(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    addVesting(
      token: string,
      recipient: string,
      vestingStart: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "addVesting(address,address,uint256)"(
      token: string,
      recipient: string,
      vestingStart: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    redeem(token: string, overrides?: CallOverrides): Promise<void>;

    "redeem(address)"(token: string, overrides?: CallOverrides): Promise<void>;

    redeemableAmountOf(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "redeemableAmountOf(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;
  };

  estimateGas: {
    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Returns the address of the current owner.
     */
    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    tokensLastUpdate(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "tokensLastUpdate(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokensRecipient(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "tokensRecipient(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokensVestingAmount(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "tokensVestingAmount(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokensVestingEnd(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "tokensVestingEnd(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokensVestingStart(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "tokensVestingStart(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    vestingTokens(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "vestingTokens(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    remainingAmount(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "remainingAmount(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    addVesting(
      token: string,
      recipient: string,
      vestingStart: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "addVesting(address,address,uint256)"(
      token: string,
      recipient: string,
      vestingStart: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    redeem(token: string, overrides?: Overrides): Promise<BigNumber>;

    "redeem(address)"(token: string, overrides?: Overrides): Promise<BigNumber>;

    redeemableAmountOf(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "redeemableAmountOf(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Returns the address of the current owner.
     */
    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    tokensLastUpdate(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "tokensLastUpdate(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokensRecipient(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "tokensRecipient(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokensVestingAmount(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "tokensVestingAmount(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokensVestingEnd(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "tokensVestingEnd(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokensVestingStart(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "tokensVestingStart(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    vestingTokens(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "vestingTokens(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    remainingAmount(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "remainingAmount(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    addVesting(
      token: string,
      recipient: string,
      vestingStart: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "addVesting(address,address,uint256)"(
      token: string,
      recipient: string,
      vestingStart: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    redeem(token: string, overrides?: Overrides): Promise<PopulatedTransaction>;

    "redeem(address)"(
      token: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    redeemableAmountOf(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "redeemableAmountOf(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
