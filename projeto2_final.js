const prompt = require('prompt-sync')();
//Variáveis
let pontosplayer = 0;
let pontospc = 0;
let rodadas = 0;
let plchoice = '';
let pcchoice = '';
let continuar = true;
let restart = '';
const opcoes = ['Pedra','Papel','Tesoura'];
//Introdução, regras do jogo
console.log(`Jó-ken-pô
-------------------------------------------
Nesse jogo você deve escolher entre três opções, pedra, papel ou tesoura, para confrontar a opção
escolhida pelo seu adversário. A pedra vence da tesoura, a tesoura vence do papel e o papel vence
da pedra.
-------------------------------------------`)
//Laço do jogo completo
while(continuar){
    //checagem do número de rodadas
    do{
        rodadas = +prompt('Digite o número de rodadas que quer jogar: ');
        if (isNaN(rodadas) || rodadas < 0 || rodadas % 1 != 0){
            console.log('Número de rodadas inválido.')
        }
    }while(isNaN(rodadas) || rodadas < 0 || rodadas % 1 != 0)
    //Laço das rodadas
    for(c = 0; c < rodadas; c++){
        let min = Math.ceil(0);
        let max = Math.floor(2);
        pcchoice = opcoes[Math.floor(Math.random() * (2 - 0) + 0)]
        console.log(`------------------------------------------
        ${c+1}º rodada.
        ------------------------------------------`);
        //Checagem da escolha
        do{
            plchoice = prompt('Digite a sua escolha: ');
            if (plchoice.toLowerCase().trim() != 'pedra' && plchoice.toLowerCase().trim() != 'papel' && plchoice.toLowerCase().trim() != 'Tesoura'){
                console.log('Escolha inválida')
            }
        }while(plchoice.toLowerCase().trim() != 'pedra' && plchoice.toLowerCase().trim() != 'papel' && plchoice.toLowerCase().trim() != 'Tesoura')
        //Escolha player vs. escolha pc
        if (plchoice.toLowerCase().trim() == 'pedra'){
            if (pcchoice.toLowerCase() == 'pedra'){
                console.log('Foi empate!');
            }else if (pcchoice.toLowerCase() == 'papel'){
                console.log('O seu adversário escolheu papel! Você perdeu!');
                pontospc++
            }else{
                console.log('O seu adversário escolheu tesoura! Você ganhou!');
                pontosplayer++
            }
        }else if (plchoice.toLowerCase().trim() == 'papel'){
            if (pcchoice.toLowerCase() == 'papel'){
                console.log('Foi empate!');
            }else if (pcchoice.toLowerCase() == 'tesoura'){
                console.log('O seu adversário escolheu tesoura! Você perdeu!');
                pontospc++
            }else{
                console.log('O seu adversário escolheu pedra! Você ganhou!');
                pontosplayer++
            }
        }else{
            if (pcchoice.toLowerCase() == 'tesoura'){
                console.log('Foi empate!');
            }else if (pcchoice.toLowerCase() == 'pedra'){
                console.log('O seu adversário escolheu pedra! Você perdeu!');
                pontospc++
            }else{
                console.log('O seu adversário escolheu papel! Você ganhou!');
                pontosplayer++
            }
        }
    }
    //Checagem do vencedor
    console.log(`Você ganhou ${pontosplayer} rodadas e o pc ganhou ${pontospc} rodadas`);
    if (pontosplayer > pontospc){
        console.log('Parabéns! Você é o grande vencedor!');
    }else if (pontosplayer < pontospc){
        console.log('O grande vencedor é o PC!');
    }else{
        console.log('Ninguém ganhou!');
    }
    //Prompt para jogar novamente
    do{
        restart = prompt('Quer jogar novamente? (s) ou (n).');
        if (restart.toLowerCase().trim() != 's' && restart.toLowerCase().trim() != 'n'){
            console.log('Escolha inválida. Responda (s) ou (n).');
        }else if (restart.toLowerCase().trim() == 'n'){
            continuar = false;
        }
        pontosplayer = 0;
        pontospc = 0;
    }while (restart.toLowerCase().trim() != 's' && restart.toLowerCase().trim() != 'n');
}