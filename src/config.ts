import { Config } from '@nevermined-io/nevermined-sdk-js';

//
// marketplace-server connection
//
export const serviceUri =
  process.env.REACT_APP_SERVICE_URI ||
  'https://autonomies-backend.autonomies.staging.nevermined.rocks';

//
// NEVERMINED REMOTE CONNECTIONS
//
export const acceptedChainId = process.env.REACT_APP_ACCEPTED_CHAIN_ID || '80001'; // for Mumbai

// NEVERMINED
export const metadataUri = process.env.REACT_APP_METADATA_URI || "https://metadata.alities.celo.nevermined.rocks/"; // "http://localhost:8030" or "https://metadata.alfajores.nevermined.rocks/"
export const gatewayAddress = process.env.REACT_APP_GATEWAY_ADDRESS || "0x7f3661d22E89Ad3549c7fC034D94B53da731D36A" //0x7DFa856BC27b67bfA83F190755D6C7D0A0D7BBC0"; //"0x068Ed00cF0441e4829D9784fCBe7b9e26D4BD8d0"
export const gatewayUri = process.env.REACT_APP_GATEWAY_URI || "https://gateway.alities.celo.nevermined.rocks/"; // "http://localhost:8030" or "https://gateway.alfajores.nevermined.rocks/"
export const faucetUri = process.env.REACT_APP_FAUCET_URI; // "http://localhost:3001"
export const nodeUri = process.env.REACT_APP_NODE_URI || "https://autumn-frosty-bush.celo-mainnet.quiknode.pro/36d6786ca5afb2f188887eb46dbc7c669343ee81/"; //"http://localhost:8545" or "https://alfajores-forno.celo-testnet.org"
export const SECRET_STORE_URI = process.env.REACT_APP_SECRET_STORE_URI; // "http://localhost:12001";
export const VERBOSE = true;


const defaultConfig = {
  metadataUri,
  gatewayUri,
  faucetUri,
  nodeUri,
  gatewayAddress,
  verbose: true
} as Config;


export default defaultConfig;
