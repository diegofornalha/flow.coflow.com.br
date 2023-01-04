---
layout: PostLayout
metaTitle: 'Como a programação orientada a recursos funciona? '
addTitleSuffix: true
metaTags: []
title: 'Como a programação orientada a recursos funciona? '
colors: colors-d
date: 20223-12-15
excerpt: >-
  O objetivo da Dapper Labs é usar a tecnologia descentralizada, especificamente
  non-fungible tokens (NFTs), para dar poder aos criadores e permitir que eles
  monetizem e promovam o próprio trabalho de maneira mais eficiente. A empresa
  acredita que as NFTs ainda têm um grande potencial para redefinir a
  criatividade, as comunidades de fãs e as experiências dos consumidores na
  blockchain. A Dapper Labs tem trabalhado em produtos como NBA Top Shot,
  CryptoKitties, NFL All Day, Dapper Wallet e outros para mostrar como as NFTs
  podem ser usadas para criar novas experiências, conectar fãs e criar conexões
  mais profundas no mundo digital. A empresa acredita que as NFTs são poderosas
  para permitir a participação e o envolvimento das comunidades, bem como para
  permitir que os fãs apoiem criadores e comunidades e expressem a própria
  individualidade.
featuredImage:
  type: ImageBlock
  url: /images/Como a programação orientada a recursos funciona diegofornalha.png
  altText: Como a programação orientada a recursos funciona?
  caption: >-
    O EVM (Ethereum Virtual Machine) ou WASM (WebAssembly) são opções ideais
    para ativos digitais, pois permitem que esses ativos sejam rotulados como
    "recursos" e sejam acompanhados por regras especiais que mantêm seu valor.
    Essas regras incluem a existência exclusiva de um recurso em um lugar
    específico, a impossibilidade de duplicação ou exclusão acidental e a
    propriedade determinada pelo local de armazenamento. Além disso, o acesso
    aos métodos de um recurso é limitado ao proprietário e as regras devem ser
    aplicadas enquanto o código é executado na blockchain para evitar invasões.
    Se essas regras forem seguidas corretamente, é possível armazenar ativos
    importantes de forma segura em estruturas de dados controladas por código de
    usuário. Um exemplo de como isso pode ser aplicado é o uso de tokens não
    fungíveis (NFTs) como CryptoKitties, que são indivisíveis, não copiáveis e
    podem ter um único proprietário direto. No modelo de recursos, o próprio
    CryptoKitty é armazenado diretamente na conta do proprietário, enquanto no
    modelo de ledger, é armazenado em um contrato inteligente centralizado.
media:
  type: ImageBlock
  url: /images/Como a programação orientada a recursos funciona diegofornalha.png
  altText: 'Como a programação orientada a recursos funciona? '
  caption: >-
    O EVM (Ethereum Virtual Machine) ou WASM (WebAssembly) são opções ideais
    para ativos digitais, pois permitem que esses ativos sejam rotulados como
    "recursos" e sejam acompanhados por regras especiais que mantêm seu valor.
    Essas regras incluem a existência exclusiva de um recurso em um lugar
    específico, a impossibilidade de duplicação ou exclusão acidental e a
    propriedade determinada pelo local de armazenamento. Além disso, o acesso
    aos métodos de um recurso é limitado ao proprietário e as regras devem ser
    aplicadas enquanto o código é executado na blockchain para evitar invasões.
    Se essas regras forem seguidas corretamente, é possível armazenar ativos
    importantes de forma segura em estruturas de dados controladas por código de
    usuário. Um exemplo de como isso pode ser aplicado é o uso de tokens não
    fungíveis (NFTs) como CryptoKitties, que são indivisíveis, não copiáveis e
    podem ter um único proprietário direto. No modelo de recursos, o próprio
    CryptoKitty é armazenado diretamente na conta do proprietário, enquanto no
    modelo de ledger, é armazenado em um contrato inteligente centralizado.
bottomSections: []
metaDescription: null
socialImage: null
author: content/data/team/hilary-ouse.json
---
Entre as opções que EVM ou WASM e são um ajuste perfeito para ativos digitais.

A rotulagem de algo como um “recurso” informa ao ambiente de programação que essa estrutura de dados representa algo de valor tangível e que todo código que interage com essa estrutura de dados precisa seguir uma série de regras especiais que manterão o valor dessa estrutura de dados.

