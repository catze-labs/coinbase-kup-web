![KUP_logo](https://user-images.githubusercontent.com/65520261/210942893-ab370674-c7ad-41fc-b08f-c3e6dcf55b43.png)

# coinbase-kup-web
KUP stands for Klaytn, Unity, and Playfab. It is a connection between Unity, Playfab and Klaytn to manage data while interacting within the metaverse. The partnership secures the users data ownership and preservation by processing important data with Klaytn blockchain. KUP helps Unity developers focus on the domain they are confident in. By utilizing KUP, they help build an easily accessible metaverse.


<p align="center"><img src="https://user-images.githubusercontent.com/65520261/210940145-a0bc9246-6620-4601-9f27-7294bfb6d59a.png" width="70%" height="70%" /></p>

coinbase-kup-web allows you to see the process of retrieving data within the game through interactions with the Playfab API and minting NFTs on the Klaytn Baobab chain using that data. The following are necessary for this process:

- Playfab Studio (identified through titleId)
- Metaverse Unity project (a.k.a *game*) using the created Playfab API
- Smart contract that allows minting of the game data as NFTs

# Library in use
| Name | Range | Link |
| --- | --- | --- |
| React (Next.js) | Front-end Framework | https://reactjs.org/ |
| Axios | Interaction with Server | https://axios-http.com/  |
| React-Query | Server state management and Server response cache utilization | https://react-query-v3.tanstack.com/  |
| Recoil | Global State Management | https://recoiljs.org/  |
| tailwindcss | Utility-based CSS Library | https://tailwindcss.com/  |
| caver-js | Interaction with Klaytn Contract | https://github.com/klaytn/caver-js |
| nft.storage | For upload image blob to IPFS | https://nft.storage/ |
| klip-sdk | Klip wallet sdk | https://docs.klipwallet.com/a2a-sdk/a2a-sdk-js |
| @coinbase/wallet-sdk | Coinbase wallet sdk | https://www.coinbase.com/cloud/products/wallet-sdk |

The front-end of KUP uses React.js (Next.js). It also makes use of Axios for API calls, which is wrapped in the functions provided by React-Query. React-Query has the ability to cache responses from servers for a certain period of time and allows them to be invalidated as needed, resulting in only making a single API call even if there are multiple API call codes. This helps to reduce unnecessary duplicate API calls and makes it easier to divide components because there are no restrictions on writing API call syntax. The use of Tailwindcss is purely based on personal preference, and you can use a different CSS library that suits the needs of your project.

KUP is using `klip-sdk` and `@coinbase/wallet-sdk` to support not only metamask and kaikas, but also coinbase wallet. In this process, `caver.js` is used to interact with Klaytn contract.

In the case of IPFS communication and NFT minting, it is done through the API route of next.js. In this process, the private key is hidden and security is strengthened. What was used in this process is `nft.storage` and `axios`.

# Project structure in client
It is advisable to use a scalable structure when building the front-end project to allow for the easy addition and modification of various features. In the front-end of this KUP, files are organized by feature.

| Feature name | Usage |
| --- | --- |
| landing | Landing page components |
| auth | Login, Signup |
| contract | Wallet Connect Modal, Contract interaction |

Each of the features includes the components used in the feature, the pages to be routed, and various hooks.

Each feature can be referenced by other features, and the decision of how to do this is up to the front-end developer.

In this case, the hook for API calls and the part that manages global states are separated into directories inside the root directory, rather than inside the `/feature` directory. `/service` is a collection of hooks for API calls, and `/states` is a collection of Recoil-atoms for managing global states. This is done for ease of management. In addition, the types used in the project can be found in `/types`.

The diagram on the next page provides a more detailed view of the structure.

![kup_detailed_structure](https://user-images.githubusercontent.com/65520261/210940903-fc836d17-6177-4e9c-8bd4-f8ee05da93db.png)

# API Route
coinbase-kup-web is configured as a server-less environment unique to Next.js, without building a separate backend server. You can check the API endpoint through `/contract/controller` in the `@/pages/api` directory.

| route | description |
| --- | --- |
| /api/contract/setMetadataUri | Through this API, the Blob of the image that will be the metadata of the NFT is uploaded to IPFS. |
| /api/contract/ensureAttackAmount | Through this API, the number of attacks of the in-game account obtained through Playfab is minted as an NFT. |

The detailed implementation of the above APIs is implemented in the service method of `@/api/`.

The order of using the APIs is to get the URI through `/api/contract/setMetadataUri`, and then insert the URI into the payload of `/api/contract/ensureAttackAmount` to get the result of the transaction.
