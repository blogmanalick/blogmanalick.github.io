export const LANG_PT = 'pt';
export const LANG_EN = 'en';
export const LANG_ES  = 'es';
export const DEFAULT_LANG = LANG_PT; 

export const LANG_BASE_PATH = {
    [LANG_PT]: '/',
    [LANG_EN]: `/${LANG_EN}/`,
    [LANG_ES]: `/${LANG_ES}/`,
} as const;

export const LANG_NAME = {
    [LANG_PT]: 'Português', 
    [LANG_EN]: 'English',
    [LANG_ES]: 'Español',
} as const;

export const LOCALE = {
    [LANG_PT]: 'pt-BR',
    [LANG_EN]: 'en',
    [LANG_ES]: 'es',
} as const;

export type LangKey = 
    | typeof LANG_PT
    | typeof LANG_EN
    | typeof LANG_ES;

export function getCurrentLang({ pathname }: Pick<URL, 'pathname'>): LangKey {
	if (pathname.startsWith(LANG_BASE_PATH[LANG_EN])) return LANG_EN;
	if (pathname.startsWith(LANG_BASE_PATH[LANG_ES])) return LANG_ES;
    return DEFAULT_LANG;
}

