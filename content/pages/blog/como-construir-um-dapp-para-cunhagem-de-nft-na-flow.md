---
layout: PostLayout
metaTitle: Como construir um Dapp para cunhagem de NFT na Flow
addTitleSuffix: true
metaTags: []
colors: colors-d
date: '2022-12-24'
excerpt: >-
  Para configurar uma conta no blockchain Flow, é necessário gerar um par de
  chaves públicas e privadas. Isso pode ser feito usando o comando
  "generateKeys" da biblioteca "flow-js" ou através de outra ferramenta de
  geração de chaves. As chaves públicas e privadas são usadas para assinar
  transações no blockchain Flow e garantir a segurança da conta. Depois de gerar
  as chaves, é preciso criar uma conta no blockchain Flow usando as chaves e
  seguir as instruções fornecidas pela plataforma para configurar a conta.
  Depois de configurar a conta, você poderá implantar seu contrato inteligente
  no blockchain Flow.
featuredImage:
  type: ImageBlock
  url: >-
    /images/Como construir um Dapp para cunhagem de NFT na Flow
    diegofornalha.png
  altText: Como construir um Dapp para cunhagem de NFT na Flow
  caption: >-
    Para configurar uma conta no blockchain Flow, é necessário gerar um par de
    chaves públicas e privadas. Isso pode ser feito usando o comando
    "generateKeys" da biblioteca "flow-js" ou através de outra ferramenta de
    geração de chaves. As chaves públicas e privadas são usadas para assinar
    transações no blockchain Flow e garantir a segurança da conta. Depois de
    gerar as chaves, é preciso criar uma conta no blockchain Flow usando as
    chaves e seguir as instruções fornecidas pela plataforma para configurar a
    conta. Depois de configurar a conta, você poderá implantar seu contrato
    inteligente no blockchain Flow.
media:
  type: ImageBlock
  url: >-
    /images/Como construir um Dapp para cunhagem de NFT na Flow
    diegofornalha.png
  altText: Como construir um Dapp para cunhagem de NFT na Flow
  caption: >-
    Para configurar uma conta no blockchain Flow, é necessário gerar um par de
    chaves públicas e privadas. Isso pode ser feito usando o comando
    "generateKeys" da biblioteca "flow-js" ou através de outra ferramenta de
    geração de chaves. As chaves públicas e privadas são usadas para assinar
    transações no blockchain Flow e garantir a segurança da conta. Depois de
    gerar as chaves, é preciso criar uma conta no blockchain Flow usando as
    chaves e seguir as instruções fornecidas pela plataforma para configurar a
    conta. Depois de configurar a conta, você poderá implantar seu contrato
    inteligente no blockchain Flow.
bottomSections: []
metaDescription: >-
  Para configurar uma conta no blockchain Flow, é necessário gerar um par de
  chaves públicas e privadas. Isso pode ser feito usando o comando
  "generateKeys" da biblioteca "flow-js" ou através de outra ferramenta de
  geração de chaves. As chaves públicas e privadas são usadas para assinar
  transações no blockchain Flow e garantir a segurança da conta. Depois de gerar
  as chaves, é preciso criar uma conta no blockchain Flow usando as chaves e
  seguir as instruções fornecidas pela plataforma para configurar a conta.
  Depois de configurar a conta, você poderá implantar seu contrato inteligente
  no blockchain Flow.
socialImage: /images/Como construir um Dapp para cunhagem de NFT na Flow diegofornalha.png
title: Como construir um Dapp para cunhagem de NFT na Flow
author: content/data/team/hilary-ouse.json
---
## Vamos colocar todo o conhecimento dos meus artigos anteriores em prática escrevendo e implantando um contrato inteligente, construindo um front-end e cunhando algumas NFTs

