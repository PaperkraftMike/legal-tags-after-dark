/**
 * analytics.js
 *
 * Safe wrappers around third-party tracking (Microsoft Clarity, Facebook Pixel).
 *
 * Wrapping every call in try/catch silences the FB/IG in-app browser WebKit
 * bridge errors ("window.webkit.messagehandlers" / "reading 'value'") that
 * otherwise climb the Clarity error counter and can interrupt surrounding
 * logic (e.g. the survey advancing). The guards also no-op cleanly when a
 * tracker hasn't loaded yet.
 */

// Microsoft Clarity custom event
export function clarityEvent(name, data) {
  if (typeof window === 'undefined') return;
  try {
    if (typeof window.clarity !== 'function') return;
    if (data !== undefined) {
      const value = typeof data === 'object' && data !== null
        ? JSON.stringify(data)
        : String(data);
      window.clarity('set', name, value);
    }
    window.clarity('event', name);
  } catch (e) {
    // Swallow. Tracking failures must never break UX.
  }
}

// Facebook Pixel track
export function fbqTrack(event, params, options) {
  if (typeof window === 'undefined') return;
  try {
    if (typeof window.fbq !== 'function') return;
    if (options) {
      window.fbq('track', event, params || {}, options);
    } else {
      window.fbq('track', event, params || {});
    }
  } catch (e) {
    // Swallow.
  }
}

// Detect Facebook / Instagram in-app browser.
export function isInAppBrowser() {
  if (typeof navigator === 'undefined') return false;
  const ua = navigator.userAgent || '';
  return /FBAN|FBAV|FB_IAB|FB4A|Instagram/i.test(ua);
}
