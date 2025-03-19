# Podcast API

Este projeto é uma API para gerenciar podcasts, fornecendo endpoints para listar e filtrar episódios. Ele segue uma arquitetura organizada com controllers, services, repositories e utils.

## 📂 Estrutura do Projeto

```
/node_modules       # Dependências do projeto
/src
  ├── config        # Configurações do projeto
  ├── controllers   # Controladores que gerenciam requisições
  │   ├── podcast.controller.ts
  ├── data
  │   ├── models   # Modelos de dados
  │   │   ├── filterPodcast.ts
  │   │   ├── podcast.model.ts
  ├── repositories  # Acesso a dados e banco de dados
  │   ├── podcasts.repository.ts
  ├── routes        # Definição de rotas da API
  │   ├── routes.ts
  ├── services      # Regras de negócios e lógica da aplicação
  │   ├── filterEps.service.ts
  │   ├── listEpisodios.services.ts
  ├── utils         # Utilitários e enums
  │   ├── contentLanguage.ts
  │   ├── contentType.ts
  │   ├── http.methods.ts
  │   ├── statusCode.ts
  ├── server.ts     # Arquivo principal para iniciar o servidor
.env                # Variáveis de ambiente
.gitignore          # Arquivos ignorados pelo Git
package.json        # Dependências e scripts do projeto
package-lock.json   # Controle de versões das dependências
tsconfig.json       # Configuração do TypeScript
readme.md           # Este arquivo
```

## 🛠 Tecnologias Utilizadas

- **Node.js** - Ambiente de execução JavaScript
- **TypeScript** - Superconjunto do JavaScript tipado
- **Express** - Framework web para Node.js
- **Dotenv** - Gerenciamento de variáveis de ambiente

## 🚀 Como Rodar o Projeto

### 1️⃣ Instalar as dependências:
```bash
npm install
```

### 2️⃣ Configurar variáveis de ambiente:
Crie um arquivo `.env` na raiz do projeto e defina as configurações necessárias, como a URL do banco de dados e porta do servidor.

### 3️⃣ Iniciar o servidor:
```bash
npm run dev
```

O servidor estará rodando em `http://localhost:3000` (ou na porta definida no `.env`).

## 📌 Principais Funcionalidades

- **Endpoints para gerenciar podcasts**
- **Listagem e filtragem de episódios**
- **Estrutura modular para escalabilidade**

## 📜 Licença

Este projeto está sob a licença MIT. Sinta-se livre para contribuir! 🚀
