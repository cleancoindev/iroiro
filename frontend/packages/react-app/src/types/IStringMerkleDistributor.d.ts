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

interface IStringMerkleDistributorInterface extends ethers.utils.Interface {
  functions: {
    "token()": FunctionFragment;
    "merkleRoot()": FunctionFragment;
    "isClaimed(uint256)": FunctionFragment;
    "claim(uint256,string,uint256,bytes32[])": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "merkleRoot",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isClaimed",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "claim",
    values: [BigNumberish, string, BigNumberish, BytesLike[]]
  ): string;

  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "merkleRoot", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isClaimed", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;

  events: {
    "Claimed(uint256,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Claimed"): EventFragment;
}

export class IStringMerkleDistributor extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IStringMerkleDistributorInterface;

  functions: {
    token(overrides?: CallOverrides): Promise<[string]>;

    "token()"(overrides?: CallOverrides): Promise<[string]>;

    merkleRoot(overrides?: CallOverrides): Promise<[string]>;

    "merkleRoot()"(overrides?: CallOverrides): Promise<[string]>;

    isClaimed(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isClaimed(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    claim(
      index: BigNumberish,
      hashed: string,
      amount: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "claim(uint256,string,uint256,bytes32[])"(
      index: BigNumberish,
      hashed: string,
      amount: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  token(overrides?: CallOverrides): Promise<string>;

  "token()"(overrides?: CallOverrides): Promise<string>;

  merkleRoot(overrides?: CallOverrides): Promise<string>;

  "merkleRoot()"(overrides?: CallOverrides): Promise<string>;

  isClaimed(index: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

  "isClaimed(uint256)"(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  claim(
    index: BigNumberish,
    hashed: string,
    amount: BigNumberish,
    merkleProof: BytesLike[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "claim(uint256,string,uint256,bytes32[])"(
    index: BigNumberish,
    hashed: string,
    amount: BigNumberish,
    merkleProof: BytesLike[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    token(overrides?: CallOverrides): Promise<string>;

    "token()"(overrides?: CallOverrides): Promise<string>;

    merkleRoot(overrides?: CallOverrides): Promise<string>;

    "merkleRoot()"(overrides?: CallOverrides): Promise<string>;

    isClaimed(index: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    "isClaimed(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    claim(
      index: BigNumberish,
      hashed: string,
      amount: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    "claim(uint256,string,uint256,bytes32[])"(
      index: BigNumberish,
      hashed: string,
      amount: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    Claimed(index: null, account: null, amount: null): EventFilter;
  };

  estimateGas: {
    token(overrides?: CallOverrides): Promise<BigNumber>;

    "token()"(overrides?: CallOverrides): Promise<BigNumber>;

    merkleRoot(overrides?: CallOverrides): Promise<BigNumber>;

    "merkleRoot()"(overrides?: CallOverrides): Promise<BigNumber>;

    isClaimed(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isClaimed(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claim(
      index: BigNumberish,
      hashed: string,
      amount: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "claim(uint256,string,uint256,bytes32[])"(
      index: BigNumberish,
      hashed: string,
      amount: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "token()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    merkleRoot(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "merkleRoot()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isClaimed(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isClaimed(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claim(
      index: BigNumberish,
      hashed: string,
      amount: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "claim(uint256,string,uint256,bytes32[])"(
      index: BigNumberish,
      hashed: string,
      amount: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
