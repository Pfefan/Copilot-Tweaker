async function fetchAndStoreDefaultSettings() {
    try {
        const response = await fetch(browser.extension.getURL('src/configs/sydConvConfig.json'));
        const defaultSettings = await response.json();
        await browser.storage.local.set({ settings: defaultSettings });
        console.log('Default settings loaded and stored.');
    } catch (error) {
        console.error('Error fetching or storing default settings:', error);
    }
}

browser.runtime.onInstalled.addListener(() => {
    fetchAndStoreDefaultSettings();
});

browser.storage.local.get('settings')
    .then(async result => {
        if (!result.settings) {
            await fetchAndStoreDefaultSettings();
        }
    })
    .catch(error => {
        console.error('Error getting settings from local storage:', error);
    });
