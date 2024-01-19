import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-waffle';
import '@swisstronik/hardhat-typechain';
import 'hardhat-gas-reporter';
import 'solidity-coverage';

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: '0.8.19',
    settings: {
      optimizer: {
        enabled: true,
        runs: 999_999,
      },
    },
  },
  gasReporter: {
    currency: 'USD',
  },
  typechain: {
    outDir: './types',
    target: 'ethers-v5-swisstronik-typechain',
    alwaysGenerateOverloads: true,
  },
  mocha: {
    bail: true,
  },
};
