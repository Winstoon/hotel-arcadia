// todo: 状态管理

import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

type CommonState = {
    test: number
}

type CommonActions = {
    setTest: (num: number) => void
}

export const useCommonStore = create(immer<CommonState & CommonActions>((set, get) => ({
    test: 0,
    setTest: num => set({ test: num })
})))
