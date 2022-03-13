//const nome = "Luciano Fiek";
//let nome2 = "";
let pessoaDefault = {
    nome: "Luciano Fiek",
    idade: "24",
    trabalho: "estudante",
}

let nomes = ["Luciano Fiek", "Maria Silva", "Pedro Silva"];
let pessoas = [
    {
        nome: "Luciano Fiek",
        idade: "24",
        trabalho: "estudante"
    },
    {
        nome: "Maria Silva",
        idade: "31",
        trabalho: "dev" 
    }
];



function alterarNome() {
    nome2 = "Maria Siva"
    console.log("Valor alterado");
    console.log(nome2);
}

function recebeEalteraNome(novoNome) {
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome");
    console.log(nome2);
}

function imprimirPessoa(pessoa) {
    console.log("Nome: ");
    console.log(pessoa.nome);

    console.log("Idade: ");
    console.log(pessoa.idade);

    console.log("Trabalho: ");
    console.log(pessoa.trabalho);
}


function adicionarPessoa(pessoa) {
    pessoas.push(pessoa);
}

function imprimirPessoas() {
    console.log("=====Imprimir Pessoas=====")
    pessoas.forEach ((item) => {
        console.log("Nome:");
        console.log(item.nome);

        console.log("Idade: ");
        console.log(item.idade);

        console.log("Trabalho: ");
        console.log(item.trabalho);

    })
}

imprimirPessoas();

adicionarPessoa({
    nome: "Pedro Silva",
    idade: "28",
    trabalho: "motorista"
})

imprimirPessoas();







//imprimirPessoa(pessoaDefault);

//imprimirPessoa({
// nome: "Maria Silva",
// idade: "24",
// trabalho: "dev",
//})

//recebeEalteraNome("João Silva Pereira");
//recebeEalteraNome("Maria Silva");

//alterarNome();
