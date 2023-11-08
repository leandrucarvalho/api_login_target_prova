# API de Gerenciamento

Esta é uma API de gerenciamento construída com Node.js utilizando o framework Express. Ela fornece endpoint para autenticação de usuários em um app mobile. Onde ao digitar as credenciais no aplicativo ele ira validar com um dado mockado na API, se der sucesso ele efetua o login e vai para a próxima tela. 

## Configuração

Certifique-se de ter o Node.js instalado em seu ambiente de desenvolvimento.

1. Faça o clone deste repositório.
2. No diretório raiz do projeto, execute o comando `npm install` para instalar as dependências.
3. Configure as variáveis de ambiente no arquivo `.env`, se necessário.
4. Execute o comando `npm start` para iniciar o servidor.

A API estará disponível em `http://localhost:3000`.

## Deploy 

O deploy da api foi realizado no [glitch](https://glitch.com/)
- url da api:  https://aluminum-api-login.glitch.me

## Rota

A API possui a seguinte rota:

### Login

- **POST /login**: Retorna login bem sucessido ou credencial invalida.

## Exemplos de Uso

### Validar user

**Requisição:**

```http
POST /login
Content-Type: application/json

{
  "username": "username",
  "password": "password"
}
```

**Resposta:**

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "message": "Login bem-sucedido!",
}
```

## Contribuição

Se desejar contribuir para este projeto, sinta-se à vontade para enviar um pull request. Ficaremos felizes em revisar e incorporar as melhorias.
