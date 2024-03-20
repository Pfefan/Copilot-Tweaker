if (window._w && window._w["_sydConvConfig"]) {
    window._w["_sydConvConfig"]["enableMaxTurnsPerConversation"] = 0;   // disables conversation limits

    // backup incase the disabling of conversation limits doesn't work
    window._w["_sydConvConfig"]["maxTurnsPerConversation"] = 9999999999999999999;
    window._w["_sydConvConfig"]["maxTurnsPerConversationMuidUser"] = 9999999999999999999;

    // increase max values
    window._w["_sydConvConfig"]["maxMessageLength"] = 9999999999999999999;
    window._w["_sydConvConfig"]["maxMessageLengthBalanced"] = 9999999999999999999;
    window._w["_sydConvConfig"]["maxMessageLengthCreative"] = 9999999999999999999;
    window._w["_sydConvConfig"]["maxMessageLengthPrecise"] = 9999999999999999999;
    window._w["_sydConvConfig"]["maxMessageLengthBalancedPro"] = 9999999999999999999;
    window._w["_sydConvConfig"]["maxMessageLengthCreativePro"] = 9999999999999999999;
    window._w["_sydConvConfig"]["maxMessageLengthPrecisePro"] = 9999999999999999999;

    // increase max file size
    window._w["_sydConvConfig"]["fileUploadMaxSize"] = 100000000000000000000;
    window._w["_sydConvConfig"]["fileUploadMaxSizePro"] = 100000000000000000000;

    window._w["_sydConvConfig"]["fileMaxCountForChat"] = 100000000000000000000;

    // modify multimeadia search values
    window._w["_sydConvConfig"]["multimediaSearchMaxImageCount"] = 100000000000000000000;
    window._w["_sydConvConfig"]["enableNoBingSearchResponseBackground"] = 0;

    // enable chat query for previos convs
    window._w["_sydConvConfig"]["disableChatQueryForShowConv"] = 0;

    // enable two Tiered Search History
    window._w["_sydConvConfig"]["disable2TSearchHistory"] = 0;

    // Ajust stream speeds
    window._w["_sydConvConfig"]["syntheticStreamSpeed"] = 10000;
    window._w["_sydConvConfig"]["enableSyntheticStreamSpeedBasedOnTone"] = 10000;
    window._w["_sydConvConfig"]["syntheticStreamSpeedForBalancedTone"] = 10000;
    window._w["_sydConvConfig"]["syntheticStreamSpeedForCreativeTone"] = 10000;
    window._w["_sydConvConfig"]["syntheticStreamSpeedForPreciseTone"] = 10000;
    window._w["_sydConvConfig"]["typingIndicatorAnimationDuration"] = 0;
}