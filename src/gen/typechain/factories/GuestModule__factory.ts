/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { GuestModule, GuestModuleInterface } from "../GuestModule";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_space",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_provided",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_current",
        type: "uint256",
      },
    ],
    name: "BadGapNonce",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_space",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_provided",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_current",
        type: "uint256",
      },
    ],
    name: "BadNonce",
    type: "error",
  },
  {
    inputs: [],
    name: "DelegateCallNotAllowed",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_space",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_nonce",
        type: "uint256",
      },
    ],
    name: "ExpectedEmptyNonce",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_hash",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "InvalidNestedSignature",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_type",
        type: "uint256",
      },
    ],
    name: "InvalidNonceType",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "_s",
        type: "bytes32",
      },
    ],
    name: "InvalidSValue",
    type: "error",
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
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "InvalidSignature",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_flag",
        type: "uint256",
      },
    ],
    name: "InvalidSignatureFlag",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "InvalidSignatureLength",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_type",
        type: "uint256",
      },
    ],
    name: "InvalidSignatureType",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_v",
        type: "uint256",
      },
    ],
    name: "InvalidVValue",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_requested",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_available",
        type: "uint256",
      },
    ],
    name: "NotEnoughGas",
    type: "error",
  },
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
    name: "ReadFirstUint8OutOfBounds",
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
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "SignerIsAddress0",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_type",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_recoverMode",
        type: "bool",
      },
    ],
    name: "UnsupportedSignatureType",
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
        name: "_oldNonce",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_newNonce",
        type: "uint256",
      },
    ],
    name: "GapNonceChange",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "NoNonceUsed",
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
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
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
        internalType: "uint256",
        name: "_space",
        type: "uint256",
      },
    ],
    name: "readGapNonce",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611cb8806100206000396000f3fe6080604052600436106100965760003560e01c80637a9a16281161006957806390042baf1161004e57806390042baf146101b1578063affed0e0146101e9578063cc63f2e2146101fe57600080fd5b80637a9a1628146101635780638c3f55631461018357600080fd5b806301ffc9a71461009b5780631626ba7e146100d057806320c13b0b1461012157806361c2926c14610141575b600080fd5b3480156100a757600080fd5b506100bb6100b63660046113ea565b61021e565b60405190151581526020015b60405180910390f35b3480156100dc57600080fd5b506100f06100eb366004611449565b61022f565b6040517fffffffff0000000000000000000000000000000000000000000000000000000090911681526020016100c7565b34801561012d57600080fd5b506100f061013c366004611495565b6102ad565b34801561014d57600080fd5b5061016161015c3660046117a4565b610343565b005b34801561016f57600080fd5b5061016161017e3660046117d9565b610418565b34801561018f57600080fd5b506101a361019e366004611846565b610440565b6040519081526020016100c7565b6101c46101bf36600461185f565b61046c565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100c7565b3480156101f557600080fd5b506101a361050d565b34801561020a57600080fd5b506101a3610219366004611846565b61051e565b60006102298261054a565b92915050565b6000806102728585858080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506105a692505050565b50905080156102a457507f1626ba7e0000000000000000000000000000000000000000000000000000000090506102a6565b505b9392505050565b60008061030786866040516102c3929190611894565b604051809103902085858080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506105a692505050565b509050801561033957507f20c13b0b00000000000000000000000000000000000000000000000000000000905061033b565b505b949350505050565b60006104088260405160200161035991906119c7565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815282825280516020918201207f1901000000000000000000000000000000000000000000000000000000000000848301524660228501523060601b7fffffffffffffffffffffffffffffffffffffffff000000000000000000000000166042850152605680850191909152825180850390910181526076909301909152815191012090565b90506104148183610877565b5050565b600061042e846040516020016103599190611a0e565b905061043a8185610877565b50505050565b60006102297f8d0bf1fd623d628c741362c1289948e57b3e2905218c676d3e69abee36d6ae2e83610a04565b60003330146104b4576040517fe12588940000000000000000000000000000000000000000000000000000000081523360048201523060248201526044015b60405180910390fd5b81516020830134f060405173ffffffffffffffffffffffffffffffffffffffff821681529091507fa506ad4e7f05eceba62a023c3219e5bd98a615f4fa87e2afb08a2da5cf62bf0c9060200160405180910390a1919050565b60006105196000610440565b905090565b60006102297f2a37c7c3c3449f4795b05559a0f92a1730815bf20be16b02bbd6dbb8ae8532fe83610a04565b60007f6ffbd451000000000000000000000000000000000000000000000000000000007fffffffff0000000000000000000000000000000000000000000000000000000083160161059d57506001919050565b61022982610a62565b6000806000806105b585610abe565b90925090504660ff83166105cc5760009150610622565b60018360ff1603156106225760028360ff16036105eb57506000610622565b6040517fbff01fa700000000000000000000000000000000000000000000000000000000815260ff841660048201526024016104ab565b604080517f190100000000000000000000000000000000000000000000000000000000000060208083019190915260228201939093527fffffffffffffffffffffffffffffffffffffffff0000000000000000000000003060601b16604282015260568082018a90528251808303909101815260769091019091528051910120925060006106b08683610b0d565b9250905061ffff811660005b875184101561085757600080806106d38b88610b66565b985060ff91821694501691507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8301610719576107108b88610bc5565b97509050610807565b8261074557606061072a8c89610c17565b985090506107388a82610ca4565b9150828501945050610807565b600283036107d2576107578b88610bc5565b9750905060006107678c89610b0d565b985061ffff169050606061077c8d8a84610fa0565b9950905061078b8b848361107d565b6107c7578a83826040517f9a9462320000000000000000000000000000000000000000000000000000000081526004016104ab93929190611a55565b505092810192610807565b6040517fb2505f7c000000000000000000000000000000000000000000000000000000008152600481018490526024016104ab565b604080516020810187905290810183905273ffffffffffffffffffffffffffffffffffffffff821660608201526080016040516020818303038152906040528051906020012094505050506106bc565b8261ffff168110158015610869575060015b965050505050509250929050565b60005b81518110156109ff57600082828151811061089757610897611a93565b60200260200101519050600060608260000151156108e1576040517f0d89438e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b82604001515a101561092e5782604001515a6040517f9fa72982000000000000000000000000000000000000000000000000000000008152600481019290925260248201526044016104ab565b826060015173ffffffffffffffffffffffffffffffffffffffff1683608001518460400151600014610964578460400151610966565b5a5b908560a001516040516109799190611ac2565b600060405180830381858888f193505050503d80600081146109b7576040519150601f19603f3d011682016040523d82523d6000602084013e6109bc565b606091505b50909250905081156109de5760405186815260200160405180910390a06109e9565b6109e9838783611247565b50505080806109f790611b0d565b91505061087a565b505050565b6000808383604051602001610a23929190918252602082015260400190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152919052805160209091012054949350505050565b60007f0b050cdb000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000831601610ab557506001919050565b61022982611297565b6000808251600003610afe57826040517f322952a30000000000000000000000000000000000000000000000000000000081526004016104ab9190611b45565b50506020015160f81c90600190565b80820160200151825160f09190911c906002830190811115610b5f5783836040517f80d95e5f0000000000000000000000000000000000000000000000000000000081526004016104ab929190611b58565b9250929050565b80820160200151825160f882901c9160f01c60ff16906002840190811115610bbe5784846040517fa19c8fdd0000000000000000000000000000000000000000000000000000000081526004016104ab929190611b58565b9250925092565b80820160200151825160609190911c906014830190811115610b5f5783836040517fe36e8a170000000000000000000000000000000000000000000000000000000081526004016104ab929190611b58565b6040805160428082526080820190925260609160009190602082018180368337019050509150828401602001805160208401526020810151604084015260228101516042840152506042830190508351811115610b5f5783836040517f2d24eaea0000000000000000000000000000000000000000000000000000000081526004016104ab929190611b58565b60008151604214610ce357816040517f2ee17a3d0000000000000000000000000000000000000000000000000000000081526004016104ab9190611b45565b60008260018451610cf49190611b7a565b81518110610d0457610d04611a93565b602001015160f81c60f81b60f81c60ff169050600083604081518110610d2c57610d2c611a93565b016020015160f81c90506000610d428582611360565b90506000610d51866020611360565b90507f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0811115610db15785816040517fad4aac760000000000000000000000000000000000000000000000000000000081526004016104ab929190611b58565b8260ff16601b14158015610dc957508260ff16601c14155b15610e045785836040517fe578897e0000000000000000000000000000000000000000000000000000000081526004016104ab929190611b91565b60018403610e715760408051600081526020810180835289905260ff851691810191909152606081018390526080810182905260019060a0015b6020604051602081039080840390855afa158015610e60573d6000803e3d6000fd5b505050602060405103519450610f47565b60028403610f0e576040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101889052600190605c01604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181528282528051602091820120600084529083018083525260ff861690820152606081018490526080810183905260a001610e3e565b858460016040517f9dfba8520000000000000000000000000000000000000000000000000000000081526004016104ab93929190611bb6565b73ffffffffffffffffffffffffffffffffffffffff8516610f9657856040517f6c1719d20000000000000000000000000000000000000000000000000000000081526004016104ab9190611b45565b5050505092915050565b606060008267ffffffffffffffff811115610fbd57610fbd611501565b6040519080825280601f01601f191660200182016040528015610fe7576020820181803683370190505b509150838501602001600060205b8581101561100e57908201518482015260208101610ff5565b848601602001805193909201519085015252508282018381101561103457611034611be0565b8451811115611075578484846040517f10a999ce0000000000000000000000000000000000000000000000000000000081526004016104ab93929190611c0f565b935093915050565b600080826001845161108f9190611b7a565b8151811061109f5761109f611a93565b016020015160f81c905060018114806110b85750600281145b156110fc578373ffffffffffffffffffffffffffffffffffffffff166110de8685610ca4565b73ffffffffffffffffffffffffffffffffffffffff161491506102a4565b6003810361120e5782517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff810184526040517f1626ba7e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff861690631626ba7e9061117f9089908890600401611c34565b602060405180830381865afa15801561119c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111c09190611c4d565b9084527fffffffff00000000000000000000000000000000000000000000000000000000167f1626ba7e000000000000000000000000000000000000000000000000000000001491506102a4565b828160006040517f9dfba8520000000000000000000000000000000000000000000000000000000081526004016104ab93929190611bb6565b82602001511561125957805160208201fd5b7f3dbd1590ea96dd3253a91f24e64e3a502e1225d602a5731357bc12643070ccd7828260405161128a929190611c34565b60405180910390a1505050565b60007fffffffff000000000000000000000000000000000000000000000000000000008216158061130957507fffffffff0000000000000000000000000000000000000000000000000000000082167f36e7817500000000000000000000000000000000000000000000000000000000145b1561131657506001919050565b7f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000831614610229565b60008061136e836020611c6a565b905080845110156113af5783836040517fde59ba130000000000000000000000000000000000000000000000000000000081526004016104ab929190611b58565b9092015192915050565b7fffffffff00000000000000000000000000000000000000000000000000000000811681146113e757600080fd5b50565b6000602082840312156113fc57600080fd5b81356102a6816113b9565b60008083601f84011261141957600080fd5b50813567ffffffffffffffff81111561143157600080fd5b602083019150836020828501011115610b5f57600080fd5b60008060006040848603121561145e57600080fd5b83359250602084013567ffffffffffffffff81111561147c57600080fd5b61148886828701611407565b9497909650939450505050565b600080600080604085870312156114ab57600080fd5b843567ffffffffffffffff808211156114c357600080fd5b6114cf88838901611407565b909650945060208701359150808211156114e857600080fd5b506114f587828801611407565b95989497509550505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160c0810167ffffffffffffffff8111828210171561155357611553611501565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156115a0576115a0611501565b604052919050565b803580151581146115b857600080fd5b919050565b600082601f8301126115ce57600080fd5b813567ffffffffffffffff8111156115e8576115e8611501565b61161960207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601611559565b81815284602083860101111561162e57600080fd5b816020850160208301376000918101602001919091529392505050565b600082601f83011261165c57600080fd5b8135602067ffffffffffffffff8083111561167957611679611501565b8260051b611688838201611559565b93845285810183019383810190888611156116a257600080fd5b84880192505b85831015611798578235848111156116c05760008081fd5b880160c0818b037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0018113156116f65760008081fd5b6116fe611530565b6117098884016115a8565b815260406117188185016115a8565b8983015260608085013582840152608091508185013573ffffffffffffffffffffffffffffffffffffffff811681146117515760008081fd5b9083015260a0848101358284015292840135928884111561177457600091508182fd5b6117828e8b868801016115bd565b90830152508452505091840191908401906116a8565b98975050505050505050565b6000602082840312156117b657600080fd5b813567ffffffffffffffff8111156117cd57600080fd5b61033b8482850161164b565b6000806000606084860312156117ee57600080fd5b833567ffffffffffffffff8082111561180657600080fd5b6118128783880161164b565b945060208601359350604086013591508082111561182f57600080fd5b5061183c868287016115bd565b9150509250925092565b60006020828403121561185857600080fd5b5035919050565b60006020828403121561187157600080fd5b813567ffffffffffffffff81111561188857600080fd5b61033b848285016115bd565b8183823760009101908152919050565b60005b838110156118bf5781810151838201526020016118a7565b8381111561043a5750506000910152565b600081518084526118e88160208601602086016118a4565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600081518084526020808501808196508360051b8101915082860160005b858110156119ba5782840389528151805115158552858101511515868601526040808201519086015260608082015173ffffffffffffffffffffffffffffffffffffffff16908601526080808201519086015260a09081015160c0918601829052906119a6818701836118d0565b9a87019a9550505090840190600101611938565b5091979650505050505050565b60408152600560408201527f73656c663a00000000000000000000000000000000000000000000000000000060608201526080602082015260006102a6608083018461191a565b60408152600660408201527f67756573743a000000000000000000000000000000000000000000000000000060608201526080602082015260006102a6608083018461191a565b83815273ffffffffffffffffffffffffffffffffffffffff83166020820152606060408201526000611a8a60608301846118d0565b95945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60008251611ad48184602087016118a4565b9190910192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611b3e57611b3e611ade565b5060010190565b6020815260006102a660208301846118d0565b604081526000611b6b60408301856118d0565b90508260208301529392505050565b600082821015611b8c57611b8c611ade565b500390565b604081526000611ba460408301856118d0565b905060ff831660208301529392505050565b606081526000611bc960608301866118d0565b602083019490945250901515604090910152919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fd5b606081526000611c2260608301866118d0565b60208301949094525060400152919050565b82815260406020820152600061033b60408301846118d0565b600060208284031215611c5f57600080fd5b81516102a6816113b9565b60008219821115611c7d57611c7d611ade565b50019056fea264697066735822122030a775129d51eead11334722029d4b83edbbf81256cd106703493d3aace2a3f564736f6c634300080e0033";

export class GuestModule__factory extends ContractFactory {
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
  ): Promise<GuestModule> {
    return super.deploy(overrides || {}) as Promise<GuestModule>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): GuestModule {
    return super.attach(address) as GuestModule;
  }
  connect(signer: Signer): GuestModule__factory {
    return super.connect(signer) as GuestModule__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GuestModuleInterface {
    return new utils.Interface(_abi) as GuestModuleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GuestModule {
    return new Contract(address, _abi, signerOrProvider) as GuestModule;
  }
}
