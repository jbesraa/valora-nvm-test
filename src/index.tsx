import '@celo-tools/use-contractkit/lib/styles.css'
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { ContractKitProvider, useContractKit } from '@celo-tools/use-contractkit'
import generalConfig from './config'
import { Nevermined } from '@nevermined-io/nevermined-sdk-js'
import { TransactionReceipt } from "web3-core"


const GATEWAY_ADDRESS = '0x7f3661d22E89Ad3549c7fC034D94B53da731D36A'


const grantGatewayTransferRights = async (sdk: Nevermined, address: string): Promise<TransactionReceipt | any> => {
  if (!GATEWAY_ADDRESS || !sdk || !address) return
  console.info('Granting gateway mint access from', address)
  const isApproved = await sdk.keeper.nftUpgradeable.isApprovedForAll(address, GATEWAY_ADDRESS)
  console.log('approved', isApproved)
  const [account] = await sdk.accounts.list()
  console.log('sdk account signing', account)
  const { transferNftCondition } = sdk.keeper.conditions
  return await sdk.nfts.setApprovalForAll(transferNftCondition.address, true, account)
}

const Childs = () => {
  const { account, address, connect, kit } = useContractKit()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isSending, setIsSending] = useState<boolean>(false)
  const [nvm, setNvm] = useState({} as Nevermined)
  const [receipt, setReceipt] = useState({} as TransactionReceipt)
  const [error, setError] = useState({} as any)

  useEffect(() => {
      try {
        const load = async (): Promise<void> => {
          try {
            if (!kit?.web3 || !address || !account) return
            setIsLoading(true)
            console.log('celo address', address)
            console.log('celo account', account)
            console.log('web3 account', await kit.web3.eth.getAccounts())
            const nvmInstance = await Nevermined.getInstance({
                ...generalConfig,
                web3Provider: kit.web3
            })
            console.log('SDK LOADED:', nvmInstance)
            setNvm(nvmInstance)
          } catch (err) {
            console.error(err)
            setError(err)
          }
          setIsLoading(false)
        }
        const nvmAlreadyLoaded = !!Object.keys(nvm).length
        !nvmAlreadyLoaded && load()
      } catch (err) {
        console.error(err)
        setError(err)
        setIsLoading(false)
      }
  }, [account, address, connect, kit])

  useEffect(() => {
    const send = async (): Promise<void> => {
      if (!Object.keys(nvm).length || !address) return
      setIsSending(true)
      console.log('nvm accounts', await nvm.accounts.list())
      try {
        const receipt = await grantGatewayTransferRights(nvm, address)
        setReceipt(receipt)
        console.log('response', receipt)
      } catch(err) {
        console.error(err)
        setError(err)
      }
      setIsSending(false)
    }
    send()
  }, [nvm, address])

  return (
    <div>
        { account && <div>Account: {account}</div>}
        { isLoading && <div>loading</div>}
        { !isLoading &&
          <button onClick={connect}>{!!Object.keys(nvm).length && 're'}connect with celo</button>
        }
        { isSending && <div>sending tx</div>}
        { !!Object.keys(receipt).length && <div>tx {receipt.transactionHash} at block {receipt.blockNumber}</div>}
        { !!error && <div>error: {error.message}</div>}
    </div>
  )
}

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
)
