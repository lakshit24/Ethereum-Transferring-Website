

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/0luT6b2Cz800G10gCeD9ipWhluWgOdUt',
      accounts: ['6beaf958c73cbd8b5bdc8b9d3b780c1806d3843540869ec33153f41cf8fd54ae'],
    },
  },
};