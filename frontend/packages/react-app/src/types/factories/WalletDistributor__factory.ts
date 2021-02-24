/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { WalletDistributor } from "../WalletDistributor";

export class WalletDistributor__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _distributorInfoCid: string,
    overrides?: Overrides
  ): Promise<WalletDistributor> {
    return super.deploy(
      _distributorInfoCid,
      overrides || {}
    ) as Promise<WalletDistributor>;
  }
  getDeployTransaction(
    _distributorInfoCid: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_distributorInfoCid, overrides || {});
  }
  attach(address: string): WalletDistributor {
    return super.attach(address) as WalletDistributor;
  }
  connect(signer: Signer): WalletDistributor__factory {
    return super.connect(signer) as WalletDistributor__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WalletDistributor {
    return new Contract(address, _abi, signerOrProvider) as WalletDistributor;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_distributorInfoCid",
        type: "string",
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
        name: "campaign",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "creator",
        type: "address",
      },
    ],
    name: "CreateCampaign",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "campaignList",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "distributorInfoCid",
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
    name: "nextCampaignId",
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
        internalType: "bytes32",
        name: "merkleRoot",
        type: "bytes32",
      },
      {
        internalType: "address payable",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenSender",
        type: "address",
      },
      {
        internalType: "string",
        name: "campaignInfoCid",
        type: "string",
      },
      {
        internalType: "string",
        name: "recipientsCid",
        type: "string",
      },
      {
        internalType: "string",
        name: "merkleTreeCid",
        type: "string",
      },
      {
        internalType: "uint32",
        name: "recipientsNum",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "startDate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endDate",
        type: "uint256",
      },
    ],
    name: "createCampaign",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052600180553480156200001557600080fd5b50604051620031b1380380620031b1833981810160405260208110156200003b57600080fd5b81019080805160405193929190846401000000008211156200005c57600080fd5b838201915060208201858111156200007357600080fd5b82518660018202830111640100000000821117156200009157600080fd5b8083526020830192505050908051906020019080838360005b83811015620000c7578082015181840152602081019050620000aa565b50505050905090810190601f168015620000f55780820380516001836020036101000a031916815260200191505b50604052505050808060009080519060200190620001159291906200011e565b505050620001cd565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200016157805160ff191683800117855562000192565b8280016001018555821562000192579182015b828111156200019157825182559160200191906001019062000174565b5b509050620001a19190620001a5565b5090565b620001ca91905b80821115620001c6576000816000905550600101620001ac565b5090565b90565b612fd480620001dd6000396000f3fe60806040523480156200001157600080fd5b5060043610620000525760003560e01c80632323884814620000575780634912c65814620000df5780635151a14214620001505780637903a75614620003b4575b600080fd5b62000061620003d4565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015620000a357808201518184015260208101905062000086565b50505050905090810190601f168015620000d15780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6200010e60048036036020811015620000f757600080fd5b810190808035906020019092919050505062000476565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b620003b260048036036101208110156200016957600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190640100000000811115620001d157600080fd5b820183602082011115620001e457600080fd5b803590602001918460018302840111640100000000831117156200020757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001906401000000008111156200026b57600080fd5b8201836020820111156200027e57600080fd5b80359060200191846001830284011164010000000083111715620002a157600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001906401000000008111156200030557600080fd5b8201836020820111156200031857600080fd5b803590602001918460018302840111640100000000831117156200033b57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803563ffffffff1690602001909291908035906020019092919080359060200190929190505050620004a9565b005b620003be620009c9565b6040518082815260200191505060405180910390f35b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156200046e5780601f1062000442576101008083540402835291602001916200046e565b820191906000526020600020905b8154815290600101906020018083116200045057829003601f168201915b505050505081565b60026020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b8673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146200052f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602581526020018062002f526025913960400191505060405180910390fd5b60006200053d8989620009cf565b905060008111620005b6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4e6f20746f6b656e20697320617070726f76656420746f207472616e7366657281525060200191505060405180910390fd5b8363ffffffff1681101562000617576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602881526020018062002f776028913960400191505060405180910390fd5b600062000625828662000acd565b905060008b8b8a8a8a868f8b8b604051620006409062000d98565b808a81526020018973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018060200180602001806020018881526020018773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200186815260200185815260200184810384528b818151815260200191508051906020019080838360005b8381101562000703578082015181840152602081019050620006e6565b50505050905090810190601f168015620007315780820380516001836020036101000a031916815260200191505b5084810383528a818151815260200191508051906020019080838360005b838110156200076c5780820151818401526020810190506200074f565b50505050905090810190601f1680156200079a5780820380516001836020036101000a031916815260200191505b50848103825289818151815260200191508051906020019080838360005b83811015620007d5578082015181840152602081019050620007b8565b50505050905090810190601f168015620008035780820380516001836020036101000a031916815260200191505b509c50505050505050505050505050604051809103906000f0801580156200082f573d6000803e3d6000fd5b509050620008408b8b838662000af2565b8060026000600154815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550620008ab6001805462000bf890919063ffffffff16565b6001819055508073ffffffffffffffffffffffffffffffffffffffff1663f2fde38b336040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050600060405180830381600087803b1580156200093157600080fd5b505af115801562000946573d6000803e3d6000fd5b505050503373ffffffffffffffffffffffffffffffffffffffff168b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f5fabae9f928238e9dba6bf478144b307825c08ff18c2e9eb3eb1590b5ca8997060405160405180910390a4505050505050505050505050565b60015481565b6000808390508073ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e84306040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060206040518083038186803b15801562000a8757600080fd5b505afa15801562000a9c573d6000803e3d6000fd5b505050506040513d602081101562000ab357600080fd5b810190808051906020019092919050505091505092915050565b600062000aea8263ffffffff168462000c8190919063ffffffff16565b905092915050565b60008490508073ffffffffffffffffffffffffffffffffffffffff166323b872dd8585856040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b15801562000bb357600080fd5b505af115801562000bc8573d6000803e3d6000fd5b505050506040513d602081101562000bdf57600080fd5b8101908080519060200190929190505050505050505050565b60008082840190508381101562000c77576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b600062000cc583836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f00000000000081525062000ccd565b905092915050565b6000808311829062000d7d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101562000d4157808201518184015260208101905062000d24565b50505050905090810190601f16801562000d6f5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600083858162000d8a57fe5b049050809150509392505050565b6121ab8062000da78339019056fe60c06040526000600560006101000a81548163ffffffff021916908363ffffffff1602179055506000600860006101000a81548160ff021916908360028111156200004657fe5b02179055503480156200005857600080fd5b50604051620021ab380380620021ab83398181016040526101208110156200007f57600080fd5b81019080805190602001909291908051906020019092919080516040519392919084640100000000821115620000b457600080fd5b83820191506020820185811115620000cb57600080fd5b8251866001820283011164010000000082111715620000e957600080fd5b8083526020830192505050908051906020019080838360005b838110156200011f57808201518184015260208101905062000102565b50505050905090810190601f1680156200014d5780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200017157600080fd5b838201915060208201858111156200018857600080fd5b8251866001820283011164010000000082111715620001a657600080fd5b8083526020830192505050908051906020019080838360005b83811015620001dc578082015181840152602081019050620001bf565b50505050905090810190601f1680156200020a5780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200022e57600080fd5b838201915060208201858111156200024557600080fd5b82518660018202830111640100000000821117156200026357600080fd5b8083526020830192505050908051906020019080838360005b83811015620002995780820151818401526020810190506200027c565b50505050905090810190601f168015620002c75780820380516001836020036101000a031916815260200191505b50604052602001805190602001909291908051906020019092919080519060200190929190805190602001909291905050508789898989888888886000620003146200054560201b60201c565b9050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3508082106200040c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526025815260200180620021866025913960400191505060405180910390fd5b86600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508560029080519060200190620004659291906200054d565b5084600390805190602001906200047e9291906200054d565b508360048190555082600560046101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508160068190555080600781905550505050505050508173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815250508060a08181525050505084600a9080519060200190620005359291906200054d565b50505050505050505050620005fc565b600033905090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200059057805160ff1916838001178555620005c1565b82800160010185558215620005c1579182015b82811115620005c0578251825591602001919060010190620005a3565b5b509050620005d09190620005d4565b5090565b620005f991905b80821115620005f5576000816000905550600101620005db565b5090565b90565b60805160601c60a051611b596200062d6000398061099452806116b252508061158052806117375250611b596000f3fe608060405234801561001057600080fd5b50600436106101205760003560e01c8063830953ab116100ad5780639e34070f116100715780639e34070f146104bd578063b06633fa14610503578063c24a0f8b1461054d578063f2fde38b1461056b578063fc0c546a146105af57610120565b8063830953ab1461037e5780638d1e55e91461039c5780638da5cb5b1461041f5780639089c4a514610469578063980e7844146104b357610120565b80632e7ba6ef116100f45780632e7ba6ef146102755780632eb4a7ab146103225780634bbf545b14610340578063715018a61461036a5780637864e7351461037457610120565b8062acccbc146101255780630b97bc86146101a85780631736ce44146101c6578063200d2ed214610249575b600080fd5b61012d6105f9565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561016d578082015181840152602081019050610152565b50505050905090810190601f16801561019a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101b0610697565b6040518082815260200191505060405180910390f35b6101ce61069d565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561020e5780820151818401526020810190506101f3565b50505050905090810190601f16801561023b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61025161073b565b6040518082600281111561026157fe5b60ff16815260200191505060405180910390f35b6103206004803603608081101561028b57600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156102dc57600080fd5b8201836020820111156102ee57600080fd5b8035906020019184602083028401116401000000008311171561031057600080fd5b909192939192939050505061074e565b005b61032a610992565b6040518082815260200191505060405180910390f35b6103486109b6565b604051808263ffffffff1663ffffffff16815260200191505060405180910390f35b6103726109cc565b005b61037c610b54565b005b610386610eaa565b6040518082815260200191505060405180910390f35b6103a4610eb0565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156103e45780820151818401526020810190506103c9565b50505050905090810190601f1680156104115780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610427610f4e565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610471610f77565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6104bb610f9d565b005b6104e9600480360360208110156104d357600080fd5b81019080803590602001909291905050506112f3565b604051808215151515815260200191505060405180910390f35b61050b611345565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61055561136b565b6040518082815260200191505060405180910390f35b6105ad6004803603602081101561058157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611371565b005b6105b761157e565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b60038054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561068f5780601f106106645761010080835404028352916020019161068f565b820191906000526020600020905b81548152906001019060200180831161067257829003601f168201915b505050505081565b60065481565b600a8054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107335780601f1061070857610100808354040283529160200191610733565b820191906000526020600020905b81548152906001019060200180831161071657829003601f168201915b505050505081565b600860009054906101000a900460ff1681565b6000600281111561075b57fe5b600860009054906101000a900460ff16600281111561077657fe5b146107e9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f43616d706169676e206973206e6f74206163746976650000000000000000000081525060200191505060405180910390fd5b426006541115610861576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f43616d706169676e206973206e6f74207374617274656420796574000000000081525060200191505060405180910390fd5b60075442106108d8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f43616d706169676e2069732066696e697368656400000000000000000000000081525060200191505060405180910390fd5b6108e585858585856115a2565b6109116001600560009054906101000a900463ffffffff1663ffffffff166118e790919063ffffffff16565b600560006101000a81548163ffffffff021916908363ffffffff1602179055508373ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f1836092b86c602f5dc00f47313b2873163879c06590285c6c58d63e208ac746660405160405180910390a35050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b600560009054906101000a900463ffffffff1681565b6109d461197b565b73ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610a95576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b610b5c61197b565b73ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610c1d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b4260075410610c94576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f43616d706169676e206973206e6f7420656e646564207965740000000000000081525060200191505060405180910390fd5b6002600860006101000a81548160ff02191690836002811115610cb357fe5b02179055506000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb600560049054906101000a900473ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015610d9b57600080fd5b505afa158015610daf573d6000803e3d6000fd5b505050506040513d6020811015610dc557600080fd5b81019080805190602001909291905050506040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b158015610e3f57600080fd5b505af1158015610e53573d6000803e3d6000fd5b505050506040513d6020811015610e6957600080fd5b8101908080519060200190929190505050507ff1a4f7af7ee628980477c1cfcce6c7e00a2d08730fcc70cdd17ab241a457f54d60405160405180910390a150565b60045481565b60028054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610f465780601f10610f1b57610100808354040283529160200191610f46565b820191906000526020600020905b815481529060010190602001808311610f2957829003601f168201915b505050505081565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610fa561197b565b73ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611066576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b60065442106110dd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f43616d706169676e20697320616c72656164792073746172746564000000000081525060200191505060405180910390fd5b6001600860006101000a81548160ff021916908360028111156110fc57fe5b02179055506000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb600560049054906101000a900473ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156111e457600080fd5b505afa1580156111f8573d6000803e3d6000fd5b505050506040513d602081101561120e57600080fd5b81019080805190602001909291905050506040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561128857600080fd5b505af115801561129c573d6000803e3d6000fd5b505050506040513d60208110156112b257600080fd5b8101908080519060200190929190505050507ff1a4f7af7ee628980477c1cfcce6c7e00a2d08730fcc70cdd17ab241a457f54d60405160405180910390a150565b600080610100838161130157fe5b0490506000610100848161131157fe5b0690506000600960008481526020019081526020016000205490506000826001901b90508081831614945050505050919050565b600560049054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60075481565b61137961197b565b73ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461143a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156114c0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180611a926026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b7f000000000000000000000000000000000000000000000000000000000000000081565b6115ab856112f3565b15611601576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526028815260200180611ab86028913960400191505060405180910390fd5b6000858585604051602001808481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660601b815260140182815260200193505050506040516020818303038152906040528051906020012090506116d7838380806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050507f000000000000000000000000000000000000000000000000000000000000000083611983565b61172c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180611ae06021913960400191505060405180910390fd5b61173586611a3b565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb86866040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b1580156117dc57600080fd5b505af11580156117f0573d6000803e3d6000fd5b505050506040513d602081101561180657600080fd5b810190808051906020019092919050505061186c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526023815260200180611b016023913960400191505060405180910390fd5b7f4ec90e965519d92681267467f775ada5bd214aa92c0dc93d90a5e880ce9ed026868686604051808481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060405180910390a1505050505050565b60008082840190508363ffffffff168163ffffffff161015611971576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b600033905090565b60008082905060008090505b8551811015611a2d5760008682815181106119a657fe5b602002602001015190508083116119ed5782816040516020018083815260200182815260200192505050604051602081830303815290604052805190602001209250611a1f565b808360405160200180838152602001828152602001925050506040516020818303038152906040528051906020012092505b50808060010191505061198f565b508381149150509392505050565b60006101008281611a4857fe5b04905060006101008381611a5857fe5b069050806001901b600960008481526020019081526020016000205417600960008481526020019081526020016000208190555050505056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573734d65726b6c654469737472696275746f723a2044726f7020616c726561647920636c61696d65642e4d65726b6c654469737472696275746f723a20496e76616c69642070726f6f662e4d65726b6c654469737472696275746f723a205472616e73666572206661696c65642ea2646970667358221220750ab2a77a58437a6e663f2bf0bc7395759e5827550f0400e1825af70eaecdf564736f6c634300060b003353746172742064617465206d757374206265206c657373207468616e20656e642064617465546f6b656e20686f6c646572206d757374206d6174636820746f206d73672e73656e646572546f6b656e20616d6f756e74206973206e6f7420656e6f75676820746f2064697374726962757465a2646970667358221220ef35f3f07f9efebae8561c4fdc9389ea1e632e53bf0bf8fdc4d0341d266524c764736f6c634300060b0033";
