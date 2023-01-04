---
layout: PostLayout
metaTitle: Versão beta aberta do nó de arquivo da comunidade Flow
addTitleSuffix: true
metaTags: []
title: Versão beta aberta do nó de arquivo da comunidade Flow
colors: colors-a
date: '2022-12-07'
excerpt: >-
  O nó de arquivo é um tipo de nó da cadeia de blocos Flow que é responsável por
  armazenar e indexar o protocolo e o estado de execução da cadeia. Ele permite
  consultas somente leitura, como a execução de scripts que precisam de acesso a
  valores do registro do estado de execução. Ele é projetado para fornecer uma
  solução escalável e eficiente para acessar o histórico do estado de execução
  da cadeia Flow, permitindo a consulta de detalhes da conta e execução de
  scripts em qualquer bloco desde o início do spork atual até o último bloco
  selado. O nó de arquivo é útil para dApps que precisam de acesso a dados
  históricos, ferramentas de análise e auditoria em cadeia que precisam de
  acesso a dados históricos e nós diferentes para recuperação de dados. Ele é
  diferente de outros tipos de nós, como o nó de acesso e o nó observador, que
  são responsáveis por fornecer acesso ao estado atual da cadeia e aos dados do
  protocolo, respectivamente.
featuredImage:
  type: ImageBlock
  url: >-
    /images/Versão beta aberta do nó de arquivo da comunidade Flow
    Diegofornalha.png
  altText: Versão beta aberta do nó de arquivo da comunidade Flow
  caption: >-
    O nó de arquivo é um tipo de nó da cadeia de blocos Flow que é responsável
    por armazenar e indexar o protocolo e o estado de execução da cadeia. Ele
    permite consultas somente leitura, como a execução de scripts que precisam
    de acesso a valores do registro do estado de execução. Ele é projetado para
    fornecer uma solução escalável e eficiente para acessar o histórico do
    estado de execução da cadeia Flow, permitindo a consulta de detalhes da
    conta e execução de scripts em qualquer bloco desde o início do spork atual
    até o último bloco selado. O nó de arquivo é útil para dApps que precisam de
    acesso a dados históricos, ferramentas de análise e auditoria em cadeia que
    precisam de acesso a dados históricos e nós diferentes para recuperação de
    dados. Ele é diferente de outros tipos de nós, como o nó de acesso e o nó
    observador, que são responsáveis por fornecer acesso ao estado atual da
    cadeia e aos dados do protocolo, respectivamente.
media:
  type: ImageBlock
  url: >-
    /images/Versão beta aberta do nó de arquivo da comunidade Flow
    Diegofornalha.png
  altText: Versão beta aberta do nó de arquivo da comunidade Flow
  caption: >-
    O nó de arquivo é um tipo de nó da cadeia de blocos Flow que é responsável
    por armazenar e indexar o protocolo e o estado de execução da cadeia. Ele
    permite consultas somente leitura, como a execução de scripts que precisam
    de acesso a valores do registro do estado de execução. Ele é projetado para
    fornecer uma solução escalável e eficiente para acessar o histórico do
    estado de execução da cadeia Flow, permitindo a consulta de detalhes da
    conta e execução de scripts em qualquer bloco desde o início do spork atual
    até o último bloco selado. O nó de arquivo é útil para dApps que precisam de
    acesso a dados históricos, ferramentas de análise e auditoria em cadeia que
    precisam de acesso a dados históricos e nós diferentes para recuperação de
    dados. Ele é diferente de outros tipos de nós, como o nó de acesso e o nó
    observador, que são responsáveis por fornecer acesso ao estado atual da
    cadeia e aos dados do protocolo, respectivamente.
