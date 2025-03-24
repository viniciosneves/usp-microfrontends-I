# Microfrontends com Docker + Vite

Este repositório usa Docker para encapsular o ambiente Node.js v22 e facilitar o desenvolvimento de aplicações Vite **sem precisar instalar o Node localmente**.

## 📦 Estrutura

- `aula/`: contém o `Dockerfile` e `docker-compose.yml` para criar o ambiente de desenvolvimento.
- `referencial/`: exemplos de microfrontends usando iframes e import maps.

## 🚀 Como usar

### 1. Subir o ambiente

Execute na raiz do projeto:

```bash
cd aula
docker-compose up --build
```

> Isso criará o container com o Node 22 e deixará pronto para uso interativo em outro terminal.

### 2. Entrar no container

Em outro terminal, rode:

```bash
docker exec -it node-terminal bash
```

Agora você pode executar qualquer comando `npm`, `npx` ou `node` dentro do ambiente isolado.

### 3. Criar um novo app Vite

Ainda dentro do container:

```bash
npm create vite@latest nome-do-app
cd nome-do-app
npm install
```

### 4. Configurar o script `dev`

Para garantir que o Vite funcione corretamente dentro do Docker, **edite o `package.json`** do app criado e ajuste o script `dev`:

```json
"scripts": {
  "dev": "vite --host --port 800X"
}
```

- Sempre inclua `--host` para que o Vite escute corretamente no Docker.
- Use uma porta **entre 8000 e 8004**, já que essas são as portas mapeadas no `docker-compose.yml`.

Por exemplo, para um app novo:

```json
"dev": "vite --host --port 8002"
```

### 5. Rodar a aplicação

Ainda dentro do container, execute:

```bash
npm run dev
```

Acesse no navegador:

```
http://localhost:8002
```

## 🔁 Lembretes

- Só há portas mapeadas até `8004`. Se precisar de mais apps simultâneos, adicione novas portas ao `docker-compose.yml`.
- Use sempre `--host` no script `dev` para que o Vite fique acessível fora do container.
- Não instale Node localmente – tudo roda isolado dentro do container.

## 💡 Dica

Você pode criar um alias ou script para facilitar o acesso ao container:

```bash
alias devbox="docker exec -it node-terminal bash"
```

🧐 Vida longa e próspera, e bons microfrontends!

