(
    function() {
        const script = document.currentScript;
        const widgetURL = script.getAttribute('data-widget-url') || './vue-widget.umd.js';
        const apiKey = script.getAttribute('data-api-key');

        const loadWidget = () => {
            const scriptTag = document.createElement('script');
            scriptTag.src = widgetURL;
            scriptTag.onload = () => {
                if (!apiKey) {
                    console.error('API key is required to initialize the widget');
                    return;
                }
                const initWidget = () => {
                    if (typeof window.createVueWidget === 'function') {
                        window.createVueWidget('widget-container', { apiKey });
                    } else {
                        setTimeout(initWidget, 50);
                    }
                }
            }
            document.body.appendChild(scriptTag);
        }
        document.addEventListener('DOMContentLoaded', loadWidget);
    }
)();
