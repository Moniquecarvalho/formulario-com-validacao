const camposFormulario = document.querySelectorAll('.dados');
const botaoEnviar = document.querySelector('button');

botaoEnviar.addEventListener('click', (e) => {
    e.preventDefault();

    camposFormulario.forEach((input) => {
        if (input.value.trim() === "") {
            input.classList.add('error');
            input.nextElementSibling.classList.remove('error-hidden');
        } else {
            input.classList.remove('error');
            input.classList.add('success');
            input.nextElementSibling.classList.add('error-hidden');
        }
    });

});
