window.addEventListener('load', function() {
    var script = document.createElement('script');
    script.src = browser.extension.getURL('src/config.js');
    console.log(script.src);
    (document.head || document.documentElement).appendChild(script);
});
