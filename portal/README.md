# Portal de Ferramentas Utilitárias

## Sobre o projeto

Esse projeto foi desenvolvido com o objetivo de criar um portal com ferramentas úteis para o dia a dia. A ideia é reunir em um só lugar funcionalidades simples, mas importantes, como organização de tarefas, cadastro de contatos e controle de gastos.

A aplicação foi feita utilizando React com TypeScript, focando em tipagem correta, organização de componentes e validação de formulários. Também foi utilizada persistência com localStorage para que os dados não sejam perdidos ao atualizar a página.

---

## Tecnologias utilizadas

- React + Vite  
- TypeScript  
- TailwindCSS  
- React Hook Form  
- Zod  
- React Router Dom  
- LocalStorage  

---

## Funcionalidades

### Home

Página inicial com uma breve apresentação e três cards principais que direcionam para:

- TaskMaster (Lista de Tarefas)  
- ConnectHub (Cadastro de Contatos)  
- MoneyFlow (Controle de Gastos)  

A Navbar permanece visível em todas as páginas.

---

### TaskMaster

Permite:

- Adicionar tarefas  
- Listar tarefas  
- Remover tarefas  

Regras:

- O título é obrigatório  
- Deve ter no mínimo 5 caracteres  
- A categoria pode ser: Trabalho, Pessoal ou Urgente  
- As tarefas são salvas no localStorage  

---

### ConnectHub

Permite cadastrar contatos com:

- Nome completo  
- E-mail  
- Telefone  

Validações:

- O e-mail deve ser válido  
- O telefone deve conter apenas números  

Os dados podem ser salvos no localStorage.

---

### MoneyFlow

Permite registrar entradas e saídas de valores.

Campos:

- Descrição  
- Valor  

Regras:

- O valor não pode ser zero ou negativo  
- O saldo total é exibido no topo da página  