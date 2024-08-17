document.getElementById('savebtn').addEventListener('click', async function(e) {
    e.preventDefault();

    const settings = [
        { id: 'enableMaxTurns', type: 'checkbox', key: 'enableMaxTurnsPerConversation' },
        { id: 'maxTurns', type: 'number', key: 'maxTurnsPerConversation' },
        { id: 'maxTurnsMuid', type: 'number', key: 'maxTurnsPerConversationMuidUser' },
        { id: 'loadusertier', type: 'select', key: 'loadUserTier' }
    ];

    try {
        const { sydConvConfig } = await browser.storage.local.get('sydConvConfig');
        const updatedsydConvSettings = { ...sydConvConfig };

        settings.forEach(setting => {
            console.log(setting);
            const element = document.getElementById(setting.id);
            if (setting.type === 'checkbox') {
                updatedsydConvSettings[setting.key] = element.checked ? 1 : 0;
            } else if (setting.type === 'number') {
                updatedsydConvSettings[setting.key] = parseInt(element.value, 10);
            } else if (setting.type === 'select') {
                updatedsydConvSettings[setting.key] = element.value;
            }
        });

        await browser.storage.local.set({ sydConvConfig: updatedsydConvSettings });
    } catch (error) {
        console.error('Error saving settings:', error);
    }
});

window.addEventListener('load', async function() {
    try {
        const { sydConvConfig } = await browser.storage.local.get('sydConvConfig');

        const settings = [
            { id: 'enableMaxTurns', type: 'checkbox', key: 'enableMaxTurnsPerConversation' },
            { id: 'maxTurns', type: 'number', key: 'maxTurnsPerConversation' },
            { id: 'maxTurnsMuid', type: 'number', key: 'maxTurnsPerConversationMuidUser' },
            { id: 'loadusertier', type: 'select', key: 'loadUserTier' }
        ];

        settings.forEach(setting => {
            const element = document.getElementById(setting.id);
            if (setting.type === 'checkbox') {
                element.checked = sydConvConfig[setting.key];
            } else if (setting.type === 'number' || setting.type === 'select') {
                element.value = sydConvConfig[setting.key];
            }
        });
    } catch (error) {
        console.error('Error getting settings:', error);
    }
});
