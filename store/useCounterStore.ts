import { atom, useRecoilState, useRecoilValue } from 'recoil'
import localStorageEffect from './utils/localStorageEffect'

/**
 * 상태는 무조건 hook 단위로 관리하며, 해당 파일 내에서 atom과 action을 생성합니다.
 */

/**
 * 전역상태를 정의합니다.
 */
const counterAtom = atom<number>({
  key: 'count',
  default: 0,
  effects: [localStorageEffect('count')],
})

/**
 * 전역상태를 쉽게 다룰 수 있는 훅을 생성합니다.
 */
function useCounterStore() {
  /**
   * 상태를 구독합니다.
   */
  const [count, setCount] = useRecoilState(counterAtom)

  /**
   * 액션을 정의합니다.
   */
  const increseCount = () => {
    setCount(count + 1)
  }
  const decreseCount = () => {
    setCount(count - 1)
  }

  return {
    counter: useRecoilValue(counterAtom),
    increseCount,
    decreseCount,
  }
}

export default useCounterStore