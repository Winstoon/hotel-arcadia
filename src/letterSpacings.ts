export enum LetterSpacing {
    Large = 5,
    Default = 4,
    Small = 2,
    En = 1
}

export interface ILetterSpacing {
    [key: string]: LetterSpacing
}


export const LetterSpacingMap: ILetterSpacing = {
    H1: LetterSpacing.Default,
    H2: LetterSpacing.Large,
    TXT: LetterSpacing.Small
}

export const ENLetterSpacingMap: ILetterSpacing = {
    H1: LetterSpacing.En,
    H2: LetterSpacing.En,
    TXT: LetterSpacing.En
}