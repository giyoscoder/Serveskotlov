import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'

import УЗ from './locales/de/de.json'
import RU from './locales/ru/ru.json'
import UZ from './locales/uz/uz.json'

const resources = {
    ru: RU,
    uz: UZ,
    de: УЗ
}

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'ru',
        saveMissing: true,
        react: { useSuspense: true },
    })

export default i18n;