bottomSections: []
metaDescription: >-
  O nó de arquivo é um tipo de nó da cadeia de blocos Flow que é responsável por
  armazenar e indexar o protocolo e o estado de execução da cadeia. Ele permite
  consultas somente leitura, como a execução de scripts que precisam de acesso a
  valores do registro do estado de execução. Ele é projetado para fornecer uma
  solução escalável e eficiente para acessar o histórico do estado de execução
  da cadeia Flow, permitindo a consulta de detalhes da conta e execução de
  scripts em qualquer bloco desde o início do spork atual até o último bloco
  selado. O nó de arquivo é útil para dApps que precisam de acesso a dados
  históricos, ferramentas de análise e auditoria em cadeia que precisam de
  acesso a dados históricos e nós diferentes para recuperação de dados. Ele é
  diferente de outros tipos de nós, como o nó de acesso e o nó observador, que
  são responsáveis por fornecer acesso ao estado atual da cadeia e aos dados do
  protocolo, respectivamente.
socialImage: >-
  /images/Versão beta aberta do nó de arquivo da comunidade Flow
  Diegofornalha.png
author: content/data/team/hilary-ouse.json
---
Temos o prazer de anunciar o Open Beta do nó de arquivo da comunidade Flow. O nó de arquivo fornece uma maneira escalável e eficiente de acessar o histórico do estado de execução do protocolo da flow\*\* para o spork atual. Ele pode ser usado para consultar detalhes da conta e executar scripts em qualquer bloco desde o início do spork atual até o último bloco selado usando a API de acesso gRPC.

# [](https://www.web3dev.com.br/diegofornalha/versao-beta-aberta-do-no-de-arquivo-da-comunidade-flow-nif?preview=b3b3c9b0a2457f93956d460ffbab01d7036f551d254e3d6b9b7f17ad047db6ca6183e1c6a3a878c809ec12c817f159542051fd489e7fad5070f58d67#o-que-%C3%A9-um-n%C3%B3-de-arquivo)**O que é um nó de arquivo?**

