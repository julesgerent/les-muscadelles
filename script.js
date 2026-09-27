const themeToggleBtn = document.getElementById('themeToggle');
const htmlElement = document.documentElement;
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

function updateTheme(isDark) {
    if (isDark) {
        htmlElement.setAttribute('data-theme', 'dark');
        themeToggleBtn.textContent = 'Mode Clair';
    } else {
        htmlElement.setAttribute('data-theme', 'light');
        themeToggleBtn.textContent = 'Mode Sombre';
    }
}

updateTheme(prefersDarkScheme.matches);

themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    updateTheme(currentTheme !== 'dark');
});