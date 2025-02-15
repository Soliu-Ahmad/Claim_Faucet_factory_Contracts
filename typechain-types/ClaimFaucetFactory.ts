/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "./common";

export declare namespace ClaimFaucetFactory {
  export type DeployedContractInfoStruct = {
    deployer: AddressLike;
    deployedContract: AddressLike;
  };

  export type DeployedContractInfoStructOutput = [
    deployer: string,
    deployedContract: string
  ] & { deployer: string; deployedContract: string };
}

export interface ClaimFaucetFactoryInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "ClaimFaucetFromContract"
      | "deployClaimFaucet"
      | "getAllContractDeployed"
      | "getBalanceFromDeployedContract"
      | "getInfoContract"
      | "getLengthOfDeployedContract"
      | "getUserDeployedContract"
      | "getUserDeployedContractByIndex"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "ClaimFaucetFromContract",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "deployClaimFaucet",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllContractDeployed",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getBalanceFromDeployedContract",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getInfoContract",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getLengthOfDeployedContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getUserDeployedContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getUserDeployedContractByIndex",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "ClaimFaucetFromContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deployClaimFaucet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllContractDeployed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBalanceFromDeployedContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getInfoContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLengthOfDeployedContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserDeployedContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserDeployedContractByIndex",
    data: BytesLike
  ): Result;
}

export interface ClaimFaucetFactory extends BaseContract {
  connect(runner?: ContractRunner | null): ClaimFaucetFactory;
  waitForDeployment(): Promise<this>;

  interface: ClaimFaucetFactoryInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  ClaimFaucetFromContract: TypedContractMethod<
    [_claimfaucet: AddressLike],
    [void],
    "nonpayable"
  >;

  deployClaimFaucet: TypedContractMethod<
    [_name: string, _symbol: string],
    [string],
    "nonpayable"
  >;

  getAllContractDeployed: TypedContractMethod<
    [],
    [ClaimFaucetFactory.DeployedContractInfoStructOutput[]],
    "view"
  >;

  getBalanceFromDeployedContract: TypedContractMethod<
    [_claimfaucet: AddressLike],
    [bigint],
    "view"
  >;

  getInfoContract: TypedContractMethod<
    [_claimfaucet: AddressLike],
    [[string, string]],
    "view"
  >;

  getLengthOfDeployedContract: TypedContractMethod<[], [bigint], "view">;

  getUserDeployedContract: TypedContractMethod<
    [],
    [ClaimFaucetFactory.DeployedContractInfoStructOutput[]],
    "view"
  >;

  getUserDeployedContractByIndex: TypedContractMethod<
    [_index: BigNumberish],
    [[string, string] & { deployer_: string; deployedContract_: string }],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "ClaimFaucetFromContract"
  ): TypedContractMethod<[_claimfaucet: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "deployClaimFaucet"
  ): TypedContractMethod<
    [_name: string, _symbol: string],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getAllContractDeployed"
  ): TypedContractMethod<
    [],
    [ClaimFaucetFactory.DeployedContractInfoStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getBalanceFromDeployedContract"
  ): TypedContractMethod<[_claimfaucet: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getInfoContract"
  ): TypedContractMethod<
    [_claimfaucet: AddressLike],
    [[string, string]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getLengthOfDeployedContract"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getUserDeployedContract"
  ): TypedContractMethod<
    [],
    [ClaimFaucetFactory.DeployedContractInfoStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getUserDeployedContractByIndex"
  ): TypedContractMethod<
    [_index: BigNumberish],
    [[string, string] & { deployer_: string; deployedContract_: string }],
    "view"
  >;

  filters: {};
}
