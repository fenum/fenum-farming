const FarmGenerator = artifacts.require('FarmGenerator');
const FarmFactory = artifacts.require('FarmFactory');



module.exports = async function (deployer, network, accounts) {
  const farmGeneratorAddress = FarmGenerator.address; // FARM_GENERATOR_ADDRESS
  const farmFactory = await FarmFactory.deployed();
  await farmFactory.adminAllowFarmGenerator(farmGeneratorAddress, true);
};
