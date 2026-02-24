// Utility to manage scroll restoration for better navigation experience

export const scrollToTop = (behavior = 'auto') => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: behavior
    });
};

export const scrollToElement = (elementId, offset = 0) => {
    const element = document.getElementById(elementId);
    if (element) {
        const elementPosition = element.offsetTop - offset;
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
};

// Disable scroll restoration so we can manage it ourselves
export const disableScrollRestoration = () => {
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
};

// Re-enable browser scroll restoration
export const enableScrollRestoration = () => {
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'auto';
    }
};