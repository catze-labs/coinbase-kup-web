interface Klaytn {
  on: (eventName: string, callback: () => void) => void
  enable: () => Promise<Array<string>>
  req
  selectedAddress: string
  networkVersion: number
  publicConfigStore: Store
}

interface State {
  isEnabled: boolean
  isUnlocked: boolean
  networkVersion: number
  onboardingcomplete: boolean
}

interface Store {
  subscribe: (callback: () => void) => void
  getState: () => State
}
