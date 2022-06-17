const readline = require('readline')//importando readline do node

const rl = readline.createInterface(process.stdin, process.stdout)// instanciando/criando

const props = [] // array vazio
let status = false //status se digitou SAIR a primeira vez
rl.setPrompt('Qual propriedade você quer guardar?\n')//setando uma pergunta no prompt, vai fazer a pergunta no terminal
quest() // chamando a function da linha 9 (invocando) para fazer ela rodar
function quest() { // criando function
    rl.prompt() //enviando a pergunta para o terminal/usuario
    rl.on('line', (response) => {//vai ser um ouvinte, line vai ficar 'ouvindo' o usuario
        if(response === 'sair' && status === false){ // verificar se é sair && se o estatus é falso
            status = true
            order() //invocando
           rl.close()//fechando a instancia do readline
        }else if(status != true){//verificando diferente de true
            props.push(response)//salvando a respostas na const
            quest()//invocando a mesma function da linha 9
        }
    })
}

function order(){
    const unicProps = [...new Set(props)] // const, vai verificar o ARRAY props e vai retirar o elemento IGUAL dentro dele
    const propsOrder = unicProps.sort()// vai selecionar o array e deixa-lo em ordem alfabética
    console.log('-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-');// log
    propsOrder.forEach(item=>console.log(item+'\n')); // selecionando o array, elemento por elemento e printando no console
    console.log('-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-');//log
    return
}
