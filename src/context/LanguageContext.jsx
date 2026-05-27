import React, { useState } from 'react'

const LanguageContext = React.createContext()


function LanguageContextProvider({ children }) {
    const [language, setLanguage] = useState('en')
    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'hi' : language === 'hi' ? 'od' : language === 'od' ? 'gujrati' : language === 'gujrati' ? 'urdu' : 'en')
    }
    const languageObj = {
        en: {
            greeting: "Hello",
            description: "This is the English version"
        },
        hi: {
            greeting: "नमस्ते",
            description: "यह हिंदी संस्करण है"
        },
        od: {
            greeting: "ନମସ୍କାର",
            description: "ଏହା ଓଡ଼ିଆ ସଂସ୍କରଣ ଅଟେ"
        },
        gujrati: {
            greeting: "નમસ્તે",
            description: "આ ગુજરાતી સંસ્કરણ છે"
        },
        urdu: {
            greeting: "السلام علیکم",
            description: "یہ اردو ورژن ہے"
        },
        kerala: {
            greeting: "നമസ്കാരം",
            description: "ഇത് മലയാളം പതിപ്പാണ്"
        }, 
        chinese: {
            greeting: "你好",
            description: "这是中文版本"
        }
    }

    // const ln= (text)=>{
    //     return languageObj[language][text] || text
    // }


    const ln = (text) => {
        return languageObj[language]?.[text] || text;
    };
    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, languageObj, ln }}>
            {children}
        </LanguageContext.Provider>
    )
}

export { LanguageContext }
export default LanguageContextProvider