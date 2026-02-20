import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const current = i18n.language?.startsWith('en') ? 'en' : 'es';

    return (
        <div className="flex items-center text-xs font-medium select-none">
            <button
                onClick={() => i18n.changeLanguage('es')}
                className={`px-1.5 py-0.5 rounded-l transition-colors ${
                    current === 'es'
                        ? 'bg-amber-500 text-white'
                        : 'text-gray-500 hover:text-gray-800'
                }`}
                aria-label="Español"
            >
                ES
            </button>
            <span className="text-gray-300 select-none">|</span>
            <button
                onClick={() => i18n.changeLanguage('en')}
                className={`px-1.5 py-0.5 rounded-r transition-colors ${
                    current === 'en'
                        ? 'bg-amber-500 text-white'
                        : 'text-gray-500 hover:text-gray-800'
                }`}
                aria-label="English"
            >
                EN
            </button>
        </div>
    );
};

export default LanguageSelector;
