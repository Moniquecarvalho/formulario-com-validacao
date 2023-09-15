const formulario = document.getElementById('register');
const dadosUsuario = document.querySelectorAll('.dados');
const botao = document.getElementById('button');

botao.addEventListener('click', function (event) {
    event.preventDefault();

    dadosUsuario.forEach(input => {
        if (input.value.trim() === "") {
            input.classList.remove('success');
            input.classList.add('error');
            input.nextElementSibling.classList.remove('error-hidden');
        } else {
            input.classList.remove('error');
            input.classList.add('success');
            input.nextElementSibling.classList.add('error-hidden');
        }
    });

});
