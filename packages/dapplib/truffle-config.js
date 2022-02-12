require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area fringe speak guard render remind equip hockey kiwi olympic ghost'; 
let testAccounts = [
"0x251d40a6f217cc92a039645ce1db53b34d681837a5a8b21d4bd3ed9235d711c6",
"0x89ad9e6deafbf9e80eaeb7c5a653fcfc8534efaa5ecc2bef8117942882384c51",
"0x523ebb56c4d2201ff15bd920b5eff9185261b7b2d63baed04829f37f4bf321d3",
"0x9cd58b4eb621a4aaa809cf501b60a6697d1bc24d53762c2597d91b884574de2e",
"0x1d04d0e810ee309885fedbb871c9c2a609bc0473b6b3339ed8ff5e121ebbe07c",
"0xf1dc7f4c1c87d4030fb6edfe9521317ffbb2b58c116f5fde3cf4c4dd4e433539",
"0x2c606dd26fe743120ffaaee73df4b243cbff61f1eefeced2df5461dfe33b19f5",
"0xde43bc7a62401e1b65d446ecd0e912cc29758ed6994c606d3fb61c693105ae4a",
"0x0cfe02067cde3fdb0079e944768eae700b8346fb4b9b2179bee256f00135d942",
"0x2dbbe4828a5d2d58b609937756c2ae4bd4472489389cfc8003b43188ec6222bd"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


