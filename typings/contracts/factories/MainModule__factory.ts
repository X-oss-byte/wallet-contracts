/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { MainModule } from "../MainModule";

export class MainModule__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(_factory: string, overrides?: Overrides): Promise<MainModule> {
    return super.deploy(_factory, overrides || {}) as Promise<MainModule>;
  }
  getDeployTransaction(
    _factory: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_factory, overrides || {});
  }
  attach(address: string): MainModule {
    return super.attach(address) as MainModule;
  }
  connect(signer: Signer): MainModule__factory {
    return super.connect(signer) as MainModule__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MainModule {
    return new Contract(address, _abi, signerOrProvider) as MainModule;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_factory",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "ImplementationUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_space",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_newNonce",
        type: "uint256",
      },
    ],
    name: "NonceChange",
    type: "event",
  },
  {
    anonymous: true,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "_tx",
        type: "bytes32",
      },
    ],
    name: "TxExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "_tx",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_reason",
        type: "bytes",
      },
    ],
    name: "TxFailed",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "FACTORY",
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
    name: "INIT_CODE_HASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_signature",
        type: "bytes4",
      },
      {
        internalType: "address",
        name: "_implementation",
        type: "address",
      },
    ],
    name: "addHook",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
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
        components: [
          {
            internalType: "bool",
            name: "delegateCall",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "revertOnError",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "gasLimit",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct IModuleCalls.Transaction[]",
        name: "_txs",
        type: "tuple[]",
      },
      {
        internalType: "uint256",
        name: "_nonce",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_hash",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_signatures",
        type: "bytes",
      },
    ],
    name: "isValidSignature",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
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
        internalType: "bytes",
        name: "_signatures",
        type: "bytes",
      },
    ],
    name: "isValidSignature",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nonce",
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
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
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
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
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
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_signature",
        type: "bytes4",
      },
    ],
    name: "readHook",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_space",
        type: "uint256",
      },
    ],
    name: "readNonce",
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
        internalType: "bytes4",
        name: "_signature",
        type: "bytes4",
      },
    ],
    name: "removeHook",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "delegateCall",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "revertOnError",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "gasLimit",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct IModuleCalls.Transaction[]",
        name: "_txs",
        type: "tuple[]",
      },
    ],
    name: "selfExecute",
    outputs: [],
    stateMutability: "nonpayable",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "_implementation",
        type: "address",
      },
    ],
    name: "updateImplementation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60c06040523480156200001157600080fd5b50604051620027b7380380620027b78339810160408190526200003491620000e2565b8060006040518060600160405280602881526020016200278f60289139306001600160a01b03166040516020018083805190602001908083835b602083106200008f5780518252601f1990920191602091820191016200006e565b51815160209384036101000a60001901801990921691161790529201938452506040805180850381529382019052825192019190912060805250505060601b6001600160601b03191660a0525062000112565b600060208284031215620000f4578081fd5b81516001600160a01b03811681146200010b578182fd5b9392505050565b60805160a05160601c61264c62000143600039806106d552806116ec5250806106b1528061171d525061264c6000f3fe6080604052600436106101125760003560e01c80634fcf3eca116100a557806390042baf11610074578063b93ea7ad11610059578063b93ea7ad146103c5578063bc197c81146103e5578063f23a6e611461040557610119565b806390042baf1461039d578063affed0e0146103b057610119565b80634fcf3eca1461031d57806361c2926c1461033d5780637a9a16281461035d5780638c3f55631461037d57610119565b80631a9b2337116100e15780631a9b23371461029957806320c13b0b146102c6578063257671f5146102e65780632dd310001461030857610119565b806301ffc9a7146101f4578063025b22bc1461022a578063150b7a021461024c5780631626ba7e1461027957610119565b3661011957005b60006101486000357fffffffff0000000000000000000000000000000000000000000000000000000016610425565b905073ffffffffffffffffffffffffffffffffffffffff8116156101f1576000808273ffffffffffffffffffffffffffffffffffffffff166000366040518083838082843760405192019450600093509091505080830381855af49150503d80600081146101d2576040519150601f19603f3d011682016040523d82523d6000602084013e6101d7565b606091505b5091509150816101e957805160208201fd5b805160208201f35b50005b34801561020057600080fd5b5061021461020f366004611f43565b61047b565b6040516102219190612175565b60405180910390f35b34801561023657600080fd5b5061024a610245366004611ca8565b610486565b005b34801561025857600080fd5b5061026c610267366004611d79565b6105a7565b60405161022191906121a2565b34801561028557600080fd5b5061026c610294366004611ef9565b6105d1565b3480156102a557600080fd5b506102b96102b4366004611f43565b61064a565b6040516102219190612154565b3480156102d257600080fd5b5061026c6102e1366004611f8f565b610655565b3480156102f257600080fd5b506102fb6106af565b6040516102219190612180565b34801561031457600080fd5b506102b96106d3565b34801561032957600080fd5b5061024a610338366004611f43565b6106f7565b34801561034957600080fd5b5061024a610358366004611e5c565b6107d5565b34801561036957600080fd5b5061024a610378366004611e8f565b61086e565b34801561038957600080fd5b506102fb61039836600461202b565b6108ea565b6102b96103ab366004611ff8565b610916565b3480156103bc57600080fd5b506102fb6109ca565b3480156103d157600080fd5b5061024a6103e0366004611f5d565b6109db565b3480156103f157600080fd5b5061026c610400366004611cc2565b610ab4565b34801561041157600080fd5b5061026c610420366004611de6565b610ae1565b60006104737fbe27a319efc8734e89e26ba4bc95f5c788584163b959f03fa04e2d7ab4b9a1207fffffffff000000000000000000000000000000000000000000000000000000008416610b0c565b90505b919050565b600061047382610b39565b3330146104de576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260278152602001806125f06027913960400191505060405180910390fd5b6104fd8173ffffffffffffffffffffffffffffffffffffffff16610b96565b610552576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260398152602001806125196039913960400191505060405180910390fd5b61055b81610b9c565b6040805173ffffffffffffffffffffffffffffffffffffffff8316815290517f310ba5f1d2ed074b51e2eccd052a47ae9ab7c6b800d1fca3db3999d6a592ca039181900360200190a150565b7f150b7a020000000000000000000000000000000000000000000000000000000095945050505050565b600061061b6105df85610ba0565b84848080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610c0092505050565b1561064357507f1626ba7e000000000000000000000000000000000000000000000000000000005b9392505050565b600061047382610425565b600061067f6105df86866040518083838082843760405192018290039091209350610ba092505050565b156106a757507f20c13b0b000000000000000000000000000000000000000000000000000000005b949350505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b33301461074f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260278152602001806125f06027913960400191505060405180910390fd5b600061075a82610425565b73ffffffffffffffffffffffffffffffffffffffff1614156107c7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b8152602001806123e8602b913960400191505060405180910390fd5b6107d2816000610d51565b50565b33301461082d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260278152602001806125f06027913960400191505060405180910390fd5b600061085e8260405160200161084391906122c0565b60405160208183030381529060405280519060200120610ba0565b905061086a8183610db4565b5050565b61087782610f83565b600061088f8385604051602001610843929190612307565b905061089b8183610c00565b6108da576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108d190612263565b60405180910390fd5b6108e48185610db4565b50505050565b60006104737f8d0bf1fd623d628c741362c1289948e57b3e2905218c676d3e69abee36d6ae2e83610b0c565b6000333014610970576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260278152602001806125f06027913960400191505060405180910390fd5b81516020830134f06040805173ffffffffffffffffffffffffffffffffffffffff8316815290519192507fa506ad4e7f05eceba62a023c3219e5bd98a615f4fa87e2afb08a2da5cf62bf0c919081900360200190a1919050565b60006109d660006108ea565b905090565b333014610a33576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260278152602001806125f06027913960400191505060405180910390fd5b6000610a3e83610425565b73ffffffffffffffffffffffffffffffffffffffff1614610aaa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806124ca602c913960400191505060405180910390fd5b61086a8282610d51565b7fbc197c810000000000000000000000000000000000000000000000000000000098975050505050505050565b7ff23a6e61000000000000000000000000000000000000000000000000000000009695505050505050565b60408051602080820194909452808201929092528051808303820181526060909201905280519101205490565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f90042baf000000000000000000000000000000000000000000000000000000001415610b8d57506001610476565b61047382611027565b3b151590565b3055565b604080517f19010000000000000000000000000000000000000000000000000000000000006020808301919091524660228301523060601b6042830152605680830194909452825180830390940184526076909101909152815191012090565b6000806000610c0e84611168565b909250905061ffff821660005b8551831015610d2e5760008080610c3289876111d6565b975060ff91821694501691506001831415610c5a57610c518987611250565b96509050610cd7565b82610c86576060610c6b8a886112c4565b97509050610c798b8261136c565b9150828501945050610cd7565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806123bc602c913960400191505060405180910390fd5b848282604051602001808481526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019350505050604051602081830303815290604052805190602001209450505050610c1b565b8361ffff168110158015610d465750610d468261169b565b979650505050505050565b61086a7fbe27a319efc8734e89e26ba4bc95f5c788584163b959f03fa04e2d7ab4b9a1207fffffffff00000000000000000000000000000000000000000000000000000000841673ffffffffffffffffffffffffffffffffffffffff8416611779565b60005b8151811015610f7e576000828281518110610dce57fe5b602002602001015190506000606082604001515a1015610e1a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108d190612206565b825115610eb257826060015173ffffffffffffffffffffffffffffffffffffffff168360400151600014610e52578360400151610e54565b5a5b8460a00151604051610e669190612138565b6000604051808303818686f4925050503d8060008114610ea2576040519150601f19603f3d011682016040523d82523d6000602084013e610ea7565b606091505b509092509050610f47565b826060015173ffffffffffffffffffffffffffffffffffffffff1683608001518460400151600014610ee8578460400151610eea565b5a5b908560a00151604051610efd9190612138565b600060405180830381858888f193505050503d8060008114610f3b576040519150601f19603f3d011682016040523d82523d6000602084013e610f40565b606091505b5090925090505b8115610f685785604051610f5b9190612180565b60405180910390a0610f73565b610f738387836117a7565b505050600101610db7565b505050565b600080610f8f836117f7565b915091506000610f9e836108ea565b9050808214610fd9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108d1906121cf565b60018201610fe78482611810565b7f1f180c27086c7a39ea2a7b25239d1ab92348f07ca7bb59d1438fcf527568f8818482604051611018929190612320565b60405180910390a15050505050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167fec6aba500000000000000000000000000000000000000000000000000000000014806110ba57507fffffffff0000000000000000000000000000000000000000000000000000000082167f4e2312e000000000000000000000000000000000000000000000000000000000145b8061110657507fffffffff0000000000000000000000000000000000000000000000000000000082167f150b7a0200000000000000000000000000000000000000000000000000000000145b8061115257507fffffffff0000000000000000000000000000000000000000000000000000000082167fc0ee0b8a00000000000000000000000000000000000000000000000000000000145b1561115f57506001610476565b6104738261183b565b6020810151815160f09190911c906002908111156111d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260278152602001806124366027913960400191505060405180910390fd5b915091565b80820160200151825160f882901c9160f01c60ff16906002840190811115611249576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602681526020018061258e6026913960400191505060405180910390fd5b9250925092565b80820160200151825160609190911c9060148301908111156112bd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806124136023913960400191505060405180910390fd5b9250929050565b60408051604280825260808201909252606091600091906020820181803683370190505091508284016020018051602084015260208101516040840152602281015160428401525060428301905083518111156112bd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806124f66023913960400191505060405180910390fd5b6000808260018451038151811061137f57fe5b602001015160f81c60f81b60f81c60ff1690506000836040815181106113a157fe5b016020015160f81c905060006113b78582611898565b905060006113c6866020611898565b90507f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0811115611441576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603d81526020018061237f603d913960400191505060405180910390fd5b8260ff16601b1415801561145957508260ff16601c14155b156114af576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603d81526020018061245d603d913960400191505060405180910390fd5b60018414156115235760018784848460405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015611512573d6000803e3d6000fd5b505050602060405103519450611625565b60028414156115d45760018760405160200180807f19457468657265756d205369676e6564204d6573736167653a0a333200000000815250601c018281526020019150506040516020818303038152906040528051906020012084848460405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015611512573d6000803e3d6000fd5b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603c815260200180612552603c913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8516611691576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603081526020018061249a6030913960400191505060405180910390fd5b5050505092915050565b604080517fff000000000000000000000000000000000000000000000000000000000000006020808301919091527fffffffffffffffffffffffffffffffffffffffff0000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000060601b166021830152603582018490527f0000000000000000000000000000000000000000000000000000000000000000605580840191909152835180840390910181526075909201909252805191012073ffffffffffffffffffffffffffffffffffffffff163014919050565b6040805160208082019590955280820193909352805180840382018152606090930190528151919092012055565b8260200151156117b957805160208201fd5b7f3dbd1590ea96dd3253a91f24e64e3a502e1225d602a5731357bc12643070ccd782826040516117ea929190612189565b60405180910390a1505050565b606081901c916bffffffffffffffffffffffff90911690565b61086a7f8d0bf1fd623d628c741362c1289948e57b3e2905218c676d3e69abee36d6ae2e8383611779565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f025b22bc00000000000000000000000000000000000000000000000000000000141561188f57506001610476565b61047382611900565b600081602001835110156118f7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603c8152602001806125b4603c913960400191505060405180910390fd5b50016020015190565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f389901c700000000000000000000000000000000000000000000000000000000141561195457506001610476565b6104738260007fffffffff00000000000000000000000000000000000000000000000000000000821615806119ca57507fffffffff0000000000000000000000000000000000000000000000000000000082167f36e7817500000000000000000000000000000000000000000000000000000000145b156119d757506001610476565b7f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000831614610473565b803573ffffffffffffffffffffffffffffffffffffffff8116811461047657600080fd5b600082601f830112611a55578081fd5b8135602067ffffffffffffffff80831115611a6c57fe5b611a79828385020161232e565b83815282810190868401865b86811015611b55578135890160c0807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0838e03011215611ac357898afd5b604080518281018181108a82111715611ad857fe5b8252611ae5848b01611ba5565b8152611af2828501611ba5565b8a8201526060808501358383015260809250611b0f838601611a21565b9082015260a08481013583830152928401359289841115611b2e578c8dfd5b611b3c8f8c86880101611c25565b9082015287525050509285019290850190600101611a85565b509098975050505050505050565b60008083601f840112611b74578182fd5b50813567ffffffffffffffff811115611b8b578182fd5b60208301915083602080830285010111156112bd57600080fd5b8035801515811461047657600080fd5b80357fffffffff000000000000000000000000000000000000000000000000000000008116811461047657600080fd5b60008083601f840112611bf6578182fd5b50813567ffffffffffffffff811115611c0d578182fd5b6020830191508360208285010111156112bd57600080fd5b600082601f830112611c35578081fd5b813567ffffffffffffffff811115611c4957fe5b611c7a60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8401160161232e565b818152846020838601011115611c8e578283fd5b816020850160208301379081016020019190915292915050565b600060208284031215611cb9578081fd5b61064382611a21565b60008060008060008060008060a0898b031215611cdd578384fd5b611ce689611a21565b9750611cf460208a01611a21565b9650604089013567ffffffffffffffff80821115611d10578586fd5b611d1c8c838d01611b63565b909850965060608b0135915080821115611d34578586fd5b611d408c838d01611b63565b909650945060808b0135915080821115611d58578384fd5b50611d658b828c01611be5565b999c989b5096995094979396929594505050565b600080600080600060808688031215611d90578081fd5b611d9986611a21565b9450611da760208701611a21565b935060408601359250606086013567ffffffffffffffff811115611dc9578182fd5b611dd588828901611be5565b969995985093965092949392505050565b60008060008060008060a08789031215611dfe578182fd5b611e0787611a21565b9550611e1560208801611a21565b94506040870135935060608701359250608087013567ffffffffffffffff811115611e3e578283fd5b611e4a89828a01611be5565b979a9699509497509295939492505050565b600060208284031215611e6d578081fd5b813567ffffffffffffffff811115611e83578182fd5b6106a784828501611a45565b600080600060608486031215611ea3578283fd5b833567ffffffffffffffff80821115611eba578485fd5b611ec687838801611a45565b9450602086013593506040860135915080821115611ee2578283fd5b50611eef86828701611c25565b9150509250925092565b600080600060408486031215611f0d578283fd5b83359250602084013567ffffffffffffffff811115611f2a578283fd5b611f3686828701611be5565b9497909650939450505050565b600060208284031215611f54578081fd5b61064382611bb5565b60008060408385031215611f6f578182fd5b611f7883611bb5565b9150611f8660208401611a21565b90509250929050565b60008060008060408587031215611fa4578182fd5b843567ffffffffffffffff80821115611fbb578384fd5b611fc788838901611be5565b90965094506020870135915080821115611fdf578384fd5b50611fec87828801611be5565b95989497509550505050565b600060208284031215612009578081fd5b813567ffffffffffffffff81111561201f578182fd5b6106a784828501611c25565b60006020828403121561203c578081fd5b5035919050565b6000815180845260208085018081965082840281019150828601855b858110156120e15782840389528151805115158552858101511515868601526040808201519086015260608082015173ffffffffffffffffffffffffffffffffffffffff16908601526080808201519086015260a09081015160c0918601829052906120cd818701836120ee565b9a87019a955050509084019060010161205f565b5091979650505050505050565b60008151808452612106816020860160208601612352565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6000825161214a818460208701612352565b9190910192915050565b73ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b901515815260200190565b90815260200190565b6000838252604060208301526106a760408301846120ee565b7fffffffff0000000000000000000000000000000000000000000000000000000091909116815260200190565b6020808252601f908201527f4d61696e4d6f64756c65235f617574683a20494e56414c49445f4e4f4e434500604082015260600190565b60208082526024908201527f4d6f64756c6543616c6c73235f657865637574653a204e4f545f454e4f55474860408201527f5f47415300000000000000000000000000000000000000000000000000000000606082015260800190565b60208082526026908201527f4d6f64756c6543616c6c7323657865637574653a20494e56414c49445f53494760408201527f4e41545552450000000000000000000000000000000000000000000000000000606082015260800190565b600060408252600560408301527f73656c663a0000000000000000000000000000000000000000000000000000006060830152608060208301526106436080830184612043565b6000838252604060208301526106a76040830184612043565b918252602082015260400190565b60405181810167ffffffffffffffff8111828210171561234a57fe5b604052919050565b60005b8381101561236d578181015183820152602001612355565b838111156108e4575050600091015256fe5369676e617475726556616c696461746f72237265636f7665725369676e65723a20696e76616c6964207369676e6174757265202773272076616c75654d6f64756c6541757468235f7369676e617475726556616c69646174696f6e20494e56414c49445f464c41474d6f64756c65486f6f6b732372656d6f7665486f6f6b3a20484f4f4b5f4e4f545f524547495354455245444c696242797465732372656164416464726573733a204f55545f4f465f424f554e44534c696242797465732372656164466972737455696e7431363a204f55545f4f465f424f554e44535369676e617475726556616c696461746f72237265636f7665725369676e65723a20696e76616c6964207369676e6174757265202776272076616c75655369676e617475726556616c696461746f72237265636f7665725369676e65723a20494e56414c49445f5349474e45524d6f64756c65486f6f6b7323616464486f6f6b3a20484f4f4b5f414c52454144595f524547495354455245444c696242797465732372656164427974657336363a204f55545f4f465f424f554e44534d6f64756c6555706461746523757064617465496d706c656d656e746174696f6e3a20494e56414c49445f494d504c454d454e544154494f4e5369676e617475726556616c696461746f72237265636f7665725369676e65723a20554e535550504f525445445f5349474e41545552455f545950454c69624279746573237265616455696e743855696e74383a204f55545f4f465f424f554e44534c696242797465732372656164427974657333323a20475245415445525f4f525f455155414c5f544f5f33325f4c454e4754485f52455155495245444d6f64756c6553656c6641757468236f6e6c7953656c663a204e4f545f415554484f52495a4544a2646970667358221220bcab5b4d8a9857b35215da6ef3d9d17a8abca7036e36c4958f537901e5774a9564736f6c63430007060033603a600e3d39601a805130553df3363d3d373d3d3d363d30545af43d82803e903d91601857fd5bf3";
