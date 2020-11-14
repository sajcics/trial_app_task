import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import EN from 'locales/en.json';
import CRO from 'locales/cro.json';
import DE from 'locales/de.json'

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      en: {
        translation: EN
      },
      cro: {
        translation: CRO
      },
      de: {
        translation: DE
      }
    },
    lng: 'en'
  })

export default i18n;