import { createI18n } from 'vue-i18n';

export const DEFAULT_LOCALE = 'de-DE';
export const DEFAULT_LANGUAGE = 'de';
export const DEFAULT_LANGUAGE_STRING = 'Deutsch';

/**
 * Contains all loaded locales
 */
const loadedLocales: Array<string> = [];

/**
 * Gets all supported locales.
 * Also make sure that you have created a message file with the locale in the directory ./locales
 *
 * IMPORTANT: If you add something new here make sure you update
 * - getDefaultLocaleByCountry
 * - getLanguageNameByLocale
 * @returns {Array} locales ['de-DE', 'en-US', ...]
 */
export const getSupportedLocales = function (): string[] {
    return [
        'en-US',
        'de-DE'
    ];
};

/**
 * Returns the default locale for the param country
 * @param country - de => de-DE
 * @returns {String} locale
 */
export const getDefaultLocaleByCountry = function (country: string): string {
    switch (country) {
        case 'en': return 'en-US';
        case 'de': return 'de-DE';
        default: return DEFAULT_LOCALE;
    }
};

export const getLanguageNameByLocale = function (locale: string): string {
    switch (locale) {
        case 'en-US': return 'English';
        case 'de-DE': return 'Deutsch';
        default: return DEFAULT_LANGUAGE_STRING;
    }
};

/**
 * Returns all supported countries extracted from the supported locales
 * @returns {Array} countries ['us', 'de', ...]
 */
export const getSupportedCountries = function (): string[] {
    return [...new Set(getSupportedLocales().map(locale => locale.split('-')[1].toLowerCase()))];
};

/**
 * Returns all available countries for the given parameter country
 * @param {String} country - us
 * @returns {Array} locales ['en-US']
 */
export const getAvailableLocalesByCountry = function (country: string): string[] {
    return getSupportedLocales().filter(locale => locale.indexOf(`-${country.toUpperCase()}`) !== -1);
};

/**
 * Returns the country from a given locale
 * @param {String} locale - de-DE/de_DE
 * @returns {String} the country DE
 */
export const getCountryFromLocale = function (locale: string): string {
    locale = locale.replace('_', '-');
    return locale.split('-')[1].toUpperCase();
};

/**
 * Returns the language from a given locale
 * @param {String} locale - de-DE/de_DE
 * @returns {String} the language de
 */
export const getLanguageFromLocale = function (locale: string): string {
    locale = locale.replace('_', '-');
    return locale.split('-')[0].toLowerCase();
};

/**
 * Returns the current locale
 * @returns {String} the locale
 */
export const getCurrentLocale = function (): string {
    return i18n.global.locale.value;
};

/**
 * Returns the current country
 * @returns {String} the current country
 */
export const getCurrentCountry = function (): string {
    return i18n.global.locale.value.split('-')[1];
};

/**
 * Returns the current language
 * @returns {String} the current language
 */
export const getCurrentLanguage = function (): string {
    return i18n.global.locale.value.split('-')[0];
};

export const loadLocaleAsync = function loadLocaleAsync(locale: string): Promise<string> {
    locale = locale.replace('_', '-');

    // If the same locale then before and not the fallback locale
    if (i18n.global.locale.value === locale && i18n.global.fallbackLocale.value !== locale) {
        return Promise.resolve(setI18nLocale(locale));
    }

    // If the locale was already loaded
    if (loadedLocales.includes(locale)) {
        return Promise.resolve(setI18nLocale(locale));
    }

    // If the locale has not been loaded yet we import the messages from that locale
    return import(`./locales/${locale}.json`).then(
        messages => {
            i18n.global.setLocaleMessage(locale, messages.default);
            loadedLocales.push(locale);
            return setI18nLocale(locale);
        }
    ).catch(error => {
        console.error(`Failed to load locale ${locale}:`, error);
        return setI18nLocale(DEFAULT_LOCALE);
    });
};

export const setI18nLocale = function (locale: string): string {
    i18n.global.locale.value = locale;

    /**
     * NOTE:
     * If you need to specify the language setting for headers, such as the `fetch` API, set it here.
     * The following is an example for axios.
     *
     * axios.defaults.headers.common['Accept-Language'] = locale
     */

    const element = document.querySelector('html');
    if (element != null) {
        element.setAttribute('lang', locale);
    }

    localStorage.setItem('selectedLocale', locale);

    return locale;
};

const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: DEFAULT_LOCALE,
    fallbackLocale: DEFAULT_LOCALE
});

// Load default locale or saved locale
const savedLocale = localStorage.getItem('selectedLocale');
const initialLocale = savedLocale && getSupportedLocales().includes(savedLocale) ? savedLocale : DEFAULT_LOCALE;
loadLocaleAsync(initialLocale);

export default i18n;