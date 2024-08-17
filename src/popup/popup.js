const sydsettings = [
    { id: 'enableMaxTurns', type: 'checkbox', key: 'enableMaxTurnsPerConversation' },
    { id: 'enableStreamSyntheticTextResponses', type: 'checkbox', key: 'enableStreamSyntheticTextResponses' },
    { id: 'enableWelcomeCopilotProButton', type: 'checkbox', key: 'enableWelcomeCopilotProButton' },
    { id: 'enableSendFeedback', type: 'checkbox', key: 'enableSendFeedback' },
    { id: 'enableMessageExport', type: 'checkbox', key: 'enableMessageExport' },
    { id: 'enableFlatActionBar', type: 'checkbox', key: 'enableFlatActionBar' },
    { id: 'enableScreenshotIgnoreOnCibSerp', type: 'checkbox', key: 'enableScreenshotIgnoreOnCibSerp' },
    { id: 'enableStandaloneUtility', type: 'checkbox', key: 'enableStandaloneUtility' },
    { id: 'enableThreadShareLandingPage', type: 'checkbox', key: 'enableThreadShareLandingPage' },
    { id: 'enableThreadContextMenu', type: 'checkbox', key: 'enableThreadContextMenu' },
    { id: 'enableMessageExportWithPlainText', type: 'checkbox', key: 'enableMessageExportWithPlainText' },
    { id: 'enableGetChats', type: 'checkbox', key: 'enableGetChats' },
    { id: 'enableThreadSync', type: 'checkbox', key: 'enableThreadSync' },
    { id: 'disableTierLoadBalancingCall', type: 'checkbox', key: 'disableTierLoadBalancingCall' },
    { id: 'enableThreads', type: 'checkbox', key: 'enableThreads' },
    { id: 'enableSydShare', type: 'checkbox', key: 'enableSydShare' },
    { id: 'enableSydCookLoc', type: 'checkbox', key: 'enableSydCookLoc' },
    { id: 'convBackBtn', type: 'checkbox', key: 'convBackBtn' },
    { id: 'enableToneDownProtectedMessage', type: 'checkbox', key: 'enableToneDownProtectedMessage' },
    { id: 'enableVisualSearch', type: 'checkbox', key: 'enableVisualSearch' },
    { id: 'enableFileUploadDirect', type: 'checkbox', key: 'enableFileUploadDirect' },
    { id: 'disableWelcomeScreen', type: 'checkbox', key: 'disableWelcomeScreen' },
    { id: 'enableWelcomeScreenV3', type: 'checkbox', key: 'enableWelcomeScreenV3' },
    { id: 'enableAIPersonasForDesktop', type: 'checkbox', key: 'enableAIPersonasForDesktop' },
    { id: 'enableFileUploadOfficeFilesSupport', type: 'checkbox', key: 'enableFileUploadOfficeFilesSupport' },
    { id: 'enableFileUploadAudioSupport', type: 'checkbox', key: 'enableFileUploadAudioSupport' },
    { id: 'enableNotebookMode', type: 'checkbox', key: 'enableNotebookMode' },
    { id: 'enableShiftEnterNotebook', type: 'checkbox', key: 'enableShiftEnterNotebook' },
    { id: 'disableShareLinkShowntbk', type: 'checkbox', key: 'disableShareLinkShowntbk' },
    { id: 'isNewBingChat', type: 'checkbox', key: 'isNewBingChat' },
    { id: 'enableBingChatPath', type: 'checkbox', key: 'enableBingChatPath' },
    { id: 'enableDynamicFormCode', type: 'checkbox', key: 'enableDynamicFormCode' },
    { id: 'enableFreeSydney', type: 'checkbox', key: 'enableFreeSydney' },
    { id: 'enableGPTCreator', type: 'checkbox', key: 'enableGPTCreator' },
    { id: 'enableGptCreatorDeprecationAlert', type: 'checkbox', key: 'enableGptCreatorDeprecationAlert' },
    { id: 'enableAlwaysSendMsg', type: 'checkbox', key: 'enableAlwaysSendMsg' },
    { id: 'initialShowConvPresent', type: 'checkbox', key: 'initialShowConvPresent' },
    { id: 'enableSetConvQueryFlag', type: 'checkbox', key: 'enableSetConvQueryFlag' },
    { id: 'enableNoScrollDownOnInit', type: 'checkbox', key: 'enableNoScrollDownOnInit' },
    { id: 'isMSAAuthenticated', type: 'checkbox', key: 'isMSAAuthenticated' },
    { id: 'isBingUserSignedIn', type: 'checkbox', key: 'isBingUserSignedIn' },
    { id: 'maxTurns', type: 'number', key: 'maxTurnsPerConversation' },
    { id: 'maxTurnsMuid', type: 'number', key: 'maxTurnsPerConversationMuidUser' },
    { id: 'maxMessageLength', type: 'number', key: 'maxMessageLength' },
    { id: 'maxMessageLengthBalanced', type: 'number', key: 'maxMessageLengthBalanced' },
    { id: 'maxMessageLengthCreative', type: 'number', key: 'maxMessageLengthCreative' },
    { id: 'maxMessageLengthPrecise', type: 'number', key: 'maxMessageLengthPrecise' },
    { id: 'maxMessageLengthBalancedPro', type: 'number', key: 'maxMessageLengthBalancedPro' },
    { id: 'maxMessageLengthCreativePro', type: 'number', key: 'maxMessageLengthCreativePro' },
    { id: 'maxMessageLengthPrecisePro', type: 'number', key: 'maxMessageLengthPrecisePro' },
    { id: 'syntheticStreamSpeed', type: 'number', key: 'syntheticStreamSpeed' },
    { id: 'fileSizeLimitationPro', type: 'number', key: 'fileSizeLimitationPro' },
    { id: 'fileSizeLimitation', type: 'number', key: 'fileSizeLimitation' },
    { id: 'audioFileSizeLimitation', type: 'number', key: 'audioFileSizeLimitation' },
    { id: 'fileMaxCountForChat', type: 'number', key: 'fileMaxCountForChat' },
    { id: 'multimediaSearchMaxImageCount', type: 'number', key: 'multimediaSearchMaxImageCount' },
    { id: 'loadusertier', type: 'select', key: 'loadUserTier' },
];
sdbsettings = [
    { id: 'showToneSelector', type: 'checkbox', key: 'showToneSelector' },
    { id: 'enablePerfTracker', type: 'checkbox', key: 'features.enablePerfTracker' },
    { id: 'enableE2EPerf', type: 'checkbox', key: 'features.enableE2EPerf' },
    { id: 'enableWelcomeScreen', type: 'checkbox', key: 'features.enableWelcomeScreen' },
];

