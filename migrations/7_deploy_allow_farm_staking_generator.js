const FarmStakingGenerator = artifacts.require('FarmStakingGenerator');
const FarmFactory = artifacts.require('FarmFactory');



module.exports = async function (deployer, network, accounts) {
  const farmStakingGeneratorAddress = FarmStakingGenerator.address; // FARM_STAKING_GENERATOR_ADDRESS
  const farmFactory = await FarmFactory.deployed();
  await farmFactory.adminAllowFarmGenerator(farmStakingGeneratorAddress, true);
};
