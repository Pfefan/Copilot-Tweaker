window.addEventListener('load', function() {
    // increase maxValues
    var script = document.createElement('script');
    script.textContent = `
        if (window._w && window._w["_sydConvConfig"]) {
            window._w["_sydConvConfig"]["maxTurnsPerConversation"] = 9999999999999999999;
            window._w["_sydConvConfig"]["maxTurnsPerConversationMuidUser"] = 9999999999999999999;

            window._w["_sydConvConfig"]["enableNoBingSearchResponseBackground"] = 0;

            window._w["_sydConvConfig"]["maxMessageLength"] = 9999999999999999999;
            window._w["_sydConvConfig"]["maxMessageLengthBalanced"] = 9999999999999999999;
            window._w["_sydConvConfig"]["maxMessageLengthCreative"] = 9999999999999999999;
            window._w["_sydConvConfig"]["maxMessageLengthPrecise"] = 9999999999999999999;
            window._w["_sydConvConfig"]["maxMessageLengthBalancedPro"] = 9999999999999999999;
            window._w["_sydConvConfig"]["maxMessageLengthCreativePro"] = 9999999999999999999;
            window._w["_sydConvConfig"]["maxMessageLengthPrecisePro"] = 9999999999999999999;

            window._w["_sydConvConfig"]["fileUploadMaxSize"] = 100000000000000000000;
            window._w["_sydConvConfig"]["fileUploadMaxSizePro"] = 100000000000000000000;
        }
    `;
    (document.head || document.documentElement).appendChild(script);
    script.remove();

    // Stream speeds
    var script = document.createElement('script');
    script.textContent = `
        if (window._w && window._w["_sydConvConfig"]) {
            window._w["_sydConvConfig"]["syntheticStreamSpeed"] = 10000;
            window._w["_sydConvConfig"]["enableSyntheticStreamSpeedBasedOnTone"] = 10000;
            window._w["_sydConvConfig"]["syntheticStreamSpeedForBalancedTone"] = 10000;
            window._w["_sydConvConfig"]["syntheticStreamSpeedForCreativeTone"] = 10000;
            window._w["_sydConvConfig"]["syntheticStreamSpeedForPreciseTone"] = 10000;
            window._w["_sydConvConfig"]["typingIndicatorAnimationDuration"] = 0;

            window._w["_sydConvConfig"]["enableStreamSyntheticTextResponsesForBalancedTone"] = 0;
            window._w["_sydConvConfig"]["enableStreamSyntheticTextResponsesForCreativeTone"] = 0;
            window._w["_sydConvConfig"]["enableStreamSyntheticTextResponsesForPreciseTone"] = 0;
        }
    `;
    (document.head || document.documentElement).appendChild(script);
    script.remove();

    // Remove location data
    var script = document.createElement('script');
    script.textContent = `
        if (window.syd_loc_config && window.syd_loc_config.locations && window.syd_loc_config.locations.locationsList) {
            window.syd_loc_config.locations.locationsList.forEach(location => {
                location.SourceType = 0;
                location.RegionType = 0;
                location.Center = {
                    "Latitude": 0,
                    "Longitude": 0
                };
                location.Radius = 0;
                location.Name = "";
                location.Accuracy = 0;
                location.FDConfidence = 0;
                location.CountryName = "";
                location.CountryConfidence = 0;
                location.Admin1Name = "";
                location.PopulatedPlaceName = "";
                location.PopulatedPlaceConfidence = 0;
                location.PostCodeName = "";
                location.UtcOffset = 0;
                location.Dma = 0;
            });
        }
    `;
    (document.head || document.documentElement).appendChild(script);
    script.remove();
});