document.getElementById('savebtn').addEventListener('click', async function(e) {
    e.preventDefault();

    try {
        const { sydConvConfig } = await browser.storage.local.get('sydConvConfig');
        const { sbcConfig } = await browser.storage.local.get('sbcConfig');
        const updatedsydConvSettings = { ...sydConvConfig };
        const updatedsbcSettings = { ...sbcConfig };

        sydsettings.forEach(setting => {
            const element = document.getElementById(setting.id);
            if (setting.type === 'checkbox') {
                updatedsydConvSettings[setting.key] = element.checked ? 1 : 0;
            } else if (setting.type === 'number') {
                updatedsydConvSettings[setting.key] = parseInt(element.value, 10);
            } else if (setting.type === 'select') {
                updatedsydConvSettings[setting.key] = element.value;
            }
        });
        sdbsettings.forEach(setting => {
            const element = document.getElementById(setting.id);
            const keys = setting.key.split('.');
            if (keys.length === 1) {
                if (setting.type === 'checkbox') {
                    updatedsbcSettings[keys[0]] = element.checked ? 1 : 0;
                } else if (setting.type === 'number') {
                    updatedsbcSettings[keys[0]] = parseInt(element.value, 10);
                } else if (setting.type === 'select') {
                    updatedsbcSettings[keys[0]] = element.value;
                }
            } else if (keys.length === 2) {
                if (setting.type === 'checkbox') {
                    updatedsbcSettings[keys[0]][keys[1]] = element.checked ? 1 : 0;
                } else if (setting.type === 'number') {
                    updatedsbcSettings[keys[0]][keys[1]] = parseInt(element.value, 10);
                } else if (setting.type === 'select') {
                    updatedsbcSettings[keys[0]][keys[1]] = element.value;
                }
            }
        });

        await browser.storage.local.set({ 
            sydConvConfig: updatedsydConvSettings,
            sbcConfig: updatedsbcSettings
        });
        document.getElementById('reloadbtn').style.display = 'inline-flex';
    } catch (error) {
        console.error('Error saving settings:', error);
    }
});

document.getElementById('reloadbtn').addEventListener('click', function() {
    browser.tabs.reload();
});

window.addEventListener('load', async function() {
    try {
        const { sydConvConfig } = await browser.storage.local.get('sydConvConfig');
        const { sbcConfig } = await browser.storage.local.get('sbcConfig');

        sydsettings.forEach(setting => {
            const element = document.getElementById(setting.id);
            if (setting.type === 'checkbox') {
                element.checked = sydConvConfig[setting.key];
            } else if (setting.type === 'number' || setting.type === 'select') {
                element.value = sydConvConfig[setting.key];
            }
        });

        sdbsettings.forEach(setting => {
            const element = document.getElementById(setting.id);
            const keys = setting.key.split('.');
            if (keys.length === 1) {
                if (setting.type === 'checkbox') {
                    element.checked = sbcConfig[keys[0]];
                } else if (setting.type === 'number' || setting.type === 'select') {
                    element.value = sbcConfig[keys[0]];
                }
            } else if (keys.length === 2) {
                if (setting.type === 'checkbox') {
                    element.checked = sbcConfig[keys[0]][keys[1]];
                } else if (setting.type === 'number' || setting.type === 'select') {
                    element.value = sbcConfig[keys[0]][keys[1]];
                }
            }
        });
    } catch (error) {
        console.error('Error getting settings:', error);
    }
});