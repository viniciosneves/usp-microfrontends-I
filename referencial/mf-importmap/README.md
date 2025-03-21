# Micro Frontends com Importmap

Salve! \o/

Este projeto é um exemplo didático criado para explicar o conceito de Micro Frontends utilizando `importmap`. Aqui você encontra uma abordagem prática e simplificada sobre como decompor aplicações frontend em partes menores, autônomas, e integrá-las usando importmap, sem frameworks complexos.

## ⚡ Pré-requisitos

- [Node.js](https://nodejs.org/) instalado
  - Preferencialmente na versão **18 ou superior**
- `npm` instalado (já incluso com Node.js)
- **Vite** (utilizado nas aplicações internas, instalado automaticamente)

Recomenda-se utilizar o Node **versão 22.x**.


## O que são Micro Frontends?

Micro Frontends são uma abordagem arquitetural onde uma aplicação web é dividida em múltiplas aplicações independentes, cada uma desenvolvida, implantada e mantida de maneira isolada. Pense nisso como vários times trabalhando de forma independente, contribuindo para um único produto final.

## O que é Importmap?

Importmap é uma especificação que permite importar módulos JavaScript diretamente no navegador sem a necessidade de bundlers. Basicamente, ele define como módulos externos são mapeados e carregados diretamente no HTML, facilitando o uso de múltiplas aplicações JavaScript em um único contexto.

## Estrutura do Projeto

- `/shell`: Aplicação principal que carrega os micro frontends usando importmap.
- `/mf-order`: Primeiro micro frontend isolado.
- `/mf-search`: Segundo micro frontend isolado.

Cada micro frontend foi construído usando HTML e JavaScript puro para facilitar o entendimento.

## Como rodar localmente

1. Inicie as aplicações internas individualmente. Em cada pasta, rode:

```bash
cd mf-order
npm install
npm run dev
```

Repita o processo para os demais micro frontends.

2. Inicie a aplicação principal:

```bash
cd shell
npm install
npm run dev
```

## Como o Importmap funciona aqui?

A aplicação principal (`shell`) usa um arquivo `importmap` para indicar ao navegador onde encontrar cada módulo dos micro frontends, permitindo carregá-los em tempo de execução diretamente nos navegadores modernos.

Exemplo:

```html
<script type="importmap">
{
  "imports": {
    "mf-order": "http://localhost:3001/shell.js",
    "mf-search": "http://localhost:3002/shell.js"
  }
}
```

Dessa forma, cada aplicação pode ser gerida por times diferentes, com implantações independentes, facilitando escalabilidade e manutenção.

## Quer saber mais?

Se você quiser aprofundar o entendimento sobre importmap ou Micro Frontends, confira:

- [Documentação Importmap MDN](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/script/type/importmap)
- Micro Frontends - Martin Fowler

## Contribuições

Este é um projeto aberto e didático. Contribuições são sempre bem-vindas!

