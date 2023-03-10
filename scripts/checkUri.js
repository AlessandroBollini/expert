require("dotenv").config();
const contract=process.env.CONTRACT;

async function main(){
    const nft = await hre.ethers.getContractAt("Alfa2", contract);
    const data=await nft.tokenURI(2);
    console.log(data);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });