document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.about, .education, .skills, .projects, .interests, .contact');

    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll('.progress-bar');

    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        bar.style.transition = 'width 2s ease-in-out';

        setTimeout(() => {
            bar.style.width = width;
        }, 500); // delay to ensure the animation starts visibly
    });
});
