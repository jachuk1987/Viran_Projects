import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();
    const navigate = useNavigate();

    // 1. Scroll to top on EVERY internal navigation (route or hash change)
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname, hash]);

    // 2. Logic to handle Refresh/Initial Entry: Always go Home
    useEffect(() => {
        const perfEntries = performance.getEntriesByType('navigation');
        const isReload = perfEntries.length > 0 && perfEntries[0].type === 'reload';

        // We use sessionStorage to track if this is the very first time the app is loading
        // in this tab. This helps distinguish "initial entry" from "internal navigation".
        const hasLoadedBefore = sessionStorage.getItem('app_has_loaded');

        if (isReload || !hasLoadedBefore) {
            // If it's a reload OR the very first time entering the site (deep link)
            if (pathname !== '/' || hash !== '') {
                // Redirect to root
                navigate('/', { replace: true });
            }
        }

        // Mark that the app has now loaded at least once
        sessionStorage.setItem('app_has_loaded', 'true');
    }, []); // Empty dependency array means this runs only once when the app mounts

    return null;
};

export default ScrollToTop;
