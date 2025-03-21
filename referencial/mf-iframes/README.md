# Micro Frontends com iframes

Salve! \o/

Este projeto é um exemplo didático que explica como implementar Micro Frontends utilizando **iframes**. Aqui você encontra uma abordagem prática e acessível sobre como dividir aplicações frontend em partes menores, totalmente independentes, usando uma das abordagens mais simples disponíveis.

## ⚡ Pré-requisitos

- [Node.js](https://nodejs.org/) instalado
  - Preferencialmente na versão **18 ou superior**
- `npm` instalado (já incluso com Node.js)
- **Vite** (utilizado nas aplicações internas, instalado automaticamente)

Recomenda-se utilizar o Node **versão 22.x**.


## O que são Micro Frontends?

Micro Frontends são uma arquitetura onde uma aplicação web grande é dividida em várias aplicações menores, cada uma podendo ser desenvolvida, testada e implantada separadamente. Isso permite maior autonomia entre equipes e simplifica o gerenciamento de funcionalidades.

## Por que usar iframes?

Iframes são uma maneira simples e direta de implementar Micro Frontends. Eles permitem carregar múltiplas aplicações frontend dentro de uma única página HTML sem conflitos de CSS ou JavaScript, garantindo total isolamento entre as aplicações.

## Estrutura do Projeto

- `/shell`: Aplicação principal que carrega os micro frontends usando iframes.
- `/order`: Primeiro micro frontend independente.
- `/search`: Segundo micro frontend independente.

Cada micro frontend foi desenvolvido utilizando HTML, CSS e JavaScript puro (Vanilla JS) para facilitar o aprendizado e a demonstração.

## Como rodar localmente

1. Execute cada aplicação interna separadamente:

```bash
cd order
npm install
npm run dev
```

Repita o mesmo procedimento para o segundo micro frontend.

2. Execute a aplicação principal:

```bash
cd shell
npm install
npm run dev
```

## Como funciona a abordagem com iframes?

Na aplicação principal, os micro frontends são carregados diretamente através de iframes no HTML:

```js
window.addEventListener('message', (event) => {
    if (event.data.type === 'NAVIGATE') {
        const mf = microFrontendsByRoute.find(m => m.path === event.data.path)
        if (mf) {
            mainIframe.setAttribute('src', mf.source)
            window.history.pushState({}, '', mf.path)
        }
    }
})
```

Cada iframe é uma janela completamente isolada, permitindo que as aplicações internas sejam atualizadas ou modificadas sem afetar umas às outras.

## Quer saber mais?

Para aprofundar seu conhecimento sobre Micro Frontends e iframes:

- [Artigo sobre Micro Frontends por Martin Fowler](https://martinfowler.com/articles/micro-frontends.html)
- [Documentação sobre iframes MDN](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/iframe)

## Contribuições

Este é um projeto aberto e focado no aprendizado. Contribuições são sempre bem-vindas!

