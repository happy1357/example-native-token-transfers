/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  WormholeSimulator,
  WormholeSimulatorInterface,
} from "../WormholeSimulator";

const _abi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "wormhole_",
        type: "address",
        internalType: "address",
      },
      {
        name: "devnetGuardian",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "encodeAndSignMessage",
    inputs: [
      {
        name: "vm_",
        type: "tuple",
        internalType: "struct IWormhole.VM",
        components: [
          {
            name: "version",
            type: "uint8",
            internalType: "uint8",
          },
          {
            name: "timestamp",
            type: "uint32",
            internalType: "uint32",
          },
          {
            name: "nonce",
            type: "uint32",
            internalType: "uint32",
          },
          {
            name: "emitterChainId",
            type: "uint16",
            internalType: "uint16",
          },
          {
            name: "emitterAddress",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "sequence",
            type: "uint64",
            internalType: "uint64",
          },
          {
            name: "consistencyLevel",
            type: "uint8",
            internalType: "uint8",
          },
          {
            name: "payload",
            type: "bytes",
            internalType: "bytes",
          },
          {
            name: "guardianSetIndex",
            type: "uint32",
            internalType: "uint32",
          },
          {
            name: "signatures",
            type: "tuple[]",
            internalType: "struct IWormhole.Signature[]",
            components: [
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
              {
                name: "v",
                type: "uint8",
                internalType: "uint8",
              },
              {
                name: "guardianIndex",
                type: "uint8",
                internalType: "uint8",
              },
            ],
          },
          {
            name: "hash",
            type: "bytes32",
            internalType: "bytes32",
          },
        ],
      },
    ],
    outputs: [
      {
        name: "signedMessage",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "encodeObservation",
    inputs: [
      {
        name: "vm_",
        type: "tuple",
        internalType: "struct IWormhole.VM",
        components: [
          {
            name: "version",
            type: "uint8",
            internalType: "uint8",
          },
          {
            name: "timestamp",
            type: "uint32",
            internalType: "uint32",
          },
          {
            name: "nonce",
            type: "uint32",
            internalType: "uint32",
          },
          {
            name: "emitterChainId",
            type: "uint16",
            internalType: "uint16",
          },
          {
            name: "emitterAddress",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "sequence",
            type: "uint64",
            internalType: "uint64",
          },
          {
            name: "consistencyLevel",
            type: "uint8",
            internalType: "uint8",
          },
          {
            name: "payload",
            type: "bytes",
            internalType: "bytes",
          },
          {
            name: "guardianSetIndex",
            type: "uint32",
            internalType: "uint32",
          },
          {
            name: "signatures",
            type: "tuple[]",
            internalType: "struct IWormhole.Signature[]",
            components: [
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
              {
                name: "v",
                type: "uint8",
                internalType: "uint8",
              },
              {
                name: "guardianIndex",
                type: "uint8",
                internalType: "uint8",
              },
            ],
          },
          {
            name: "hash",
            type: "bytes32",
            internalType: "bytes32",
          },
        ],
      },
    ],
    outputs: [
      {
        name: "encodedObservation",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "fetchSignedMessageFromLogs",
    inputs: [
      {
        name: "log",
        type: "tuple",
        internalType: "struct VmSafe.Log",
        components: [
          {
            name: "topics",
            type: "bytes32[]",
            internalType: "bytes32[]",
          },
          {
            name: "data",
            type: "bytes",
            internalType: "bytes",
          },
          {
            name: "emitter",
            type: "address",
            internalType: "address",
          },
        ],
      },
      {
        name: "emitterChainId",
        type: "uint16",
        internalType: "uint16",
      },
    ],
    outputs: [
      {
        name: "signedMessage",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "fetchWormholeMessageFromLog",
    inputs: [
      {
        name: "logs",
        type: "tuple[]",
        internalType: "struct VmSafe.Log[]",
        components: [
          {
            name: "topics",
            type: "bytes32[]",
            internalType: "bytes32[]",
          },
          {
            name: "data",
            type: "bytes",
            internalType: "bytes",
          },
          {
            name: "emitter",
            type: "address",
            internalType: "address",
          },
        ],
      },
    ],
    outputs: [
      {
        name: "",
        type: "tuple[]",
        internalType: "struct VmSafe.Log[]",
        components: [
          {
            name: "topics",
            type: "bytes32[]",
            internalType: "bytes32[]",
          },
          {
            name: "data",
            type: "bytes",
            internalType: "bytes",
          },
          {
            name: "emitter",
            type: "address",
            internalType: "address",
          },
        ],
      },
    ],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "setMessageFee",
    inputs: [
      {
        name: "newFee",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "vm",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract Vm",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "wormhole",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IWormhole",
      },
    ],
    stateMutability: "view",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001feb38038062001feb83398101604081905262000034916200065b565b600080546001600160a01b0319166001600160a01b03841617905560018190556040516001625e79b760e01b0319815260048101829052620000d49060008051602062001fcb8339815191529063ffa1864990602401602060405180830381865afa158015620000a8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000ce91906200068a565b620000dc565b5050620008ab565b604051630667f9d760e41b81523060048201526002602482015260009060008051602062001fcb8339815191529063667f9d7090604401602060405180830381865afa15801562000131573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001579190620006af565b905080156200019e5760405162461bcd60e51b815260206004820152600e60248201526d1a5b98dbdc9c9958dd081cdb1bdd60921b60448201526064015b60405180910390fd5b60008060009054906101000a90046001600160a01b03166001600160a01b0316631cfe79516040518163ffffffff1660e01b8152600401602060405180830381865afa158015620001f3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620002199190620006de565b6040805163ffffffff8316602082015260029181019190915290915060009060600160408051808303601f1901815290829052805160209091012060008054630667f9d760e41b84526001600160a01b03166004840152602483018290529092509060008051602062001fcb8339815191529063667f9d7090604401602060405180830381865afa158015620002b3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620002d99190620006af565b905060015b81811015620003ad57600054604080516020808201879052825180830382018152918301909252805191012060008051602062001fcb833981519152916370ca10bb916001600160a01b03909116906200033a908590620006fc565b60405160e084901b6001600160e01b03191681526001600160a01b039092166004830152602482015260006044820152606401600060405180830381600087803b1580156200038857600080fd5b505af11580156200039d573d6000803e3d6000fd5b50505050600181019050620002de565b5060008054604080516020808201879052825180830382018152918301909252805191012060008051602062001fcb833981519152926370ca10bb926001600160a01b031691620003fe91620006fc565b60405160e084901b6001600160e01b03191681526001600160a01b03928316600482015260248101919091529088166044820152606401600060405180830381600087803b1580156200045057600080fd5b505af115801562000465573d6000803e3d6000fd5b50506000546040516370ca10bb60e01b81526001600160a01b039091166004820152602481018590526001604482015260008051602062001fcb83398151915292506370ca10bb9150606401600060405180830381600087803b158015620004cc57600080fd5b505af1158015620004e1573d6000803e3d6000fd5b505060008054604051637ca8cbad60e11b815263ffffffff881660048201529193506001600160a01b0316915063f951975a90602401600060405180830381865afa15801562000535573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526200055f919081019062000798565b518051909150600114620005b65760405162461bcd60e51b815260206004820152601560248201527f677561726469616e732e6c656e67746820213d20310000000000000000000000604482015260640162000195565b856001600160a01b031681600081518110620005d657620005d662000895565b60200260200101516001600160a01b031614620006365760405162461bcd60e51b815260206004820152601f60248201527f696e636f727265637420677561726469616e20736574206f7665727269646500604482015260640162000195565b505050505050565b80516001600160a01b03811681146200065657600080fd5b919050565b600080604083850312156200066f57600080fd5b6200067a836200063e565b9150602083015190509250929050565b6000602082840312156200069d57600080fd5b620006a8826200063e565b9392505050565b600060208284031215620006c257600080fd5b5051919050565b805163ffffffff811681146200065657600080fd5b600060208284031215620006f157600080fd5b620006a882620006c9565b808201808211156200071e57634e487b7160e01b600052601160045260246000fd5b92915050565b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b03811182821017156200075f576200075f62000724565b60405290565b604051601f8201601f191681016001600160401b038111828210171562000790576200079062000724565b604052919050565b60006020808385031215620007ac57600080fd5b82516001600160401b0380821115620007c457600080fd5b9084019060408287031215620007d957600080fd5b620007e36200073a565b825182811115620007f357600080fd5b8301601f810188136200080557600080fd5b8051838111156200081a576200081a62000724565b8060051b93506200082d86850162000765565b818152938201860193868101908a8611156200084857600080fd5b928701925b85841015620008715762000861846200063e565b825292870192908701906200084d565b84525062000884915050838501620006c9565b848201528094505050505092915050565b634e487b7160e01b600052603260045260246000fd5b61171080620008bb6000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c806355a58d7d1161005b57806355a58d7d146100f357806364bb9bfb1461011357806384acd1bb14610126578063b34cd8601461013957600080fd5b80630e6452951461008257806323aa2a9d146100ab5780633a768463146100c0575b600080fd5b610095610090366004611078565b61014c565b6040516100a291906111ec565b60405180910390f35b6100be6100b9366004611206565b610408565b005b6100db737109709ecfa91a80626ff3989d68f67f5b1dd12d81565b6040516001600160a01b0390911681526020016100a2565b61010661010136600461130b565b6106e2565b6040516100a291906113bb565b610095610121366004611078565b6108a6565b6000546100db906001600160a01b031681565b61009561014736600461147e565b6108f7565b60606000610159836108a6565b905061016481610939565b610140840152604080516001808252818301909252600091816020015b604080516080810182526000808252602080830182905292820181905260608201528252600019909201910181610181579050506001546101408601516040516338d07aa960e21b815260048101929092526024820152909150737109709ecfa91a80626ff3989d68f67f5b1dd12d9063e341eaa490604401606060405180830381865afa158015610217573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061023b91906114cf565b8360008151811061024e5761024e611506565b60200260200101516040018460008151811061026c5761026c611506565b60200260200101516000018560008151811061028a5761028a611506565b602002602001015160200183815250838152508360ff1660ff168152505050506000816000815181106102bf576102bf611506565b60200260200101516060019060ff16908160ff1681525050836000015160008054906101000a90046001600160a01b03166001600160a01b0316631cfe79516040518163ffffffff1660e01b8152600401602060405180830381865afa15801561032d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610351919061151c565b82518360008261036357610363611506565b6020026020010151606001518460008151811061038257610382611506565b602002602001015160000151856000815181106103a1576103a1611506565b602002602001015160200151601b876000815181106103c2576103c2611506565b6020026020010151604001516103d8919061154f565b886040516020016103f0989796959493929190611568565b60405160208183030381529060405292505050919050565b600063436f726560001b9050600081600360008054906101000a90046001600160a01b03166001600160a01b0316639a8a05926040518163ffffffff1660e01b8152600401602060405180830381865afa15801561046a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061048e91906115de565b856040516020016104d2949392919093845260f89290921b6001600160f81b031916602084015260f01b6001600160f01b0319166021830152602382015260430190565b60408051601f19818403018152610160830182526001835263ffffffff421660208481019190915260008484018190528054845163fbe3c2cd60e01b8152945193965090949360608501936001600160a01b039092169263fbe3c2cd926004808401938290030181865afa15801561054e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061057291906115de565b61ffff16815260200160008054906101000a90046001600160a01b03166001600160a01b031663b172b2226040518163ffffffff1660e01b8152600401602060405180830381865afa1580156105cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105f091906115fb565b81526000602080830182905260c860408085019190915260608401879052608084018390528051838152918201905260a0909201919061065f565b60408051608081018252600080825260208083018290529282018190526060820152825260001990920191018161062b5790505b508152600060209091018190529091506106788261014c565b60005460405163f42bc64160e01b81529192506001600160a01b03169063f42bc641906106a99084906004016111ec565b600060405180830381600087803b1580156106c357600080fd5b505af11580156106d7573d6000803e3d6000fd5b505050505050505050565b60606000805b835181101561076f577f6eb224fb001ed210e379b335e35efe88672a8ce935d981a6896b27ffdf52a3b284828151811061072457610724611506565b60200260200101516000015160008151811061074257610742611506565b60200260200101510361075d5761075a600183611614565b91505b8061076781611627565b9150506106e8565b506000816001600160401b0381111561078a5761078a610e0d565b6040519080825280602002602001820160405280156107d757816020015b604080516060808201835280825260208201526000918101919091528152602001906001900390816107a85790505b5090506000805b855181101561089c577f6eb224fb001ed210e379b335e35efe88672a8ce935d981a6896b27ffdf52a3b286828151811061081a5761081a611506565b60200260200101516000015160008151811061083857610838611506565b60200260200101510361088a5785818151811061085757610857611506565b602002602001015183838151811061087157610871611506565b6020908102919091010152610887600183611614565b91505b8061089481611627565b9150506107de565b5090949350505050565b606081602001518260400151836060015184608001518560a001518660c001518760e001516040516020016108e19796959493929190611640565b6040516020818303038152906040529050919050565b6060610901610db2565b61090a84610972565b6001815263ffffffff4216602082015261ffff84166060820152905061092f8161014c565b9150505b92915050565b6000818051906020012060405160200161095591815260200190565b604051602081830303815290604052805190602001209050919050565b61097a610db2565b6000826000015160018151811061099357610993611506565b60200260200101518260800181815250506109cb60088260206109b69190611614565b6109c091906116c7565b602085015190610b31565b6001600160401b031660a08301526109e4602082611614565b9050610a0b60046109f6836020611614565b610a0091906116c7565b602085015190610b8e565b63ffffffff166040830152610a21602082611614565b9050610a2e602082611614565b9050610a556001610a40836020611614565b610a4a91906116c7565b602085015190610beb565b60ff1660c0830152610a68602082611614565b90506000610a83828560200151610c4790919063ffffffff16565b9050610a90602083611614565b6020850151909250610aa3908383610ca5565b60e0840152610ab28183611614565b915081846020015151610ac591906116c7565b610acf9083611614565b91508360200151518214610b2a5760405162461bcd60e51b815260206004820181905260248201527f6661696c656420746f20706172736520776f726d686f6c65206d65737361676560448201526064015b60405180910390fd5b5050919050565b6000610b3e826008611614565b83511015610b855760405162461bcd60e51b8152602060048201526014602482015273746f55696e7436345f6f75744f66426f756e647360601b6044820152606401610b21565b50016008015190565b6000610b9b826004611614565b83511015610be25760405162461bcd60e51b8152602060048201526014602482015273746f55696e7433325f6f75744f66426f756e647360601b6044820152606401610b21565b50016004015190565b6000610bf8826001611614565b83511015610c3e5760405162461bcd60e51b8152602060048201526013602482015272746f55696e74385f6f75744f66426f756e647360681b6044820152606401610b21565b50016001015190565b6000610c54826020611614565b83511015610c9c5760405162461bcd60e51b8152602060048201526015602482015274746f55696e743235365f6f75744f66426f756e647360581b6044820152606401610b21565b50016020015190565b606081610cb381601f611614565b1015610cf25760405162461bcd60e51b815260206004820152600e60248201526d736c6963655f6f766572666c6f7760901b6044820152606401610b21565b610cfc8284611614565b84511015610d405760405162461bcd60e51b8152602060048201526011602482015270736c6963655f6f75744f66426f756e647360781b6044820152606401610b21565b606082158015610d5f5760405191506000825260208201604052610da9565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015610d98578051835260209283019201610d80565b5050858452601f01601f1916604052505b50949350505050565b604080516101608101825260008082526020820181905291810182905260608082018390526080820183905260a0820183905260c0820183905260e08201819052610100820183905261012082015261014081019190915290565b634e487b7160e01b600052604160045260246000fd5b604051608081016001600160401b0381118282101715610e4557610e45610e0d565b60405290565b60405161016081016001600160401b0381118282101715610e4557610e45610e0d565b604051606081016001600160401b0381118282101715610e4557610e45610e0d565b604051601f8201601f191681016001600160401b0381118282101715610eb857610eb8610e0d565b604052919050565b60ff81168114610ecf57600080fd5b50565b8035610edd81610ec0565b919050565b63ffffffff81168114610ecf57600080fd5b8035610edd81610ee2565b61ffff81168114610ecf57600080fd5b8035610edd81610eff565b80356001600160401b0381168114610edd57600080fd5b600082601f830112610f4257600080fd5b81356001600160401b03811115610f5b57610f5b610e0d565b610f6e601f8201601f1916602001610e90565b818152846020838601011115610f8357600080fd5b816020850160208301376000918101602001919091529392505050565b60006001600160401b03821115610fb957610fb9610e0d565b5060051b60200190565b600082601f830112610fd457600080fd5b81356020610fe9610fe483610fa0565b610e90565b82815260079290921b8401810191818101908684111561100857600080fd5b8286015b8481101561106d57608081890312156110255760008081fd5b61102d610e23565b81358152848201358582015260408083013561104881610ec0565b9082015260608281013561105b81610ec0565b9082015283529183019160800161100c565b509695505050505050565b60006020828403121561108a57600080fd5b81356001600160401b03808211156110a157600080fd5b9083019061016082860312156110b657600080fd5b6110be610e4b565b6110c783610ed2565b81526110d560208401610ef4565b60208201526110e660408401610ef4565b60408201526110f760608401610f0f565b60608201526080830135608082015261111260a08401610f1a565b60a082015261112360c08401610ed2565b60c082015260e08301358281111561113a57600080fd5b61114687828601610f31565b60e08301525061010061115a818501610ef4565b90820152610120838101358381111561117257600080fd5b61117e88828701610fc3565b91830191909152506101409283013592810192909252509392505050565b60005b838110156111b757818101518382015260200161119f565b50506000910152565b600081518084526111d881602086016020860161119c565b601f01601f19169290920160200192915050565b6020815260006111ff60208301846111c0565b9392505050565b60006020828403121561121857600080fd5b5035919050565b80356001600160a01b0381168114610edd57600080fd5b60006060828403121561124857600080fd5b611250610e6e565b905081356001600160401b038082111561126957600080fd5b818401915084601f83011261127d57600080fd5b8135602061128d610fe483610fa0565b82815260059290921b840181019181810190888411156112ac57600080fd5b948201945b838610156112ca578535825294820194908201906112b1565b865250858101359350828411156112e057600080fd5b6112ec87858801610f31565b81860152505050506113006040830161121f565b604082015292915050565b6000602080838503121561131e57600080fd5b82356001600160401b038082111561133557600080fd5b818501915085601f83011261134957600080fd5b8135611357610fe482610fa0565b81815260059190911b8301840190848101908883111561137657600080fd5b8585015b838110156113ae578035858111156113925760008081fd5b6113a08b89838a0101611236565b84525091860191860161137a565b5098975050505050505050565b60006020808301818452808551808352604092508286019150828160051b8701018488016000805b8481101561146f57898403603f19018652825180516060808752815190870181905260808701918b019085905b808210156114305782518452928c0192918c019160019190910190611410565b505050898201518682038b88015261144882826111c0565b928a01516001600160a01b0316968a019690965250958801959350918701916001016113e3565b50919998505050505050505050565b6000806040838503121561149157600080fd5b82356001600160401b038111156114a757600080fd5b6114b385828601611236565b92505060208301356114c481610eff565b809150509250929050565b6000806000606084860312156114e457600080fd5b83516114ef81610ec0565b602085015160409095015190969495509392505050565b634e487b7160e01b600052603260045260246000fd5b60006020828403121561152e57600080fd5b81516111ff81610ee2565b634e487b7160e01b600052601160045260246000fd5b60ff828116828216039081111561093357610933611539565b600060ff60f81b808b60f81b16835263ffffffff60e01b8a60e01b166001840152808960f81b166005840152808860f81b166006840152866007840152856027840152808560f81b1660478401525082516115ca81604885016020870161119c565b919091016048019998505050505050505050565b6000602082840312156115f057600080fd5b81516111ff81610eff565b60006020828403121561160d57600080fd5b5051919050565b8082018082111561093357610933611539565b60006001820161163957611639611539565b5060010190565b6001600160e01b031960e089811b8216835288901b1660048201526001600160f01b031960f087901b166008820152600a81018590526001600160c01b031960c085901b16602a8201526001600160f81b031960f884901b16603282015281516000906116b481603385016020870161119c565b9190910160330198975050505050505050565b818103818111156109335761093361153956fea264697066735822122073ddbb783345d50a52404ed5167287c41b01af00223e66bd600a0f9db70f5f6d64736f6c634300081300330000000000000000000000007109709ecfa91a80626ff3989d68f67f5b1dd12d";

type WormholeSimulatorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WormholeSimulatorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class WormholeSimulator__factory extends ContractFactory {
  constructor(...args: WormholeSimulatorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    wormhole_: string,
    devnetGuardian: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<WormholeSimulator> {
    return super.deploy(
      wormhole_,
      devnetGuardian,
      overrides || {}
    ) as Promise<WormholeSimulator>;
  }
  override getDeployTransaction(
    wormhole_: string,
    devnetGuardian: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(
      wormhole_,
      devnetGuardian,
      overrides || {}
    );
  }
  override attach(address: string): WormholeSimulator {
    return super.attach(address) as WormholeSimulator;
  }
  override connect(signer: Signer): WormholeSimulator__factory {
    return super.connect(signer) as WormholeSimulator__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WormholeSimulatorInterface {
    return new utils.Interface(_abi) as WormholeSimulatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WormholeSimulator {
    return new Contract(address, _abi, signerOrProvider) as WormholeSimulator;
  }
}