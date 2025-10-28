const bgOption = document.getElementById('blog-select');
bgOption.addEventListener('change', function() {
    document.body.style.backgroundColor = this.value;
});



const toggle = document.getElementById('darkModeToggle');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    toggle.textContent = 'Light';
}

if (document.body.classList.contains("dark-mode")) {
        document.body.classList.remove("dark-mode");
        darkModeBtn.textContent = "Dark Mode";
}

toggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
    toggle.textContent = 'Light';
    localStorage.setItem('theme', 'dark');
    } else {
    toggle.textContent = 'Night';
    localStorage.setItem('theme', 'light');
    }
});

document.body.style.backgroundColor = "";
    bgOption.value = "";
