
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    const sections = document.querySelectorAll('section');
    const options = {
        root: null,
        threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});

//Select Modes = Filtro cursos
document.addEventListener('DOMContentLoaded', function() {
    const filterSelect = document.getElementById('difficulty-filter');
    const courseCards = document.querySelectorAll('.course-card');

    filterSelect.addEventListener('change', function() {
        const selectedDifficulty = this.value;

        courseCards.forEach(card => {
            const cardDifficulty = card.getAttribute('data-difficulty');

            if (selectedDifficulty === 'all' || cardDifficulty === selectedDifficulty) {
                card.style.display = 'block'; // Mostra o card
            } else {
                card.style.display = 'none'; // Esconde o card
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const authToken = localStorage.getItem('authToken');
    const loginLink = document.getElementById('loginLink');
    const logoutLink = document.getElementById('logoutLink');

    if (authToken) {
        // Usuário está logado
        loginLink.style.display = 'none';
        logoutLink.style.display = 'inline';
    } else {
        // Usuário não está logado
        loginLink.style.display = 'inline';
        logoutLink.style.display = 'none';
    }
});

function logout() {
    localStorage.removeItem('authToken');
    window.location.href = './Cadastro/login.html';
}