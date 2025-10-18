 describe('Agenda de Contatos - Testes de Inclusão, Alteração e Remoção', () => {

  beforeEach(() => {
    // Abre o site antes de cada teste
    cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
  })

  // 1 TESTE DE INCLUSÃO
  it.only('Deve adicionar um novo contato', () => {
    const nome = `Contato Teste ${Date.now()}`
    const email = `teste${Date.now()}@ebac.com.br`
    const telefone = '11988887777'

    // Preenche os campos
    cy.get('input[placeholder="Nome"]').type(nome)
    cy.get('input[placeholder="E-mail"]').type(email)
    cy.get('input[placeholder="Telefone"]').type(telefone)

    // Clica no botão "Adicionar"
    cy.get('button.adicionar').click()

    // Verifica se o contato foi adicionado na tela
    cy.contains(nome).should('be.visible')
    cy.contains(email).should('be.visible')
    cy.contains(telefone).should('be.visible')
    // cy.pause() // pausa aqui
  }) 


  // 1 TESTE DE alteracao
  it.only('Deve editar um contato', () => {
    const nome = `Contato Teste ${Date.now()}`
    const email = `teste${Date.now()}@ebac.com.br`
    const telefone = '11988887777'
  
    // Preenche os campos
    cy.get('input[placeholder="Nome"]').type(nome)
    cy.get('input[placeholder="E-mail"]').type(email)
    cy.get('input[placeholder="Telefone"]').type(telefone)
   
    // Clica no botão "editar"
    cy.get('.edit').last().click();
    cy.get('.alterar').click();
    cy.pause() 
   
      
    // Verifica se o contato foi editado na  tela
    cy.contains(nome).should('be.visible')
    cy.contains(email).should('be.visible')
    cy.contains(telefone).should('be.visible')
    // cy.pause() // pausa aqui
  }) 

  
});




  

