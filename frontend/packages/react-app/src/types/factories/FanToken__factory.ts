/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { FanToken } from "../FanToken";

export class FanToken__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name: string,
    symbol: string,
    totalSupply: BigNumberish,
    owner: string,
    decimals: BigNumberish,
    _minter: string,
    _creatorTokenRatio: BigNumberish,
    _lockupPeriod: BigNumberish,
    overrides?: Overrides
  ): Promise<FanToken> {
    return super.deploy(
      name,
      symbol,
      totalSupply,
      owner,
      decimals,
      _minter,
      _creatorTokenRatio,
      _lockupPeriod,
      overrides || {}
    ) as Promise<FanToken>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    totalSupply: BigNumberish,
    owner: string,
    decimals: BigNumberish,
    _minter: string,
    _creatorTokenRatio: BigNumberish,
    _lockupPeriod: BigNumberish,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      name,
      symbol,
      totalSupply,
      owner,
      decimals,
      _minter,
      _creatorTokenRatio,
      _lockupPeriod,
      overrides || {}
    );
  }
  attach(address: string): FanToken {
    return super.attach(address) as FanToken;
  }
  connect(signer: Signer): FanToken__factory {
    return super.connect(signer) as FanToken__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FanToken {
    return new Contract(address, _abi, signerOrProvider) as FanToken;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "totalSupply",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "decimals",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "_minter",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "_creatorTokenRatio",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "_lockupPeriod",
        type: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "creatorTokenRatio",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lockupPeriod",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001aa638038062001aa683398181016040526101008110156200003857600080fd5b81019080805160405193929190846401000000008211156200005957600080fd5b838201915060208201858111156200007057600080fd5b82518660018202830111640100000000821117156200008e57600080fd5b8083526020830192505050908051906020019080838360005b83811015620000c4578082015181840152602081019050620000a7565b50505050905090810190601f168015620000f25780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200011657600080fd5b838201915060208201858111156200012d57600080fd5b82518660018202830111640100000000821117156200014b57600080fd5b8083526020830192505050908051906020019080838360005b838110156200018157808201518184015260208101905062000164565b50505050905090810190601f168015620001af5780820380516001836020036101000a031916815260200191505b50604052602001805190602001909291908051906020019092919080519060200190929190805190602001909291908051906020019092919080519060200190929190505050878781600390805190602001906200020f92919062000579565b5080600490805190602001906200022892919062000579565b506012600560006101000a81548160ff021916908360ff1602179055505050620002598587620002ef60201b60201c565b6200026a84620004cd60201b60201c565b82600560016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600560156101000a81548160ff021916908360ff16021790555080600560166101000a81548160ff021916908360ff16021790555050505050505050506200061f565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141562000393576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f45524332303a206d696e7420746f20746865207a65726f20616464726573730081525060200191505060405180910390fd5b620003a760008383620004eb60201b60201c565b620003c381600254620004f060201b62000b4b1790919060201c565b60028190555062000421816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054620004f060201b62000b4b1790919060201c565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b80600560006101000a81548160ff021916908360ff16021790555050565b505050565b6000808284019050838110156200056f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620005bc57805160ff1916838001178555620005ed565b82800160010185558215620005ed579182015b82811115620005ec578251825591602001919060010190620005cf565b5b509050620005fc919062000600565b5090565b5b808211156200061b57600081600090555060010162000601565b5090565b611477806200062f6000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806370a082311161008c578063a9059cbb11610066578063a9059cbb1461048a578063dd62ed3e146104ee578063ee947a7c14610566578063fa749a7f14610587576100ea565b806370a082311461034b57806395d89b41146103a3578063a457c2d714610426576100ea565b806323b872dd116100c857806323b872dd146101f4578063313ce56714610278578063395093511461029957806340c10f19146102fd576100ea565b806306fdde03146100ef578063095ea7b31461017257806318160ddd146101d6575b600080fd5b6100f76105a8565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561013757808201518184015260208101905061011c565b50505050905090810190601f1680156101645780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101be6004803603604081101561018857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061064a565b60405180821515815260200191505060405180910390f35b6101de610668565b6040518082815260200191505060405180910390f35b6102606004803603606081101561020a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610672565b60405180821515815260200191505060405180910390f35b61028061074b565b604051808260ff16815260200191505060405180910390f35b6102e5600480360360408110156102af57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610762565b60405180821515815260200191505060405180910390f35b6103496004803603604081101561031357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610815565b005b61038d6004803603602081101561036157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506108c9565b6040518082815260200191505060405180910390f35b6103ab610911565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156103eb5780820151818401526020810190506103d0565b50505050905090810190601f1680156104185780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6104726004803603604081101561043c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506109b3565b60405180821515815260200191505060405180910390f35b6104d6600480360360408110156104a057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610a80565b60405180821515815260200191505060405180910390f35b6105506004803603604081101561050457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a9e565b6040518082815260200191505060405180910390f35b61056e610b25565b604051808260ff16815260200191505060405180910390f35b61058f610b38565b604051808260ff16815260200191505060405180910390f35b606060038054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106405780601f1061061557610100808354040283529160200191610640565b820191906000526020600020905b81548152906001019060200180831161062357829003601f168201915b5050505050905090565b600061065e610657610bd3565b8484610bdb565b6001905092915050565b6000600254905090565b600061067f848484610dd2565b6107408461068b610bd3565b61073b8560405180606001604052806028815260200161138b60289139600160008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006106f1610bd3565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546110939092919063ffffffff16565b610bdb565b600190509392505050565b6000600560009054906101000a900460ff16905090565b600061080b61076f610bd3565b846108068560016000610780610bd3565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610b4b90919063ffffffff16565b610bdb565b6001905092915050565b600560019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146108bb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806113b36021913960400191505060405180910390fd5b6108c58282611153565b5050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b606060048054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109a95780601f1061097e576101008083540402835291602001916109a9565b820191906000526020600020905b81548152906001019060200180831161098c57829003601f168201915b5050505050905090565b6000610a766109c0610bd3565b84610a718560405180606001604052806025815260200161141d60259139600160006109ea610bd3565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546110939092919063ffffffff16565b610bdb565b6001905092915050565b6000610a94610a8d610bd3565b8484610dd2565b6001905092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600560169054906101000a900460ff1681565b600560159054906101000a900460ff1681565b600080828401905083811015610bc9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610c61576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806113f96024913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610ce7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806113436022913960400191505060405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610e58576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806113d46025913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610ede576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806113206023913960400191505060405180910390fd5b610ee983838361131a565b610f5481604051806060016040528060268152602001611365602691396000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546110939092919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610fe7816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610b4b90919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505050565b6000838311158290611140576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156111055780820151818401526020810190506110ea565b50505050905090810190601f1680156111325780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156111f6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f45524332303a206d696e7420746f20746865207a65726f20616464726573730081525060200191505060405180910390fd5b6112026000838361131a565b61121781600254610b4b90919063ffffffff16565b60028190555061126e816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610b4b90919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b50505056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636553656e64657220646f6573206e6f742068617665206d696e74657220726f6c652e45524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa2646970667358221220d88b3a338e5600fea2272d69fa168201d68138282d60026fc836857cd7f502aa64736f6c634300060c0033";
