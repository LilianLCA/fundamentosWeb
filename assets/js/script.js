function validaNome() {
    let txtNome = document.getElementById('txtNome')
    let nomeOk = false
    if (nome.value.length <3) {
        txtNome.innerHTML= 'Nome inválido, por favor digite novamente!'
        txtNome.style.color = 'red'
    }
    else {
        txtNome.innerHTML = 'Nome válido!'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}   

function validaEmail() {
    let txtEmail = document.getElementById('txtEmail')
    let emailOk = false
    if (email.value.indexof('@') == -1 || email.value.indexof('.') == -1) {
        txtEmail.innerHTML= 'E-mail inválido, por favor digite novamente!'
        txtEmail.style.color = 'red'
    }
    else {
        txtEmail.innerHTML = 'E-mail válido!'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}   

function validaTelefone() {
    let txtTelefone = document.getElementById('txtTelefone')
    let telefoneOk = false
    if (email.value.length) {
        txtTelefone.innerHTML= 'Número de telefone inválido, por favor digite novamente! (Atenção: acrescente o DDD da cidade)'
        txtTelefone.style.color = 'red'
    }
    else {
        txtTelefone.innerHTML= 'Telefone válido'
        txtTelefone.style.color= 'green'
        telefoneOk = true
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && telefoneOk == true) {
        alert ('Formulário enviado com sucesso!')
    }
    else {
        alert ('Por favor, preencha o formulário corretamente antes de enviar!')
    }
}