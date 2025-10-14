import { useEffect, useCallback } from 'react';

export function useGoogleAnalytics(measurementId) {
  // Load GA script dynamically
  useEffect(() => {
    if (!measurementId) return;

    // Create script tag
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize custom namespace for MFE
    window.mfeDataLayer = window.mfeDataLayer || [];
    function mfeGtag() {
      window.mfeDataLayer.push(arguments);
    }

    mfeGtag('js', new Date());
    mfeGtag('config', measurementId);

    // Cleanup on unmount
    return () => {
      document.head.removeChild(script);
      window.mfeDataLayer = [];
    };
  }, [measurementId]);

  // Event tracking function
  const trackEvent = useCallback((eventName, params = {}) => {
    if (typeof window.mfeDataLayer === 'undefined') return;
    window.mfeDataLayer.push(['event', eventName, params]);
  }, []);

  return { trackEvent };
}
