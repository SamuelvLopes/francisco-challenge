### 	INSTRUÇÕES PARA SUBIR UMA INSTANCIA DO PROJETO EM UMA MAQUINA zerada

### Após o projeto ser concluido deve ser acessado em localhost

## O projeto está configurado para usar as portas
- 80->ngix frontend react já buildado
- 3000->ambiente para dev react
- 8080->backend-php
- 3306->mysql
### CASO OUTRA APLICAÇÃO JÁ ESTEJA USANDO ALGUMA DESSAS PORTAS OCORRERÁ UM ERRO.
#### LEMBRANDO QUE APÓS SUBIR A APLICAÇÃO COM "docker-compose up" o servidor demora um pouco para subir e estabilizar

## Orientações Windows
- BAIXAR DOCKER DESKTOP(https://www.docker.com/products/docker-desktop/)
- EXECUTAR exec_windows.bat

## Orientações Linux
- recomendado UBUTU 20.04.4 LTS
- executar o filename.sh
- passo a passo(COMO EXECUTAR filename.sh) para instalar o docker
- passo a passo(COMO EXECUTAR init projeto.sh) para iniciar o projeto

## #PASSO 1: 
-marcar o check-box em propriedades
![Captura de tela 2022-08-15 052536](https://user-images.githubusercontent.com/51290633/184603791-82d693f8-7949-4c64-bdfe-32954f3e749b.png)

## 2-PASSO 2: 
- executar os seguintes comandos no terminal, servem para instalação do docker.
![Captura de tela 2022-08-15 052553](https://user-images.githubusercontent.com/51290633/184603422-9f984941-280e-47d9-8030-74f6c8e0b8a9.png)

## Mini-framework php Criado para o projeto com estrutura mcv disponivel, entretando foi utilizado o react no frontend utilizando a rota /api/

