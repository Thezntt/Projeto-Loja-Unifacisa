# Projeto Angular - Produtos

Projeto desenvolvido em Angular para a Unifacisa.

Front-end em Angular que consome a API pública [DummyJSON](https://dummyjson.com/docs/products) e implementa um CRUD de produtos.

## Alunos

| Nome completo | Matrícula |
| ------------- | --------- |
|Tony Anderson Ferreira Tomaz|2515050036|
|Luis Antonio Sarmento Maracajá|2515050029|
|Breno de Oliveira Barbosa|2515050049|
|Alexia Silva Pereira|2515050005|

## Funcionalidades

| Método | O que faz                          | Endpoint                                   |
| ------ | ---------------------------------- | ------------------------------------------ |
| GET    | Lista os produtos na tela          | `GET https://dummyjson.com/products`       |
| GET    | Busca um produto (para editar)     | `GET https://dummyjson.com/products/{id}`  |
| POST   | Cria um produto pelo formulário    | `POST https://dummyjson.com/products/add`  |
| PUT    | Atualiza um produto                | `PUT https://dummyjson.com/products/{id}`  |
| DELETE | Apaga um produto                   | `DELETE https://dummyjson.com/products/{id}` |

> **Observação:** o DummyJSON apenas **simula** as operações de escrita (POST, PUT e DELETE). A API responde com sucesso, mas os dados não são gravados de verdade. Por isso, um produto criado não aparece ao recarregar a lista.

## Rotas

| Rota        | Página                            |
| ----------- | --------------------------------- |
| `/`         | Lista de produtos                 |
| `/create`   | Formulário de criação             |
| `/edit/:id` | Formulário de edição              |

## Tecnologias

- Angular 21
- TypeScript
- HttpClient e Reactive Forms
- CSS

## Estrutura de pastas

```
src/app/
├── components/
│   └── navbar/
├── models/
│   └── product.ts
├── pages/
│   ├── product-list/
│   └── product-form/
└── services/
    └── product.ts
```

## Como rodar o projeto

Pré-requisito: [Node.js](https://nodejs.org/) instalado.

```bash
# 1. clonar o repositório
git clone <link-do-repositorio>

# 2. entrar na pasta
cd projeto-unifacisa-produtos

# 3. instalar as dependências
npm install

# 4. rodar o projeto
npm start
```

Depois é só abrir `http://localhost:4200` no navegador.
