require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner neck fringe speak guard render remember clump grace opera flower general'; 
let testAccounts = [
"0x5cc1644d81cf0e569e7a4acb781aa5fb73238ce6d7e9a92bc38387dd1a4aa043",
"0x75afa3410784c8bac68b98f1a7443299c6d03099f532f3eba9754f5ff2f3f109",
"0xd29bb3633e138d149bec7f19af57a52fd26469681d2d84f6e250cfe37ce21349",
"0xbc4bc737051935f9704681cb0986ccd2b6b6888dfe03a05ddbc7536b8f33bba5",
"0x8dee2d9d3b179afc88acd06c1fcec4d91e7097910a311f1454374dd15df5c74b",
"0xad97f847ddfb3d067f043ddc6e95d9e6b57891a5b49a76d91f93d71c82827fe2",
"0xd8303aead249bf2f6dcc653760672e9420ce25a9b2187180c20c837c9d2a9d50",
"0xde4ed5d2d67d8fc9d34d9d573f4ea30b8055568df84a2d772394c0f56a86ff31",
"0xb68460cb8d7692ff6a24c217ad8b6e56395ffbada812000600a05266fa9c4509",
"0x623af6680d66e96ace19dc16eb0a6301e0bd9ab2305e7a9146d029d09d97fcea"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

