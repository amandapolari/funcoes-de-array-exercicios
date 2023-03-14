// Meu objeto:
const objeto = {
    nome: 'astrodev',
    profissao: 'Dev das estrelas',
    username: 'astrodev_labenu',
    senha: 'melhorDeTodos',
};

// 1)
const letrasEmCaixaAlta = (item) => {
    item = { ...objeto };
    item.nome = item.nome.toUpperCase();
    item.profissao = item.profissao.toUpperCase();
    item.username = item.username.toUpperCase();
    item.senha = item.senha.toUpperCase();
    return item;
};
// console.log(letrasEmCaixaAlta(objeto));

// 2)
const mensagemCorrida = (item) => {
    const msg = `O nome é ${item.nome}, a profissão é ${item.profissao}, o username é ${item.username} e a senha é ${item.senha}.`;
    return msg;
};
// console.log(mensagemCorrida(objeto));

// 3)
const aplicaFuncionalidade = (objetoQualquer, funcaoCallback) => {
    console.log(funcaoCallback(objetoQualquer));
};

// Chamadas:
aplicaFuncionalidade(objeto, letrasEmCaixaAlta);
aplicaFuncionalidade(objeto, mensagemCorrida);
