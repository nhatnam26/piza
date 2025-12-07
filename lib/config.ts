import { getFullnodeUrl } from "@iota/iota-sdk/client"
import { createNetworkConfig } from "@iota/dapp-kit"

export const DEVNET_PACKAGE_ID = "0x6b59a9423c6aa80f8c6e7e6ec0fe93f38168ce412254880ae59616d06ac275d4"

export const TESTNET_PACKAGE_ID = ""
export const MAINNET_PACKAGE_ID = ""

const { networkConfig, useNetworkVariable, useNetworkVariables } =
  createNetworkConfig({
    devnet: {
      url: getFullnodeUrl("devnet"),
      variables: {
        packageId: DEVNET_PACKAGE_ID,
      },
    },
    testnet: {
      url: getFullnodeUrl("testnet"),
      variables: {
        packageId: TESTNET_PACKAGE_ID,
      },
    },
    mainnet: {
      url: getFullnodeUrl("mainnet"),
      variables: {
        packageId: MAINNET_PACKAGE_ID,
      },
    },
  })

export { useNetworkVariable, useNetworkVariables, networkConfig }
