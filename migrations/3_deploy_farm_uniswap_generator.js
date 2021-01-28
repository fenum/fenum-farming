const FarmUniswapGenerator = artifacts.require('FarmUniswapGenerator');
const FarmFactory = artifacts.require('FarmFactory');



module.exports = async function (deployer, network, accounts) {
  const factory = FarmFactory.address; // FARM_FACTORY_ADDRESS
  const args = [factory];
  await deployer.deploy(FarmUniswapGenerator, ...args);
};
