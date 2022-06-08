/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ModuleCreator, ModuleCreatorInterface } from "../ModuleCreator";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "_self",
        type: "address",
      },
    ],
    name: "OnlySelfAuth",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_contract",
        type: "address",
      },
    ],
    name: "CreatedContract",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_code",
        type: "bytes",
      },
    ],
    name: "createContract",
    outputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_interfaceID",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610353806100206000396000f3fe6080604052600436106100295760003560e01c806301ffc9a71461002e57806390042baf14610063575b600080fd5b34801561003a57600080fd5b5061004e6100493660046101d6565b61009b565b60405190151581526020015b60405180910390f35b61007661007136600461024e565b610136565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161005a565b60007f6ffbd451000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316016100ee57506001919050565b507fffffffff00000000000000000000000000000000000000000000000000000000167f01ffc9a7000000000000000000000000000000000000000000000000000000001490565b600033301461017d576040517fe125889400000000000000000000000000000000000000000000000000000000815233600482015230602482015260440160405180910390fd5b81516020830134f060405173ffffffffffffffffffffffffffffffffffffffff821681529091507fa506ad4e7f05eceba62a023c3219e5bd98a615f4fa87e2afb08a2da5cf62bf0c9060200160405180910390a1919050565b6000602082840312156101e857600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461021857600080fd5b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60006020828403121561026057600080fd5b813567ffffffffffffffff8082111561027857600080fd5b818401915084601f83011261028c57600080fd5b81358181111561029e5761029e61021f565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019083821181831017156102e4576102e461021f565b816040528281528760208487010111156102fd57600080fd5b82602086016020830137600092810160200192909252509594505050505056fea2646970667358221220e104106cf9ab6e5034ca2f4ac7dde48d001f6c723bffcb0b3311a693d331f50564736f6c634300080e0033";

export class ModuleCreator__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ModuleCreator> {
    return super.deploy(overrides || {}) as Promise<ModuleCreator>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ModuleCreator {
    return super.attach(address) as ModuleCreator;
  }
  connect(signer: Signer): ModuleCreator__factory {
    return super.connect(signer) as ModuleCreator__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ModuleCreatorInterface {
    return new utils.Interface(_abi) as ModuleCreatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ModuleCreator {
    return new Contract(address, _abi, signerOrProvider) as ModuleCreator;
  }
}
