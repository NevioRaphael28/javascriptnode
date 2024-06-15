//exemplo com variaveis globais
function exibirMensagemGlobal(){
    console.log(msgGlobal);
}

//exemplo sem variavel global
function exibirMensagemLocal(msg){
    console.log(msg);
}

var msgGlobal = "Olá Mundo Global!!!";
let msgLocal = "Olá Mundo Local!!!";
exibirMensagemGlobal();
exibirMensagemLocal(msgLocal);