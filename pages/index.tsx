import { NoSSR } from '@/components/NoSSR'
import useCounterStore from '@/store/useCounterStore'
import type { NextPage } from 'next'
const Home: NextPage = () => {
  const { counter, increseCount, decreseCount } = useCounterStore()

  return (
    <div>
      <NoSSR>
        <h1>Home</h1>
        <p>Count: {counter}</p>
        <button onClick={increseCount}>Increse</button>
        <button onClick={decreseCount}>Decrease</button>
      </NoSSR>
    </div>
  )
}

export default Home