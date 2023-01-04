---
layout: PostLayout
metaTitle: Escreva Contratos Inteligente em Cadence Para Votações
addTitleSuffix: true
metaTags: []
title: Escreva Contratos Inteligente em Cadence Para Votações
colors: colors-d
date: '2022-12-21'
excerpt: >-
  O smart contract em Cadence é um código que é executado em uma rede
  blockchain, que é uma tecnologia de banco de dados descentralizada. Ele é
  utilizado para realizar eleições de forma segura e eficiente, permitindo que
  os participantes votem em uma das propostas disponíveis e armazenando as
  contagens de votos para cada uma das propostas. O smart contract possui três
  recursos principais: MaioriaGanha, Voto e Administrar. O recurso MaioriaGanha
  é o contrato principal e define as variáveis propostas e votos, bem como as
  funções processar e init. O recurso Voto permite que os participantes votem em
  uma das propostas e armazenem suas escolhas em uma variável escolha. O recurso
  Administrar permite que o administrador inicialize as propostas e crie novas
  instâncias do recurso Voto.
featuredImage:
  type: ImageBlock
  url: >-
    /images/Escreva Contratos Inteligente em Cadence Para Votações
    diegofornalha.png
  altText: Escreva Contratos Inteligente em Cadence Para Votações
  caption: >-
    O smart contract em Cadence é um código que é executado em uma rede
    blockchain, que é uma tecnologia de banco de dados descentralizada. Ele é
    utilizado para realizar eleições de forma segura e eficiente, permitindo que
    os participantes votem em uma das propostas disponíveis e armazenando as
    contagens de votos para cada uma das propostas. O smart contract possui três
    recursos principais: MaioriaGanha, Voto e Administrar. O recurso
    MaioriaGanha é o contrato principal e define as variáveis propostas e votos,
    bem como as funções processar e init. O recurso Voto permite que os
    participantes votem em uma das propostas e armazenem suas escolhas em uma
    variável escolha. O recurso Administrar permite que o administrador
    inicialize as propostas e crie novas instâncias do recurso Voto.
media:
  type: ImageBlock
  url: >-
    /images/Escreva Contratos Inteligente em Cadence Para Votações
    diegofornalha.png
  altText: Escreva Contratos Inteligente em Cadence Para Votações
  caption: >-
    O smart contract em Cadence é um código que é executado em uma rede
    blockchain, que é uma tecnologia de banco de dados descentralizada. Ele é
    utilizado para realizar eleições de forma segura e eficiente, permitindo que
    os participantes votem em uma das propostas disponíveis e armazenando as
    contagens de votos para cada uma das propostas. O smart contract possui três
    recursos principais: MaioriaGanha, Voto e Administrar. O recurso
    MaioriaGanha é o contrato principal e define as variáveis propostas e votos,
    bem como as funções processar e init. O recurso Voto permite que os
    participantes votem em uma das propostas e armazenem suas escolhas em uma
    variável escolha. O recurso Administrar permite que o administrador
    inicialize as propostas e crie novas instâncias do recurso Voto.
bottomSections: []
metaDescription: >-
  O smart contract em Cadence é um código que é executado em uma rede
  blockchain, que é uma tecnologia de banco de dados descentralizada. Ele é
  utilizado para realizar eleições de forma segura e eficiente, permitindo que
  os participantes votem em uma das propostas disponíveis e armazenando as
  contagens de votos para cada uma das propostas. O smart contract possui três
  recursos principais: MaioriaGanha, Voto e Administrar. O recurso MaioriaGanha
  é o contrato principal e define as variáveis propostas e votos, bem como as
  funções processar e init. O recurso Voto permite que os participantes votem em
  uma das propostas e armazenem suas escolhas em uma variável escolha. O recurso
  Administrar permite que o administrador inicialize as propostas e crie novas
  instâncias do recurso Voto.
socialImage: >-
  /images/Escreva Contratos Inteligente em Cadence Para Votações
  diegofornalha.png
author: content/data/team/hilary-ouse.json
---
Hoje nós vamos ver como é fácil programar seu primeiro smart contract em Cadence de votação, ele sem dúvidas é o verdadeiro mestre das eleições!

Ele permite que os participantes votem em uma das propostas disponíveis e armazena as contagens de votos para cada uma das propostas.

Ele possui três recursos principais:

MaioriaGanha,

Voto e

Administrar.

Com esses recursos, o smart contract em Cadence é capaz de realizar eleições de forma eficiente e segura.

O recurso MaioriaGanha é o contrato principal e define as variáveis propostas e votos, bem como as funções processar e init.

A variável propostas é uma lista de strings que armazena as propostas disponíveis para votação, enquanto a variável votos é um dicionário que armazena a contagem de votos para cada uma das propostas.

A função processar é usada para processar um voto quando um participante decide finalizá-lo, enquanto a função init é chamada quando o contrato é criado e inicializa as variáveis propostas e votos com valores vazios e salva uma instância do recurso Administrar na storage do contrato.

O recurso Voto é usado para permitir que os participantes votem em uma das propostas e armazenar suas escolhas em uma variável escolha.

Quando uma nova instância do recurso Voto é criada, a função init é chamada para inicializar a variável escolha com um dicionário vazio e preencher o dicionário com as propostas disponíveis. O participante pode chamar a função vote para votar em uma das propostas, passando o índice da proposta como argumento.

O recurso Administrar permite que o administrador inicialize as propostas e crie novas instâncias do recurso Voto. A função inicializePropostas é usada para atribuir a lista de propostas fornecida à variável propostas do contrato principal e inicializar a variável votos com um dicionário vazio, com chaves correspondentes a cada uma das propostas.

A função emitirVoto é usada para criar uma nova instância do recurso Voto e retorná-la.

