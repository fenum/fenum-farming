const FarmGenerator = artifacts.require('FarmGenerator');
const FarmFactory = artifacts.require('FarmFactory');



module.exports = async function (deployer, network, accounts) {
  // 1. Создаем пару
  // 2. Делаем approve на адрес FARM_GENERATOR_ADDRESS в количестве которое идет на вознаграждение

  // 3. Создаем ферму
  const rewardToken = ''; // FENUM_TOKEN_ADDRESS
  const amount = 10000000; // с decimals
  const lpToken = ''; // UNI_PAIR_ADDRESS
  const swapFactory = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f'; // UNI_FACTORY_ADDRESS
  // amount/(startBlock-bonusEndBlock) - если нет бонусного периода, иначе через контракт считать.
  const blockReward = 100000;
  const startBlock = 9544920;
  const bonusEndBlock = 9545020;
  const bonus = 1;

  const args = [
    rewardToken,
    amount,
    lpToken,
    swapFactory,
    blockReward,
    startBlock,
    bonusEndBlock,
    bonus,
  ];
  const farmGenerator = await FarmGenerator.deployed();
  await farmGenerator.createFarm(...args);
};
