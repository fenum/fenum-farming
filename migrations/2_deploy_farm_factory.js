const FarmFactory = artifacts.require('FarmFactory');



module.exports = async function (deployer, network, accounts) {
  const args = [];
  await deployer.deploy(FarmFactory, ...args);
};