[A arquitetura de vários nós da](https://flow.com/primer#primer-multinode) Flow fornece dimensionamento à prova de futuro, separando o consenso da execução e tendo alguns nós de execução ricos em recursos para a execução da transação. Esses nós de execução foram projetados para manter os dados do estado de execução (estado das contas da flow, contratos inteligentes, recursos etc.) na memória para acesso mais rápido. No entanto, como o estado continuará crescendo indefinidamente, os nós de execução são projetados para manter apenas o estado mais recente na memória, voltando a cerca de 100 blocos no passado. Portanto, há uma necessidade de uma solução eficiente para atender a dados de estado de execução antigos ou arquivados que remontam a mais de 100 blocos no passado para qualquer aplicativo que gostaria de consultar o estado em um bloco anterior. O nó de arquivo visa fornecer essa solução e servir dados de arquivo.

O nó de arquivo é um nó que segue a cadeia e armazena e indexa **o** protocolo e o estado de execução. Ele permite consultas somente leitura, como a execução de scripts que exigem os valores do registro do estado de execução. Ele pode ser usado para responder a quaisquer perguntas de dados anteriores, por exemplo, “qual era o saldo da conta Flow na altura X?” onde X é vários milhares de blocos no passado.

# [](https://www.web3dev.com.br/diegofornalha/versao-beta-aberta-do-no-de-arquivo-da-comunidade-flow-nif?preview=b3b3c9b0a2457f93956d460ffbab01d7036f551d254e3d6b9b7f17ad047db6ca6183e1c6a3a878c809ec12c817f159542051fd489e7fad5070f58d67#como-funciona-o-n%C3%B3-de-arquivo)**Como funciona o nó de arquivo?**

Como o nó do [observador](https://developers.flow.com/nodes/node-operation/observer-node) , o nó do arquivo também é um nó não stakado e se comunica com um nó de acesso upstream. O nó observador recebe apenas os dados do estado do protocolo (blocos, coleções, transações etc.), enquanto o nó arquivo recebe tanto o estado do protocolo quanto os dados do estado de execução.

[![](https://assets-global.website-files.com/618c953e65cc2ba3f44d1a02/638fab8a942b81ccc89d304e_Flow%20Diagram\_02-12-22.png)](https://assets-global.website-files.com/618c953e65cc2ba3f44d1a02/638fab8a942b81ccc89d304e_Flow%20Diagram\_02-12-22.png)

‍

# [](https://www.web3dev.com.br/diegofornalha/versao-beta-aberta-do-no-de-arquivo-da-comunidade-flow-nif?preview=b3b3c9b0a2457f93956d460ffbab01d7036f551d254e3d6b9b7f17ad047db6ca6183e1c6a3a878c809ec12c817f159542051fd489e7fad5070f58d67#quem-deve-usar-o-n%C3%B3-de-arquivo)**Quem deve usar o nó de arquivo?**

*   dApps que precisam de acesso a dados históricos, por exemplo, [CAST](https://cast.fyi/), que considera os saldos da conta do usuário em um bloco anterior.

*   Ferramentas de análise e auditoria em cadeia que requerem acesso a dados históricos.

# [](https://www.web3dev.com.br/diegofornalha/versao-beta-aberta-do-no-de-arquivo-da-comunidade-flow-nif?preview=b3b3c9b0a2457f93956d460ffbab01d7036f551d254e3d6b9b7f17ad047db6ca6183e1c6a3a878c809ec12c817f159542051fd489e7fad5070f58d67#n%C3%B3s-diferentes-para-recupera%C3%A7%C3%A3o-de-dados-n%C3%B3-de-arquivo-vs-n%C3%B3-de-acesso-vs-n%C3%B3-observador)**Nós diferentes para recuperação de dados - nó de arquivo vs nó de acesso vs nó observador**

Antes de discutir a diferença entre o nó de arquivo e os nós de acesso e observador, primeiro vamos examinar os dois tipos de dados de estado na Blockchain Flow. Como a Flow tem diferentes tipos de nós em vez de um único nó validador, nem todos os tipos de nós têm todos os dados. Os dados de estado da flow são divididos em dados de **estado de protocolo** e dados de **estado de execução** .

Protocol State é o estado de funcionamento do protocolo da rede Flow, incluindo a tabela de identidades e recursos produzidos pelos nós da rede Flow: blocos, cobranças, recibos, aprovações, selos, etc.

O estado de execução é o estado das contas da flow, contratos inteligentes, recursos, etc. Esse estado é armazenado integralmente apenas nos nós de execução.

O nó de acesso é um nó **stakado** que recebe e indexa todos os dados de estado do protocolo e atende à [API de acesso](https://developers.flow.com/nodes/access-api) . Ele pode responder a todas as chamadas de API do Access relacionadas ao estado do protocolo, como GetBlock, GetAccount, GetCollection etc.

Consultando seu banco de dados local. No entanto, para todas as chamadas relacionadas ao estado de execução, por exemplo, GetAccount **,** ExecuteScriptAtXXX, ele faz uma chamada upstream para um nó de execução para buscar os dados do estado de execução.

No início deste ano, o nó observador foi [lançado](https://forum.onflow.org/t/path-to-permissionless-node-operation/3527) como uma alternativa não stakada ao nó de acesso que qualquer um pode executar sem ter que stakar o nó. Assim como o nó de acesso, o nó do observador também atende à API do Access. Ele apenas recebe e indexa os dados de bloco mais recentes e delega todas as chamadas de API de acesso a um nó de acesso upstream diferente daqueles para dados de bloco.

Hoje, pode-se consultar facilmente um nó de acesso ou um nó observador para obter o saldo da conta no último bloco ou executar um script no último bloco, mas você não pode consultar o saldo da conta ou executar o script em qualquer bloco arbitrário no passado.

Ao fazer isso, você receberá um erro como o seguinte, pois os nós de execução não retêm os dados do estado de execução além de 100 blocos no passado.

> erro rpc: code = Desc interno = falha ao obter conta: falha ao obter conta no bloco (xxx): compromisso de estado não encontrado (yyy). esse erro geralmente ocorre se o bloco de referência para esse script não estiver definido como um bloco recente.

É aqui que entra o nó de arquivo.

Ao contrário do nó de acesso e do nó do observador, o nó de arquivo armazena e indexa o estado de Execução além dos dados de estado do Protocolo. 

Em seguida, ele pode responder às chamadas de API de acesso do estado de execução, como GetAccount, por meio de seu banco de dados local.

*   Se você deseja acessar os últimos blocos, transações etc., mas não deseja executar um nó, use o [nó de acesso da comunidade Flow](https://developers.flow.com/nodes/access-api#flow-access-node-endpoints)

*   Se você deseja uma única locação e/ou não deseja estar sujeito aos limites de taxa da API do Access, considere executar seu próprio nó de acesso.

*   Se você deseja um nó executado localmente que forneça os dados de bloco mais recentes, execute um nó observador.

*   Se você deseja acessar os dados históricos do estado de execução, use o nó de arquivo da comunidade.

# [](https://www.web3dev.com.br/diegofornalha/versao-beta-aberta-do-no-de-arquivo-da-comunidade-flow-nif?preview=b3b3c9b0a2457f93956d460ffbab01d7036f551d254e3d6b9b7f17ad047db6ca6183e1c6a3a878c809ec12c817f159542051fd489e7fad5070f58d67#api)**API**

O nó de arquivo fornece uma versão concisa da [API gRPC Access](https://developers.flow.com/nodes/archive-access-api) , que inclui as três chamadas a seguir:

1.  ExecuteScriptAtBlockID

2.  ExecuteScriptAtBlockHeight

3.  GetAccountAtBlockHeight

Ele retorna um erro HTTP 501 Não implementado para todas as outras chamadas de API do Access.

O endpoint da API gRPC é: archive.mainnet.nodes.onflow.org:9000

# [](https://www.web3dev.com.br/diegofornalha/versao-beta-aberta-do-no-de-arquivo-da-comunidade-flow-nif?preview=b3b3c9b0a2457f93956d460ffbab01d7036f551d254e3d6b9b7f17ad047db6ca6183e1c6a3a878c809ec12c817f159542051fd489e7fad5070f58d67#exemplos)**Exemplos**

1.  Para obter um saldo de conta no início do spork atual, você pode chamar GetAccountAtBlockHeight no nó de arquivo.

Código de amostra:

> package main
>
> import (
>
> "context"
>
> "fmt"
>
> "github.com/onflow/flow-go-sdk/access/grpc"
>
> "github.com/onflow/flow-go-sdk"
>
> )
>
> func main() {
>
> // a flow endpoint da API de arquivo da comunidade
>
> archiveNodeAddress := "archive.mainnet.nodes.onflow.org:9000"
>
> // cria um cliente gRPC para o nó Archive
>
> archiveNodeClient, err := grpc.NewClient(archiveNodeAddress)
>
> if err != nil {
>
> fmt.Println ("err:", err.Error())
>
> panic(err)
>
> }
>
> ctx := context.Background()
>
> addr := flow.HexToAddress("e467b9dd11fa00df") // qualquer endereço de conta Flow
>
> // obtém o saldo da conta no início altura do garfo atual
>
> // <https://developers.flow.com/nodes/node-operation/past-sporks#mainnet-20>
>
> conta, err := archiveNodeClient.GetAccountAtBlockHeight(ctx, addr, 40171634)
>
> if err != nil {
>
> fmt. Println("err:", err.Error())
>
> panic(err)
>
> }
>
> fmt.Println(account.Balance)
>
> }

‍

1.  Para executar um script em um bloco no passado, você pode chamar ExecuteScriptAtBlockHeight ou ExecuteScriptAtBlockID no nó de arquivo.

Código de amostra:

> package main
>
> import (
>
> "context"
>
> "fmt"
>
> "github.com/onflow/cadence"
>
> "github.com/onflow/flow-go-sdk/access/grpc"
>
> )
>
> func main() {
>
> // o nó de acesso da comunidade principal da Flow API endpoint
>
> accessNodeAddress := "access.mainnet.nodes.onflow.org:9000"
>
> // o arquivo da comunidade Flow API endpoint
>
> archiveNodeAddress := "archive.mainnet.nodes.onflow.org:9000"
>
> // cria um cliente gRPC para o Nó de acesso
>
> accessNodeClient, err := grpc.NewClient(accessNodeAddress)
>
> if err != nil {
>
> fmt.Println("err:", err.Error())
>
> panic(err)
>
> }
>
> ctx := context.Background()
>
> // obtém a altura do último bloco selado do nó de acesso da comunidade mainnet da Flow RecentBlockHeader
>
> , err := accessNodeClient.GetLatestBlockHeader(ctx, true)
>
> if err != nil {
>
> fmt.Println("err:", err.Error() )
>
> panic(err)
>
> }
>
> // definir a altura para 500 blocos na
>
> altura passada := lastBlockHeader.Height - 500
>
> // criar um cliente gRPC para o nó Archive
>
> archiveNodeClient, err := grpc.NewClient(archiveNodeAddress)
>
> if err != nil {
>
> fmt.Println("err:", err.Error())
>
> panic(err)
>
> }
>
> script := \[]byte(\`
>
> pub fun main(a: Int): Int {
>
> return a + 10
>
> }
>
> \`)
>
> args := \[]cadence.Value{cadence.NewInt(5)}
>
> // executa o script no nó de arquivo em uma altura de bloco que é de 500 blocos no
>
> valor passado, err := archiveNodeClient.ExecuteScriptAtBlockHeight(ctx, height, script, args)
>
> if err != nil {
>
> fmt.Println("err:" , err.Error())
>
> panic(err)
>
> }
>
> fmt.Printf("\nValor: %s", valor)
>
> }

‍

# [](https://www.web3dev.com.br/diegofornalha/versao-beta-aberta-do-no-de-arquivo-da-comunidade-flow-nif?preview=b3b3c9b0a2457f93956d460ffbab01d7036f551d254e3d6b9b7f17ad047db6ca6183e1c6a3a878c809ec12c817f159542051fd489e7fad5070f58d67#limita%C3%A7%C3%B5es)**Limitações**

*   [Limites de taxa da API gRPC](https://developers.flow.com/nodes/archive-api-rate-limits)

*   A API REST do Access e o endpoint gRPC-web não são compatíveis no momento.

*   O nó de arquivo atualmente não pode ser auto-hospedado.

*   O nó de arquivo só pode voltar até o início do spork atual.

# [](https://www.web3dev.com.br/diegofornalha/versao-beta-aberta-do-no-de-arquivo-da-comunidade-flow-nif?preview=b3b3c9b0a2457f93956d460ffbab01d7036f551d254e3d6b9b7f17ad047db6ca6183e1c6a3a878c809ec12c817f159542051fd489e7fad5070f58d67#status-do-n%C3%B3)**Status do Nó**

O status do nó de arquivo pode ser monitorado na [página de status da flow](https://status.onflow.org/) em “Componentes do nó de arquivo da rede principal da flow”

# [](https://www.web3dev.com.br/diegofornalha/versao-beta-aberta-do-no-de-arquivo-da-comunidade-flow-nif?preview=b3b3c9b0a2457f93956d460ffbab01d7036f551d254e3d6b9b7f17ad047db6ca6183e1c6a3a878c809ec12c817f159542051fd489e7fad5070f58d67#o-que-vem-a-seguir)**O que vem a seguir 🚀**

Este é um lançamento beta aberto à medida que resolvemos os problemas e preparamos o nó de arquivo para um lançamento GA no início do próximo ano.

O nó de arquivo da comunidade estará sempre disponível e, no início do próximo ano, haverá uma versão **auto-hospedada** do nó de arquivo que qualquer um pode executar como parte do [caminho para o](https://forum.onflow.org/t/path-to-permissionless-node-operation/3527) roteiro de operação do nó sem permissão. Este lançamento beta é um trampolim para esse objetivo.

# [](https://www.web3dev.com.br/diegofornalha/versao-beta-aberta-do-no-de-arquivo-da-comunidade-flow-nif?preview=b3b3c9b0a2457f93956d460ffbab01d7036f551d254e3d6b9b7f17ad047db6ca6183e1c6a3a878c809ec12c817f159542051fd489e7fad5070f58d67#coment%C3%A1rios)**Comentários ❤️**

Nós valorizamos o seu feedback. Relate quaisquer problemas encontrados ao usar o nó de arquivo aqui: <https://github.com/onflow/flow-archive/issues>.

Conteúdo original em inglês aqui:<https://flow.com/post/flow-blockchain-node-operation-archive-node>Parte da Rede da flow (fala com os outros nós stakados)Qual API ele atende?Qualquer pessoa pode executar um nó?Limites de taxa nos nós da comunidade

