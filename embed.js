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
                window.createVueWidget('widget-container', { apiKey });
            }
            document.body.appendChild(scriptTag);
        }
        document.addEventListener('DOMContentLoaded', loadWidget);
    }
)()