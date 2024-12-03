import React, {createContext, useEffect, useState} from "react"
import i18n from "i18next";

export const LanguageContext = createContext()


export const LanguageProvider = ({ children }) => {
  const [userLanguage, setUserLanguage] = useState(localStorage.getItem('language') || 'en')

  useEffect(() => {
    console.log(userLanguage)
      i18n.changeLanguage(userLanguage);
  }, [userLanguage]);



  return (
    <LanguageContext.Provider value={{userLanguage, setUserLanguage}}>
      {children}
    </LanguageContext.Provider>
  )
}