Então, quais são essas regras?

1.  **Cada recurso existe exatamente em um lugar a qualquer momento.**

Os recursos não podem ser duplicados ou excluídos acidentalmente, por erro de programação ou código malicioso.

2.  **A propriedade de um recurso é definida por onde ele é armazenado.**

Não há razão central que precise ser consultada para determinar a propriedade.

3.  **O acesso aos métodos em um recurso é limitado ao proprietário.**

Por exemplo, apenas o proprietário de um CryptoKitty pode iniciar uma operação de criação que levará ao nascimento de um novo Kitty.

Não basta que o status especial dos objetos Resource seja aplicado apenas pelo compilador.

As regras devem ser aplicadas enquanto o código estiver realmente sendo executado na blockchain, seria muito fácil para um invasor usar uma cópia comprometida do compilador que ignora as regras que mantêm os recursos seguros.

Contudo! Se você aplicar essas regras corretamente, poderá permitir que o ativo mais importante da rede do token nativo seja armazenado com segurança dentro de estruturas de dados controladas por código enviado pelo usuário.

# **Mostre-me um exemplo!**

A maneira mais fácil de pensar sobre Recursos é pensar em um exemplo usando um Token Não Fungível (NFT), como um CryptoKitty.

Cada CryptoKitty é indivisível, não copiável e pode ter um único proprietário direto, que corresponde diretamente à construção de programação de Recursos.

Em um modelo de Ledger como o Ethereum, todos os CryptoKitties são armazenados em um único contrato inteligente como uma lista gigante. A propriedade de cada Kitty é rastreada armazenando o ID da conta de cada proprietário em um livro central, e a única maneira de alterar a propriedade de uma Kitty é entrar em contato com o livro central e solicitar que ele atualize o ID da conta associado a essa Kitty.

`contract KittyLedger {     struct Kitty {}     priv let kitties: {Int: Kitty}     fun transfer(kittyId: Int, newOwner: AccountId) {         if (msg.sender == kitties[kittyId].owner) {             kitties[kittyId].owner = newOwner         }     } } transaction(signer: Account) {     // diz ao razão central para atribuir a propriedade de     // myKittyId para uma conta diferente centralKittyLedger.transfer(myKittyId, receiverAccountId) }`

No Modelo de Recursos, o próprio Kitty é representado como um objeto de Recursos e é armazenado \*diretamente na conta que a possui.

\*Assim como no mundo físico, a propriedade é representada pela posse. Você não precisa procurar em um livro central para ver se possui algo, ou o armazena em sua conta ou não.

E se você tiver, pode transferi-lo ou controlá-lo de outra forma, e se você *não* tem, não há como capturá-lo ou alterá-lo.

`contract CryptoKitties {     //As contas armazenam uma coleção em seu recurso de armazenamento de conta KittyCollection {         // Cada coleção tem funções para //mover recursos armazenados para dentro e para fora         fun withdraw(kittyId: int): CryptoKitty         fun deposit(kitty: CryptoKitty)     }     //Os objetos de recurso que podem ser armazenados no recurso de coleção CryptoKitty {} } transaction(signer: Account) {     //Remove o Kitty da coleção do signatário e o armazena     // temporariamente na pilha.      let theKitty <- signer.kittyCollection.withdraw(kittyId: myKittyId)     // Move o Kitty para a conta do destinatário     let receiver = getAccount(receiverAccountId)     receiver.kittyCollection.deposit(kitty: <-theKitty) }`

*Nota: para manter o foco nas diferenças entre os modelos de contabilidade e propriedade direta, os dois exemplos acima ignoram questões como controle de acesso, definindo todas as variáveis, e outros fatores com os quais o código ativo precisaria se preocupar.*

# **Por que os recursos importam**

Além da vitória óbvia de incluir abstrações para gerenciar a propriedade, existem vários outros benefícios secundários decorrentes do uso de Recursos, cada um dos quais bastante significativo por si só:

# **Aluguel de Estado**

As plataformas escaláveis de contratos inteligentes precisam de alguma maneira de cobrar “ aluguel de estado ” para que os dados armazenados no blockchain sejam pagos ou removidos do conjunto de trabalho.

Com o modelo de contabilidade, é difícil saber quem deve pagar esse aluguel. Por exemplo, o contrato CryptoKitties representa dezenas de milhares de jogadores com quase dois milhões de Kitties e mais de 111MB de dados na blockchain.

