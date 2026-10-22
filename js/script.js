
const box = document.getElementById('productHover');

if (box) {
    const video = box.querySelector('video');

    box.addEventListener('mouseenter', () => {
        box.classList.add('ativo');
        video.play().catch(() => {});
    });

    box.addEventListener('mouseleave', () => {
        box.classList.remove('ativo');
        video.pause();
        video.currentTime = 0;
    });
}


const formSuporte = document.getElementById('suporte');

if (formSuporte) {
    formSuporte.addEventListener('submit', (e) => {
        e.preventDefault();
        formSuporte.reset();

        const aviso = document.getElementById('avisoSucesso');
        aviso.hidden = false;
        aviso.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
}
