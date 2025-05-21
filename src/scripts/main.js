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
});