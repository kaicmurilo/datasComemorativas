## Obter Datas Comemorativas usando API do Calendarific

Este é um exemplo simples de como obter as datas comemorativas de um país usando a API do Calendarific e Node.js. O código é escrito em JavaScript e usa o pacote axios para fazer uma solicitação à API do Calendarific.

## Como Usar

Crie uma conta gratuita no site do Calendarific em https://calendarific.com/signup.

Depois de fazer login, crie uma chave de API no painel de controle do Calendarific em https://calendarific.com/api-keys.

Clone ou faça o download deste repositório.

No arquivo index.js, substitua "api_key" pela sua própria chave de API gerada pelo Calendarific.

Especifique a sigla do país desejado, que pode ser encontrada na documentação.

Abra o terminal e navegue até a pasta onde o arquivo index.js está localizado.

Execute o seguinte comando para instalar as dependências necessárias:

```bash
npm install
```

Execute o seguinte comando para executar o script:

```bash
node index.js
```

O resultado da solicitação será impresso no console, mostrando o nome da data comemorativa e a data em formato ISO.
