"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.GuestModule__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_space",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "_provided",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "_current",
                type: "uint256"
            },
        ],
        name: "BadGapNonce",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_space",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "_provided",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "_current",
                type: "uint256"
            },
        ],
        name: "BadNonce",
        type: "error"
    },
    {
        inputs: [],
        name: "DelegateCallNotAllowed",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_space",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "_nonce",
                type: "uint256"
            },
        ],
        name: "ExpectedEmptyNonce",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "_hash",
                type: "bytes32"
            },
            {
                internalType: "address",
                name: "_addr",
                type: "address"
            },
            {
                internalType: "bytes",
                name: "_signature",
                type: "bytes"
            },
        ],
        name: "InvalidNestedSignature",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_type",
                type: "uint256"
            },
        ],
        name: "InvalidNonceType",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "_signature",
                type: "bytes"
            },
            {
                internalType: "bytes32",
                name: "_s",
                type: "bytes32"
            },
        ],
        name: "InvalidSValue",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "_hash",
                type: "bytes32"
            },
            {
                internalType: "bytes",
                name: "_signature",
                type: "bytes"
            },
        ],
        name: "InvalidSignature",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_flag",
                type: "uint256"
            },
        ],
        name: "InvalidSignatureFlag",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "_signature",
                type: "bytes"
            },
        ],
        name: "InvalidSignatureLength",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "_signature",
                type: "bytes"
            },
            {
                internalType: "uint256",
                name: "_v",
                type: "uint256"
            },
        ],
        name: "InvalidVValue",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_requested",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "_available",
                type: "uint256"
            },
        ],
        name: "NotEnoughGas",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_sender",
                type: "address"
            },
            {
                internalType: "address",
                name: "_self",
                type: "address"
            },
        ],
        name: "OnlySelfAuth",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes"
            },
            {
                internalType: "uint256",
                name: "_index",
                type: "uint256"
            },
        ],
        name: "ReadAddressOutOfBounds",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes"
            },
            {
                internalType: "uint256",
                name: "_index",
                type: "uint256"
            },
        ],
        name: "ReadBytes32OutOfBounds",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes"
            },
            {
                internalType: "uint256",
                name: "_index",
                type: "uint256"
            },
        ],
        name: "ReadBytes66OutOfBounds",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "_datam",
                type: "bytes"
            },
            {
                internalType: "uint256",
                name: "_index",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "_length",
                type: "uint256"
            },
        ],
        name: "ReadBytesOutOfBounds",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes"
            },
        ],
        name: "ReadFirstUint16OutOfBounds",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes"
            },
            {
                internalType: "uint256",
                name: "_index",
                type: "uint256"
            },
        ],
        name: "ReadUint16OutOfBounds",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes"
            },
            {
                internalType: "uint256",
                name: "_index",
                type: "uint256"
            },
        ],
        name: "ReadUint8Uint8OutOfBounds",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "_signature",
                type: "bytes"
            },
        ],
        name: "SignerIsAddress0",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "_signature",
                type: "bytes"
            },
            {
                internalType: "uint256",
                name: "_type",
                type: "uint256"
            },
            {
                internalType: "bool",
                name: "_recoverMode",
                type: "bool"
            },
        ],
        name: "UnsupportedSignatureType",
        type: "error"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "_contract",
                type: "address"
            },
        ],
        name: "CreatedContract",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "_space",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_oldNonce",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_newNonce",
                type: "uint256"
            },
        ],
        name: "GapNonceChange",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [],
        name: "NoNonceUsed",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "_space",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_newNonce",
                type: "uint256"
            },
        ],
        name: "NonceChange",
        type: "event"
    },
    {
        anonymous: true,
        inputs: [
            {
                indexed: false,
                internalType: "bytes32",
                name: "_tx",
                type: "bytes32"
            },
        ],
        name: "TxExecuted",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bytes32",
                name: "_tx",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "_reason",
                type: "bytes"
            },
        ],
        name: "TxFailed",
        type: "event"
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "_code",
                type: "bytes"
            },
        ],
        name: "createContract",
        outputs: [
            {
                internalType: "address",
                name: "addr",
                type: "address"
            },
        ],
        stateMutability: "payable",
        type: "function"
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "bool",
                        name: "delegateCall",
                        type: "bool"
                    },
                    {
                        internalType: "bool",
                        name: "revertOnError",
                        type: "bool"
                    },
                    {
                        internalType: "uint256",
                        name: "gasLimit",
                        type: "uint256"
                    },
                    {
                        internalType: "address",
                        name: "target",
                        type: "address"
                    },
                    {
                        internalType: "uint256",
                        name: "value",
                        type: "uint256"
                    },
                    {
                        internalType: "bytes",
                        name: "data",
                        type: "bytes"
                    },
                ],
                internalType: "struct IModuleCalls.Transaction[]",
                name: "_txs",
                type: "tuple[]"
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes"
            },
        ],
        name: "execute",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "_hash",
                type: "bytes32"
            },
            {
                internalType: "bytes",
                name: "_signatures",
                type: "bytes"
            },
        ],
        name: "isValidSignature",
        outputs: [
            {
                internalType: "bytes4",
                name: "",
                type: "bytes4"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes"
            },
            {
                internalType: "bytes",
                name: "_signatures",
                type: "bytes"
            },
        ],
        name: "isValidSignature",
        outputs: [
            {
                internalType: "bytes4",
                name: "",
                type: "bytes4"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "nonce",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_space",
                type: "uint256"
            },
        ],
        name: "readGapNonce",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_space",
                type: "uint256"
            },
        ],
        name: "readNonce",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "bool",
                        name: "delegateCall",
                        type: "bool"
                    },
                    {
                        internalType: "bool",
                        name: "revertOnError",
                        type: "bool"
                    },
                    {
                        internalType: "uint256",
                        name: "gasLimit",
                        type: "uint256"
                    },
                    {
                        internalType: "address",
                        name: "target",
                        type: "address"
                    },
                    {
                        internalType: "uint256",
                        name: "value",
                        type: "uint256"
                    },
                    {
                        internalType: "bytes",
                        name: "data",
                        type: "bytes"
                    },
                ],
                internalType: "struct IModuleCalls.Transaction[]",
                name: "_txs",
                type: "tuple[]"
            },
        ],
        name: "selfExecute",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "_interfaceID",
                type: "bytes4"
            },
        ],
        name: "supportsInterface",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            },
        ],
        stateMutability: "pure",
        type: "function"
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b50611c6d806100206000396000f3fe6080604052600436106100965760003560e01c80637a9a16281161006957806390042baf1161004e57806390042baf146101b1578063affed0e0146101e9578063cc63f2e2146101fe57600080fd5b80637a9a1628146101635780638c3f55631461018357600080fd5b806301ffc9a71461009b5780631626ba7e146100d057806320c13b0b1461012157806361c2926c14610141575b600080fd5b3480156100a757600080fd5b506100bb6100b63660046113a2565b61021e565b60405190151581526020015b60405180910390f35b3480156100dc57600080fd5b506100f06100eb366004611401565b61022f565b6040517fffffffff0000000000000000000000000000000000000000000000000000000090911681526020016100c7565b34801561012d57600080fd5b506100f061013c36600461144d565b610320565b34801561014d57600080fd5b5061016161015c36600461175c565b6103f0565b005b34801561016f57600080fd5b5061016161017e366004611791565b6104c5565b34801561018f57600080fd5b506101a361019e3660046117fe565b6104ed565b6040519081526020016100c7565b6101c46101bf366004611817565b610519565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100c7565b3480156101f557600080fd5b506101a36105ba565b34801561020a57600080fd5b506101a36102193660046117fe565b6105cb565b6000610229826105f7565b92915050565b604080517f19010000000000000000000000000000000000000000000000000000000000006020808301919091524660228301523060601b7fffffffffffffffffffffffffffffffffffffffff000000000000000000000000166042830152605680830187905283518084039091018152607690920190925280519101206000906102f1905b84848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061065392505050565b1561031957507f1626ba7e000000000000000000000000000000000000000000000000000000005b9392505050565b60006103c06102b5868660405161033892919061184c565b604080519182900382207f19010000000000000000000000000000000000000000000000000000000000006020808501919091524660228501523060601b7fffffffffffffffffffffffffffffffffffffffff000000000000000000000000166042850152605680850192909252825180850390920182526076909301909152805191012090565b156103e857507f20c13b0b000000000000000000000000000000000000000000000000000000005b949350505050565b60006104b582604051602001610406919061197c565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815282825280516020918201207f1901000000000000000000000000000000000000000000000000000000000000848301524660228501523060601b7fffffffffffffffffffffffffffffffffffffffff000000000000000000000000166042850152605680850191909152825180850390910181526076909301909152815191012090565b90506104c18183610826565b5050565b60006104db8460405160200161040691906119c3565b90506104e78185610826565b50505050565b60006102297f8d0bf1fd623d628c741362c1289948e57b3e2905218c676d3e69abee36d6ae2e836109b3565b6000333014610561576040517fe12588940000000000000000000000000000000000000000000000000000000081523360048201523060248201526044015b60405180910390fd5b81516020830134f060405173ffffffffffffffffffffffffffffffffffffffff821681529091507fa506ad4e7f05eceba62a023c3219e5bd98a615f4fa87e2afb08a2da5cf62bf0c9060200160405180910390a1919050565b60006105c660006104ed565b905090565b60006102297f2a37c7c3c3449f4795b05559a0f92a1730815bf20be16b02bbd6dbb8ae8532fe836109b3565b60007f6ffbd451000000000000000000000000000000000000000000000000000000007fffffffff0000000000000000000000000000000000000000000000000000000083160161064a57506001919050565b61022982610a11565b600080600061066184610a6d565b909250905061ffff821660005b855183101561080957600080806106858987610abd565b975060ff91821694501691507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff83016106cb576106c28987610b1c565b965090506107b9565b826106f75760606106dc8a88610b75565b975090506106ea8b82610c02565b91508285019450506107b9565b60028303610784576107098987610b1c565b9650905060006107198a88610efe565b975061ffff169050606061072e8b8984610f50565b9850905061073d8c848361102d565b610779578b83826040517f9a94623200000000000000000000000000000000000000000000000000000000815260040161055893929190611a0a565b5050928101926107b9565b6040517fb2505f7c00000000000000000000000000000000000000000000000000000000815260048101849052602401610558565b604080516020810187905290810183905273ffffffffffffffffffffffffffffffffffffffff8216606082015260800160405160208183030381529060405280519060200120945050505061066e565b8361ffff16811015801561081b575060015b979650505050505050565b60005b81518110156109ae57600082828151811061084657610846611a48565b6020026020010151905060006060826000015115610890576040517f0d89438e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b82604001515a10156108dd5782604001515a6040517f9fa7298200000000000000000000000000000000000000000000000000000000815260048101929092526024820152604401610558565b826060015173ffffffffffffffffffffffffffffffffffffffff1683608001518460400151600014610913578460400151610915565b5a5b908560a001516040516109289190611a77565b600060405180830381858888f193505050503d8060008114610966576040519150601f19603f3d011682016040523d82523d6000602084013e61096b565b606091505b509092509050811561098d5760405186815260200160405180910390a0610998565b6109988387836111ff565b50505080806109a690611ac2565b915050610829565b505050565b60008083836040516020016109d2929190918252602082015260400190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152919052805160209091012054949350505050565b60007f0b050cdb000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000831601610a6457506001919050565b6102298261124f565b600080600283511015610aae57826040517f857f2c1a0000000000000000000000000000000000000000000000000000000081526004016105589190611afa565b50506020015160f01c90600290565b80820160200151825160f882901c9160f01c60ff16906002840190811115610b155784846040517fa19c8fdd000000000000000000000000000000000000000000000000000000008152600401610558929190611b0d565b9250925092565b80820160200151825160609190911c906014830190811115610b6e5783836040517fe36e8a17000000000000000000000000000000000000000000000000000000008152600401610558929190611b0d565b9250929050565b6040805160428082526080820190925260609160009190602082018180368337019050509150828401602001805160208401526020810151604084015260228101516042840152506042830190508351811115610b6e5783836040517f2d24eaea000000000000000000000000000000000000000000000000000000008152600401610558929190611b0d565b60008151604214610c4157816040517f2ee17a3d0000000000000000000000000000000000000000000000000000000081526004016105589190611afa565b60008260018451610c529190611b2f565b81518110610c6257610c62611a48565b602001015160f81c60f81b60f81c60ff169050600083604081518110610c8a57610c8a611a48565b016020015160f81c90506000610ca08582611318565b90506000610caf866020611318565b90507f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0811115610d0f5785816040517fad4aac76000000000000000000000000000000000000000000000000000000008152600401610558929190611b0d565b8260ff16601b14158015610d2757508260ff16601c14155b15610d625785836040517fe578897e000000000000000000000000000000000000000000000000000000008152600401610558929190611b46565b60018403610dcf5760408051600081526020810180835289905260ff851691810191909152606081018390526080810182905260019060a0015b6020604051602081039080840390855afa158015610dbe573d6000803e3d6000fd5b505050602060405103519450610ea5565b60028403610e6c576040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101889052600190605c01604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181528282528051602091820120600084529083018083525260ff861690820152606081018490526080810183905260a001610d9c565b858460016040517f9dfba85200000000000000000000000000000000000000000000000000000000815260040161055893929190611b6b565b73ffffffffffffffffffffffffffffffffffffffff8516610ef457856040517f6c1719d20000000000000000000000000000000000000000000000000000000081526004016105589190611afa565b5050505092915050565b80820160200151825160f09190911c906002830190811115610b6e5783836040517f80d95e5f000000000000000000000000000000000000000000000000000000008152600401610558929190611b0d565b606060008267ffffffffffffffff811115610f6d57610f6d6114b9565b6040519080825280601f01601f191660200182016040528015610f97576020820181803683370190505b509150838501602001600060205b85811015610fbe57908201518482015260208101610fa5565b8486016020018051939092015190850152525082820183811015610fe457610fe4611b95565b8451811115611025578484846040517f10a999ce00000000000000000000000000000000000000000000000000000000815260040161055893929190611bc4565b935093915050565b600080826001845161103f9190611b2f565b8151811061104f5761104f611a48565b016020015160f81c905060018114806110685750600281145b156110ac578373ffffffffffffffffffffffffffffffffffffffff1661108e8685610c02565b73ffffffffffffffffffffffffffffffffffffffff161491506111f7565b600381036111be5782517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff810184526040517f1626ba7e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff861690631626ba7e9061112f9089908890600401611be9565b602060405180830381865afa15801561114c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111709190611c02565b9084527fffffffff00000000000000000000000000000000000000000000000000000000167f1626ba7e000000000000000000000000000000000000000000000000000000001491506111f7565b828160006040517f9dfba85200000000000000000000000000000000000000000000000000000000815260040161055893929190611b6b565b509392505050565b82602001511561121157805160208201fd5b7f3dbd1590ea96dd3253a91f24e64e3a502e1225d602a5731357bc12643070ccd78282604051611242929190611be9565b60405180910390a1505050565b60007fffffffff00000000000000000000000000000000000000000000000000000000821615806112c157507fffffffff0000000000000000000000000000000000000000000000000000000082167f36e7817500000000000000000000000000000000000000000000000000000000145b156112ce57506001919050565b7f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000831614610229565b600080611326836020611c1f565b905080845110156113675783836040517fde59ba13000000000000000000000000000000000000000000000000000000008152600401610558929190611b0d565b9092015192915050565b7fffffffff000000000000000000000000000000000000000000000000000000008116811461139f57600080fd5b50565b6000602082840312156113b457600080fd5b813561031981611371565b60008083601f8401126113d157600080fd5b50813567ffffffffffffffff8111156113e957600080fd5b602083019150836020828501011115610b6e57600080fd5b60008060006040848603121561141657600080fd5b83359250602084013567ffffffffffffffff81111561143457600080fd5b611440868287016113bf565b9497909650939450505050565b6000806000806040858703121561146357600080fd5b843567ffffffffffffffff8082111561147b57600080fd5b611487888389016113bf565b909650945060208701359150808211156114a057600080fd5b506114ad878288016113bf565b95989497509550505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160c0810167ffffffffffffffff8111828210171561150b5761150b6114b9565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611558576115586114b9565b604052919050565b8035801515811461157057600080fd5b919050565b600082601f83011261158657600080fd5b813567ffffffffffffffff8111156115a0576115a06114b9565b6115d160207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601611511565b8181528460208386010111156115e657600080fd5b816020850160208301376000918101602001919091529392505050565b600082601f83011261161457600080fd5b8135602067ffffffffffffffff80831115611631576116316114b9565b8260051b611640838201611511565b938452858101830193838101908886111561165a57600080fd5b84880192505b85831015611750578235848111156116785760008081fd5b880160c0818b037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0018113156116ae5760008081fd5b6116b66114e8565b6116c1888401611560565b815260406116d0818501611560565b8983015260608085013582840152608091508185013573ffffffffffffffffffffffffffffffffffffffff811681146117095760008081fd5b9083015260a0848101358284015292840135928884111561172c57600091508182fd5b61173a8e8b86880101611575565b9083015250845250509184019190840190611660565b98975050505050505050565b60006020828403121561176e57600080fd5b813567ffffffffffffffff81111561178557600080fd5b6103e884828501611603565b6000806000606084860312156117a657600080fd5b833567ffffffffffffffff808211156117be57600080fd5b6117ca87838801611603565b94506020860135935060408601359150808211156117e757600080fd5b506117f486828701611575565b9150509250925092565b60006020828403121561181057600080fd5b5035919050565b60006020828403121561182957600080fd5b813567ffffffffffffffff81111561184057600080fd5b6103e884828501611575565b8183823760009101908152919050565b60005b8381101561187757818101518382015260200161185f565b838111156104e75750506000910152565b600081518084526118a081602086016020860161185c565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6000815180845260208085019450848260051b860182860160005b8581101561196f5783830389528151805115158452858101511515868501526040808201519085015260608082015173ffffffffffffffffffffffffffffffffffffffff16908501526080808201519085015260a09081015160c09185018290529061195b81860183611888565b9a87019a94505050908401906001016118ed565b5090979650505050505050565b60408152600560408201527f73656c663a000000000000000000000000000000000000000000000000000000606082015260806020820152600061031960808301846118d2565b60408152600660408201527f67756573743a0000000000000000000000000000000000000000000000000000606082015260806020820152600061031960808301846118d2565b83815273ffffffffffffffffffffffffffffffffffffffff83166020820152606060408201526000611a3f6060830184611888565b95945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60008251611a8981846020870161185c565b9190910192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611af357611af3611a93565b5060010190565b6020815260006103196020830184611888565b604081526000611b206040830185611888565b90508260208301529392505050565b600082821015611b4157611b41611a93565b500390565b604081526000611b596040830185611888565b905060ff831660208301529392505050565b606081526000611b7e6060830186611888565b602083019490945250901515604090910152919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fd5b606081526000611bd76060830186611888565b60208301949094525060400152919050565b8281526040602082015260006103e86040830184611888565b600060208284031215611c1457600080fd5b815161031981611371565b60008219821115611c3257611c32611a93565b50019056fea26469706673582212206dd922985b7acbc99483f11c9ff31bf69e0fb5292d4c9b7e346b95424d305c3364736f6c634300080e0033";
var GuestModule__factory = /** @class */ (function (_super) {
    __extends(GuestModule__factory, _super);
    function GuestModule__factory() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = this;
        if (args.length === 1) {
            _this = _super.call(this, _abi, _bytecode, args[0]) || this;
        }
        else {
            _this = _super.apply(this, args) || this;
        }
        return _this;
    }
    GuestModule__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    GuestModule__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    GuestModule__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    GuestModule__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    GuestModule__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    GuestModule__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    GuestModule__factory.bytecode = _bytecode;
    GuestModule__factory.abi = _abi;
    return GuestModule__factory;
}(ethers_1.ContractFactory));
exports.GuestModule__factory = GuestModule__factory;
