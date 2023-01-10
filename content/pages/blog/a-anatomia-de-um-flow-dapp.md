---
layout: PostLayout
metaTitle: null
addTitleSuffix: true
metaTags: []
title: A anatomia de um Flow Dapp
colors: colors-d
date: '2023-01-10'
featuredImage:
  type: ImageBlock
  url: 'https://assets.stackbit.com/components/images/default/post-4.jpeg'
  altText: Post thumbnail image
  caption: ''
media:
  type: ImageBlock
  url: 'https://assets.stackbit.com/components/images/default/post-4.jpeg'
  altText: Post image
bottomSections: []
metaDescription: null
socialImage: null
---
O diagrama abaixo descreve os componentes de um dapp típico construído na blockchain Flow. Embora muitos dapps sejam estruturados de maneira diferente, essa arquitetura apresenta conceitos fundamentais que serão discutidos ao longo deste guia.



**Cliente Dapp**
O cliente dapp é a interface através da qual os usuários interagem com seu dapp. Aplicativos da Web e móveis são exemplos comuns de clientes dapp.

**Contrato Inteligente**
Um contrato inteligente é uma coleção de código, implantado em um local permanente no blockchain, que define a lógica central de um dapp.

**Conta de usuário**
Uma conta de usuário é um registro no blockchain que armazena os ativos digitais pertencentes a um único usuário.

**Transação**
Uma transação é um pedaço de código submetido ao blockchain que altera o estado de uma ou mais contas de usuário e contratos inteligentes. Todas as transações são originadas de pelo menos uma conta de usuário. Na maioria dos casos, uma transação passa dados entre uma conta de usuário e um contrato inteligente.

**consulta de estado**
Uma consulta de estado é uma solicitação feita ao blockchain que retorna informações sobre o estado dos contratos inteligentes do seu dapp.

**Carteira do usuário**
Uma carteira de usuário é um software ou hardware que controla o acesso à conta de um usuário no blockchain. O aplicativo cliente normalmente se conecta à carteira do usuário para enviar transações para o blockchain. Em muitos casos, o dapp transmite fisicamente a transação para o blockchain em nome do usuário. No entanto, é importante observar que a carteira tem a palavra final sobre o que é assinado ou não e, portanto, tem controle sobre todas as transações que interagem com a conta do usuário.

**Biblioteca de cliente de fluxo (FCL)**
A Flow Client Library é uma estrutura que fornece uma interface padrão para conectar aplicativos clientes e carteiras de usuários.
