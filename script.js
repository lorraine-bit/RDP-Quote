document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('rdp-intake-form');
    const steps = Array.from(document.querySelectorAll('.form-step'));
    const nextBtns = document.querySelectorAll('.next-btn');
    const prevBtns = document.querySelectorAll('.prev-btn');
    const progressBar = document.getElementById('progress-bar');
    const successContainer = document.getElementById('success-container');

    let currentStep = 1;

    const updateStep = (step) => {
        steps.forEach(s => s.classList.remove('active'));
        const stepEl = document.querySelector(`.form-step[data-step="${step}"]`);
        if (stepEl) {
            stepEl.classList.add('active');
        }
        const progress = (step / steps.length) * 100;
        if (progressBar) {
            progressBar.style.width = `${progress}%`;
        }
        const intakeForm = document.getElementById('intake-form');
        if (intakeForm) {
            intakeForm.scrollIntoView({ behavior: 'smooth' });
        }
    };

    nextBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (currentStep < steps.length) {
                currentStep++;
                updateStep(currentStep);
            }
        });
    });

    prevBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (currentStep > 1) {
                currentStep--;
                updateStep(currentStep);
            }
        });
    });

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            form.style.display = 'none';
            if (successContainer) {
                successContainer.style.display = 'block';
            }
        });
    }
});

