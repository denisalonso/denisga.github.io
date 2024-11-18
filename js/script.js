document.addEventListener("DOMContentLoaded", function () {
    enviar = document.querySelector('#enviar');
    enviar.addEventListener('click', function () {
        mensagem = document.querySelector('.mensagem-input').value;
        li_clonado = document.querySelector('.env');
        ol = document.querySelector('ol');
        li_novo = li_clonado.cloneNode(true);

        p_do_li_novo = li_novo.querySelector(".texto-mensagem");
        p_do_li_novo.innerHTML = mensagem;
        ol.appendChild(li_novo);

        document.querySelector('.mensagem-input').value = "";   
    })
})
