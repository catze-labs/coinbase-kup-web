import Requester from '@/utils/requester'
import { useEffect, useState } from 'react'

export default function usePlayerStatistics() {
  const [totalAttackCount, setTotalAttackCount] = useState(null)

  const getPlayerStatistics = async () => {
    try {
      const {
        data: { data },
      } = await Requester.post('/Client/GetPlayerStatistics', {
        StatisticNames: ['Total_AttackCount'],
      })

      setTotalAttackCount(data?.Statistics?.[0]?.Value || 0)
      return data
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getPlayerStatistics()
  }, [])

  return { totalAttackCount }
}
