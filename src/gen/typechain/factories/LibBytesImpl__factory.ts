/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { LibBytesImpl, LibBytesImplInterface } from "../LibBytesImpl";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "ReadAddressOutOfBounds",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "ReadBytes32OutOfBounds",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "ReadBytes66OutOfBounds",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_datam",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_length",
        type: "uint256",
      },
    ],
    name: "ReadBytesOutOfBounds",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "ReadFirstUint16OutOfBounds",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "ReadUint16OutOfBounds",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "ReadUint8Uint8OutOfBounds",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "readAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_size",
        type: "uint256",
      },
    ],
    name: "readBytes",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
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
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "readBytes32",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "readBytes66",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "readFirstUint16",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "readUint16",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "readUint8Uint8",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061098d806100206000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063afa3102d1161005b578063afa3102d146100e8578063ca9cd01d14610109578063e8a7c08a1461011c578063f0e9da231461014f57600080fd5b8063285badc214610082578063a23ccef6146100b4578063af500fb7146100c7575b600080fd5b61009561009036600461070f565b61018e565b6040805161ffff90931683526020830191909152015b60405180910390f35b6100956100c2366004610751565b6101dc565b6100da6100d5366004610751565b61022f565b6040519081526020016100ab565b6100fb6100f636600461079d565b61027c565b6040516100ab929190610859565b6100fb610117366004610751565b6102d2565b61012f61012a366004610751565b610319565b6040805160ff9485168152939092166020840152908201526060016100ab565b61016261015d366004610751565b610370565b6040805173ffffffffffffffffffffffffffffffffffffffff90931683526020830191909152016100ab565b6000806101d084848080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506103b692505050565b915091505b9250929050565b6000806102228386868080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929392505061040f9050565b915091505b935093915050565b60006102748285858080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092939250506104619050565b949350505050565b606060006102c5848488888080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509294939250506104ba9050565b9150915094509492505050565b606060006102228386868080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929392505061058f9050565b60008060006103618487878080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929392505061061c9050565b92509250925093509350939050565b6000806102228386868080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929392505061067b9050565b60008060028351101561040057826040517f857f2c1a0000000000000000000000000000000000000000000000000000000081526004016103f7919061087b565b60405180910390fd5b50506020015160f01c90600290565b80820160200151825160f09190911c9060028301908111156101d55783836040517f80d95e5f0000000000000000000000000000000000000000000000000000000081526004016103f7929190610859565b60008061046f836020610895565b905080845110156104b05783836040517fde59ba130000000000000000000000000000000000000000000000000000000081526004016103f7929190610859565b9092015192915050565b606060008267ffffffffffffffff8111156104d7576104d76108d4565b6040519080825280601f01601f191660200182016040528015610501576020820181803683370190505b509150838501602001600060205b858110156105285790820151848201526020810161050f565b848601602001805193909201519085015252508282018381101561054e5761054e610903565b8451811115610227578484846040517f10a999ce0000000000000000000000000000000000000000000000000000000081526004016103f793929190610932565b60408051604280825260808201909252606091600091906020820181803683370190505091508284016020018051602084015260208101516040840152602281015160428401525060428301905083518111156101d55783836040517f2d24eaea0000000000000000000000000000000000000000000000000000000081526004016103f7929190610859565b80820160200151825160f882901c9160f01c60ff169060028401908111156106745784846040517fa19c8fdd0000000000000000000000000000000000000000000000000000000081526004016103f7929190610859565b9250925092565b80820160200151825160609190911c9060148301908111156101d55783836040517fe36e8a170000000000000000000000000000000000000000000000000000000081526004016103f7929190610859565b60008083601f8401126106df57600080fd5b50813567ffffffffffffffff8111156106f757600080fd5b6020830191508360208285010111156101d557600080fd5b6000806020838503121561072257600080fd5b823567ffffffffffffffff81111561073957600080fd5b610745858286016106cd565b90969095509350505050565b60008060006040848603121561076657600080fd5b833567ffffffffffffffff81111561077d57600080fd5b610789868287016106cd565b909790965060209590950135949350505050565b600080600080606085870312156107b357600080fd5b843567ffffffffffffffff8111156107ca57600080fd5b6107d6878288016106cd565b90989097506020870135966040013595509350505050565b6000815180845260005b81811015610814576020818501810151868301820152016107f8565b81811115610826576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60408152600061086c60408301856107ee565b90508260208301529392505050565b60208152600061088e60208301846107ee565b9392505050565b600082198211156108cf577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b500190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fd5b60608152600061094560608301866107ee565b6020830194909452506040015291905056fea26469706673582212201673735e56d53d5ab658a25614199a64833946a2ef3c22790184699af26e23ec64736f6c634300080e0033";

export class LibBytesImpl__factory extends ContractFactory {
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
  ): Promise<LibBytesImpl> {
    return super.deploy(overrides || {}) as Promise<LibBytesImpl>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): LibBytesImpl {
    return super.attach(address) as LibBytesImpl;
  }
  connect(signer: Signer): LibBytesImpl__factory {
    return super.connect(signer) as LibBytesImpl__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LibBytesImplInterface {
    return new utils.Interface(_abi) as LibBytesImplInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LibBytesImpl {
    return new Contract(address, _abi, signerOrProvider) as LibBytesImpl;
  }
}
