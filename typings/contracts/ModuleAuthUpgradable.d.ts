/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface ModuleAuthUpgradableInterface extends Interface {
  functions: {
    isValidSignature: TypedFunctionDescription<{
      encode([_hash, _signatures]: [Arrayish, Arrayish]): string;
    }>;

    updateImageHash: TypedFunctionDescription<{
      encode([_imageHash]: [Arrayish]): string;
    }>;

    imageHash: TypedFunctionDescription<{ encode([]: []): string }>;

    supportsInterface: TypedFunctionDescription<{
      encode([_interfaceID]: [Arrayish]): string;
    }>;
  };

  events: {};
}

export class ModuleAuthUpgradable extends Contract {
  connect(signerOrProvider: Signer | Provider | string): ModuleAuthUpgradable;
  attach(addressOrName: string): ModuleAuthUpgradable;
  deployed(): Promise<ModuleAuthUpgradable>;

  on(event: EventFilter | string, listener: Listener): ModuleAuthUpgradable;
  once(event: EventFilter | string, listener: Listener): ModuleAuthUpgradable;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): ModuleAuthUpgradable;
  removeAllListeners(eventName: EventFilter | string): ModuleAuthUpgradable;
  removeListener(eventName: any, listener: Listener): ModuleAuthUpgradable;

  interface: ModuleAuthUpgradableInterface;

  functions: {
    isValidSignature(_hash: Arrayish, _signatures: Arrayish): Promise<string>;

    updateImageHash(
      _imageHash: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    imageHash(): Promise<string>;

    supportsInterface(_interfaceID: Arrayish): Promise<boolean>;
  };

  isValidSignature(_hash: Arrayish, _signatures: Arrayish): Promise<string>;

  updateImageHash(
    _imageHash: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  imageHash(): Promise<string>;

  supportsInterface(_interfaceID: Arrayish): Promise<boolean>;

  filters: {};

  estimate: {
    isValidSignature(
      _hash: Arrayish,
      _signatures: Arrayish
    ): Promise<BigNumber>;

    updateImageHash(_imageHash: Arrayish): Promise<BigNumber>;

    imageHash(): Promise<BigNumber>;

    supportsInterface(_interfaceID: Arrayish): Promise<BigNumber>;
  };
}
