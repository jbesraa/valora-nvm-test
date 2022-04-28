import '@celo-tools/use-contractkit/lib/styles.css';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ContractKitProvider, useContractKit } from '@celo-tools/use-contractkit';
import generalConfig from './config';
import { Nevermined } from '@nevermined-io/nevermined-sdk-js';

const GATEWAY_ADDRESS = '0x7f3661d22E89Ad3549c7fC034D94B53da731D36A';

const grantGatewayTransferRights = async (sdk: Nevermined, address: string): Promise<void> => {
  if (!GATEWAY_ADDRESS || !sdk || !address) return;
  console.info('Granting gateway mint access..');
  const isApproved = await sdk.keeper.nftUpgradeable.isApprovedForAll(address, GATEWAY_ADDRESS);
  console.log('approved', isApproved);
  if (!isApproved || true) {
    const [account] = await sdk.accounts.list();
    const { transferNftCondition } = sdk.keeper.conditions;
    await sdk.nfts.setApprovalForAll(transferNftCondition.address, true, account);
    await sdk.nfts.setApprovalForAll(GATEWAY_ADDRESS, true, account);
    console.info('Access granted successfully');
  }
};

const Childs = () => {
  const { kit, account, address, connect } = useContractKit();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [sdk, setSdk] = useState({} as Nevermined);
  const [web3, setWeb3] = useState({} as any);
  const [accounts, setAccounts] = useState([] as any)

  useEffect(() => {
    const interval = setInterval(() => {
      const load = async (): Promise<void> => {
        console.log(await kit.web3.eth.getAccounts())
      }
      load()
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    try {
      const loadNevermined = async (): Promise<void> => {
        if (!kit?.web3 || !address || !account) return;
        console.log('celo address', address);
        console.log('celo account', account);
        console.log('celo web3 accounts', await kit.web3.eth.getAccounts())
        setAccounts(await kit.web3.eth.getAccounts())
        if (Object.keys(web3).length === 0) {
          console.log('set', kit.web3)
          setWeb3(kit.web3)
        }
        console.log(web3)
        // console.log('Start Loading SDK..');
        // setIsLoading(true);
        // Promise.resolve(
        //   Nevermined.getInstance({
        //     ...generalConfig,
        //     web3Provider: kit.web3
        //   })
        // ).then(async (nvmSdk: Nevermined) => {
        //   if (!address) return;
        //   console.log('post celo web3 accounts', await kit.web3.eth.getAccounts())
        //   console.log('SDK LOADED:', nvmSdk);
        //   Promise.resolve(grantGatewayTransferRights(nvmSdk, address)).then((response) => {
        //     console.log('response', response);
        //     // setSdk(nvmSdk);
        //   Promise.resolve(nvmSdk.accounts.list()).then((accts) => {
        //     console.log('SDK Accounts:', accts);
        //   });
        //   console.log(account)
        //     // setIsLoading(false);
        //   });
        // });
      };
      const sdkAlreadyLoaded = Object.keys(sdk).length > 0;
      !sdkAlreadyLoaded && loadNevermined();
    } catch (err) {
      console.log('err here');
      console.log(err);
    }
  }, [kit, address, account, sdk]);

  return (
    <div>
        <button onClick={connect}>connect with celo</button>
        { kit?.web3 && accounts[0] }
    </div>
  );
};

ReactDOM.render(
  <div>
    <ContractKitProvider
      dapp={{
        icon: '',
        name: 'testapp',
        description: 'desc',
        url: 'https://example.com'
      }}
    >
      <Childs />
    </ContractKitProvider>
  </div>,
  document.getElementById('root') as HTMLElement
);