A Ethereum não fornece nenhuma maneira de cobrar aluguel de maneira justa a todos os proprietários da Kitty.

Usando um modelo de propriedade direta via Tipos de Recursos, cada Kitty seria armazenada dentro da conta de seu proprietário, juntamente com os outros ativos dessa pessoa.

A responsabilidade de quem precisa pagar por esse armazenamento é clara.

Além disso, usuários individuais (assistidos pelo software cliente) podem arquivar ativos não utilizados para reduzir seus custos e reduzir a carga na rede.

# **Propriedade flexível**

O uso de um modelo de contabilidade para propriedade limita os tipos de relacionamentos com proprietários disponíveis.

Por exemplo, o ERC-721 define um modelo de propriedade para NFTs que pressupõe que apenas endereços Ethereum podem possuir uma NFT.

No entanto, a ideia de um ativo em si possuir outros ativos (como um CryptoKitty que possui um par bacana de óculos de sol ) é muito interessante em alguns casos de uso, e exigiu a criação de uma nova especificação (ERC-998).

O ERC-998 é muito poderoso, mas também é muito mais complicado que o ERC-721. Implementá-lo adequadamente é muito difícil e aplicar retroativamente seus recursos aos ativos existentes do ERC-721 é efetivamente impossível.

O modelo de propriedade direta permite que qualquer ativo modelado usando Tipos de Recursos seja armazenado com segurança em qualquer lugar do sistema, incluindo “dentro” de outros ativos, quando apropriado.

Todas as garantias de segurança e valor podem ser mantidas pelo sistema de tempo de execução, enquanto desbloqueia a flexibilidade criativa para desenvolvedores sem complexidade indevida.

# **Segurança baseada em capacidade**

Os tipos de recursos fornecem todas as garantias necessárias para implementar o conceito de “Capacidades” do [Segurança baseada em capacidade](https://en.wikipedia.org/wiki/Capability-based_security) modelo. Os recursos são um mecanismo poderoso para definir sistemas seguros e podem facilitar a adesão ao [Princípio do Menos Privilégio](https://en.wikipedia.org/wiki/Principle_of_least_privilege) (uma prática recomendada comum em sistemas de segurança).

Os modelos de segurança baseados em capacidade são geralmente considerados muito mais fáceis de raciocinar sobre, (o que aumenta a segurança), permitindo maior flexibilidade.

# **Eliminando erros de reentrada**

[O bug de contrato inteligente mais famoso da história da Ethereum](https://www.wired.com/2016/06/50-million-hack-just-showed-dao-human/) foi devido a um problema de reentrada, e os desenvolvedores de solidity precisa estar constantemente vigilantes contra a introdução de fluxo lógico suscetível a ataques de reentrada.

Felizmente, os métodos definidos nos recursos dos objetos não podem ser vítimas de nenhuma exploração de reentrada.

Parece uma afirmação ousada! No entanto, segue naturalmente como os Recursos são definidos: cada Recurso tem um único proprietário e somente o proprietário de um Recurso pode chamar os métodos nele.

Se um método de recurso estiver “na pilha”, sabemos que a referência de propriedade única a esse objeto já está em uso simplesmente não é possível que qualquer código que chamamos de dentro desse método, no entanto indiretamente, obtenha uma segunda referência a esse objeto para fazer uma chamada de método reentrante.

Obviamente, trabalhar diretamente com o estado compartilhado global (ignorando o uso de objetos de Recursos) ainda pode criar um código vulnerável a erros de reentrada.

É por isso que o estilo idiomático de cadência é usar Recursos para todo o estado compartilhado autores de contratos inteligentes que adotam Recursos nunca precisam pensar em bugs de reentrada novamente!

# **Mais sobre recursos**

Para aprofundar os recursos e a programação orientada a recursos, você pode:

*   Leia o [Mover papel técnico](https://developers.libra.org/docs/assets/papers/libra-move-a-language-with-programmable-resources/2019-09-26.pdf)[documentos do desenvolvedor](https://developers.libra.org/docs/move-overview) e

*   Leia o [Documentos do desenvolvedor de Flow](https://docs.onflow.org/docs)[Introdução à Cadence](https://docs.onflow.org/docs/introduction)

*   Aprenda a linguagem de programação Cadence em [Flow Playground](https://www.onflow.org/play)
