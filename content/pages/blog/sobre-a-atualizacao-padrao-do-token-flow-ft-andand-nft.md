---
layout: PostLayout
metaTitle: Sobre a atualização padrão do token Flow FT & NFT
addTitleSuffix: true
metaTags: []
title: Sobre a atualização padrão do token Flow FT && NFT
colors: colors-a
date: '2022-12-11'
excerpt: >-
  O Flow Playground é uma plataforma online interativa que permite que os
  usuários aprendam sobre o desenvolvimento de aplicativos na plataforma Flow
  escrevendo e executando contratos e transações inteligentes em um ambiente de
  teste. A plataforma também fornece acesso à linguagem de programação Cadence,
  projetada para garantir que o código seja seguro e acessível. Além disso, a
  Flow está lançando o programa Flow Alpha, que oferece acesso exclusivo ao
  canal de Discord da plataforma, oportunidades de co-marketing e
  desenvolvimento de negócios com parceiros, bem como suporte para projetos
  qualificados em termos de captação de recursos e modelos de negócios. A
  plataforma também está lançando atualizações para o padrão NFT MetadataView e
  o contrato padrão de tokens fungíveis, que adicionam recursos de roteamento e
  informações de metadados para melhorar a integração de terceiros e a exibição
  de informações de token.
featuredImage:
  type: ImageBlock
  url: /images/Sobre a atualização padrão do token Flow FT & NFT diegofornalha.png
  altText: Sobre a atualização padrão do token Flow FT & NFT
  caption: ''
media:
  type: ImageBlock
  url: /images/Sobre a atualização padrão do token Flow FT & NFT diegofornalha.png
  altText: Sobre a atualização padrão do token Flow FT & NFT
  caption: >-
    O Flow Playground é uma plataforma online interativa que permite que os
    usuários aprendam sobre o desenvolvimento de aplicativos na plataforma Flow
    escrevendo e executando contratos e transações inteligentes em um ambiente
    de teste. A plataforma também fornece acesso à linguagem de programação
    Cadence, projetada para garantir que o código seja seguro e acessível. Além
    disso, a Flow está lançando o programa Flow Alpha, que oferece acesso
    exclusivo ao canal de Discord da plataforma, oportunidades de co-marketing e
    desenvolvimento de negócios com parceiros, bem como suporte para projetos
    qualificados em termos de captação de recursos e modelos de negócios. A
    plataforma também está lançando atualizações para o padrão NFT MetadataView
    e o contrato padrão de tokens fungíveis, que adicionam recursos de
    roteamento e informações de metadados para melhorar a integração de
    terceiros e a exibição de informações de token.
bottomSections: []
metaDescription: >-
  O Flow Playground é uma plataforma online interativa que permite que os
  usuários aprendam sobre o desenvolvimento de aplicativos na plataforma Flow
  escrevendo e executando contratos e transações inteligentes em um ambiente de
  teste. A plataforma também fornece acesso à linguagem de programação Cadence,
  projetada para garantir que o código seja seguro e acessível. Além disso, a
  Flow está lançando o programa Flow Alpha, que oferece acesso exclusivo ao
  canal de Discord da plataforma, oportunidades de co-marketing e
  desenvolvimento de negócios com parceiros, bem como suporte para projetos
  qualificados em termos de captação de recursos e modelos de negócios. A
  plataforma também está lançando atualizações para o padrão NFT MetadataView e
  o contrato padrão de tokens fungíveis, que adicionam recursos de roteamento e
  informações de metadados para melhorar a integração de terceiros e a exibição
  de informações de token.
