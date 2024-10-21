/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type { ClaimFaucet, ClaimFaucetInterface } from "../ClaimFaucet";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_time",
        type: "uint256",
      },
    ],
    name: "TokenClaimSuccessful",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "reciever",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "CLAIMABLE_AMOUNT",
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
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_delegate",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "_delegate",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amountOfToken",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        name: "_address",
        type: "address",
      },
    ],
    name: "claimToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimal",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getSymbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTokenName",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalSupply",
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
        name: "_address",
        type: "address",
      },
    ],
    name: "getUserData",
    outputs: [
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
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_reciever",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amountOfToken",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_buyer",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amountOfToken",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051611ed1380380611ed18339818101604052810190610032919061036d565b818181600090816100439190610606565b5080600190816100539190610606565b5033600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506100ca620f4240600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166100d360201b60201c565b505050506107a7565b6000670de0b6b3a7640000836100e99190610707565b905080600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546101369190610749565b600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550806002546101879190610749565b6002819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516101eb919061078c565b60405180910390a3505050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61025f82610216565b810181811067ffffffffffffffff8211171561027e5761027d610227565b5b80604052505050565b60006102916101f8565b905061029d8282610256565b919050565b600067ffffffffffffffff8211156102bd576102bc610227565b5b6102c682610216565b9050602081019050919050565b60005b838110156102f15780820151818401526020810190506102d6565b60008484015250505050565b600061031061030b846102a2565b610287565b90508281526020810184848401111561032c5761032b610211565b5b6103378482856102d3565b509392505050565b600082601f8301126103545761035361020c565b5b81516103648482602086016102fd565b91505092915050565b6000806040838503121561038457610383610202565b5b600083015167ffffffffffffffff8111156103a2576103a1610207565b5b6103ae8582860161033f565b925050602083015167ffffffffffffffff8111156103cf576103ce610207565b5b6103db8582860161033f565b9150509250929050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061043757607f821691505b60208210810361044a576104496103f0565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026104b27fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610475565b6104bc8683610475565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b60006105036104fe6104f9846104d4565b6104de565b6104d4565b9050919050565b6000819050919050565b61051d836104e8565b6105316105298261050a565b848454610482565b825550505050565b600090565b610546610539565b610551818484610514565b505050565b5b818110156105755761056a60008261053e565b600181019050610557565b5050565b601f8211156105ba5761058b81610450565b61059484610465565b810160208510156105a3578190505b6105b76105af85610465565b830182610556565b50505b505050565b600082821c905092915050565b60006105dd600019846008026105bf565b1980831691505092915050565b60006105f683836105cc565b9150826002028217905092915050565b61060f826103e5565b67ffffffffffffffff81111561062857610627610227565b5b610632825461041f565b61063d828285610579565b600060209050601f831160018114610670576000841561065e578287015190505b61066885826105ea565b8655506106d0565b601f19841661067e86610450565b60005b828110156106a657848901518255600182019150602085019450602081019050610681565b868310156106c357848901516106bf601f8916826105cc565b8355505b6001600288020188555050505b505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610712826104d4565b915061071d836104d4565b925082820261072b816104d4565b91508282048414831517610742576107416106d8565b5b5092915050565b6000610754826104d4565b915061075f836104d4565b9250828201905080821115610777576107766106d8565b5b92915050565b610786816104d4565b82525050565b60006020820190506107a1600083018461077d565b92915050565b61171b806107b66000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c8063862b092b11610071578063862b092b14610179578063a9059cbb14610197578063c4e41b22146101b3578063dd62ed3e146101d1578063e741bec314610201578063ffc9896b1461021f576100b4565b8063095ea7b3146100b957806315070401146100d557806323b872dd146100f357806332f289cf1461010f57806370a082311461012b57806376809ce31461015b575b600080fd5b6100d360048036038101906100ce919061112e565b610250565b005b6100dd6103bb565b6040516100ea91906111fe565b60405180910390f35b61010d60048036038101906101089190611220565b61044d565b005b61012960048036038101906101249190611273565b610819565b005b61014560048036038101906101409190611273565b610b25565b60405161015291906112af565b60405180910390f35b610163610b6e565b60405161017091906112e6565b60405180910390f35b610181610b77565b60405161018e91906111fe565b60405180910390f35b6101b160048036038101906101ac919061112e565b610c09565b005b6101bb610e47565b6040516101c891906112af565b60405180910390f35b6101eb60048036038101906101e69190611301565b610e51565b6040516101f891906112af565b60405180910390f35b610209610ed8565b60405161021691906112af565b60405180910390f35b61023960048036038101906102349190611273565b610edd565b604051610247929190611341565b60405180910390f35b80600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054116102d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102c8906113b6565b60405180910390fd5b80600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516103af91906112af565b60405180910390a35050565b6060600180546103ca90611405565b80601f01602080910402602001604051908101604052809291908181526020018280546103f690611405565b80156104435780601f1061041857610100808354040283529160200191610443565b820191906000526020600020905b81548152906001019060200180831161042657829003601f168201915b5050505050905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036104bc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104b390611482565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361052b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161052290611482565b60405180910390fd5b600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205481111561057757600080fd5b600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205481111561060057600080fd5b80600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461064b91906114d1565b600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555080600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461071a91906114d1565b9250508190555080600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461076c9190611505565b600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161080c91906112af565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610888576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161087f90611585565b60405180910390fd5b600760008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16156109f8576000600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090506201518081600001546109309190611505565b4211610971576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610968906115f1565b60405180910390fd5b428160000181905550600a81600101600082825461098f9190611505565b925050819055506109a1600a83610f56565b8173ffffffffffffffffffffffffffffffffffffffff167f9cb9d943e6592935c9a9b6a2e08e875a8b88cbf67f2a2bd6d36294c3f94297cb600a426040516109ea929190611341565b60405180910390a250610b22565b6001600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550610a5b600a82610f56565b610a6361107b565b42816000018181525050600a81602001818152505080600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000155602082015181600101559050508173ffffffffffffffffffffffffffffffffffffffff167f9cb9d943e6592935c9a9b6a2e08e875a8b88cbf67f2a2bd6d36294c3f94297cb600a42604051610b18929190611341565b60405180910390a2505b50565b6000600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60006012905090565b606060008054610b8690611405565b80601f0160208091040260200160405190810160405280929190818152602001828054610bb290611405565b8015610bff5780601f10610bd457610100808354040283529160200191610bff565b820191906000526020600020905b815481529060010190602001808311610be257829003601f168201915b5050505050905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610c78576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c6f90611482565b60405180910390fd5b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054811115610cfa576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cf190611683565b60405180910390fd5b80600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610d4991906114d1565b9250508190555080600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610d9b9190611505565b600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610e3b91906112af565b60405180910390a35050565b6000600254905090565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600a81565b6000806000600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020604051806040016040529081600082015481526020016001820154815250509050806000015181602001519250925050915091565b6000670de0b6b3a764000083610f6c91906116a3565b905080600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610fb99190611505565b600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508060025461100a9190611505565b6002819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161106e91906112af565b60405180910390a3505050565b604051806040016040528060008152602001600081525090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006110c58261109a565b9050919050565b6110d5816110ba565b81146110e057600080fd5b50565b6000813590506110f2816110cc565b92915050565b6000819050919050565b61110b816110f8565b811461111657600080fd5b50565b60008135905061112881611102565b92915050565b6000806040838503121561114557611144611095565b5b6000611153858286016110e3565b925050602061116485828601611119565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b60005b838110156111a857808201518184015260208101905061118d565b60008484015250505050565b6000601f19601f8301169050919050565b60006111d08261116e565b6111da8185611179565b93506111ea81856020860161118a565b6111f3816111b4565b840191505092915050565b6000602082019050818103600083015261121881846111c5565b905092915050565b60008060006060848603121561123957611238611095565b5b6000611247868287016110e3565b9350506020611258868287016110e3565b925050604061126986828701611119565b9150509250925092565b60006020828403121561128957611288611095565b5b6000611297848285016110e3565b91505092915050565b6112a9816110f8565b82525050565b60006020820190506112c460008301846112a0565b92915050565b600060ff82169050919050565b6112e0816112ca565b82525050565b60006020820190506112fb60008301846112d7565b92915050565b6000806040838503121561131857611317611095565b5b6000611326858286016110e3565b9250506020611337858286016110e3565b9150509250929050565b600060408201905061135660008301856112a0565b61136360208301846112a0565b9392505050565b7f42616c616e6365206973206e6f7420656e6f7567680000000000000000000000600082015250565b60006113a0601583611179565b91506113ab8261136a565b602082019050919050565b600060208201905081810360008301526113cf81611393565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061141d57607f821691505b6020821081036114305761142f6113d6565b5b50919050565b7f41646472657373206973206e6f7420616c6c6f77656400000000000000000000600082015250565b600061146c601683611179565b915061147782611436565b602082019050919050565b6000602082019050818103600083015261149b8161145f565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006114dc826110f8565b91506114e7836110f8565b92508282039050818111156114ff576114fe6114a2565b5b92915050565b6000611510826110f8565b915061151b836110f8565b9250828201905080821115611533576115326114a2565b5b92915050565b7f5a65726f2061646472657373206e6f7420616c6c6f7765640000000000000000600082015250565b600061156f601883611179565b915061157a82611539565b602082019050919050565b6000602082019050818103600083015261159e81611562565b9050919050565b7f596f7520636c61696d206f6e636520616674657220323420686f757273000000600082015250565b60006115db601d83611179565b91506115e6826115a5565b602082019050919050565b6000602082019050818103600083015261160a816115ce565b9050919050565b7f596f752063616e27742074616b65206d6f7265207468616e207768617420697360008201527f206176616c6961626c6500000000000000000000000000000000000000000000602082015250565b600061166d602a83611179565b915061167882611611565b604082019050919050565b6000602082019050818103600083015261169c81611660565b9050919050565b60006116ae826110f8565b91506116b9836110f8565b92508282026116c7816110f8565b915082820484148315176116de576116dd6114a2565b5b509291505056fea2646970667358221220f0f6c43f29fc648152ba6af76f78ef712167c9ee29da6a862bd5fefb5435eb0964736f6c634300081b0033";

type ClaimFaucetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ClaimFaucetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ClaimFaucet__factory extends ContractFactory {
  constructor(...args: ClaimFaucetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _name: string,
    _symbol: string,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_name, _symbol, overrides || {});
  }
  override deploy(
    _name: string,
    _symbol: string,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_name, _symbol, overrides || {}) as Promise<
      ClaimFaucet & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ClaimFaucet__factory {
    return super.connect(runner) as ClaimFaucet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ClaimFaucetInterface {
    return new Interface(_abi) as ClaimFaucetInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): ClaimFaucet {
    return new Contract(address, _abi, runner) as unknown as ClaimFaucet;
  }
}