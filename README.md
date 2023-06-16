# API de Gerenciamento de Programadores

Este é um exemplo de um README para criar uma API com Node.js que permite visualizar, cadastrar, atualizar e deletar programadores, utilizando o banco de dados SQLite.

## Tecnologias Utilizadas

- Node.js
- Express.js
- SQLite
- Sequelize

## Pré-requisitos

Certifique-se de ter o seguinte instalado no seu ambiente de desenvolvimento:

- Node.js: [Instalação do Node.js](https://nodejs.org)

## Configuração

1. Clone este repositório para o seu ambiente local ou baixe o código-fonte.

2. No terminal, navegue até o diretório do projeto.

3. Instale as dependências do projeto executando o seguinte comando:

```bash
npm install
```

## Uso

1. Inicie o servidor executando o seguinte comando:

```bash
npm start
```

2. A API estará disponível em `http://localhost:5000`.

3. Você pode testar a API usando uma ferramenta como o [Postman](https://www.postman.com) ou o [cURL](https://curl.se) para realizar as seguintes operações:

- Visualizar todos os programadores:

  - Método: GET
  - Endpoint: `/retrieverProgramme`

- Cadastrar um novo programador:

  - Método: POST
  - Endpoint: `/createProgrammer`
  - Corpo da requisição: JSON contendo os dados do programador.

- Atualizar um programador existente:

  - Método: PUT
  - Endpoint: `/updateProgrammer`
  - Corpo da requisição: JSON contendo os dados atualizados do programador.

- Deletar um programador:
  - Método: DELETE
  - Endpoint: `/deleteProgrammer`

## Contribuição

Se você encontrar problemas, bugs ou tiver sugestões de melhorias, sinta-se à vontade para abrir uma "issue" ou enviar um "pull request" neste repositório.

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](LICENSE) para obter mais informações.

## Agradecimentos

- [Node.js](https://nodejs.org)
- [Express.js](https://expressjs.com)
- [SQLite](https://www.sqlite)
