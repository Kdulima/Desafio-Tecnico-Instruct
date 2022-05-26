# Habitue

> Habitue é uma aplicação _frontend_ desenvolvida para o desafio técnico da empresa **Instruct**. Nela você irá consumir os dados da [Countries GraphQL API](https://countries.trevorblades.com/graphql) de forma dinâmica, filtrando os **continentes**, **idiomas** e também **países com mais de 1 idioma** existentes na base de dados.

### Para conferir a aplicação em funcionamento, acesse: [https://.vercel.app/](https://instructhabitue.vercel.app/)

## 🛠️ Tecnologias e Ferramentas utilizadas

* Vue.js
* Vue-apollo
* Apollo client
* GraphQL
* GraphQL-tag
* Vite.js
* Typescript
* Cypress
* Jest
* Eslint

## 💻 Pré-requisitos

Esta aplicação utiliza o _Node_ na versão _14.19.3_, para iniciar, certifique-se que você tem uma versão igual ou superior instalada em seu computador.

## 🚀 Clonando o projeto


Abra seu terminal e digite os seguintes comandos:
```
git clone https://github.com/Kdulima/Desafio-Tecnico-Instruct

cd Desafio-Tecnico-Instruct
```
## 🚀 Iniciando a aplicacação
Com o projeto clonado em sua máquina e dentro do diretório `Desafio-Tecnico-Instruct`, execute o seguinte comando:

```
npm install
```

```
npm run dev
```
Aguarde a mensagem abaixo aparecer em seu terminal. 

```
Local: http://localhost:3000/
``` 

Abra seu navegador `Google Chrome` e digite o seguinte link:
[http://localhost:3000/](http://localhost:3000/)

Aguarde até que o aplicacação seja iniciada.

## Testando a aplicação

Esta aplicação possui testes unitários com o framework **Jest** e testes _e2e_ com o _**cypress**_. **Para executá-los e verificar a cobertura do teste, siga estas instruções:**

### **Testes unitários**

Navegue até a pasta `raiz` do projeto
```
cd Desafio-Tecnico-Instruct
```
Inicie os testes com o comando:
```
npm test
```

### **Testes _e2e_**

Navegue até a pasta `raiz` do projeto
```
cd Desafio-Tecnico-Instruct
```

Inicie a aplicação com o comando:
```
npm run dev
```

Inicie os testes com o comando:
```
npx cypress open
```

Navegue até a pasta _tests/e2e_ e selecione o arquivo de teste de sua preferência.
## Usando a aplicação

Assim que a aplicação iniciar, você poderá selecionar quais filtros deseja visualizar.

_O filtro `Selecione o continente` mostrará a lista de continentes existentes na base de busca._

_O filtro `Selecione o idioma` mostrará a lista de idiomas presente em todos os continentes da base de busca._

_O checkbox `País com +1 idioma`, irá filtrar os países que possuem mais de 1 idioma._


## Autor

<table>
  <tr>
    <td align="center">
      <a href="https://www.linkedin.com/in/carloslima90/" target="_blank" rel="noopener noreferrer">
        <img src="https://ca.slack-edge.com/TDXK4RHFF-U02DS2K8TNX-04fa7e891184-512" width="100px;" alt="Foto do Carlos Lima"/><br>
        <sub>
          <b>Carlos Lima</b>
        </sub>
      </a>
    </td>
  </tr>
</table>


## 📝 Licença

Este projeto foi desenvolvido para resolução de um desafio técnico. Sendo assim, este projeto não está licenciado e não possui fins lucrativos, sendo feito apenas para fins de estudo dos colaborares.

[⬆ Voltar ao topo](#Habitue)<br>
