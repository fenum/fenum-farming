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
const FarmGenerator = require('@fenum/farming/build/FarmGenerator.json');
const FarmFactory = require('@fenum/farming/build/FarmFactory.json');
const Farm = require('@fenum/farming/build/Farm.json');
// or
import FarmGenerator from '@fenum/farming/build/FarmGenerator.json';
import FarmFactory from '@fenum/farming/build/FarmFactory.json';
import Farm from '@fenum/farming/build/Farm.json';
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
