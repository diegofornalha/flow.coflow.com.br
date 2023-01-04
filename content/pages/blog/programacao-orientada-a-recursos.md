---
layout: PostLayout
metaTitle: null
addTitleSuffix: true
metaTags: []
title: Programação orientada a recursos
colors: colors-a
date: '2022-12-10'
excerpt: >-
  O Cadence é uma linguagem de programação orientada a recursos de alto nível
  desenvolvida pela equipe da plataforma blockchain Flow. Ela foi inspirada no
  modelo de propriedade de recursos dos tipos lineares, introduzido pela equipe
  da Libra em seu anúncio inicial. O objetivo do Cadence é oferecer uma forma
  mais segura de escrever contratos inteligentes e gerenciar propriedade de
  ativos digitais na blockchain. Ele possui uma sintaxe semelhante ao Rust e
  possui tipos de dados especiais para representar a propriedade de recursos. A
  Flow está trabalhando para tornar o Cadence a linguagem padrão para a escrita
  de contratos inteligentes na plataforma.
featuredImage:
  type: ImageBlock
  url: /images/Programação orientada a recursos Diego Fornalha.png
  altText: Programação orientada a recursos
  caption: >-
    O Cadence é uma linguagem de programação orientada a recursos de alto nível
    desenvolvida pela equipe da plataforma blockchain Flow. Ela foi inspirada no
    modelo de propriedade de recursos dos tipos lineares, introduzido pela
    equipe da Libra em seu anúncio inicial. O objetivo do Cadence é oferecer uma
    forma mais segura de escrever contratos inteligentes e gerenciar propriedade
    de ativos digitais na blockchain. Ele possui uma sintaxe semelhante ao Rust
    e possui tipos de dados especiais para representar a propriedade de
    recursos. A Flow está trabalhando para tornar o Cadence a linguagem padrão
    para a escrita de contratos inteligentes na plataforma.
media:
  type: ImageBlock
  url: /images/Programação orientada a recursos Diego Fornalha.png
  altText: Programação orientada a recursos
  caption: >-
    O Cadence é uma linguagem de programação orientada a recursos de alto nível
    desenvolvida pela equipe da plataforma blockchain Flow. Ela foi inspirada no
    modelo de propriedade de recursos dos tipos lineares, introduzido pela
    equipe da Libra em seu anúncio inicial. O objetivo do Cadence é oferecer uma
    forma mais segura de escrever contratos inteligentes e gerenciar propriedade
    de ativos digitais na blockchain. Ele possui uma sintaxe semelhante ao Rust
    e possui tipos de dados especiais para representar a propriedade de
    recursos. A Flow está trabalhando para tornar o Cadence a linguagem padrão
    para a escrita de contratos inteligentes na plataforma.
bottomSections: []
metaDescription: null
socialImage: null
---
## Um modelo melhor para propriedade digital

Os engenheiros costumam usar o termo “propriedade” como uma metáfora para acompanhar qual código é responsável por gerenciar algum tipo de estrutura de dados ou recurso do sistema. Essa metáfora é mais comum em ambientes de programação em que o gerenciamento de memória não é totalmente abstraído do programador, e dizendo que o código “possui” um objeto, dizendo que o código precisa gerenciar e liberar a memória alocada para esse objeto.

Embora os ambientes de programação existentes possam ser usados para acompanhar a propriedade dos ativos, eles geralmente são usados em cenários em que refletem a propriedade, em vez de defini-la diretamente. Capturas de bloco públicas como Flow são únicas, pois são explicitamente projetadas para gerenciar a propriedade de ativos digitais com escassez real e controle de acesso total. Os ativos digitais em blockchains públicas como Bitcoin ou Flow se comportam como ativos físicos: eles não podem ser copiados ou falsificados, apenas movidos.

À medida que as blockchains evoluíram, os mecanismos para representar as propriedades mudaram. O Bitcoin foi construído usando um modelo de propriedade definido por saídas de transação não utilizada “ou [UTXO](https://en.wikipedia.org/wiki/Unspent_transaction_output). Embora altamente eficiente, o modelo UTXO é complexo e [pode criar alguns casos incomuns](https://catallaxy.rcgt.com/en/what-happens-when-block-explorers-disagree-a-pitfall-of-blockchain-auditing/), então a Ethereum adotou um modelo de contabilidade mais flexível.

Infelizmente, a flexibilidade do modelo Ethereum dificulta a gravação de contratos inteligentes seguros, levando a hacks que custaram à comunidade de criptomoedas $100M + em fundos perdidos.

# **Apresentando o Cadence, a primeira linguagem de programação orientada a recursos de alto nível**

No ano passado, a equipe Flow estava investigando o uso de [Tipos lineares](https://wiki.c2.com/?LinearTypes) no contexto de blockchains, [ artigo acadêmicos](https://src.acm.org/binaries/content/assets/src/2018/michael-coblenz.pdf) [e pesquisa](http://www.cs.cmu.edu/~balzers/publications/digital_contracts_as_session_types.pdf) de contrato inteligentes.

Na mesma época, a equipe Libra lançou seu anúncio inicial, incluindo os detalhes técnicos do [MoveVM](https://developers.libra.org/docs/assets/papers/libra-move-a-language-with-programmable-resources/2019-09-26.pdf).

A equipe Libra definiu um novo modelo de programação para o Move com base em um novo modelo de propriedade inspirado nos recursos de tipos lineares. Os recursos são uma nova maneira de representar a propriedade de ativos e as propriedades dos ativos digitais habilitados para criptografia diretamente na linguagem de programação.

Da introdução:

> O principal recurso do Move é a capacidade de definir tipos de recursos personalizados. Os tipos de recursos são usados para codificar ativos digitais seguros com uma rica programabilidade.

> Ficamos tão impressionados com o poder da Programação Orientada a Recursos que é um dos recursos definidores de Cadence, a linguagem de programação de contratos inteligentes que desenvolvemos para o Flow.

Como a primeira linguagem de programação orientada a recursos de alto nível, Cadence possui uma sintaxe confortável e ergonômica, facilitando a leitura. Ele usa um sistema de tipo estático forte para minimizar erros de tempo de execução e permite que todos os métodos, interfaces e transações incluam condições pré e pós para impor o comportamento esperado.

Achamos que isso resultará em um idioma mais fácil de aprender, significativamente mais fácil de auditar e, finalmente, muito mais produtivo do que as alternativas atuais.

Você pode experimentar o Cadence no Flow Playground, disponível hoje em [play.onflow.org](https://play.onflow.org/).
