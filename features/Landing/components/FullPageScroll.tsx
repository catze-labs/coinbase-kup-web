import React, { useEffect } from 'react'

const FullPageScroll: React.FC<{
  children: React.ReactNode[]
  swipeThreshold?: number
  scrollThreshold?: number
}> = ({ children, swipeThreshold = 80, scrollThreshold = 60 }) => {
  const [section, setSection] = React.useState<number>(0)

  /**
   * handle scroll
   */

  const [scrolling, setScrolling] = React.useState<boolean>(false)

  const handleScroll = (e: React.WheelEvent<HTMLDivElement>) => {
    // 중복 스크롤 방지
    if (scrolling) return

    if (e.deltaY > scrollThreshold) {
      setSection((prev) => (prev < children.length - 1 ? prev + 1 : prev))
    }

    if (e.deltaY < -1 * scrollThreshold) {
      setSection((prev) => (prev > 0 ? prev - 1 : 0))
    }

    // 0.5초의 딜레이를 준다.
    setScrolling(true)
    setTimeout(() => {
      setScrolling(false)
    }, 300)
  }

  /**
   * swipe state
   */
  const [touchStartY, setTouchStartY] = React.useState<number | null>(null)
  const [touchEndY, setTouchEndY] = React.useState<number | null>(null)

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartY(e.touches[0].clientY)
  }

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEndY(e.changedTouches[0].clientY)
  }

  useEffect(() => {
    if (!touchStartY || !touchEndY) return

    if (touchStartY - touchEndY > swipeThreshold) {
      setSection((prev) => (prev < children.length - 1 ? prev + 1 : prev))
    }

    if (touchStartY - touchEndY < -1 * swipeThreshold) {
      setSection((prev) => (prev > 0 ? prev - 1 : 0))
    }
  }, [touchEndY])

  return (
    <div
      className="w-full h-screen overflow-y-hidden"
      // wheel event handler
      onWheel={handleScroll}
      // touch event handler
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        style={{
          transform: `translateY(-${section * 100}vh)`,
          transition: 'transform 0.8s',
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default FullPageScroll