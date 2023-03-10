require("dotenv").config();
const contract=process.env.CONTRACT;
const controller=require('../database/controller');

async function main(){
    const tokenId=process.env.TOKEN_ID;
    const userWallet=process.env.USERWALLET;
    const oldLevel=await controller.findUser(userWallet);
    console.log(oldLevel);
    const newLevel=oldLevel.level.concat('1');
    console.log(newLevel);
    const level=parseInt(newLevel,2);
    console.log(level);
    const signer0 = ethers.provider.getSigner(0);
    await signer0.getTransactionCount();
    const nft = await hre.ethers.getContractAt("Alfa2", contract);
    await nft.performUpkeep(tokenId,level);
    await controller.updateUser(tokenId,newLevel);
    console.log("nft Updated");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });