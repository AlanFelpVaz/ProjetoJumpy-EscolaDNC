
//a maior gambiarra ja feita


function verificar(){

    //aqui pega todos elementos necessarios

    let nome = document.getElementById("nome")
    let email = document.getElementById("email")
    let telefone = document.getElementById("telefone")
    let cpf = document.getElementById("cpf")
    let senha = document.getElementById("senha")

    const btnSpan = document.querySelector('#erroBtn')

    // aqui remove a mensagem de erro

    let msgErro = document.querySelectorAll('form .cadastro');

    if(msgErro.length > 0){
        document.querySelector('#erro1').textContent = ``;
        document.querySelector('#erro2').textContent = ``;
        document.querySelector('#erro3').textContent = ``;
        document.querySelector('#erro4').textContent = ``;
        document.querySelector('#erro5').textContent = ``;
    }

    // aqui adiciona a mensagem de erro se os espaços estiverem vazios
    // vai passando cada input por vez, não do jeito que eu queria, mas funciona

    if (nome.value == '') {
        document.querySelector('#erro1').textContent = `'Campo Obrigatório'`;
        btnSpan.classList.remove('msgBtnS')
        btnSpan.classList.add('msgBtnE')
        document.querySelector('#erroBtn').textContent = `Campos obrigatórios não registrados.`
    } else if (email.value == '') {
        document.querySelector('#erro2').textContent = `'Campo Obrigatório'`;
        btnSpan.classList.remove('msgBtnS')
        btnSpan.classList.add('msgBtnE')
        document.querySelector('#erroBtn').textContent = `Campos obrigatórios não registrados.`
    } else if (telefone.value == '') {
        document.querySelector('#erro3').textContent = `'Campo Obrigatório'`;
        btnSpan.classList.remove('msgBtnS')
        btnSpan.classList.add('msgBtnE')
        document.querySelector('#erroBtn').textContent = `Campos obrigatórios não registrados.`
    } else if (cpf.value == '') {
        document.querySelector('#erro4').textContent = `'Campo Obrigatório'`;
        btnSpan.classList.remove('msgBtnS')
        btnSpan.classList.add('msgBtnE')
        document.querySelector('#erroBtn').textContent = `Campos obrigatórios não registrados.`
    } else if (senha.value == '') {
        document.querySelector('#erro5').textContent = `'Campo Obrigatório'`;
        btnSpan.classList.remove('msgBtnS')
        btnSpan.classList.add('msgBtnE')
        document.querySelector('#erroBtn').textContent = `Campos obrigatórios não registrados.`

    } else {
        btnSpan.classList.remove('msgBtnE')
        btnSpan.classList.add('msgBtnS')
        document.querySelector('#erroBtn').textContent = `Sucesso!`
    }

    // em cima adiciona a mensagem de sucesso caso todos inputs estejam com algum texto

    // usei classes para fazer a mensagem de erro sumir e aparecer, usando classlist .add e .remove
    // sei que poderia ter feito de maneira mais facíl e melhor, irei melhorar

}