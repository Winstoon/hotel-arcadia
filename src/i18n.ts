export enum I18N {
    EN = 'EN',
    ZH = 'ZH',
    JP = 'JP'
}

export const I18N_LABELS = {
    [I18N.EN]: 'ENGLISH',
    [I18N.JP]: '日本語',
    [I18N.ZH]: '中文',
}

type I18NItem = {
    [I18N.EN]: string,
    [I18N.JP]: string,
    [I18N.ZH]: string,
}

type I18NFullData = {
    [key: string]: I18NItem
}

export const I18NS: I18NFullData = {
    'reserve': {
        [I18N.ZH]: '预订',
        [I18N.EN]: 'Reserve',
        [I18N.JP]: '予約',
    }
}