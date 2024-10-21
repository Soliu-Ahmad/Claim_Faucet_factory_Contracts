import hre from "hardhat";

async function main(){
    const DEPLOYED_FACTORY_CONTRACT =
    "0x9E68f8140a99bcE516ca516eA590cE96E45095Db"

    const myAccount = "0x0D33Ee49A31FfB9B579dF213370f634e4a8BbEEd";

    const signer = await hre.ethers.getSigner(myAccount);

    const factoryContractInstance = await hre.ethers.getContractAt(
        "ClaimFaucetFactory",
        DEPLOYED_FACTORY_CONTRACT
    )

     // starting scripting

  console.log("######## Deploying claim faucet #######");

  const deplpoyClaimFaucetTx1 = await factoryContractInstance
    .connect(signer)
    .deployClaimFaucet("Lisk Token", "LSK");

  deplpoyClaimFaucetTx1.wait();

  console.log({ "Claim faucet 1 deployed to": deplpoyClaimFaucetTx1 });

  const deployClaimFaucetTx2 = await factoryContractInstance
    .connect(signer)
    .deployClaimFaucet("Starknet Token", "STRK");

  deployClaimFaucetTx2.wait();

  console.log({ "claim faucet 2 deployed to": deployClaimFaucetTx2 });

  console.log(
    "####### Getting the length & data of deployed claim Faucet #######"
  );

  const getLengthOfDeployedContract =
    await factoryContractInstance.getLengthOfDeployedContract();

  console.log({
    "Length of claim Faucets": getLengthOfDeployedContract.toString(),
  });

  const getUserContracts = await factoryContractInstance
    .connect(signer)
    .getUserDeployedContract();

  console.table(getUserContracts);

  console.log(
    "####### Getting claim  User Deployed Claim Faucet by Index ########"
  );

  const { deployer_: deployA, deployedContract_: deployContractA } =
    await factoryContractInstance
      .connect(signer)
      .getUserDeployedContractByIndex(0);

  const { deployer_: deployB, deployedContract_: deployContractB } =
    await factoryContractInstance
      .connect(signer)
      .getUserDeployedContractByIndex(1);

  console.log([
    { Deployer: deployA, "Deployed contract Address": deployContractA },
    { Deployer: deployB, "Deployed contract Address": deployContractB },
  ]);

  console.log("######### Getting deployed contract Info #########");

  const contractInfo = await factoryContractInstance.getInfoContract(
    deployContractA
  );

  console.table(contractInfo);

  const contractInfo2 = await factoryContractInstance.getInfoContract(
    deployContractB
  );

  console.table(contractInfo2);

  console.log(
    "####### Claiming Token and getting user balance on the Token ##########"
  );

  const claimTokenFaucetTx1 = await factoryContractInstance
    .connect(signer)
    .ClaimFaucetFromContract(deployContractA);

  claimTokenFaucetTx1.wait();

  const claimTokenFaucetTx2 = await factoryContractInstance
    .connect(signer)
    .ClaimFaucetFromContract(deployContractB);

  claimTokenFaucetTx2.wait();

  const checkUserBalForToken1 = await factoryContractInstance.connect(
    signer
  ).getBalanceFromDeployedContract(deployContractA);
  
  const checkUserBalForToken2 = await factoryContractInstance
    .connect(signer)
    .getBalanceFromDeployedContract(deployContractA)
 

  console.log({
    "Faucet 1 Balance" : hre.ethers.formatUnits(checkUserBalForToken1, 18),
    "Faucet 2 Balance" : hre.ethers.formatUnits(checkUserBalForToken2, 18),
  })
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});