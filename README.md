# FENUM Farming
 - [ ] Mainnet [?](https://etherscan.io/token/?);
 - [ ] Ropsten [?](https://ropsten.etherscan.io/token/?);
 - [ ] Kovan [?](https://kovan.etherscan.io/token/?);
 - [ ] Rinkeby [?](https://rinkeby.etherscan.io/token/?);
 - [ ] Goerli [[?](https://goerli.etherscan.io/token/?).


## Usage FENUM Farming
### Install
```bash
yarn add @fenum/farming
# or
npm install @fenum/farming
```

### Usage
```js
const FarmFactory = require('@fenum/farming/build/FarmFactory.json');
const FarmUniswapGenerator = require('@fenum/farming/build/FarmUniswapGenerator.json');
const FarmUniswap = require('@fenum/farming/build/FarmUniswap.json');
const FarmStakingGenerator = require('@fenum/farming/build/FarmStakingGenerator.json');
const FarmStaking = require('@fenum/farming/build/FarmStaking.json');
// or
import FarmFactory from '@fenum/farming/build/FarmFactory.json';
import FarmUniswapGenerator from '@fenum/farming/build/FarmUniswapGenerator.json';
import FarmUniswap from '@fenum/farming/build/FarmUniswap.json';
import FarmStakingGenerator from '@fenum/farming/build/FarmStakingGenerator.json';
import FarmStaking from '@fenum/farming/build/FarmStaking.json';
```


## Installing dependencies
```bash
yarn install
```


## Copying contracts
```bash
yarn run compile
```


## Running tests
Run `ganache-cli` in a separate terminal:
```bash
yarn run ganache-cli
```

Run tests:
```bash
yarn run test
```


## Deployment
See in [/docs/DEPLOYMENT.md](/docs/DEPLOYMENT.md).


## LICENSE
See in [LICENSE](/LICENSE).
