// ============================================
// THEME TOGGLE (Only for Academic page)
// ============================================

const toggleButton = document.getElementById('themeToggle');

// Only run theme toggle code if toggle button exists (Academic page only)
if (toggleButton) {
    const themeIcon = document.getElementById('themeIcon');
    const body = document.body;

    // Check if user has a saved preference for Academic page
    const savedTheme = localStorage.getItem('academicTheme') || 'day';
    body.classList.remove('day', 'night');
    body.classList.add(savedTheme);
    updateIcon(savedTheme);

    // Listen for button clicks
    toggleButton.addEventListener('click', function() {
        if (body.classList.contains('day')) {
            // Currently day, switch to night
            body.classList.remove('day');
            body.classList.add('night');
            localStorage.setItem('academicTheme', 'night');
            updateIcon('night');
        } else {
            // Currently night, switch to day
            body.classList.remove('night');
            body.classList.add('day');
            localStorage.setItem('academicTheme', 'day');
            updateIcon('day');
        }
    });

    // Function to update the icon
    function updateIcon(theme) {
        if (theme === 'night') {
            themeIcon.textContent = '☀️';
        } else {
            themeIcon.textContent = '🌙';
        }
    }
}

// ============================================
// FORCE NIGHT THEME ON PERSONAL LIFE PAGE
// ============================================

// If we're on the Personal Life page (no toggle button), force night theme
if (!toggleButton && document.body.classList.contains('night')) {
    // Remove any day class and ensure night class is applied
    document.body.classList.remove('day');
    document.body.classList.add('night');
}

// ============================================
// COLLAPSIBLE CARD FUNCTIONALITY
// ============================================

function toggleCard(headerElement) {
    // Get the parent card element
    const card = headerElement.parentElement;
    
    // Toggle the 'open' class
    card.classList.toggle('open');
}
