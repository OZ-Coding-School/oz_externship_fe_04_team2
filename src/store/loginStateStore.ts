import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type LoginState = 'GUEST' | 'USER'

interface LoginStore {
  loginState: LoginState
  setLoginState: (set: LoginState) => void
}

// 로그인 상태를 저장하는 로직 => 추후 사용할때 setLoginState('USER')
export const LoginStateStore = create<LoginStore>()(
  persist(
    (set) => ({
      loginState: 'GUEST',
      setLoginState: (state) => {
        set({ loginState: state })
      },
    }),
    {
      name: 'login-state-storage',
    }
  )
)
