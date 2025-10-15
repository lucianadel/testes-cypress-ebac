 describe('Agenda de Contatos', () => {
  beforeEach(() => {
    cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
  })

  it('Deve adicionar um novo contato', () => {
    const nome = `Contato Teste ${Date.now()}`
    const email = `teste${Date.now()}@ebac.com.br`
    const telefone = '11988887777'

    // Preenche os campos
    cy.get('input[placeholder="Nome"]').type(nome)
    cy.get('input[placeholder="E-mail"]').type(email)
    cy.get('input[placeholder="Telefone"]').type(telefone)

    // Clica no botão "Adicionar"
    cy.get('button.adicionar').click()

    // Verifica se o novo contato aparece na tela
    cy.contains(nome).should('be.visible')
    cy.contains(email).should('be.visible')
    cy.contains(telefone).should('be.visible')
  })
})
