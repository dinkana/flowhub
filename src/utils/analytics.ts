declare global {
    interface Window {
      ym?: (...args: unknown[]) => void
    }
  }
  
  const COUNTER_ID = 113595635
  
  export const trackGoal = (goal: string) => {
    window.ym?.(COUNTER_ID, 'reachGoal', goal)
  }
  
  export const trackPage = (url: string, title: string) => {
    window.ym?.(COUNTER_ID, 'hit', `${window.location.origin}${url}`, title)
  }