Espero que isso tenha ajudado a esclarecer o que o seu smart contract está fazendo de forma mais detalhada e descontraída. Se você tiver mais perguntas ou precisar de mais assistência, não hesite em perguntar.
pub contract MaioriaGanha {
    pub var propostas: [String]
    pub let votos: {Int: Int}

    pub resource Voto {
        pub let propostas: [String]
        pub var escolha: {Int: Bool}

        init() {
            self.propostas = MaioriaGanha.propostas
            self.escolha = {}
            var i = 0
            while i < self.propostas.length {
                self.escolha[i] = false
                i = i + 1
            }
        }
        pub fun vote(propostas: Int) {
            pre {
                propostas >= 0
                propostas < self.propostas.length
            }
            self.escolha[propostas] = true
        }
    }

    pub resource Administrar {
        pub fun inicializePropostas(_ propostas: [String]) {
            pre {
                MaioriaGanha.propostas.length == 0
                propostas.length > 0
            }
            MaioriaGanha.propostas = propostas

            var i = 0
            while i < propostas.length {
                MaioriaGanha.votos[i] = 0
                i = i + 1
            }
        }

        pub fun emitirVoto(): @Voto {
            return <-create Voto()
        }
    }

    pub fun processar(voto: @Voto) {
        var index = 0
        while index < self.propostas.length {
            if voto.escolha[index]! {
                self.votos[index] = self.votos[index]! + 1
            }
            index = index + 1;
        }
        destroy voto
    }
    init() {
        self.propostas = []
        self.votos = {}

        self.account.save<@Administrar>(<-create Administrar(), to: /storage/CalcularVotos)
    }
}
Parece que o seu código em Cadence é uma transação que permite ao administrador inicializar uma lista de propostas para eventos. Quando a transação é executada, ela solicita ao administrador que forneça suas credenciais de autenticação e, em seguida, usa essas credenciais para obter uma referência para o recurso Administrar do contrato MaioriaGanha.

Em seguida, a função inicializePropostas é chamada no recurso Administrar, passando uma lista de três cidades como argumento: Rio de Janeiro, São Paulo e Floripa.

Essa função atribui a lista de propostas fornecida à variável propostas do contrato principal e inicializa a variável votos com um dicionário vazio, com chaves correspondentes a cada uma das propostas.

Por fim, a transação exibe uma mensagem de log informando que as sugestões de locais para eventos foram publicadas.
import MaioriaGanha from 0x01

transaction {
    prepare(admin: AuthAccount) {

        let adminRef = admin.borrow<&MaioriaGanha.Administrar>(from: /storage/CalcularVotos)!

        adminRef.inicializePropostas(
            ["Rio de Janeiro", "Sao Paulo","Floripa" ]
        )

        log("Sugestoes de Locais para Eventos Publicada!")
    }
}
Agora veremos um contrato de uma transação que permite a um eleitor emitir um voto em uma das propostas disponíveis em um contrato MaioriaGanha
. Quando a transação é executada, ela solicita ao administrador e ao eleitor que forneçam suas credenciais de autenticação.

Em seguida, a transação obtém uma referência para o recurso Administrar do contrato MaioriaGanha e chama a função emitirVoto nesse recurso. A função emitirVoto cria uma nova instância do recurso Voto e retorna uma referência para ela.

Em seguida, a transação salva a instância do recurso Voto na storage do eleitor e exibe uma mensagem de log informando que o acesso foi concedido.
import MaioriaGanha from 0x01

transaction {
    prepare(admin: AuthAccount, eleitor: AuthAccount) {

        let adminRef = admin.borrow<&MaioriaGanha.Administrar>(from: /storage/CalcularVotos)!

        let voto <- adminRef.emitirVoto()

        eleitor.save<@MaioriaGanha.Voto>(<-voto, to: /storage/Voto)

        log("Acesso Concedido")
    }
}
Agora uma transação que permite a um eleitor emitir um voto em uma das propostas disponíveis em um contrato MaioriaGanha. Quando a transação é executada, ela solicita ao eleitor que forneça suas credenciais de autenticação e, em seguida, tenta carregar uma instância do recurso Voto da storage do eleitor.

Se uma instância do recurso Voto for encontrada na storage do eleitor, a transação chama a função vote nessa instância, passando o valor 0 como argumento. Isso marca a primeira proposta da lista como a escolha do eleitor.

Em seguida, a transação chama a função processar do contrato MaioriaGanha, passando a instância do recurso Voto como argumento. Isso adiciona o voto do eleitor à contagem de votos para a primeira proposta.

Por fim, a transação exibe uma mensagem de log informando que o voto foi computado.
import MaioriaGanha from 0x01

transaction {
    prepare(eleitor: AuthAccount) {

        let voto <- eleitor.load<@MaioriaGanha.Voto>(from: /storage/Voto)!

        voto.vote(propostas: 0)

        MaioriaGanha.processar(voto: <-voto)

        log("Voto computado")
    }
}
Por fim, no script template.

Quando a função é chamada, ela exibe os valores da primeira, segunda e terceira propostas na lista de propostas, seguidos dos respectivos valores de votos.

A função usa os índices 0, 1 e 2 para acessar os elementos da lista de propostas e do dicionário de votos, respectivamente. Isso significa que ela exibirá a primeira proposta da lista, seguida do número de votos para essa proposta, depois a segunda proposta da lista e o número de votos para ela, e assim por diante.
import MaioriaGanha from 0x01

pub fun main() {
    log(MaioriaGanha.propostas[0])
    log(MaioriaGanha.votos[0])

    log(MaioriaGanha.propostas[1])
    log(MaioriaGanha.votos[1])

    log(MaioriaGanha.propostas[2])
    log(MaioriaGanha.votos[2])
}
Try out this Playground project