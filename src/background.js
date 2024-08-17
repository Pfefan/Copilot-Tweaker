async function fetchAndStoreDefaultSettings() {
    try {
        const sydSettings = await fetch(browser.extension.getURL('src/configs/sydConvConfig.json')).then(response => response.json());
        const sbcSettings = await fetch(browser.extension.getURL('src/configs/sbcConfig.json')).then(response => response.json());
        await browser.storage.local.set({ sydConvConfig: sydSettings, sbcConfig: sbcSettings });
    } catch (error) {
        console.error('Error fetching or storing default settings:', error);
    }
}

browser.runtime.onInstalled.addListener(() => {
    fetchAndStoreDefaultSettings();
});

async function ensureSettingsInStorage() {
    try {
        const { sydConvConfig, sbcConfig } = await browser.storage.local.get(['sydConvConfig', 'sbcConfig']);
        if (!sydConvConfig || !sbcConfig) {
            await fetchAndStoreDefaultSettings();
        }
    } catch (error) {
        console.error('Error getting settings from local storage:', error);
    }
}

ensureSettingsInStorage();

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'fetchAndStoreDefaultSettings') {
        fetchAndStoreDefaultSettings().then(() => {
            sendResponse({ status: 'success' });
        }).catch(error => {
            sendResponse({ status: 'error', message: error.message });
        });
        return true;
    }
});