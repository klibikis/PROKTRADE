import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './en.json'
import lv from './lv.json'
import ee from './ee.json'
import lt from './lt.json'
import ru from './ru.json'
import no from './no.json'
import se from './se.json'
import fr from './fr.json'
import fi from './fi.json'
import de from './de.json'
import es from './es.json'
import pl from './pl.json'

const resources = {
  en: {
    translation: en,
  },
  lv: {
    translation: lv,
  },
  ee: {
    translation: ee,
  },
  lt: {
    translation: lt,
  },
  ru: {
    translation: ru,
  },
  es: {
    translation: es,
  },
  fr: {
    translation: fr,
  },
  de: {
    translation: de,
  },
  fi: {
    translation: fi,
  },
  no: {
    translation: no,
  },
  se: {
    translation: se,
  },
  pl: {
    translation: pl,
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  // compatibilityJSON: 'v3',
  interpolation: {
    escapeValue: false,
  },
})
