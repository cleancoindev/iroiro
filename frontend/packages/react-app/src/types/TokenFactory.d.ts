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

interface TokenFactoryInterface extends ethers.utils.Interface {
  functions: {
    "totalTokenCount()": FunctionFragment;
    "tokenOf(uint256)": FunctionFragment;
    "tokenAmountOf(address)": FunctionFragment;
    "creatorTokenOf(address,uint256)": FunctionFragment;
    "createToken(address,string,string,uint256,uint8,uint8,bool,uint8,bool)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "totalTokenCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tokenOf",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenAmountOf",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "creatorTokenOf",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createToken",
    values: [
      string,
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      boolean,
      BigNumberish,
      boolean
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "totalTokenCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tokenOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokenAmountOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "creatorTokenOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createToken",
    data: BytesLike
  ): Result;

  events: {
    "CreateToken(address,address,string,string,uint256,uint8,uint8,bool,uint8,bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CreateToken"): EventFragment;
}

export class TokenFactory extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: TokenFactoryInterface;

  functions: {
    totalTokenCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    "totalTokenCount()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    tokenOf(id: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    "tokenOf(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    tokenAmountOf(
      creator: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "tokenAmountOf(address)"(
      creator: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    creatorTokenOf(
      creator: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "creatorTokenOf(address,uint256)"(
      creator: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    createToken(
      creator: string,
      name: string,
      symbol: string,
      totalSupply: BigNumberish,
      decimals: BigNumberish,
      creatorTokenRatio: BigNumberish,
      isTotalSupplyFixed: boolean,
      lockupPeriod: BigNumberish,
      enableStakeToToken: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "createToken(address,string,string,uint256,uint8,uint8,bool,uint8,bool)"(
      creator: string,
      name: string,
      symbol: string,
      totalSupply: BigNumberish,
      decimals: BigNumberish,
      creatorTokenRatio: BigNumberish,
      isTotalSupplyFixed: boolean,
      lockupPeriod: BigNumberish,
      enableStakeToToken: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  totalTokenCount(overrides?: CallOverrides): Promise<BigNumber>;

  "totalTokenCount()"(overrides?: CallOverrides): Promise<BigNumber>;

  tokenOf(id: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "tokenOf(uint256)"(
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  tokenAmountOf(creator: string, overrides?: CallOverrides): Promise<BigNumber>;

  "tokenAmountOf(address)"(
    creator: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  creatorTokenOf(
    creator: string,
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "creatorTokenOf(address,uint256)"(
    creator: string,
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  createToken(
    creator: string,
    name: string,
    symbol: string,
    totalSupply: BigNumberish,
    decimals: BigNumberish,
    creatorTokenRatio: BigNumberish,
    isTotalSupplyFixed: boolean,
    lockupPeriod: BigNumberish,
    enableStakeToToken: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "createToken(address,string,string,uint256,uint8,uint8,bool,uint8,bool)"(
    creator: string,
    name: string,
    symbol: string,
    totalSupply: BigNumberish,
    decimals: BigNumberish,
    creatorTokenRatio: BigNumberish,
    isTotalSupplyFixed: boolean,
    lockupPeriod: BigNumberish,
    enableStakeToToken: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    totalTokenCount(overrides?: CallOverrides): Promise<BigNumber>;

    "totalTokenCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    tokenOf(id: BigNumberish, overrides?: CallOverrides): Promise<string>;

    "tokenOf(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    tokenAmountOf(
      creator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "tokenAmountOf(address)"(
      creator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    creatorTokenOf(
      creator: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "creatorTokenOf(address,uint256)"(
      creator: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    createToken(
      creator: string,
      name: string,
      symbol: string,
      totalSupply: BigNumberish,
      decimals: BigNumberish,
      creatorTokenRatio: BigNumberish,
      isTotalSupplyFixed: boolean,
      lockupPeriod: BigNumberish,
      enableStakeToToken: boolean,
      overrides?: CallOverrides
    ): Promise<string>;

    "createToken(address,string,string,uint256,uint8,uint8,bool,uint8,bool)"(
      creator: string,
      name: string,
      symbol: string,
      totalSupply: BigNumberish,
      decimals: BigNumberish,
      creatorTokenRatio: BigNumberish,
      isTotalSupplyFixed: boolean,
      lockupPeriod: BigNumberish,
      enableStakeToToken: boolean,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    CreateToken(
      token: string | null,
      creator: string | null,
      name: null,
      symbol: null,
      totalSupply: null,
      decimals: null,
      creatorTokenRatio: null,
      isTotalSupplyFixed: null,
      lockupPeriod: null,
      enableStakeToToken: null
    ): EventFilter;
  };

  estimateGas: {
    totalTokenCount(overrides?: CallOverrides): Promise<BigNumber>;

    "totalTokenCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    tokenOf(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "tokenOf(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenAmountOf(
      creator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "tokenAmountOf(address)"(
      creator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    creatorTokenOf(
      creator: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "creatorTokenOf(address,uint256)"(
      creator: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createToken(
      creator: string,
      name: string,
      symbol: string,
      totalSupply: BigNumberish,
      decimals: BigNumberish,
      creatorTokenRatio: BigNumberish,
      isTotalSupplyFixed: boolean,
      lockupPeriod: BigNumberish,
      enableStakeToToken: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "createToken(address,string,string,uint256,uint8,uint8,bool,uint8,bool)"(
      creator: string,
      name: string,
      symbol: string,
      totalSupply: BigNumberish,
      decimals: BigNumberish,
      creatorTokenRatio: BigNumberish,
      isTotalSupplyFixed: boolean,
      lockupPeriod: BigNumberish,
      enableStakeToToken: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    totalTokenCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "totalTokenCount()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokenOf(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "tokenOf(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokenAmountOf(
      creator: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "tokenAmountOf(address)"(
      creator: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    creatorTokenOf(
      creator: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "creatorTokenOf(address,uint256)"(
      creator: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createToken(
      creator: string,
      name: string,
      symbol: string,
      totalSupply: BigNumberish,
      decimals: BigNumberish,
      creatorTokenRatio: BigNumberish,
      isTotalSupplyFixed: boolean,
      lockupPeriod: BigNumberish,
      enableStakeToToken: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "createToken(address,string,string,uint256,uint8,uint8,bool,uint8,bool)"(
      creator: string,
      name: string,
      symbol: string,
      totalSupply: BigNumberish,
      decimals: BigNumberish,
      creatorTokenRatio: BigNumberish,
      isTotalSupplyFixed: boolean,
      lockupPeriod: BigNumberish,
      enableStakeToToken: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}