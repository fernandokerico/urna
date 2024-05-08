/*Variável de controle de interface*/
let seuVotoPara = document.querySelector('.info-voto-titulo span')
let cargo = document.querySelector('.info-voto-cargo')
let descricao = document.querySelector('.info-voto-detalhe')
let aviso = document.querySelector('.instrucoes')
let lateral = document.querySelector('.info-imagem')
let numeros = document.querySelector('.info-voto-numeros')

/*Variável de controle de ambiente*/
let etapaAtual = 0
let numero = ''
let votoBranco = false
let votos = []

function comecarEtapa(){
    // seleciona a etapa atual com base no valor da variavel etapaAtual
    let etapas = etapas[etapaAtual]

    // inicializando variaveis para armazenar o HTML dos numeros de votação
    let numeroHtml = ''
    let numero = ''
    let votoBranco = false

    // criar os elementos HTML para exibir os numeros de votação

    for (let i =0; i < etapa.numeros; i++){
        // se for o primeiro numero, adiciona a classe 'pisca' para animação
        if(i===0){
            numero += '<div class="numero pisca"></div>'
        }else{
            numero += '<div class="numero"></div>'
        }
    }
    // Escondendo o elemento HTML que exibe "Seu voto para..."
    seuVotoPara.style.display = 'none'

    // Atualizando o elemento HTML que exibe titulo de etapa (cargo)
    cargo.innerHTML = etapa.titulo

    // Limpa o elemento HTML que exibe a descrição do candidato
    descricao.innerHTML = ''

    // Escondendo
    aviso.style.display = 'none'

    // Limpa o Elemento HTML que exibe as fotos dos candidatos
    lateral.innerHTML = ''

    //atualiza o elemento HTML que exibe os numeros de votação
    numero.innerHTML = numeroHtml
}

function atualizarInterface(){
    // selecionadno a etapa atual
    let etapa = etapas[etapaAtual]

    //  filtra os candidatos da etapa atual para encontrar o candidato correspondente ao numero digitado
    let candidato = etapa.candidatos.filter((item)=> {
        if(item.numero === numero){
            return true
        }else{
            return false
        }
    })

    //se um candidato correspondente foi encontrado
    if(candidato.length > 0){
        // seleciona o primeiro candidato da lista
        // (pode haver apenas um candidato com o mesmo numero)
        candidato = [0]

        // exibe o elemento HTML que mostra "seu voto para..."
        seuVotoPara.style.display = 'block'

        // exibe o aviso de voto branco/nulo
        aviso.style.display = 'block'

        // atualiza o elemento HTML que exibe o nome, partido e vice
        descricao.innerHTML = `Nome: ${candidato.nome}<br/>Partido: ${candidato.partido}<br/>Vice:${candidato.vice}`

        // cria o HTML para exibir as fotos do candidato
        descricao.innerHTML = ''
        for (let i in candidato.fotos){
            if( candidato.fotos){
            // verifica se a foto é pequena (small) e adiciona a classe 'small' conforme necessario
            fotosHtml += `<div class="info-imagem small"><img src="images/${candidato.fotos[i].url}" alt=""/>${candidato.fotos[i].legenda}</div>`
        
        }else{
            fotosHtml += `<div class="info-imagem"><img src="images/${candidato.fotos[i].url}" alt=""/>${candidato.fotos[i].legenda}</div>`
        }
    }

}

function clicou(n){
    // selecionando o elemento HTML com a classe 'numero pisca'
    let elNumero = document.querySelector('.numero.pisca')

    if(elNumero !== null){
        // define o valor do numero no elemento HTML
        elNumero.innerHTML = n

        // concatena o numero ao valor da variavel 'numero'
        elNumero = `${numero}${n}`
         // remove a class 'pisca' do numero atual
         elNumero.classList.remove('pisca')

         // verificando se existe um proximo numero na sequencia
         if(elNumero.nextElementSibling !== null){
            // adiciona a classe 'pisca' ao proximo numero na sequencia
            elNumero.nextElementSibling.add('pisca')
         }else{
            // se não houver o proximo numero, chama a funcao para atualizar a interface
            atualizarInterface()
         }

        // atualiza o elemento HTML que exibe as fotos do candidato
        lateral.innerHTML = fotosHtml
    }else{ // se nenhum candidato correspondente foi encontrado exibe o elemento HTML que mostra "Seu voto para..."
        seuVotoPara.style.display = 'block'

        // exibe o aviso de voto nulo/branco
        aviso.style.display = 'block'

        // atualiza o elemento HTML que exibe o aviso de voto nulo
        descricao.innerHTML = '<div class="aviso--grande pisca">VOTO NULO</div>'

    }

}

function branco(){

}

function corrige(){

}

function confirma(){
    
}

comecarEtapa()
