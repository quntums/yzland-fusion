'use client';
import { useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';

const STORAGE_KEY = 'yzland-cookie-consent';
const COLLECTOR_URL = 'https://yzland-analytics-collector.alton91.workers.dev';

function record(event: string, payload?: Record<string, unknown>) {
  const raw = localStorage.getItem('yzland-analytics');
  const log: Array<{ ts: number; event: string; payload?: Record<string, unknown> }> = raw ? JSON.parse(raw) : [];
  log.push({ ts: Date.now(), event, payload });
  localStorage.setItem('yzland-analytics', JSON.stringify(log.slice(-200)));

  const consent = localStorage.getItem(STORAGE_KEY);
  if (consent) {
    try {
      const parsed = JSON.parse(consent);
      if (parsed.analytics) {
        // Fire-and-forget to the collector
        fetch(COLLECTOR_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ event, payload, ts: Date.now() }),
        }).catch(() => {});
      }
    } catch {}
  }
}

export function useAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    record('pageview', { path: pathname });
  }, [pathname]);

  const trackWhatsAppClick = useCallback((tourTitle?: string) => {
    record('whatsapp_click', { tour: tourTitle || 'unknown', page: pathname });
  }, [pathname]);

  const trackLanguageSwitch = useCallback((from: string, to: string) => {
    record('language_switch', { from, to });
  }, []);

  return { trackWhatsAppClick, trackLanguageSwitch };
}
