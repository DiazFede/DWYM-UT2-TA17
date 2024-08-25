const btnIncrementar = document.getElementById('incrementar');
const numero = document.getElementById('numero');

btnIncrementar.addEventListener('click', function() {
    numero.textContent = parseInt(numero.textContent) + 1;
});
