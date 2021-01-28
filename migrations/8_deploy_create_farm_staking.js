const FarmStakingGenerator = artifacts.require('FarmStakingGenerator');



module.exports = async function (deployer, network, accounts) {
  // 1. Создаем пару
  // 2. Делаем approve на адрес FARM_STAKING_GENERATOR_ADDRESS в количестве которое идет на вознаграждение

  // 3. Создаем ферму
  const rewardToken = ''; // FENUM_TOKEN_ADDRESS
  const amount = 10000000; // с decimals
  const token = ''; // FENUM_TOKEN_ADDRESS
  // amount/(startBlock-bonusEndBlock) - если нет бонусного периода, иначе через контракт считать.
  const blockReward = 100000;
  const startBlock = 9544920;
  const bonusEndBlock = 9545020;
  const bonus = 1;

  const args = [
    rewardToken,
    amount,
    token,
    blockReward,
    startBlock,
    bonusEndBlock,
    bonus,
  ];
  const farmStakingGenerator = await FarmStakingGenerator.deployed();
  await farmStakingGenerator.createFarm(...args);
};
