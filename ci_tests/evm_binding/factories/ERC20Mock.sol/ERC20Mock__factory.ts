/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC20Mock,
  ERC20MockInterface,
} from "../../ERC20Mock.sol/ERC20Mock";

const _abi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "name",
        type: "string",
        internalType: "string",
      },
      {
        name: "symbol",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "DOMAIN_SEPARATOR",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "allowance",
    inputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
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
    type: "function",
    name: "approve",
    inputs: [
      {
        name: "spender",
        type: "address",
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "balanceOf",
    inputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
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
    type: "function",
    name: "burn",
    inputs: [
      {
        name: "from",
        type: "address",
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "decimals",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint8",
        internalType: "uint8",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "mint",
    inputs: [
      {
        name: "to",
        type: "address",
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "name",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "nonces",
    inputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
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
    type: "function",
    name: "permit",
    inputs: [
      {
        name: "owner",
        type: "address",
        internalType: "address",
      },
      {
        name: "spender",
        type: "address",
        internalType: "address",
      },
      {
        name: "value",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "deadline",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "v",
        type: "uint8",
        internalType: "uint8",
      },
      {
        name: "r",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "s",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "symbol",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "totalSupply",
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
    type: "function",
    name: "transfer",
    inputs: [
      {
        name: "to",
        type: "address",
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "transferFrom",
    inputs: [
      {
        name: "from",
        type: "address",
        internalType: "address",
      },
      {
        name: "to",
        type: "address",
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "Approval",
    inputs: [
      {
        name: "owner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "spender",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Transfer",
    inputs: [
      {
        name: "from",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "to",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
] as const;

const _bytecode =
  "0x60e06040523480156200001157600080fd5b506040516200100d3803806200100d8339810160408190526200003491620001db565b818160126000620000468482620002d4565b506001620000558382620002d4565b5060ff81166080524660a0526200006b6200007a565b60c052506200041e9350505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6000604051620000ae9190620003a0565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200013e57600080fd5b81516001600160401b03808211156200015b576200015b62000116565b604051601f8301601f19908116603f0116810190828211818310171562000186576200018662000116565b81604052838152602092508683858801011115620001a357600080fd5b600091505b83821015620001c75785820183015181830184015290820190620001a8565b600093810190920192909252949350505050565b60008060408385031215620001ef57600080fd5b82516001600160401b03808211156200020757600080fd5b62000215868387016200012c565b935060208501519150808211156200022c57600080fd5b506200023b858286016200012c565b9150509250929050565b600181811c908216806200025a57607f821691505b6020821081036200027b57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620002cf57600081815260208120601f850160051c81016020861015620002aa5750805b601f850160051c820191505b81811015620002cb57828155600101620002b6565b5050505b505050565b81516001600160401b03811115620002f057620002f062000116565b620003088162000301845462000245565b8462000281565b602080601f831160018114620003405760008415620003275750858301515b600019600386901b1c1916600185901b178555620002cb565b600085815260208120601f198616915b82811015620003715788860151825594840194600190910190840162000350565b5085821015620003905787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000808354620003b08162000245565b60018281168015620003cb5760018114620003e15762000412565b60ff198416875282151583028701945062000412565b8760005260208060002060005b85811015620004095781548a820152908401908201620003ee565b50505082870194505b50929695505050505050565b60805160a05160c051610bbf6200044e60003960006104700152600061043b0152600061015f0152610bbf6000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806370a082311161008c5780639dc29fac116100665780639dc29fac146101f8578063a9059cbb1461020b578063d505accf1461021e578063dd62ed3e1461023157600080fd5b806370a08231146101b05780637ecebe00146101d057806395d89b41146101f057600080fd5b806323b872dd116100c857806323b872dd14610147578063313ce5671461015a5780633644e5151461019357806340c10f191461019b57600080fd5b806306fdde03146100ef578063095ea7b31461010d57806318160ddd14610130575b600080fd5b6100f761025c565b60405161010491906108bc565b60405180910390f35b61012061011b366004610926565b6102ea565b6040519015158152602001610104565b61013960025481565b604051908152602001610104565b610120610155366004610950565b610357565b6101817f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff9091168152602001610104565b610139610437565b6101ae6101a9366004610926565b610492565b005b6101396101be36600461098c565b60036020526000908152604090205481565b6101396101de36600461098c565b60056020526000908152604090205481565b6100f76104a0565b6101ae610206366004610926565b6104ad565b610120610219366004610926565b6104b7565b6101ae61022c3660046109ae565b61051d565b61013961023f366004610a21565b600460209081526000928352604080842090915290825290205481565b6000805461026990610a54565b80601f016020809104026020016040519081016040528092919081815260200182805461029590610a54565b80156102e25780601f106102b7576101008083540402835291602001916102e2565b820191906000526020600020905b8154815290600101906020018083116102c557829003601f168201915b505050505081565b3360008181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906103459086815260200190565b60405180910390a35060015b92915050565b6001600160a01b038316600090815260046020908152604080832033845290915281205460001981146103b35761038e8382610aa4565b6001600160a01b03861660009081526004602090815260408083203384529091529020555b6001600160a01b038516600090815260036020526040812080548592906103db908490610aa4565b90915550506001600160a01b0380851660008181526003602052604090819020805487019055519091871690600080516020610b6a833981519152906104249087815260200190565b60405180910390a3506001949350505050565b60007f0000000000000000000000000000000000000000000000000000000000000000461461046d57610468610766565b905090565b507f000000000000000000000000000000000000000000000000000000000000000090565b61049c8282610800565b5050565b6001805461026990610a54565b61049c828261085a565b336000908152600360205260408120805483919083906104d8908490610aa4565b90915550506001600160a01b03831660008181526003602052604090819020805485019055513390600080516020610b6a833981519152906103459086815260200190565b428410156105725760405162461bcd60e51b815260206004820152601760248201527f5045524d49545f444541444c494e455f4558504952454400000000000000000060448201526064015b60405180910390fd5b6000600161057e610437565b6001600160a01b038a811660008181526005602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938d166060840152608083018c905260a083019390935260c08083018b90528151808403909101815260e08301909152805192019190912061190160f01b6101008301526101028201929092526101228101919091526101420160408051601f198184030181528282528051602091820120600084529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa15801561068a573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116158015906106c05750876001600160a01b0316816001600160a01b0316145b6106fd5760405162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa9a4a3a722a960911b6044820152606401610569565b6001600160a01b0390811660009081526004602090815260408083208a8516808552908352928190208990555188815291928a16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60006040516107989190610ab7565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b80600260008282546108129190610b56565b90915550506001600160a01b038216600081815260036020908152604080832080548601905551848152600080516020610b6a83398151915291015b60405180910390a35050565b6001600160a01b03821660009081526003602052604081208054839290610882908490610aa4565b90915550506002805482900390556040518181526000906001600160a01b03841690600080516020610b6a8339815191529060200161084e565b600060208083528351808285015260005b818110156108e9578581018301518582016040015282016108cd565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b038116811461092157600080fd5b919050565b6000806040838503121561093957600080fd5b6109428361090a565b946020939093013593505050565b60008060006060848603121561096557600080fd5b61096e8461090a565b925061097c6020850161090a565b9150604084013590509250925092565b60006020828403121561099e57600080fd5b6109a78261090a565b9392505050565b600080600080600080600060e0888a0312156109c957600080fd5b6109d28861090a565b96506109e06020890161090a565b95506040880135945060608801359350608088013560ff81168114610a0457600080fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060408385031215610a3457600080fd5b610a3d8361090a565b9150610a4b6020840161090a565b90509250929050565b600181811c90821680610a6857607f821691505b602082108103610a8857634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b8181038181111561035157610351610a8e565b600080835481600182811c915080831680610ad357607f831692505b60208084108203610af257634e487b7160e01b86526022600452602486fd5b818015610b065760018114610b1b57610b48565b60ff1986168952841515850289019650610b48565b60008a81526020902060005b86811015610b405781548b820152908501908301610b27565b505084890196505b509498975050505050505050565b8082018082111561035157610351610a8e56feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220d5fa46d73b4bfa34d62ec0c2c3456ab5a7f89417a95562153c2ff879bcd4c6e564736f6c63430008130033";

type ERC20MockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20MockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20Mock__factory extends ContractFactory {
  constructor(...args: ERC20MockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ERC20Mock> {
    return super.deploy(name, symbol, overrides || {}) as Promise<ERC20Mock>;
  }
  override getDeployTransaction(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  override attach(address: string): ERC20Mock {
    return super.attach(address) as ERC20Mock;
  }
  override connect(signer: Signer): ERC20Mock__factory {
    return super.connect(signer) as ERC20Mock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20MockInterface {
    return new utils.Interface(_abi) as ERC20MockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20Mock {
    return new Contract(address, _abi, signerOrProvider) as ERC20Mock;
  }
}