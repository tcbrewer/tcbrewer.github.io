document.querySelectorAll('.action').forEach(button => {
    button.addEventListener('click', () => {
        const hiddenContent = button.nextElementSibling; // Find the next sibling element
        if (hiddenContent && hiddenContent.classList.contains('hide')) {
            hiddenContent.classList.toggle('show'); // Toggle the 'show' class
        }
    });
});