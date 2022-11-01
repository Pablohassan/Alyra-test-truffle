const path = require("path");
const HDWalletProvider = require("@truffle/hdwallet-provider");
require("dotenv").config();

module.exports = {
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
    },
    goerli: {
      // must be a thunk, otherwise truffle commands may hang in CI
      provider: () =>
        new HDWalletProvider({
          mnemonic: {
            phrase: `${process.env.MNEMONIC}`,
          },
          providerOrUrl: `https://goerli.infura.io/v3/${process.env.INFURA_ID}`,
          numberOfAddresses: 1,
        }),
      network_id: "5",
    },
    mumbai: {
      provider: () =>
        new HDWalletProvider({
          mnemonic: {
            phrase: `${process.env.MNEMONIC}`,
          },
          providerOrUrl:`https://polygon-mumbai.g.alchemy.com/v2/${process.env.ALCHEMY_ID}`,
        }),
      network_id: "80001",
    },

   
    
  },
   // Set default mocha options here, use special reporters, etc.
   mocha: {
    reporter: 'eth-gas-reporter',
    reporterOptions :{
      gasPrice:1,
      token:"ETH",
      showTimeSpent:true,
    }
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.17", // Fetch exact versiocdn from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    },
  },
};
