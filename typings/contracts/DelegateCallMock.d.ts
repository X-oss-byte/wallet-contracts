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

interface DelegateCallMockInterface extends ethers.utils.Interface {
  functions: {
    "read(uint256)": FunctionFragment;
    "setRevertFlag(bool)": FunctionFragment;
    "write(uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "read", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "setRevertFlag",
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "write",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "read", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setRevertFlag",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "write", data: BytesLike): Result;

  events: {
    "Readed(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Readed"): EventFragment;
}

export class DelegateCallMock extends Contract {
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

  interface: DelegateCallMockInterface;

  functions: {
    read(
      _key: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "read(uint256)"(
      _key: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setRevertFlag(
      _revertFlag: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setRevertFlag(bool)"(
      _revertFlag: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    write(
      _key: BigNumberish,
      _val: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "write(uint256,uint256)"(
      _key: BigNumberish,
      _val: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  read(_key: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>;

  "read(uint256)"(
    _key: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setRevertFlag(
    _revertFlag: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setRevertFlag(bool)"(
    _revertFlag: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  write(
    _key: BigNumberish,
    _val: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "write(uint256,uint256)"(
    _key: BigNumberish,
    _val: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    read(_key: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "read(uint256)"(
      _key: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setRevertFlag(
      _revertFlag: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "setRevertFlag(bool)"(
      _revertFlag: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    write(
      _key: BigNumberish,
      _val: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "write(uint256,uint256)"(
      _key: BigNumberish,
      _val: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    Readed(_val: null): TypedEventFilter<[BigNumber], { _val: BigNumber }>;
  };

  estimateGas: {
    read(_key: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "read(uint256)"(
      _key: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setRevertFlag(
      _revertFlag: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setRevertFlag(bool)"(
      _revertFlag: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    write(
      _key: BigNumberish,
      _val: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "write(uint256,uint256)"(
      _key: BigNumberish,
      _val: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    read(
      _key: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "read(uint256)"(
      _key: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setRevertFlag(
      _revertFlag: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setRevertFlag(bool)"(
      _revertFlag: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    write(
      _key: BigNumberish,
      _val: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "write(uint256,uint256)"(
      _key: BigNumberish,
      _val: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
