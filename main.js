// Code for switching between tabs

document.addEventListener('DOMContentLoaded', function() {
    const tabTitles = document.querySelectorAll('.tab-title');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabTitles.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs and panes
            tabTitles.forEach(t => t.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));

            // Add active class to the clicked tab and corresponding pane
            this.classList.add('active');
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
});

// Restart for typing animation
document.addEventListener('DOMContentLoaded', function() {
    const codeBlock = document.querySelector('#codeBlock');

    function restartAnimation() {
        const lines = codeBlock.querySelectorAll('.lineOfCode');
        lines.forEach(line => {
            line.style.animation = 'none';
            void line.offsetWidth;
            line.style.animation = '';
        });
    }

    const typingDuration = 5400;
    const eraseDuration = 2000;
    const delay = 1000;

    const totalCycleDuration = typingDuration + eraseDuration + delay;

    setInterval(restartAnimation, totalCycleDuration);

    restartAnimation();
});

// document.addEventListener('DOMContentLoaded', function() {
//     const describeElementFirst = document.querySelector('.describe-first');
//     const describeElementSecond = document.querySelector('.describe-second');
//
//     setTimeout(function() {
//         describeElementFirst.classList.add('fade-in');
//     }, 6000);
//     setTimeout(function() {
//         describeElementSecond.classList.add('fade-in');
//     }, 3000);
// });