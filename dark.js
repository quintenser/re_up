(function () {
    "use strict";
})();

function darkCheck() {
    let matched = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (matched) {
        darkMode()
    }
}

function darkMode() {
    document.documentElement.style.setProperty('--buttonColor', 'groove 5px #39FF14');
    document.body.style.backgroundColor = "black";
}

darkCheck()