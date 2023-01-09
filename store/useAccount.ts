import { atom, useRecoilState } from 'recoil'
import localStorageEffect from './utils/localStorageEffect'

const accountAtom = atom<string | null>({
  key: '@account',
  default: null,
  effects: [localStorageEffect('@account')],
})

export default function useAccount() {
  const [account, setAccount] = useRecoilState(accountAtom)

  const setAccountState = (account: string | null) => {
    setAccount(account)
  }

  return {
    account,
    setAccountState,
  }
}