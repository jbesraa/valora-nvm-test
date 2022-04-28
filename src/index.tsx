import '@celo-tools/use-contractkit/lib/styles.css';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ContractKitProvider, useContractKit } from '@celo-tools/use-contractkit';

const Childs = () => {
  const { kit, connect } = useContractKit();

  useEffect(() => {
    const interval = setInterval(() => {
      const load = async (): Promise<void> => {
        console.log(await kit.web3.eth.getAccounts())
      }
      load()
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
        <button onClick={connect}>connect with celo</button>
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
