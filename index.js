// // function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme_dark') {
        setTheme('theme_light');
    } else {
        setTheme('theme_dark');
    }
}

// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('theme') === 'theme_dark') {
        setTheme('theme_dark');
    } else {
        setTheme('theme_light');
    }
})();