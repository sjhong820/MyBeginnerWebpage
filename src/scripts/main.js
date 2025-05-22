// Status window
document.addEventListener('DOMContentLoaded', function() {
    const openBtn = document.getElementById('open-status');
    const closeBtn = document.getElementById('close-status');
    const status = document.querySelector('.status');

    openBtn.addEventListener('click', function() {
        status.style.display = 'flex';
    });

    closeBtn.addEventListener('click', function() {
        status.style.display = 'none';
    });

// Accordion
document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            this.classList.toggle('active');
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});