Se você acompanhou a série Flow até agora, já sabe que o [O Flow Blockchain se destaca no manuseio de ativos digitais](https://medium.com/better-programming/an-introduction-to-the-flow-blockchain-60ccc7a35598), como NFTs. Foi construído desde o início como uma alternativa melhor ao congestionamento da rede da Ethereum e aos problemas de alta taxa.

Além disso, a linguagem de contrato inteligente Cadence é uma [programação orientada a recursos de primeira qualidade](https://medium.com/better-programming/smart-contracts-which-is-better-ethereum-or-flow-39f766c72e5d) linguagem que torna a criação e o gerenciamento de ativos digitais fáceis e eficientes. Embora a Solidez seja excelente em facilitar o Web3 por meio de contratos inteligentes, há desvantagens. A cadência aprimora as falhas da Solidity, fornecendo a capacidade de atualizar contratos e recursos inteligentes que reduzem o risco de erro humano, entre outras melhorias.

E, finalmente, a lista de ferramentas e bibliotecas disponíveis para desenvolvedores que desejam começar é extensa. Então, vamos juntar tudo e construir algo sobre o Flow.

Este artigo é um tutorial sobre a criação de um dapp completo de NFT para o Flow Blockchain.

# **Vamos ao que interessa**

Para o restante deste artigo, passaremos pelo processo de criação de um dapp de cunhagem NFT no blockchain Flow.

Começaremos com a configuração e implantação de um contrato inteligente da Cadence. Em seguida, criaremos um front-end para conectar-se ao nosso contrato inteligente e cunhar uma NFT na conta do usuário.

A funcionalidade que construímos permitirá que os usuários conectem sua conta Flow, criem uma conta se ainda não tiverem uma e depois selecionem uma das três imagens para cunhar em uma NFT. Em seguida, o dapp exibirá as NFTs da nossa coleção que estão na conta do usuário. Será um excelente projeto para destacar a facilidade e eficiência da criação de NFTs no Flow e a eficácia da Biblioteca do Cliente Flow ( FCL ) para interagir com a blockchain.

Para acompanhar este tutorial, você precisará das seguintes coisas:

- [NodeJs](https://nodejs.org/en/download/)[NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
    
    e
    
- [A interface da linha de comando de fluxo](https://developers.flow.com/tools/flow-cli/install)
    
    ( CLI de fluxo )
    
- [Seu IDE favorito](https://code.visualstudio.com/)

Com tudo isso instalado, vamos começar!

# **1. Configurar conta de fluxo**

Antes de começarmos a construir, precisaremos configurar uma conta no blockchain Flow para que possamos implantar nosso contrato inteligente. Execute o seguinte comando para gerar um novo par de chaves público e privado:

```
fluxo gerando chaves
```

Certifique-se de anotar os valores que o console gera, pois precisaremos deles nas etapas a seguir.

Em seguida, vamos para o [Torneira de fluxo](https://testnet-faucet.onflow.org/) criar um novo endereço com base em nossas chaves e financiar nossa conta com alguns tokens de teste. Conclua as seguintes etapas para criar sua conta:

1. Cole sua chave pública no campo de entrada especificado
2. Mantenha os algoritmos de assinatura e hash definidos como padrão
3. Complete o captcha
4. Clique em Criar conta

![https://miro.medium.com/max/520/1*C7g_k17hgGjzBACrFTzjBw.png](https://miro.medium.com/max/520/1*C7g_k17hgGjzBACrFTzjBw.png)

Com uma geração de contas bem-sucedida, mantemos um diálogo com nosso novo endereço Flow, contendo 1.000 tokens FLOW.

![https://miro.medium.com/max/700/1*rhyoqzmKbCgfDA-QEcEx3w.png](https://miro.medium.com/max/700/1*rhyoqzmKbCgfDA-QEcEx3w.png)

Copie o endereço para uso na próxima etapa.

# **2). Configurar o contrato inteligente**

Antes de criarmos o front-end do projeto, vamos criar o contrato inteligente com o qual interagiremos mais tarde.

No terminal de comando, navegue até a pasta da qual você gostaria de trabalhar e digite o seguinte comando para iniciar um projeto:

```
fluxoinit
```

Este comando cria um `flow.json` arquivo dentro da pasta, onde colocaremos todas as informações necessárias para implantar nosso contrato inteligente.

Abra o `flow.json` arquive no seu editor de códigos e configuraremos uma conta da rede de testes. Dentro do `accounts` seção, adicionaremos uma nova entrada chamada `testnet-account`, que contém nosso novo endereço e a chave privada gerada no `flow keys generate` comando mais cedo.

```
{
 "emuladores": {
  "padrão": {
   "porta":3569,
"Conta de serviço":"conta de emulador"
  }
 },
 "contratos": { },
 "redes": {
  "emulador":"127.0.0.1: 3569",
"mainnet":"access.mainnet.nodes.onflow.org: 9000",
"testnet":"access.devnet.nodes.onflow.org: 9000"
 },
 "contas": {
  "conta de emulador": {
   "endereço":"f8d6e0586b0a20c7",
"chave":"2becfbede2fb89796ab68df3ec2a23c3627235ec250a3e5da41df850a8dd4349"
  },
  "conta de rede de teste": {
   "endereço":"0x8e0dac5df6e8489e",
"chave":"c91f4716a51a66683ccb090ca3e213b90e9f9ae2b1edd12defffe06c57edc"
  }
 },
 "implantações": { }
}
```

Em seguida, criaremos um novo arquivo para escrever nosso contrato inteligente.

Ao escrever o código, você pode notar algumas diferenças na maneira como o Cadence lida com a criação de NFT em comparação com o Solidity. Por exemplo, as NFTs em Cadence são criadas como um recurso e cunhadas diretamente na conta do usuário. Por outro lado, as NFTs de solidez são essencialmente apenas um número de identificação referenciado em um mapeamento para um endereço específico no livro digital.

Então, com isso em mente, na mesma pasta que a `flow.json` arquivo, crie um novo arquivo chamado `FlowTutorialMint.cdc`, e digite o seguinte código:

Coisas importantes a serem observadas no contrato inteligente acima:

- Estamos importando o `NonFungibleTokenMetadataViews`
    
    e
    
    contratos para criar nossas NFTs usando os padrões Flow
    
- Definimos nosso recurso NFT no `pub resource NFT`
    
    função
    
- O `mintNFT`
    
    função cunha uma NFT na conta que chama a função
    

Agora precisamos voltar ao nosso `flow.json` arquivo para adicionar algumas coisas:

- No `contracts`
    
    seção, adicione o contrato e seu caminho.
    
- No `deploymentstestnettestnet-accountFlowTutorialMint`
    
    seção adicionar a rede (
    
    ), a conta que usaremos para executar a implantação (
    
    ) e o nome do contrato (
    
    ).
    

```
{
 "emuladores": {
  "padrão": {
   "porta":3569,
"Conta de serviço":"conta de emulador"
  }
 },
 "contratos": {
  "FlowTutorialMint":"./FlowTutorialMint.cdc"
 },
 "redes": {
  "emulador":"127.0.0.1: 3569",
"mainnet":"access.mainnet.nodes.onflow.org: 9000",
"testnet":"access.devnet.nodes.onflow.org: 9000"
 },
 "contas": {
  "conta de emulador": {
   "endereço":"f8d6e0586b0a20c7",
"chave":"2becfbede2fb89796ab68df3ec2a23c3627235ec250a3e5da41df850a8dd4349"
  },
  "conta de rede de teste": {
   "endereço":"0x8e0dac5df6e8489e",
"chave":"c91f4716a51a66683ccb090ca3e213b90e9f9ae2b1edd12defffe06c57edc"
  }
 },
 "implantações": {
  "rede de teste": {
   "conta de rede de teste": [
"FlowTutorialMint"
   ]
  }
 }
}
```

A etapa final na configuração do contrato inteligente é implantá-lo na rede de teste. Para fazer isso, digite o seguinte comando na pasta do projeto no seu terminal:

```
implantação do projeto de fluxo -n = testnet
```

Devemos receber uma saída informando que o contrato foi implantado com sucesso:

![https://miro.medium.com/max/700/1*TDLQtMd43FRRCVVHRWNnkw.jpeg](https://miro.medium.com/max/700/1*TDLQtMd43FRRCVVHRWNnkw.jpeg)

É importante observar aqui que os contratos inteligentes da Cadence existem no armazenamento da conta que os implanta, enquanto que, com o Solidity, o contrato inteligente existe em seu próprio endereço na blockchain.

Embora existam limites para a capacidade de armazenamento da conta, eles são relativos ao número de tokens FLOW reservados na conta. Você pode aprender mais sobre o armazenamento da conta no [Portal do desenvolvedor de fluxo](https://developers.flow.com/learn/concepts/storage).

Impressionante! Agora vamos criar um frontend simples para interagir com o nosso contrato.

# **3). Criando o frontend**

Para o front-end deste projeto, usaremos o React. Primeiro, navegue até uma nova pasta e execute o seguinte comando para criar um projeto de reação:

```
npx create-react-appfluxo-tutorial
```

Em seguida, navegue até a pasta do tutorial de fluxo e instale o [Flow Client Library](https://developers.flow.com/tools/fcl-js) ( FCL ):

```
npmeu -S@onflow/fcl
```

O FCL nos permitirá comunicar com o blockchain Flow, transações de chamadas e integrar todas as outras carteiras compatíveis com FCL sem precisar adicionar integrações personalizadas. Quando isso terminar, instalaremos algumas dependências adicionais:

```
npmeu componentes elípticos estilizados em sha3
```

Depois de instalar todas as nossas dependências, estamos prontos para começar a trabalhar no front-end do dapp.

## **3.a. Configurar o FCL**

Antes de começarmos a estruturar e modelar as coisas, vamos criar um arquivo de configuração FCL onde definiremos configurações importantes, como se iremos interagir com a rede de teste ou a rede principal.

No `src` diretório, crie uma nova pasta chamada `flow`. Dentro desta nova pasta, crie um arquivo chamado `config.js`.

Nisto `config.js` arquivo, vamos importar o FCL, chame o `fcl.config` funcione e crie algumas configurações para o nosso dapp, como:

- `app.detail.title`
- `accessNode.api`
- `discovery.wallet`

Abra o `config.js` arquive e preencha com o seguinte código:

```
const fcl =requer("@onflow / fcl");

fcl.config( {
"app.detail.title":"Tutorial da página de menta de fluxo",// isso adiciona um nome personalizado à nossa carteira
"accessNode.api":"https://rest-testnet.onflow.org",// isto é para o emulador local
"discovery.wallet":"https://fcl-discovery.onflow.org/testnet/authn",// isto é para a carteira dev local
} )
```

Há [configurações adicionais que podemos configurar](https://github.com/onflow/fcl-js/tree/master/packages/config/src#overview) para o nosso dapp, mas por enquanto, é tudo o que precisaremos.

Com a configuração fora do caminho, vamos para a construção!

## **3.b. A estrutura inicial**

Primeiro, navegue até o `App.js` arquivo no `src` pasta e substitua o código por:

```
importar'./App.css';

funçãoAplicativo() {

Retorna (
    < div className = "App" >
        < h1 > Menta o seu cão!< / h1 >
    < / div >
  );
}

exportaçãopadrãoAplicativo;
```

Isso nos dará a estrutura inicial do nosso dapp, da qual expandiremos.

Em seguida, estilizaremos essa estrutura. Abra o `index.css` arquive e substitua o código pelo seguinte:

```
@import url ('https://fonts.googleapis.com/css2?family=Michroma&family=Montserrat:wght@200;300;600;700&display=swap');

corpo {
margem:0;
família de fontes:'Montserrat', -apple-system, BlinkMacSystemFont,'Segoe UI','Roboto','Oxigênio',
'Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',
    sans-serif;
  -webkit-suavização de fonte: antialiased;
  -moz-osx-suavização de fonte: escala de cinza;
}

código {
família de fontes: código-fonte-pro, Menlo, Mônaco, Consolas,'Courier New',
    monoespaço;
}
```

Se você executar o npm start, verá uma página em branco com o título Mint Your Dog!

Em seguida, vamos criar alguns componentes!

## **3.c. O componente nav**

Dentro do `src` diretório, crie uma nova pasta chamada `components`, onde construiremos todos os nossos componentes de reação personalizados.

O primeiro componente que criaremos é o Navbar, que mostrará o botão Login se o usuário não estiver conectado, ou o botão Logout ao lado do endereço do usuário e o número de tokens FLOW que a conta possui se estiverem conectados.

Crie um arquivo chamado `Navbar.jsx` e preencha com o seguinte código:

Vamos percorrer o código para ver o que está acontecendo aqui.

- Primeiro, estamos importando a Flow Client Library, que nos fornecerá funções para `authenticateunauthenticatecurrentUser`
    
    ,
    
    , e determine o
    
    .
    
- Em seguida, importamos as outras dependências de que precisamos e depois usamos `styled-componentsWrapper`
    
    para criar o estilo básico do nosso Navbar dentro do
    
    variável.
    
- Em seguida, definimos algumas variáveis de estado de reação (`userflow`
    
    e
    
    ).
    
- Em seguida é a funcionalidade do dapp, como `logOutlogIngetFlow`
    
    ,
    
    , e
    
    ( obtenha o saldo de FLUXO da conta conectada ).
    
- Depois disso, devolvemos o `html`
    
    para o Navbar envolto em nosso estilo.
    

Com um completo `Navbar` componente, agora podemos importá-lo para o `App.js` Arquivo:

```
importar'./App.css';
importarBarra de navegaçãode'./«./components/Navbar.jsx»';

funçãoAplicativo() {

Retorna (
    < div className = "App" >
        < Navbar / >
        < h1 > Menta seu cão!< / h1 >
    < / div >
  );
}

exportaçãopadrãoAplicativo;
```

Agora, se executarmos o projeto com `npm start`, vemos a nossa `Navbar` nos fornece a funcionalidade que definimos em nosso código. Impressionante!

Em seguida, vamos construir nosso componente de cunhagem NFT!

## **3.d. O componente de cunhagem NFT**

Dentro do `components` pasta, crie um novo arquivo chamado `MintComponent.jsx`, copie o seguinte código:

Novamente, vamos percorrer o código para garantir que entendemos o que está acontecendo.

- Precisamos importar a FCL neste componente para obter acesso à função que nos permitirá cunhar nossa NFT.
- Novamente, usamos `styled-components`
    
    para adicionar um pouco de estilo.
    

O `mintNFT` função usa `fcl.mutate` função para executar a hortelã real por:

- Validando se o usuário possui uma coleção NFT de Tutorial de Fluxo em sua conta e criando uma, se não.
- Chamando a função de hortelã existente dentro do contrato FlowTutorialMint e passando os parâmetros.
- A função retorna o recurso ( NFT ), que depositamos na conta do usuário.
- No `fcl.mutateimport FlowTutorialMint from 0x8e0dac5df6e8489e`
    
    função, estamos importando o contrato inteligente que implantamos com a linha:
    
- Também importamos o `NonFngibleTokenMetadataViews`
    
    e
    
    padrões.
    
- Na transação, especificamos a NFT `typeurl`
    
    e
    
    da imagem.
    

As transações de cadência têm duas fases: `prepare` e `execute`

- `prepareFlowTutorialCapabilityNonFungibleToken.CollectionPublic`[confira este link](https://developers.flow.com/cadence/tutorial/04-capabilities)
    
    – solicitamos a assinatura do usuário para acessar sua conta e executar funções privadas. Nesse caso, criando um novo
    
    Coleção de hortelã, se eles ainda não tiverem um. Também inicializamos um público
    
    restrito a
    
    . Para mais contexto sobre Recursos,
    
    .
    
- `executemintNFT`
    
    – chame o
    
    função dentro do nosso contrato na rede de teste.
    
- No `html`
    
    parte do código, exibimos três imagens das quais o usuário pode cunhar uma NFT.
    

Com a nossa `MintComponent` completo, podemos importá-lo para o `App.js` Arquivo:

```
importar'./App.css';
importarBarra de navegaçãode'./«./components/Navbar.jsx»';
importarComponente de hortelãde'./components/MintComponent.jsx';

funçãoAplicativo() {

Retorna (
    < div className = "App" >
        < Navbar / >
        < h1 > Menta seu cão!< / h1 >
        < Componente de menta / >
    < / div >
  );
}

exportaçãopadrãoAplicativo;
```

Agora o usuário pode fazer login no dapp e cunhar uma NFT em sua conta!

A peça final do quebra-cabeça é criar um componente que buscará as NFTs do usuário e as exibirá.

## **3.e. Mostrando as NFTs do usuário**

No `components` pasta, crie um novo arquivo chamado `ShowNfts.jsx`, e usaremos o seguinte código:

Essencialmente, o que estamos fazendo neste código é consultar o Flow Blockchain usando o FCL e reunir as NFTs na conta conectada que são da nossa `FlowTutorialMint` coleção.

Só precisamos adicionar esse componente ao nosso `App.js`, e estamos prontos para ir!

```
importar'./App.css';
importarBarra de navegaçãode'./«./components/Navbar.jsx»';
importarComponente de hortelãde'./components/MintComponent.jsx';
importarShowNftsde'./«./components/ShowNfts»';

funçãoAplicativo() {

Retorna (
    < div className = "App" >
      < Navbar / >
      < h1 > Menta seu cão!< / h1 >
      < Componente de menta / >
      < ShowNfts / >
    < / div >
  );
}

exportaçãopadrãoAplicativo;
```

Isso é tudo! Agora vamos testar nosso dapp e garantir que podemos cunhar algumas NFTs.

## **4). Vamos cunhar algumas NFTs!**

Então, primeiro, vamos começar o aplicativo com `npm start` e então abra nosso navegador para `[http://localhost:3000/](http://localhost:3000/)`.

Se tudo correr bem, sua tela ficará assim:

![https://miro.medium.com/max/700/1*QEzqQSSfMqemHV7-vokCVA.png](https://miro.medium.com/max/700/1*QEzqQSSfMqemHV7-vokCVA.png)

O mais bonito de usar o FCL em nossa sequência de login é que ele oferece aos usuários acesso fácil a fazer uma conta no local usando apenas um endereço de email. Vamos percorrer o processo para garantir que ele funcione corretamente. Ao clicar no botão Login, um diálogo será aberto, oferecendo duas opções para fazer login. Vamos escolher o Blocto.

![https://miro.medium.com/max/501/1*kWffHiB_OdlWkbhkUT8P_Q.png](https://miro.medium.com/max/501/1*kWffHiB_OdlWkbhkUT8P_Q.png)

A Blocto nos solicitará a inserir um endereço de e-mail e, ao fazer isso, nos dará a capacidade de registrar uma nova conta. Então, depois de inserir o código enviado por e-mail para o nosso endereço, o Blocto nos configura com um novo e brilhante endereço Flow!

![https://miro.medium.com/max/452/1*R1pIcmUN7E_DsGdmsxEnHA.png](https://miro.medium.com/max/452/1*R1pIcmUN7E_DsGdmsxEnHA.png)

A partir daqui, podemos escolher qual imagem de cachorro queremos cunhar como NFT. Eu escolhi o Swag Dog porque isso me lembra um pouco de mim!

![https://miro.medium.com/max/295/1*k2n-4Bs8DhL9mlyFXmimeg.png](https://miro.medium.com/max/295/1*k2n-4Bs8DhL9mlyFXmimeg.png)

Pressionar o botão Mint abrirá outro diálogo nos informando sobre a transação que estamos prestes a realizar. Podemos ver que o Blocto está cobrindo graciosamente as taxas de cunhagem e, se quisermos olhar para o script que estamos chamando, podemos fazê-lo.

![https://miro.medium.com/max/416/1*-8oJUrVK87ngEjG5JQEhew.png](https://miro.medium.com/max/416/1*-8oJUrVK87ngEjG5JQEhew.png)

Vários segundos depois de clicar em Aprovar, devemos receber uma mensagem de que nossa hortelã foi bem-sucedida e nosso cão Swag recém-cunhado será exibido na seção Minhas NFTs do nosso dapp.

Aqui está um link para o nosso dapp em ação:

[https://s1.gifyu.com/images/flow_tutorial-min.gif](https://s1.gifyu.com/images/flow_tutorial-min.gif)

Todo o código fonte deste projeto pode ser encontrado em [este repositório](https://github.com/paul-mcaviney/flow-nft-minting-dapp-project).

# **Conclusão**

Como você pode ver, a construção de um dapp de cunhagem NFT no Flow Blockchain é direta quando você entende como tudo funciona em conjunto. Além disso, a Flow Client Library é uma ferramenta poderosa à nossa disposição que nos dá acesso a uma extensa funcionalidade interna e ajuda a proporcionar ao nosso dapp uma melhor experiência do usuário.

Ao contrário do Ethereum, o Flow lida com a criação e o gerenciamento de NFT de maneira muito mais eficiente e segura. Isso é conseguido implantando contratos inteligentes e cunhando as NFTs diretamente na conta do usuário, em vez de criar uma referência a endereços ou mapeamentos armazenados no livro digital.

Inspirado em artigo original em inglês: https://betterprogramming.pub/how-to-build-an-nft-minting-dapp-on-the-flow-blockchain-d331a2404cae