socialImage: /images/Sobre a atualização padrão do token Flow FT & NFT diegofornalha.png
author: content/data/team/hilary-ouse.json
---
Faz 11 meses desde que o último padrão NFT MetadataView foi lançado. Tokens fungíveis da flow inerentes ao [Padrão MetadataView](https://github.com/onflow/flow-ft/blob/master/contracts/FungibleTokenMetadataViews.cdc), embora ainda esteja em fase de teste, podemos esperar a adoção formal do padrão. Esta atualização não apenas nos traz a `MetadataView` contrato padrão de tokens fungíveis.
O FungibleTokenSwitchboard pode implementar uma coleção geral de recursos do Receiver para resolver o NFTMetadataView anterior [Realeza](https://github.com/onflow/flow-nft/blob/master/contracts/MetadataViews.cdc#L295) problema de configuração.

Essa atualização também é realizada de maneira baixa, com modificações no contrato padrão, e a ideia geral de design é a mesma que a do NFTMetadataViews. Para mais detalhes sobre o NFTMetadataViews, você pode ir [aqui](https://caos.me/cadence-nft-metadataviews) leia o artigo de introdução que escrevi anteriormente e [este](https://caos.me/flow-ft-nft) é sobre a prática de design e explicação da Flow NFT e FT.
Este artigo será apresentado e explicado de acordo com duas grandes atualizações do contrato padrão do Financial Times.

Pontos principais:

*   Essas atualizações são implantadas apenas na rede de teste e os novos recursos precisam ser suportados por um novo spork.

*   O contrato FT existente não força as atualizações, você pode optar por não atualizar, o que não afetará o uso normal.

*   Os recursos do Vault que foram inicializados pelo usuário não precisam ser reinicializados. Se a implementação do contrato atualizar a função, os recursos que foram inicializados pelo usuário serão herdados automaticamente.

*   Além das informações básicas do Financial Times, também serão incluídas informações sobre recursos e tipos de informações. ( Acho que está em preparação para a exibição de agregação de informações na cadeia )

*   Semelhante ao NFTMetadataView, o FTMetadataView também tem a capacidade de exibir `type`

    extensões para suportar mais tipos de metadados no futuro.

*   O FungibleTokenSwitchboard, como um recurso de roteamento adicional, preserva os recursos do FT Receiver na conta do usuário e pode receber vários tipos de token FT através de um recurso como roteador.

### **Views de dados do fungibleTokenMetadata**

[FungibleTokenMetadataViews.cdc](https://caos.me/flow-ft-nft) depende `FungibleToken` e `MetadataViews`

O `FTView` estrutura é definida, incluindo `FTDisplay` e `FTVaultData`

*   [FTDisplay](https://github.com/onflow/flow-ft/blob/master/contracts/FungibleTokenMetadataViews.cdc#L50)

    contém as informações, como nomes, símbolos, descrições, links externos, links de logotipo e alguns links de contas sociais necessários para a exibição do FT, que podem ser entendidos como as informações básicas do Token.

*   [FTVaultData](https://github.com/onflow/flow-ft/blob/master/contracts/FungibleTokenMetadataViews.cdc#L112)[função](https://github.com/onflow/flow-ft/blob/master/contracts/FungibleTokenMetadataViews.cdc#LL140C17-L140C33) `createEmptyVault`

    isso contém as informações de recursos do FTVault e algumas informações de tipo da interface, além de uma inicialização

    para criar Vault.

Do ponto de vista da implementação, `FTDisplay` foi projetado para enriquecer as informações básicas na cadeia do FungibleToken, enquanto `FTVaultData` foi projetado para facilitar a integração de terceiros para integrar o Token on-chain. Vários tipos de `FungibleToken` pode ser compatível com o padrão `MetadataViews` interface.

Obviamente, a premissa dessa suposição é que `FungibleToken` implementou as interfaces necessárias de `MetadataViews`.
Vamos ver o que [mudanças e atualizações](https://github.com/onflow/flow-ft/blob/master/contracts/FungibleToken.cdc#LL136-L147C10) foram feitos para `FungibleToken`

```
pub fun getViews(): [Type] {
     return []
   }
pub fun resolveView(_ view: Type): AnyStruct? {
    return nil
  }
```

De fato, `FungibleToken` apenas adiciona `getViews` e `resolveView` funções para o existente `Balance` interface e retorna o tipo de opcional.
A dependência do contrato recém-adicionada não é introduzida aqui, mas é introduzida em [ExampleToken](https://github.com/onflow/flow-ft/blob/master/contracts/ExampleToken.cdc#L3) do exemplo:

> Nota: as alterações do FungibleToken são ligeiramente diferentes aqui. Devido à adição da função de implementação no tipo de interface Balance, ela causará problemas com os recursos existentes que herdam o FungibleToken. Saldo na rede. ( normalmente falando, um contrato que herda o FungibleToken.Balance, mas não implementa getViews e o resolveView, não pode ser implantado corretamente. )
> Durante uma discussão com o B.T. Wood, ele me disse uma atualização recente do Cadence, se você herdar os recursos da interface, mesmo que não implemente os métodos definidos pela interface. O Cadence usará o método padrão da própria interface, para que os problemas acima não ocorram. Esse recurso será atualizado no futuro spork.

Essas duas novas interfaces são implementadas em [Vault](https://github.com/onflow/flow-ft/blob/master/contracts/ExampleToken.cdc#L100) recurso:

```
 pub fun getViews(): [Type]{
     return [Type<FungibleTokenMetadataViews.FTView>(),
        Type<FungibleTokenMetadataViews.FTDisplay>(),
        Type<FungibleTokenMetadataViews.FTVaultData>()]
        }
```

Três tipos de estruturas, `FTView`, incluir `FTDisplay` e `FTVaultData`, são definidos.
Após a atualização, podemos chamar diretamente getViews na interface Balance existente do FungibleToken para obter os tipos atuais de MetadataView suportados pelo Token e obter informações específicas sobre Metadados por meio de `resolveView`.

Essa estrutura de código não apenas atinge o efeito de compatibilidade com versões anteriores, mas também atende ao requisito de adicionar dinamicamente tipos de metadados de acordo com as necessidades no futuro. Podemos enriquecer os metadados da cadeia do FT estendendo os tipos suportados pelo FungibleTokenMetadataViews.

### **Painel fungível**

Podemos pensar em `FungibleTokenSwitchboard` como um recurso de roteamento agregado em uma conta. Implementa a interface de `FungibleToken.Receiver` e atua como uma coleção universal no padrão. Através do `receiverCapabilities` nos recursos, o `Receiver` de `Vault` na conta do usuário pode ser salvo e encaminhado para o correspondente `Receiver` com apenas um caminho.
`receiverCapabilities` é definido no `Switchboard` recurso para agregar os recursos de coleta de `FungibleToken`:

```
 pub resource Switchboard: FungibleToken.Receiver, SwitchboardPublic {
        access(contract) var receiverCapabilities: {Type: Capability<&{FungibleToken.Receiver}>}
        //....
}
```

`receiverCapabilities` leva `Type` como a chave e o recibo `Capability` de `Vault` como valor, esse é o núcleo da coleta de roteamento

Ao mesmo tempo, fornece uma maneira de gerenciar rotas:

*   [addNewVault](https://github.com/onflow/flow-ft/blob/master/contracts/FungibleTokenSwitchboard.cdc#L61)`VaultSwitchboardCapability`

    Adicione um novo

    rota para

    via

*   [addNewVaultsByPath](https://github.com/onflow/flow-ft/blob/master/contracts/FungibleTokenSwitchboard.cdc#L88)`Switchboard`

    Adicionar lote a

    através da matriz de caminhos de recursos

*   [removeVault](https://github.com/onflow/flow-ft/blob/master/contracts/FungibleTokenSwitchboard.cdc#L120)

    remover

Porque `Switchboard` herda `FungibleToken.Receiver`, o `deposit`  a função precisa ser implementada.

```
  pub fun deposit(from: @FungibleToken.Vault) {
            // Get the capability from the ones stored at the switchboard
            let depositedVaultCapability = self
                .receiverCapabilities[from.getType()]
                ?? panic ("The deposited vault is not available on this switchboard")
            // Borrow the reference to the desired vault
            let vaultRef = depositedVaultCapability.borrow()
                ?? panic ("Can not borrow a reference to the the vault")
            vaultRef.deposit(from: <-from)
        }
```

Essa função de depósito implementa uma função de encaminhar depósitos e direciona a coleta para os recursos específicos na configuração. Também podemos ver que se o valor correspondente de `receiverCapabilities` não é encontrado aqui, o programa Panic fará com que a transação do depósito falhe.
Para conveniência de terceiros, o tipo de interface de `SwitchboardPublic` é definido e três funções são definidas:

*   `getVaultTypesVault`

    pegue o

    tipos que suportam recepção

*   depósito como menção berfore

*   a função de depósito seguro `safeDeposit@FungibleToken.Vault`

    não causa pânico, mesmo que falhe, mas retorna o

    recurso

*   igual a `Deposit@FungibleToken.Vault`

    , recebendo

    recurso

*   primeiro determinará se `receiverCapabilities`

    possui um recurso de recebimento configurado para o recurso correspondente.

*   se não for encontrado e o valor do depósito for maior que zero, o evento de falha do depósito será acionado e a entrada `@ FungibleToken.Vault`

    recurso será retornado.

*   caso contrário, destrua os recursos de recarga diretamente e retorne `nil`

```
 pub fun safeDeposit(from: @FungibleToken.Vault): @FungibleToken.Vault? {
            // Try to get the proper vault capability from the switchboard
            // If the desired vault is present on the switchboard...
            if let depositedVaultCapability = self
                                        .receiverCapabilities[from.getType()] {
                // We try to borrow a reference to the vault from the capability
                // If we can borrow a reference to the vault...
                if let vaultRef =  depositedVaultCapability.borrow() {
                    // We deposit the funds on said vault
                    vaultRef.deposit(from: <-from.withdraw(amount: from.balance))
                }
            }
            // if deposit failed for some reason
            if from.balance > 0.0 {
                emit NotCompletedDeposit(type: from.getType(),
                                        amount: from.balance,
                                        switchboardOwner: self.owner?.address)
                return <-from
            }
            destroy from
            return nil
        }
```

Em suma, o `Switchboard` O recurso, como recurso de roteamento de terceiros, fornece um método geral de coleta para os usuários, para que a configuração de royalties de [Realeza](https://github.com/onflow/flow-nft/blob/master/contracts/MetadataViews.cdc#L303) no anterior `NFTMetadataViews` pode receber uma variedade de ativos de FT.
Do ponto de vista do aplicativo, desenvolvedores ou portais de carteira de terceiros ainda precisam integrar e introduzir novos contratos, o que facilita a configuração e o gerenciamento manual dos recursos `Switchboard`.

### **NFT tomnFTSAfe**

Aliás, o contrato padrão da NFT também foi lançado [atualização](https://github.com/onflow/flow-nft/pull/134/files#diff-4e93b23f7c8514483d20602dba0f78dbfefb333851b4b7b0255e686de35373f6R143), adicionou uma função emprestNFTSafe à interface de recursos da NFT `CollectionPublic` para evitar erros na execução do script devido à falha em encontrar a NFT do ID específico na conta durante a execução do script de consulta.
Melhore a experiência de consulta e desenvolvimento dos desenvolvedores.

### **Resumo**

Esta atualização ainda está no estágio de [Implantação de rede de teste](https://testnet.flowscan.org/account/0x9a0766d93b6608b7), onde os desenvolvedores podem experimentar os recursos de novos padrões e novos contratos. Após o futuro spork da rede principal, esses novos códigos serão implantados. Em seguida, o FT poderá consultar o Metadata on-chain, e os editores originais do FT poderão implementar novas funções e atualizar seus contratos de acordo com o exemplo do projeto do FT.

Dessa forma, os produtos de catálogo que suportam o FT não devem estar longe.
