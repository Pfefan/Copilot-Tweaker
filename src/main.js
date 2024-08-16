window.addEventListener('load', function() {
    Promise.all([
        fetch(browser.extension.getURL('src/configs/sydConvConfig.json')).then(response => response.json()),
        fetch(browser.extension.getURL('src/configs/sbcConfig.json')).then(response => response.json())
    ]).then(([sydConvSettings, sbcSettings]) => {
        var script = document.createElement('script');
        script.textContent = `
            if (window._w && window._w["_sydConvConfig"]) {
                Object.assign(window._w["_sydConvConfig"], ${JSON.stringify(sydConvSettings)});
            } else {
                window._w["_sydConvConfig"] = ${JSON.stringify(sydConvSettings)};
            }
            if (window._w && window._w["SBC"]) {
                Object.assign(window._w["SBC"], ${JSON.stringify(sbcSettings)});
            } else {
                window._w["SBC"] = ${JSON.stringify(sbcSettings)};
            }
            if (window.CIB && CIB.config && CIB.config.features) {
                CIB.config.features.enableMaxTurnsFromBackend = false;
            } else {
                console.error('Could not find CIB.config.features. Please check if the chat widget is loaded.');
            }
        `;
        (document.head || document.documentElement).appendChild(script);
    });
});