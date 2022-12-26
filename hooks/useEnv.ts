function useEnv() {
    const { NEXT_PUBLIC_PLAYFAB_TITLEID } = process.env
    return {
      titleId: NEXT_PUBLIC_PLAYFAB_TITLEID,
    }
  }
  
export default useEnv