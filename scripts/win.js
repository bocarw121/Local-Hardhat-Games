// add the game address here and update the contract name if necessary
const gameAddr = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
const contractName = "Game5";

async function main() {
  // attach to the game
  const game = await hre.ethers.getContractAt(contractName, gameAddr);

  // do whatever you need to do to win the game here:

  // Game 2 setX and setY with numbers above 0
  // both values added up should equal to 50
  // await game.setX(24)
  // await game.setY(26)

  // Game 3 call win with 45
  // const tx = await game.win(45);

  // Game 4 as parameter is an uint8 in an unchecked which means it will overflow after 255
  // we need to pass in 56
  // const tx = await game.win(56);

  // Game 5 we need to call giveMeAllowance with more than we give mint but make sure
  // the difference will be greater or equal to 10000
  await game.giveMeAllowance(24000);
  await game.mint(12000);
  const tx = await game.win();

  // did you win? Check the transaction receipt!
  // if you did, it will be in both the logs and events array
  const receipt = await tx.wait();

  console.log(receipt);
  // console.log(receipt.events);
  // console.log(receipt.logs);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
