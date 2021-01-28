
## Деплой
Для создания новой сид фразы при деплое из терминала:
```bash
yarn run mnemonic
```


### Деплой Remix
  - Переключить MetaMask в нужную сеть;
  - Пополнить баланс;
  - Открыть сайт [http://remix.ethereum.org/](http://remix.ethereum.org/);
  - Создать в Remix файл `FarmFactory.sol` и скопировать в него содержимое файла `contracts/FarmFactory.sol`;
  - Создать в Remix файл `FarmUniswapGenerator.sol` и скопировать в него содержимое файла `contracts/FarmUniswapGenerator.sol`;
  - Создать в Remix файл `FarmUniswap.sol` и скопировать в него содержимое файла `contracts/FarmUniswap.sol`;
  - Создать в Remix файл `FarmStakingGenerator.sol` и скопировать в него содержимое файла `contracts/FarmStakingGenerator.sol`;
  - Создать в Remix файл `FarmStaking.sol` и скопировать в него содержимое файла `contracts/FarmStaking.sol`;


  - Компиляция `FarmFactory.sol`:
    - `COMPILER`: `0.6.12`;
    - `Enable optimization`: `true`;
    - `runs`: с `200` на `999999`;
    - Нажать кнопку `Compile FarmFactory.sol`.
  - Деплой:
    - `ENVIRONMENT`: `Injected Web3` (появится адрес и баланс из `MetaMask`);
    - `CONTRACT`: `FarmFactory - browser/FarmFactory.sol`;
    - Нажать кнопку `Deploy`.
  - Верификация контракта на `Etherscan`:
    - Открыть контракт во вкладке `Contract`;
    - Нажать `Verify and Publish`;
    - `Please select Compiler Type`: `Solidity (Single file)`;
    - `Please select Compiler Version`: `v0.6.12`;
    - `Please select Open Source License Type`: `MIT License (MIT)`;
    - `Continue`;
    - `Optimization`: `Yes`;
    - Вставить код контракта `FarmFactory.sol` в поле `Enter the Solidity Contract Code below *`;
    - Открыть `(Runs, EvmVersion & License Type settings)`;
    - `Runs`: `999999`;
    - Нажать `Verify and Publish`.

  - Компиляция `FarmUniswapGenerator.sol`:
    - `COMPILER`: `0.6.12`;
    - `Enable optimization`: `true`;
    - `runs`: с `200` на `999999`;
    - Нажать кнопку `Compile FarmUniswapGenerator.sol`.
  - Деплой:
    - `ENVIRONMENT`: `Injected Web3` (появится адрес и баланс из `MetaMask`);
    - `CONTRACT`: `FarmUniswapGenerator - browser/FarmUniswapGenerator.sol`;
    - Указать параметры:
      - Адрес `FarmFactory` (FARM_FACTORY_ADDRESS).
    - Нажать кнопку `Deploy`.
  - Верификация контракта на `Etherscan`:
    - Открыть контракт во вкладке `Contract`;
    - Нажать `Verify and Publish`;
    - `Please select Compiler Type`: `Solidity (Single file)`;
    - `Please select Compiler Version`: `v0.6.12`;
    - `Please select Open Source License Type`: `MIT License (MIT)`;
    - `Continue`;
    - `Optimization`: `Yes`;
    - Вставить код контракта `FarmUniswapGenerator.sol` в поле `Enter the Solidity Contract Code below *`;
    - Открыть `(Runs, EvmVersion & License Type settings)`;
    - `Runs`: `999999`;
    - Нажать `Verify and Publish`.

  - Компиляция `FarmStakingGenerator.sol`:
    - `COMPILER`: `0.6.12`;
    - `Enable optimization`: `true`;
    - `runs`: с `200` на `999999`;
    - Нажать кнопку `Compile FarmStakingGenerator.sol`.
  - Деплой:
    - `ENVIRONMENT`: `Injected Web3` (появится адрес и баланс из `MetaMask`);
    - `CONTRACT`: `FarmStakingGenerator - browser/FarmStakingGenerator.sol`;
    - Указать параметры:
      - Адрес `FarmFactory` (FARM_FACTORY_ADDRESS).
    - Нажать кнопку `Deploy`.
  - Верификация контракта на `Etherscan`:
    - Открыть контракт во вкладке `Contract`;
    - Нажать `Verify and Publish`;
    - `Please select Compiler Type`: `Solidity (Single file)`;
    - `Please select Compiler Version`: `v0.6.12`;
    - `Please select Open Source License Type`: `MIT License (MIT)`;
    - `Continue`;
    - `Optimization`: `Yes`;
    - Вставить код контракта `FarmStakingGenerator.sol` в поле `Enter the Solidity Contract Code below *`;
    - Открыть `(Runs, EvmVersion & License Type settings)`;
    - `Runs`: `999999`;
    - Нажать `Verify and Publish`.


  - В `FarmFactory` вызываем `adminAllowFarmGenerator`, указываем address (FARM_UNISWAP_GENERATOR_ADDRESS) и `true`;
  - Создаем торговую пару `ETH/FNM` на `Uniswap` https://app.uniswap.org/#/create/ETH:
    - Добавляем токен по адресу TOKEN_ADDRESS и дальше нативно по интерфейсу (UNI_PAIR_ADDRESS) в транзакции пара обозначена как `Uniswap V2 (UNI-V2)`.
    - Ликвидность нужно заблокировать когда деплоится в главную сеть.
  - Создаем ферму под торговую пару `ETH/FNM` на `Uniswap` в `FarmUniswapGenerator` вызываем `createFarmUniswap`:
    - можно пользоваться `determineBlockReward` и `determineEndBlock` в `FarmUniswapGenerator` для рассчета параметров фермы.
    - approve в токене на генератор
    - `createFarmUniswap(IERC20 _rewardToken, uint256 _amount, IERC20 _lpToken, IUniFactory _swapFactory, uint256 _blockReward, uint256 _startBlock, uint256 _bonusEndBlock, uint256 _bonus)`
    - параметры `createFarmUniswap`:
      - _rewardToken = FENUM_TOKEN_ADDRESS;
      - _amount = '10000000' - Количество FNM, учитываем decimals;
      - _lpToken = UNI_PAIR_ADDRESS адрес пары;
      - _swapFactory = 0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f - UNI_FACTORY_ADDRESS;
      - _blockReward = 100000  - 9544920-9545020=100 блоков; 10000000/100= 100000 за блок;
      - _startBlock = 9544920 - !с начала фарминга уже должны быть фармеры иначе токены потеряются! - блок начала фарминга, должен быть выше текущего блока (https://ropsten.etherscan.io/block/countdown/9544920);
      - _bonusEndBlock = 9545020 - блок конца фарминга, должен быть выше текущего блока (https://ropsten.etherscan.io/block/countdown/9545020);
      - _bonus = 1; - умножает награду на бонустный период фарминга.
  - Верифицируем контракт фермы файлом `FarmUniswap.sol` указываем в конструкторе FARM_FACTORY_ADDRESS, FARM_UNISWAP_GENERATOR_ADDRESS, собрать можно здесь https://abi.hashex.org/.


  - В `FarmFactory` вызываем `adminAllowFarmGenerator`, указываем address (FARM_STAKING_GENERATOR_ADDRESS) и `true`;
  - Создаем торговую пару `ETH/FNM` на `Uniswap` https://app.uniswap.org/#/create/ETH:
    - Добавляем токен по адресу TOKEN_ADDRESS и дальше нативно по интерфейсу (UNI_PAIR_ADDRESS) в транзакции пара обозначена как `Uniswap V2 (UNI-V2)`.
    - Ликвидность нужно заблокировать когда деплоится в главную сеть.
  - Создаем ферму под торговую пару `ETH/FNM` на `Uniswap` в `FarmStakingGenerator` вызываем `createFarmStaking`:
    - можно пользоваться `determineBlockReward` и `determineEndBlock` в `FarmStakingGenerator` для рассчета параметров фермы.
    - approve в токене на генератор
    - `createFarmStaking(IERC20 _rewardToken, uint256 _amount, IERC20 _token, uint256 _blockReward, uint256 _startBlock, uint256 _bonusEndBlock, uint256 _bonus)`
    - параметры `createFarmStaking`:
      - _rewardToken = FENUM_TOKEN_ADDRESS;
      - _amount = '10000000' - Количество FNM, учитываем decimals;
      - _token = FENUM_TOKEN_ADDRESS;
      - _blockReward = 100000  - 9544920-9545020=100 блоков; 10000000/100= 100000 за блок;
      - _startBlock = 9544920 - !с начала фарминга уже должны быть фармеры иначе токены потеряются! - блок начала фарминга, должен быть выше текущего блока (https://ropsten.etherscan.io/block/countdown/9544920);
      - _bonusEndBlock = 9545020 - блок конца фарминга, должен быть выше текущего блока (https://ropsten.etherscan.io/block/countdown/9545020);
      - _bonus = 1; - умножает награду на бонустный период фарминга.
  - Верифицируем контракт фермы файлом `FarmStaking.sol` указываем в конструкторе FARM_FACTORY_ADDRESS, FARM_STAKING_GENERATOR_ADDRESS, собрать можно здесь https://abi.hashex.org/.


  - Добавляем ликвидность в пару `ETH/FNM` на `Uniswap` как пользователь, в главной сети добавлять не нужно, пусть пользователи сами добавляют.
  - делаем approve из UNI_PAIR_ADDRESS на адрес фермы в количестве LP токенов пары
  - депозит Отправляем LP токены в Ферму.
  - сколько ревардов начислено ? - pendingReward в `FarmUniswap`
  - Забираем реварды из Фермы.
    - реварды забираются переводом `0` LP токенов в вызове цункции `withdraw`.
  - Забираем LP токены из Фермы:
    - простой забор - `withdraw`.
    - скорый забор с отказом от вознаграждений - `emergencyWithdraw`.


  - по стейкингу все так же

### Деплой Development
В отдельном терминале запустить `ganache-cli`:
```bash
yarn run ganache-cli
```

После этого деплой:
```bash
yarn run deploy development
```


### Деплой Mainnet
```bash
yarn run deploy mainnet
yarn run verify mainnet FarmFactory
yarn run verify mainnet FarmUniswapGenerator
yarn run verify mainnet FarmStakingGenerator
```


### Деплой Ropsten
```bash
yarn run deploy ropsten
yarn run verify ropsten FarmFactory
yarn run verify ropsten FarmUniswapGenerator
yarn run verify ropsten FarmStakingGenerator
```


### Деплой Kovan
```bash
yarn run deploy kovan
yarn run verify kovan FarmFactory
yarn run verify kovan FarmUniswapGenerator
yarn run verify kovan FarmStakingGenerator
```


### Деплой Rinkeby
```bash
yarn run deploy rinkeby
yarn run verify rinkeby FarmFactory
yarn run verify rinkeby FarmUniswapGenerator
yarn run verify rinkeby FarmStakingGenerator
```


### Деплой Goerli
```bash
yarn run deploy goerli
yarn run verify goerli FarmFactory
yarn run verify goerli FarmUniswapGenerator
yarn run verify goerli FarmStakingGenerator
```


### Публикация в NPM
После деплоя нужно опубликовать в [NPM](https://www.npmjs.com/).
```bash
npm publish
# или
yarn publish
```
