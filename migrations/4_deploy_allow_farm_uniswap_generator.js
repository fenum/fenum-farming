const FarmUniswapGenerator = artifacts.require('FarmUniswapGenerator');
const FarmFactory = artifacts.require('FarmFactory');



module.exports = async function (deployer, network, accounts) {
  const farmUniswapGeneratorAddress = FarmUniswapGenerator.address; // FARM_UNISWAP_GENERATOR_ADDRESS
  const farmFactory = await FarmFactory.deployed();
  await farmFactory.adminAllowFarmGenerator(farmUniswapGeneratorAddress, true);
};
