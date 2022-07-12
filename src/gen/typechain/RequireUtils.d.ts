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
  BaseContract,
  ContractTransaction,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface RequireUtilsInterface extends ethers.utils.Interface {
  functions: {
    "requireMinNonce(address,uint256)": FunctionFragment;
    "requireNonExpired(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "requireMinNonce",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "requireNonExpired",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "requireMinNonce",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requireNonExpired",
    data: BytesLike
  ): Result;

  events: {};
}

export class RequireUtils extends BaseContract {
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

  interface: RequireUtilsInterface;

  functions: {
    requireMinNonce(
      _wallet: string,
      _nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[void]>;

    requireNonExpired(
      _expiration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[void]>;
  };

  requireMinNonce(
    _wallet: string,
    _nonce: BigNumberish,
    overrides?: CallOverrides
  ): Promise<void>;

  requireNonExpired(
    _expiration: BigNumberish,
    overrides?: CallOverrides
  ): Promise<void>;

  callStatic: {
    requireMinNonce(
      _wallet: string,
      _nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    requireNonExpired(
      _expiration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    requireMinNonce(
      _wallet: string,
      _nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    requireNonExpired(
      _expiration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    requireMinNonce(
      _wallet: string,
      _nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    requireNonExpired(
      _expiration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
