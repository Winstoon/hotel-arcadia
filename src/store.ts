// todo: 状态管理

import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { I18N, I18NS } from './i18n'
import { ENLetterSpacingMap, ILetterSpacing, LetterSpacingMap } from './letterSpacings'

type I18NData = {
    [key: string]: string
}

const getDefaultI18NData = () => {
    let result: I18NData = {}
    Object.entries(I18NS).forEach(([key, value]) => {
        const str = value[I18N.ZH]
        result[key] = str
    })
    return result
}

type CommonState = {
    lang: I18N
    I18N: I18NData
    letterSpacing: ILetterSpacing
    pageSectionOrder: number
}

type CommonActions = {
    setLang: (lang: I18N) => void
    setPageSectionOrder: (order: number) => void
}

export const useCommonStore = create(immer<CommonState & CommonActions>((set, get) => ({
    lang: I18N.ZH,
    I18N: getDefaultI18NData(),
    letterSpacing: LetterSpacingMap,
    pageSectionOrder: 0,
    setLang: lang => {
        let lsmap = lang === I18N.EN ? ENLetterSpacingMap : LetterSpacingMap
        let result: I18NData = {}
        Object.entries(I18NS).forEach(([key, value]) => {
            const str = value[lang]
            result[key] = str
        })
        set({ lang, I18N: result, letterSpacing: lsmap })
    },
    setPageSectionOrder: order => set({ pageSectionOrder: order }),
})))

type OrderState ={
    visible: boolean
}

type OrderActions = {
    setVisible: (visible: boolean) => void
}

export const useOrderDialogStore = create(immer<OrderState & OrderActions>((set, get) => ({
    visible: false,
    setVisible: (visible: boolean) => set({ visible })
})))