/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TestImplementation2,
  TestImplementation2Interface,
} from "../../Implementation.t.sol/TestImplementation2";

const _abi = [
  {
    type: "function",
    name: "getMigratesImmutables",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "incrementCounter",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "initialize",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "migrate",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "otherInitializer",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "upgrade",
    inputs: [
      {
        name: "newImplementation",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "upgradeCount",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "event",
    name: "AdminChanged",
    inputs: [
      {
        name: "previousAdmin",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "newAdmin",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "BeaconUpgraded",
    inputs: [
      {
        name: "beacon",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Initialized",
    inputs: [
      {
        name: "version",
        type: "uint64",
        indexed: false,
        internalType: "uint64",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Upgraded",
    inputs: [
      {
        name: "implementation",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "InvalidInitialization",
    inputs: [],
  },
  {
    type: "error",
    name: "NotInitializing",
    inputs: [],
  },
  {
    type: "error",
    name: "NotMigrating",
    inputs: [],
  },
  {
    type: "error",
    name: "OnlyDelegateCall",
    inputs: [],
  },
] as const;

const _bytecode =
  "0x60a060405234801561001057600080fd5b50610019610022565b306080526100d4565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000900460ff16156100725760405163f92ee8a960e01b815260040160405180910390fd5b80546001600160401b03908116146100d15780546001600160401b0319166001600160401b0390811782556040519081527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50565b6080516107666100ef60003960006104bc01526107666000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80638129fc1c1161005b5780638129fc1c146100bc5780638fd3ab80146100c4578063c2b3b94a146100cc578063c4128b6d146100d457600080fd5b80630900f010146100825780635b34b96614610097578063689f90c31461009f575b600080fd5b61009561009036600461063e565b6100eb565b005b6100956100f7565b6100a7610115565b60405190151581526020015b60405180910390f35b610095610128565b610095610224565b610095610130565b6100dd60005481565b6040519081526020016100b3565b6100f481610342565b50565b6100ff610445565b60008054908061010e83610684565b9190505550565b600061011f61047e565b5460ff16919050565b6101306104b2565b6000805160206107118339815191528054600160401b810460ff16159067ffffffffffffffff166000811580156101645750825b905060008267ffffffffffffffff1660011480156101815750303b155b90508115801561018f575080155b156101ad5760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff1916600117855583156101d757845460ff60401b1916600160401b1785555b831561021d57845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b5050505050565b61022c6104b2565b6000805160206107118339815191525467ffffffffffffffff1661025190600161069d565b6000805160206107118339815191528054600160401b900460ff16806102855750805467ffffffffffffffff808416911610155b156102a35760405163f92ee8a960e01b815260040160405180910390fd5b805468ffffffffffffffffff191667ffffffffffffffff831617600160401b1781556102cd6104fb565b5460ff166102ee57604051632866815360e11b815260040160405180910390fd5b6102f6610529565b805460ff60401b1916815560405167ffffffffffffffff831681527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15050565b61034a6104b2565b61035381610531565b600061035d6104fb565b805490915060ff1615610372576103726106c5565b805460ff191660011781556040805163011fa75760e71b815290513091638fd3ab8091600480830192600092919082900301818387803b1580156103b557600080fd5b505af11580156103c9573d6000803e3d6000fd5b50505050306001600160a01b031663689f90c36040518163ffffffff1660e01b8152600401602060405180830381865afa15801561040b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061042f91906106db565b5061043a6000610571565b805460ff1916905550565b60008051602061071183398151915254600160401b900460ff1661047c57604051631afcd79f60e31b815260040160405180910390fd5b565b6000806104ac60017f5443fea4dc453d96b81ce55b62e11a4094cc4cbb8a360956a7253cfdb42506cc6106fd565b92915050565b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016300361047c57604051633c64f99360e21b815260040160405180910390fd5b6000806104ac60017f7487ca88d037ca20519908b1ee7556206bef53bce0226a348750cb9d4f688e4f6106fd565b61047c6100f7565b61053a8161058c565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b8061057a61047e565b805460ff191691151591909117905550565b6001600160a01b0381163b6105fd5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b606482015260840160405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b0319166001600160a01b0392909216919091179055565b60006020828403121561065057600080fd5b81356001600160a01b038116811461066757600080fd5b9392505050565b634e487b7160e01b600052601160045260246000fd5b6000600182016106965761069661066e565b5060010190565b67ffffffffffffffff8181168382160190808211156106be576106be61066e565b5092915050565b634e487b7160e01b600052600160045260246000fd5b6000602082840312156106ed57600080fd5b8151801515811461066757600080fd5b818103818111156104ac576104ac61066e56fef0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00a264697066735822122097d4f329df0fff483d0c57899c1e2bf6382655404c77fad5f04311dee9e7bee964736f6c63430008130033";

type TestImplementation2ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestImplementation2ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestImplementation2__factory extends ContractFactory {
  constructor(...args: TestImplementation2ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<TestImplementation2> {
    return super.deploy(overrides || {}) as Promise<TestImplementation2>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TestImplementation2 {
    return super.attach(address) as TestImplementation2;
  }
  override connect(signer: Signer): TestImplementation2__factory {
    return super.connect(signer) as TestImplementation2__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestImplementation2Interface {
    return new utils.Interface(_abi) as TestImplementation2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestImplementation2 {
    return new Contract(address, _abi, signerOrProvider) as TestImplementation2;
  }
}