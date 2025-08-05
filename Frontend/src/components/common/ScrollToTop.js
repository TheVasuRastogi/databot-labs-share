import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Disable browser's default scroll restoration
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        // Scroll to top immediately when route changes
        // Using setTimeout to ensure the DOM has updated
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 0);

        // Alternative: Smooth scroll (uncomment if you prefer smooth animation)
        // setTimeout(() => {
        //     window.scrollTo({
        //         top: 0,
        //         left: 0,
        //         behavior: 'smooth'
        //     });
        // }, 0);
    }, [pathname]);

    return null;
};

export default ScrollToTop;