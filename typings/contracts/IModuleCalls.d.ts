/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface IModuleCallsInterface extends ethers.utils.Interface {
  functions: {
    "execute(tuple[],uint256,bytes)": FunctionFragment;
    "nonce()": FunctionFragment;
    "readNonce(uint256)": FunctionFragment;
    "selfExecute(tuple[])": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "execute",
    values: [
      {
        delegateCall: boolean;
        revertOnError: boolean;
        gasLimit: BigNumberish;
        target: string;
        value: BigNumberish;
        data: BytesLike;
      }[],
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(functionFragment: "nonce", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "readNonce",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "selfExecute",
    values: [
      {
        delegateCall: boolean;
        revertOnError: boolean;
        gasLimit: BigNumberish;
        target: string;
        value: BigNumberish;
        data: BytesLike;
      }[]
    ]
  ): string;

  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nonce", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "readNonce", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "selfExecute",
    data: BytesLike
  ): Result;

  events: {
    "NonceChange(uint256,uint256)": EventFragment;
    "TxExecuted(bytes32)": EventFragment;
    "TxFailed(bytes32,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NonceChange"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TxExecuted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TxFailed"): EventFragment;
}

export class IModuleCalls extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IModuleCallsInterface;

  functions: {
    execute(
      _txs: {
        delegateCall: boolean;
        revertOnError: boolean;
        gasLimit: BigNumberish;
        target: string;
        value: BigNumberish;
        data: BytesLike;
      }[],
      _nonce: BigNumberish,
      _signature: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "execute(tuple[],uint256,bytes)"(
      _txs: {
        delegateCall: boolean;
        revertOnError: boolean;
        gasLimit: BigNumberish;
        target: string;
        value: BigNumberish;
        data: BytesLike;
      }[],
      _nonce: BigNumberish,
      _signature: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    nonce(overrides?: CallOverrides): Promise<[BigNumber]>;

    "nonce()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    readNonce(
      _space: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "readNonce(uint256)"(
      _space: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    selfExecute(
      _txs: {
        delegateCall: boolean;
        revertOnError: boolean;
        gasLimit: BigNumberish;
        target: string;
        value: BigNumberish;
        data: BytesLike;
      }[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "selfExecute(tuple[])"(
      _txs: {
        delegateCall: boolean;
        revertOnError: boolean;
        gasLimit: BigNumberish;
        target: string;
        value: BigNumberish;
        data: BytesLike;
      }[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  execute(
    _txs: {
      delegateCall: boolean;
      revertOnError: boolean;
      gasLimit: BigNumberish;
      target: string;
      value: BigNumberish;
      data: BytesLike;
    }[],
    _nonce: BigNumberish,
    _signature: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "execute(tuple[],uint256,bytes)"(
    _txs: {
      delegateCall: boolean;
      revertOnError: boolean;
      gasLimit: BigNumberish;
      target: string;
      value: BigNumberish;
      data: BytesLike;
    }[],
    _nonce: BigNumberish,
    _signature: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  nonce(overrides?: CallOverrides): Promise<BigNumber>;

  "nonce()"(overrides?: CallOverrides): Promise<BigNumber>;

  readNonce(
    _space: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "readNonce(uint256)"(
    _space: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  selfExecute(
    _txs: {
      delegateCall: boolean;
      revertOnError: boolean;
      gasLimit: BigNumberish;
      target: string;
      value: BigNumberish;
      data: BytesLike;
    }[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "selfExecute(tuple[])"(
    _txs: {
      delegateCall: boolean;
      revertOnError: boolean;
      gasLimit: BigNumberish;
      target: string;
      value: BigNumberish;
      data: BytesLike;
    }[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    execute(
      _txs: {
        delegateCall: boolean;
        revertOnError: boolean;
        gasLimit: BigNumberish;
        target: string;
        value: BigNumberish;
        data: BytesLike;
      }[],
      _nonce: BigNumberish,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "execute(tuple[],uint256,bytes)"(
      _txs: {
        delegateCall: boolean;
        revertOnError: boolean;
        gasLimit: BigNumberish;
        target: string;
        value: BigNumberish;
        data: BytesLike;
      }[],
      _nonce: BigNumberish,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    nonce(overrides?: CallOverrides): Promise<BigNumber>;

    "nonce()"(overrides?: CallOverrides): Promise<BigNumber>;

    readNonce(
      _space: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "readNonce(uint256)"(
      _space: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    selfExecute(
      _txs: {
        delegateCall: boolean;
        revertOnError: boolean;
        gasLimit: BigNumberish;
        target: string;
        value: BigNumberish;
        data: BytesLike;
      }[],
      overrides?: CallOverrides
    ): Promise<void>;

    "selfExecute(tuple[])"(
      _txs: {
        delegateCall: boolean;
        revertOnError: boolean;
        gasLimit: BigNumberish;
        target: string;
        value: BigNumberish;
        data: BytesLike;
      }[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    NonceChange(
      _space: null,
      _newNonce: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { _space: BigNumber; _newNonce: BigNumber }
    >;

    TxExecuted(_tx: null): TypedEventFilter<[string], { _tx: string }>;

    TxFailed(
      _tx: null,
      _reason: null
    ): TypedEventFilter<[string, string], { _tx: string; _reason: string }>;
  };

  estimateGas: {
    execute(
      _txs: {
        delegateCall: boolean;
        revertOnError: boolean;
        gasLimit: BigNumberish;
        target: string;
        value: BigNumberish;
        data: BytesLike;
      }[],
      _nonce: BigNumberish,
      _signature: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "execute(tuple[],uint256,bytes)"(
      _txs: {
        delegateCall: boolean;
        revertOnError: boolean;
        gasLimit: BigNumberish;
        target: string;
        value: BigNumberish;
        data: BytesLike;
      }[],
      _nonce: BigNumberish,
      _signature: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    nonce(overrides?: CallOverrides): Promise<BigNumber>;

    "nonce()"(overrides?: CallOverrides): Promise<BigNumber>;

    readNonce(
      _space: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "readNonce(uint256)"(
      _space: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    selfExecute(
      _txs: {
        delegateCall: boolean;
        revertOnError: boolean;
        gasLimit: BigNumberish;
        target: string;
        value: BigNumberish;
        data: BytesLike;
      }[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "selfExecute(tuple[])"(
      _txs: {
        delegateCall: boolean;
        revertOnError: boolean;
        gasLimit: BigNumberish;
        target: string;
        value: BigNumberish;
        data: BytesLike;
      }[],
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    execute(
      _txs: {
        delegateCall: boolean;
        revertOnError: boolean;
        gasLimit: BigNumberish;
        target: string;
        value: BigNumberish;
        data: BytesLike;
      }[],
      _nonce: BigNumberish,
      _signature: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "execute(tuple[],uint256,bytes)"(
      _txs: {
        delegateCall: boolean;
        revertOnError: boolean;
        gasLimit: BigNumberish;
        target: string;
        value: BigNumberish;
        data: BytesLike;
      }[],
      _nonce: BigNumberish,
      _signature: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    nonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "nonce()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    readNonce(
      _space: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "readNonce(uint256)"(
      _space: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    selfExecute(
      _txs: {
        delegateCall: boolean;
        revertOnError: boolean;
        gasLimit: BigNumberish;
        target: string;
        value: BigNumberish;
        data: BytesLike;
      }[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "selfExecute(tuple[])"(
      _txs: {
        delegateCall: boolean;
        revertOnError: boolean;
        gasLimit: BigNumberish;
        target: string;
        value: BigNumberish;
        data: BytesLike;
      }[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
