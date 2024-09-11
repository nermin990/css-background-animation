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

