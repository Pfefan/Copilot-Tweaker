window.addEventListener('load', async function() {
    const { sydConvConfig, sbcConfig } = await browser.storage.local.get(['sydConvConfig', 'sbcConfig']);
    console.log(sydConvConfig);
    if (!sydConvConfig || !sbcConfig) {
        await browser.runtime.sendMessage({ action: 'fetchAndStoreDefaultSettings' });
    }
    try {
        // Inject settings into the webpage
        var script = document.createElement('script');
        script.textContent = `
            if (window._w && window._w["_sydConvConfig"]) {
                Object.assign(window._w["_sydConvConfig"], ${JSON.stringify(sydConvConfig)});
            } else {
                window._w["_sydConvConfig"] = ${JSON.stringify(sydConvConfig)};
            }
            if (window._w && window._w["SBC"]) {
                Object.assign(window._w["SBC"], ${JSON.stringify(sbcConfig)});
            } else {
                window._w["SBC"] = ${JSON.stringify(sbcConfig)};
            }
        `;
        (document.head || document.documentElement).appendChild(script);
    } catch (error) {
        console.error('Error while injecting settings into webpage:', error);
    }
});