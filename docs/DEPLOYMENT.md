
## Деплой
Для создания новой сид фразы при деплое из терминала:
```bash
yarn run mnemonic
```


### Деплой Remix
  - Переключить MetaMask в нужную сеть;
  - Пополнить баланс;
  - Открыть сайт [http://remix.ethereum.org/](http://remix.ethereum.org/);
  - Создать в Remix файл `FarmGenerator.sol` и скопировать в него содержимое файла `contracts/FarmGenerator.sol`;
  - Создать в Remix файл `Farm.sol` и скопировать в него содержимое файла `contracts/Farm.sol`;
  - Создать в Remix файл `FarmFactory.sol` и скопировать в него содержимое файла `contracts/FarmFactory.sol`;

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

  - Компиляция `FarmGenerator.sol`:
    - `COMPILER`: `0.6.12`;
    - `Enable optimization`: `true`;
    - `runs`: с `200` на `999999`;
    - Нажать кнопку `Compile FarmGenerator.sol`.
  - Деплой:
    - `ENVIRONMENT`: `Injected Web3` (появится адрес и баланс из `MetaMask`);
    - `CONTRACT`: `FarmGenerator - browser/FarmGenerator.sol`;
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
    - Вставить код контракта `FarmGenerator.sol` в поле `Enter the Solidity Contract Code below *`;
    - Открыть `(Runs, EvmVersion & License Type settings)`;
    - `Runs`: `999999`;
    - Нажать `Verify and Publish`.

  - В `FarmFactory` вызываем `adminAllowFarmGenerator`, указываем address (FARM_GENERATOR_ADDRESS) и `true`;
  - Создаем торговую пару `ETH/FNM` на `Uniswap` https://app.uniswap.org/#/create/ETH:
    - Добавляем токен по адресу TOKEN_ADDRESS и дальше нативно по интерфейсу (UNI_PAIR_ADDRESS) в транзакции пара обозначена как `Uniswap V2 (UNI-V2)`.
    - Ликвидность нужно заблокировать когда деплоится в главную сеть.
  - Создаем ферму под торговую пару `ETH/FNM` на `Uniswap` в `FarmGenerator` вызываем `createFarm`:
    - можно пользоваться determineBlockReward и determineEndBlock в FarmGenerator для рассчета параметров фермы.
    - createFarm(IERC20 _rewardToken, uint256 _amount, IERC20 _lpToken, IUniFactory _swapFactory, uint256 _blockReward, uint256 _startBlock, uint256 _bonusEndBlock, uint256 _bonus)
    - параметры createFarm:
      - _rewardToken = FENUM_TOKEN_ADDRESS;
      - _amount = '10000000' - Количество FNM, учитываем decimals;
      - _lpToken = UNI_PAIR_ADDRESS адрес пары;
      - _swapFactory = 0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f - UNI_FACTORY_ADDRESS;
      - _blockReward = 100000  - 9544920-9545020=100 блоков; 10000000/100= 100000 за блок;
      - _startBlock = 9544920 - !с начала фарминга уже должны быть фармеры иначе токены потеряются! - блок начала фарминга, должен быть выше текущего блока (https://ropsten.etherscan.io/block/countdown/9544920);
      - _bonusEndBlock = 9545020 - блок конца фарминга, должен быть выше текущего блока (https://ropsten.etherscan.io/block/countdown/9545020);
      - _bonus = 1; - умножает награду на бонустный период фарминга.
  - Верифицируем контракт фермы файлом `Farm.sol` указываем в конструкторе FARM_FACTORY_ADDRESS, FARM_GENERATOR_ADDRESS, собрать можно здесь https://abi.hashex.org/.

  - Добавляем ликвидность в пару `ETH/FNM` на `Uniswap` как пользователь, в главной сети добавлять не нужно, пусть пользователи сами добавляют.
  - делаем approve из UNI_PAIR_ADDRESS на адрес фермы в количестве LP токенов пары
  - депозит Отправляем LP токены в Ферму.
  - сколько ревардов начислено ? - pendingReward в Farm
  - Забираем реварды из Фермы.
    - реварды забираются переводом 0 LP токенов в вызове цункции withdraw.
  - Забираем LP токены из Фермы:
    - простой забор - withdraw.
    - скорый забор с отказом от вознаграждений - emergencyWithdraw.


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
yarn run verify mainnet FarmGenerator
```


### Деплой Ropsten
```bash
yarn run deploy ropsten
yarn run verify ropsten FarmFactory
yarn run verify ropsten FarmGenerator
```


### Деплой Kovan
```bash
yarn run deploy kovan
yarn run verify kovan FarmFactory
yarn run verify kovan FarmGenerator
```


### Деплой Rinkeby
```bash
yarn run deploy rinkeby
yarn run verify rinkeby FarmFactory
yarn run verify rinkeby FarmGenerator
```


### Деплой Goerli
```bash
yarn run deploy goerli
yarn run verify goerli FarmFactory
yarn run verify goerli FarmGenerator
```


### Публикация в NPM
После деплоя нужно опубликовать в [NPM](https://www.npmjs.com/).
```bash
npm publish
# или
yarn publish
```
