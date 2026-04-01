'use client';

import { useState, useEffect } from 'react';
import { Language, languages, t } from './i18n';
import { ClawGlobe } from '@/components/icons/ClawIcons';

interface LanguageSwitcherProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export function LanguageSwitcher({ currentLang, onLanguageChange }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setIsOpen(false);
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isOpen]);

  const currentLanguage = languages.find(l => l.code === currentLang);

  return (
    <div className="relative">
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold border-2 border-slate-800 transition-all hover:bg-orange-500 hover:border-orange-500 hover:text-white"
      >
        <ClawGlobe className="w-4 h-4" />
        <span className="hidden sm:inline">{currentLanguage?.label}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white border-2 border-slate-800 rounded-2xl shadow-hard py-2 min-w-[140px] z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                onLanguageChange(lang.code);
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all ${
                currentLang === lang.code 
                  ? 'bg-orange-500 text-white border-orange-500' 
                  : 'text-slate-800 hover:bg-slate-100'
              }`}
            >
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
