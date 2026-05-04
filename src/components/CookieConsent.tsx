'use client';
import { useState, useEffect, useCallback } from 'react';

interface ConsentState {
  essential: boolean;
  analytics: boolean;
  timestamp: number;
}

const STORAGE_KEY = 'yzland-cookie-consent';
const CONSENT_VERSION = 2;

const defaultConsent: ConsentState = {
  essential: true,
  analytics: false,
  timestamp: Date.now(),
};

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed: ConsentState & { version?: number } = JSON.parse(stored);
        if (parsed.version === CONSENT_VERSION) {
          setVisible(false);
          return;
        }
      } catch (e) {}
    }
    setVisible(true);
  }, []);

  const saveConsent = useCallback((analyticsValue: boolean) => {
    const consent: ConsentState & { version: number } = {
      ...defaultConsent,
      analytics: analyticsValue,
      timestamp: Date.now(),
      version: CONSENT_VERSION,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    setVisible(false);
    setModalOpen(false);
    window.dispatchEvent(new CustomEvent('cookieConsent', { detail: consent }));
  }, []);

  const handleAcceptAll = () => saveConsent(true);
  const handleRejectAll = () => saveConsent(false);
  const handleCustomise = () => setModalOpen(true);
  const handleSaveCustom = () => saveConsent(analytics);

  useEffect(() => {
    const handler = () => {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          setAnalytics(parsed.analytics || false);
        } catch (e) {}
      }
      setModalOpen(true);
      setVisible(true);
    };
    window.addEventListener('openCookieSettings', handler);
    return () => window.removeEventListener('openCookieSettings', handler);
  }, []);

  if (!visible && !modalOpen) return null;

  const isFrench = typeof window !== 'undefined' && window.location.pathname.startsWith('/fr');
  const t = {
    bannerText: isFrench 
      ? "Nous utilisons des cookies pour améliorer votre expérience et analyser notre trafic. En cliquant sur « Tout accepter », vous consentez à notre utilisation des cookies."
      : "We use cookies to improve your experience and analyse our traffic. By clicking \"Accept All\", you consent to our use of cookies.",
    customise: isFrench ? "Personnaliser" : "Customise",
    rejectAll: isFrench ? "Tout refuser" : "Reject All",
    acceptAll: isFrench ? "Tout accepter" : "Accept All",
    title: isFrench ? "Préférences des cookies" : "Cookie Preferences",
    desc: isFrench 
      ? "Nous utilisons des cookies pour assurer les fonctionnalités de base et analyser notre trafic. Vous pouvez choisir les catégories que vous acceptez."
      : "We use cookies to ensure basic functionalities and to analyse our traffic. You can choose which categories you accept.",
    essential: isFrench ? "Cookies essentiels" : "Essential cookies",
    alwaysActive: isFrench ? "(toujours actifs)" : "(always active)",
    analytics: isFrench ? "Cookies analytiques" : "Analytics cookies",
    cancel: isFrench ? "Annuler" : "Cancel",
    save: isFrench ? "Enregistrer les préférences" : "Save Preferences",
  };

  return (
    <>
      {visible && !modalOpen && (
        <div className="fixed bottom-0 left-0 right-0 z-[100] bg-white border-t border-gray-200 shadow-lg p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex-1">
            <p className="text-sm text-gray-700">
              {t.bannerText}{' '}
              <button className="text-amber-700 underline ml-1" onClick={handleCustomise}>
                {t.customise}
              </button>
            </p>
          </div>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={handleRejectAll}
              className="px-4 py-2 text-sm font-medium text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 transition"
            >
              {t.rejectAll}
            </button>
            <button
              onClick={handleAcceptAll}
              className="px-4 py-2 text-sm font-medium text-white bg-amber-600 rounded-md hover:bg-amber-700 transition"
            >
              {t.acceptAll}
            </button>
          </div>
        </div>
      )}

      {modalOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-md mx-4 w-full">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">{t.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{t.desc}</p>
            <div className="space-y-3 mb-6">
              <label className="flex items-center justify-between">
                <span className="text-sm">{t.essential} <span className="text-gray-400">{t.alwaysActive}</span></span>
                <input type="checkbox" checked disabled className="w-4 h-4 text-amber-600 border-gray-300 rounded" />
              </label>
              <label className="flex items-center justify-between">
                <span className="text-sm">{t.analytics}</span>
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                  className="w-4 h-4 text-amber-600 border-gray-300 rounded"
                />
              </label>
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => { setModalOpen(false); setVisible(true); }}
                className="px-4 py-2 text-sm font-medium text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 transition"
              >
                {t.cancel}
              </button>
              <button
                onClick={handleSaveCustom}
                className="px-4 py-2 text-sm font-medium text-white bg-amber-600 rounded-md hover:bg-amber-700 transition"
              >
                {t.save}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
