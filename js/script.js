// Theme Switching Functionality
document.addEventListener('DOMContentLoaded', () => {
    const themes = ['red-theme', 'blue-theme', 'green-theme'];
    const themeButtons = document.querySelectorAll('.theme-switch button');

    themeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedTheme = button.getAttribute('data-theme');

            // Remove existing theme classes
            themes.forEach(t => document.body.classList.remove(t));

            // Add selected theme class
            document.body.classList.add(selectedTheme);

            // Save to localStorage
            localStorage.setItem('theme', selectedTheme);
        });
    });

    // Apply saved theme on load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && themes.includes(savedTheme)) {
        document.body.classList.add(savedTheme);
    }
});

// Local Clock Functionality
function updateLocalClock() {
    const now = new Date();
    const options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'America/Sao_Paulo',
        hour12: false
    };
    const timeString = now.toLocaleTimeString('en-US', options);
    const clockElement = document.getElementById('local-clock');
    if (clockElement) {
        clockElement.innerHTML = `LOCAL TIME (UTC-3): <span class="font-bold">${timeString}</span>`;
    }
}

// Start the clock when the document is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initial call to display time immediately
    updateLocalClock();

    // Update the clock every second
    setInterval(updateLocalClock, 1000);
});