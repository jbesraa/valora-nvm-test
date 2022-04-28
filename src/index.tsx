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
  if (!isApproved) {
    const [account] = await sdk.accounts.list();
    const { transferNftCondition } = sdk.keeper.conditions;
    await sdk.nfts.setApprovalForAll(transferNftCondition.address, true, account);
    await sdk.nfts.setApprovalForAll(GATEWAY_ADDRESS, true, account);
    console.info('Access granted successfully');
  }
};

const Childs = () => {
  const celo = useContractKit();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [sdk, setSdk] = useState({} as Nevermined);

  useEffect(() => {
    try {
      const loadNevermined = async (): Promise<void> => {
        if (!celo?.kit?.web3 || !celo?.address || !celo?.account) return;
        console.log('celo address', celo.address);
        console.log('celo account', celo.account);
        console.log('Start Loading SDK..');
        setIsLoading(true);
        Promise.resolve(
          Nevermined.getInstance({
            ...generalConfig,
            web3Provider: celo.kit.web3
          })
        ).then(async (nvmSdk: Nevermined) => {
          if (!celo.address) return;
          console.log('SDK LOADED:', nvmSdk);
          Promise.resolve(grantGatewayTransferRights(nvmSdk, celo.address)).then((response) => {
            console.log('response', response);
            setSdk(nvmSdk);
            Promise.resolve(nvmSdk.accounts.list()).then((accts) => {
              console.log('SDK Accounts:', accts);
            });
            setIsLoading(false);
          });
        });
      };
      const sdkAlreadyLoaded = Object.keys(sdk).length > 0;
      !sdkAlreadyLoaded && loadNevermined();
    } catch (err) {
      console.log('err here');
      console.log(err);
    }
  }, [celo]);

  return (
    <div>
      <button onClick={celo.connect}>connect with celo</button>
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
