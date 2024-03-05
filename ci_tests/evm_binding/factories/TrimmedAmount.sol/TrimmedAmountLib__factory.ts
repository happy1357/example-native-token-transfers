/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TrimmedAmountLib,
  TrimmedAmountLibInterface,
} from "../../TrimmedAmount.sol/TrimmedAmountLib";

const _abi = [
  {
    type: "error",
    name: "AmountTooLarge",
    inputs: [
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
] as const;

const _bytecode =
  "0x60808060405234601757603a9081601d823930815050f35b600080fdfe600080fdfea264697066735822122069aa28de760771fd5112b0ff34f6d29eeba9b7e707e63af40e0a9766501b83cd64736f6c63430008130033";

type TrimmedAmountLibConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TrimmedAmountLibConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TrimmedAmountLib__factory extends ContractFactory {
  constructor(...args: TrimmedAmountLibConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<TrimmedAmountLib> {
    return super.deploy(overrides || {}) as Promise<TrimmedAmountLib>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TrimmedAmountLib {
    return super.attach(address) as TrimmedAmountLib;
  }
  override connect(signer: Signer): TrimmedAmountLib__factory {
    return super.connect(signer) as TrimmedAmountLib__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TrimmedAmountLibInterface {
    return new utils.Interface(_abi) as TrimmedAmountLibInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TrimmedAmountLib {
    return new Contract(address, _abi, signerOrProvider) as TrimmedAmountLib;
  }
}
