/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { SocialToken } from "../SocialToken";

export class SocialToken__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<SocialToken> {
    return super.deploy(overrides || {}) as Promise<SocialToken>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SocialToken {
    return super.attach(address) as SocialToken;
  }
  connect(signer: Signer): SocialToken__factory {
    return super.connect(signer) as SocialToken__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SocialToken {
    return new Contract(address, _abi, signerOrProvider) as SocialToken;
  }
}

const _abi = [
  {
    inputs: [],
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
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
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
    name: "burnFrom",
    outputs: [],
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
        internalType: "string",
        name: "tokenName",
        type: "string",
      },
      {
        internalType: "string",
        name: "tokenSymbol",
        type: "string",
      },
      {
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "address",
        name: "donatee",
        type: "address",
      },
      {
        internalType: "address",
        name: "treasuryVester",
        type: "address",
      },
      {
        internalType: "address",
        name: "creatorFund",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "operationRatio",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "donateeRatio",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "creatorFundRatio",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051806020016040528060008152506040518060200160405280600081525081600490805190602001906200004a92919062000088565b5080600590805190602001906200006392919062000088565b506012600660006101000a81548160ff021916908360ff16021790555050506200013e565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282620000c057600085556200010c565b82601f10620000db57805160ff19168380011785556200010c565b828001600101855582156200010c579182015b828111156200010b578251825591602001919060010190620000ee565b5b5090506200011b91906200011f565b5090565b5b808211156200013a57600081600090555060010162000120565b5090565b611dd3806200014e6000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806370a082311161008c578063a457c2d711610066578063a457c2d714610454578063a9059cbb146104b8578063b9738d0d1461051c578063dd62ed3e1461072d576100ea565b806370a082311461032b57806379cc67901461038357806395d89b41146103d1576100ea565b806323b872dd116100c857806323b872dd146101f4578063313ce56714610278578063395093511461029957806342966c68146102fd576100ea565b806306fdde03146100ef578063095ea7b31461017257806318160ddd146101d6575b600080fd5b6100f76107a5565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561013757808201518184015260208101905061011c565b50505050905090810190601f1680156101645780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101be6004803603604081101561018857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610847565b60405180821515815260200191505060405180910390f35b6101de610865565b6040518082815260200191505060405180910390f35b6102606004803603606081101561020a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061086f565b60405180821515815260200191505060405180910390f35b610280610948565b604051808260ff16815260200191505060405180910390f35b6102e5600480360360408110156102af57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061095f565b60405180821515815260200191505060405180910390f35b6103296004803603602081101561031357600080fd5b8101908080359060200190929190505050610a12565b005b61036d6004803603602081101561034157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a26565b6040518082815260200191505060405180910390f35b6103cf6004803603604081101561039957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610a6f565b005b6103d9610ad1565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156104195780820151818401526020810190506103fe565b50505050905090810190601f1680156104465780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6104a06004803603604081101561046a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b73565b60405180821515815260200191505060405180910390f35b610504600480360360408110156104ce57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610c40565b60405180821515815260200191505060405180910390f35b61072b600480360361014081101561053357600080fd5b810190808035906020019064010000000081111561055057600080fd5b82018360208201111561056257600080fd5b8035906020019184600183028401116401000000008311171561058457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001906401000000008111156105e757600080fd5b8201836020820111156105f957600080fd5b8035906020019184600183028401116401000000008311171561061b57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019092919080359060200190929190505050610c5e565b005b61078f6004803603604081101561074357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610f64565b6040518082815260200191505060405180910390f35b606060078054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561083d5780601f106108125761010080835404028352916020019161083d565b820191906000526020600020905b81548152906001019060200180831161082057829003601f168201915b5050505050905090565b600061085b610854610feb565b8484610ff3565b6001905092915050565b6000600354905090565b600061087c8484846111ea565b61093d84610888610feb565b61093885604051806060016040528060288152602001611cc360289139600260008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006108ee610feb565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546114af9092919063ffffffff16565b610ff3565b600190509392505050565b6000600960009054906101000a900460ff16905090565b6000610a0861096c610feb565b84610a03856002600061097d610feb565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461156990919063ffffffff16565b610ff3565b6001905092915050565b610a23610a1d610feb565b826115f1565b50565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000610aae82604051806060016040528060248152602001611ceb60249139610a9f86610a9a610feb565b610f64565b6114af9092919063ffffffff16565b9050610ac283610abc610feb565b83610ff3565b610acc83836115f1565b505050565b606060088054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610b695780601f10610b3e57610100808354040283529160200191610b69565b820191906000526020600020905b815481529060010190602001808311610b4c57829003601f168201915b5050505050905090565b6000610c36610b80610feb565b84610c3185604051806060016040528060258152602001611d796025913960026000610baa610feb565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546114af9092919063ffffffff16565b610ff3565b6001905092915050565b6000610c54610c4d610feb565b84846111ea565b6001905092915050565b600060019054906101000a900460ff1680610c7d5750610c7c6117b7565b5b80610c93575060008054906101000a900460ff16155b610ce8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180611c74602e913960400191505060405180910390fd5b60008060019054906101000a900460ff161590508015610d38576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b8a60079080519060200190610d4e929190611b3b565b508960089080519060200190610d65929190611b3b565b506012600960006101000a81548160ff021916908360ff1602179055506000841415610dcd57610dc889610dc3612710610db56107d06a084595161401484a0000006117c890919063ffffffff16565b61184e90919063ffffffff16565b6118d7565b610e58565b610e1c89610e17612710610e09610def896107d0611aa090919063ffffffff16565b6a084595161401484a0000006117c890919063ffffffff16565b61184e90919063ffffffff16565b6118d7565b610e5788610e52612710610e44886a084595161401484a0000006117c890919063ffffffff16565b61184e90919063ffffffff16565b6118d7565b5b610eb986610eb4612710610ea6610e8c87610e7e8a611f40611aa090919063ffffffff16565b611aa090919063ffffffff16565b6a084595161401484a0000006117c890919063ffffffff16565b61184e90919063ffffffff16565b6118d7565b60008314610efd57610efc87610ef7612710610ee9876a084595161401484a0000006117c890919063ffffffff16565b61184e90919063ffffffff16565b6118d7565b5b610f05610865565b6a084595161401484a0000001115610f3657610f3585610f23610865565b6a084595161401484a000000036118d7565b5b8015610f575760008060016101000a81548160ff0219169083151502179055505b5050505050505050505050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611079576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180611d556024913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156110ff576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180611c2c6022913960400191505060405180910390fd5b80600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611270576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526025815260200180611d306025913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156112f6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526023815260200180611be76023913960400191505060405180910390fd5b611301838383611b23565b61136d81604051806060016040528060268152602001611c4e60269139600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546114af9092919063ffffffff16565b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061140281600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461156990919063ffffffff16565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505050565b600083831115829061155c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611521578082015181840152602081019050611506565b50505050905090810190601f16801561154e5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5082840390509392505050565b6000808284019050838110156115e7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611677576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180611d0f6021913960400191505060405180910390fd5b61168382600083611b23565b6116ef81604051806060016040528060228152602001611c0a60229139600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546114af9092919063ffffffff16565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061174781600354611aa090919063ffffffff16565b600381905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b60006117c230611b28565b15905090565b6000808314156117db5760009050611848565b60008284029050828482816117ec57fe5b0414611843576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180611ca26021913960400191505060405180910390fd5b809150505b92915050565b60008082116118c5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601a8152602001807f536166654d6174683a206469766973696f6e206279207a65726f00000000000081525060200191505060405180910390fd5b8183816118ce57fe5b04905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561197a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f45524332303a206d696e7420746f20746865207a65726f20616464726573730081525060200191505060405180910390fd5b61198660008383611b23565b61199b8160035461156990919063ffffffff16565b6003819055506119f381600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461156990919063ffffffff16565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b600082821115611b18576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525060200191505060405180910390fd5b818303905092915050565b505050565b600080823b905060008111915050919050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282611b715760008555611bb8565b82601f10611b8a57805160ff1916838001178555611bb8565b82800160010185558215611bb8579182015b82811115611bb7578251825591602001919060010190611b9c565b5b509050611bc59190611bc9565b5090565b5b80821115611be2576000816000905550600101611bca565b509056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e6365496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a6564536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f7745524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a206275726e20616d6f756e74206578636565647320616c6c6f77616e636545524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa26469706673582212206b1392e30dee9068d609d96969300b4f0cc0dff7af44edcd98f6e5024599bf7964736f6c63430007060033";