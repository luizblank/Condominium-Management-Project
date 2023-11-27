# Condominium-Management-Project

Este documento fornece uma visão geral do sistema de condomínio desenvolvido em React Native (front-end), Java (back-end) e MongoDB (banco de dados). O sistema visa proporcionar uma gestão eficiente e centralizada das atividades do condomínio, oferecendo funcionalidades específicas para moradores e recursos adicionais para o síndico.

## 1. Tecnologias Utilizadas:
Front-End (React Native):
* Desenvolvimento da interface do usuário com React Native.
Back-End (Java):
* Desenvolvimento em Java utilizando o framework Spring Boot para a construção da lógica de negócios.
Banco de Dados (MongoDB):
* Armazenamento e recuperação de dados utilizando o MongoDB, um banco de dados NoSQL.
## 2. Funcionalidades do Sistema:
### 2.1 Página Inicial:
Informações Exibidas:
* Nome do morador.
* Número do apartamento.
* Bloco do apartamento.
### 2.2 Página de Geração de Boleto:
Funcionalidades:
* Geração de boletos para pagamento de taxas condominiais.
### 2.3 Página de Cadastro (Acesso Restrito ao Síndico):
Funcionalidades:
* Cadastro de novos moradores.
* Gerenciamento de informações pessoais dos moradores.
* Acesso restrito apenas ao síndico.
### 2.4 Página de Reserva de Churrasqueira:
Funcionalidades:
* Reserva de churrasqueiras com data.
### 2.5 Página de Denúncias:
Funcionalidades:
* Envio de denúncias relacionadas a questões do condomínio.
### 2.6 Página de Agendamento (Acesso Restrito ao Síndico):
Funcionalidades:
* Agendamento para coleta de lixo.
* Agendamento de assembleias de condomínio.
### 2.7 Página do Síndico (Adicional à Página Inicial):
Informações Adicionais:
* Quantidade de apartamentos disponíveis em cada bloco.
* Vagas no estacionamento reservadas por apartamento.
## 3. Configuração e Implantação:
* Baixe as extensões "Spring Boot Extension Pack" e "Extension Pack for Java" e após a instalação vá para a seguinte localização no seu sistema:
  - .\java\src\java\com\luizblank\condominiumapi\CondominiumapiApplication.java
Nesse arquivo, clique no botão run para iniciar o back-end.
* Utilize nessa sequência os seguintes comandos no terminal:
  - cd .\site
  - npm install
  - npx expo start
Depois disso, seu front-end será iniciado corretamente e o sistema já vai poder ser utilizado.

Este sistema oferece uma solução abrangente para a gestão condominial, utilizando tecnologias modernas para garantir eficiência, segurança e facilidade de uso para moradores e o síndico.