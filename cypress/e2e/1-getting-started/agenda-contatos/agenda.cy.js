 describe('Agenda de Contatos - Testes de Inclusão, Alteração e Remoção', () => {

  beforeEach(() => {
    // Abre o site antes de cada teste
    cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
  })

  // 1 TESTE DE INCLUSÃO
  it('Deve adicionar um novo contato', () => {
    const nome = `Contato Teste ${Date.now()}`
    const email = `teste${Date.now()}@ebac.com.br`
    const telefone = '11988887777'

function name(params) {
      // Preenche os campos
  
}    cy.get('input[placeholder="Nome"]').type(nome)
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


 it('Deve editar um contato', () => {
  const nomeOriginal = `Contato Teste ${Date.now()}`
  const emailOriginal = `teste${Date.now()}@ebac.com.br`
  const telefoneOriginal = '11988887777'

  const nomeEditado = `Contato Editado ${Date.now()}`
  const emailEditado = `editado${Date.now()}@ebac.com.br`
  const telefoneEditado = '11999998888'

  // 1. Cria um contato novo
  cy.get('input[placeholder="Nome"]').type(nomeOriginal)
  cy.get('input[placeholder="E-mail"]').type(emailOriginal)
  cy.get('input[placeholder="Telefone"]').type(telefoneOriginal)
  cy.get('.adicionar').click()

  // 2. Aguarda o contato aparecer na lista
  cy.contains(nomeOriginal).should('be.visible')

  // 3. Clica no botão "editar" do contato correto
  cy.contains(nomeOriginal)
    .closest('div.contato')
    .within(() => {
      cy.get('.edit').click()
    })

  // 4. Preenche os campos com os dados editados
  cy.get('input[placeholder="Nome"]').clear().type(nomeEditado)
  cy.get('input[placeholder="E-mail"]').clear().type(emailEditado)
  cy.get('input[placeholder="Telefone"]').clear().type(telefoneEditado)

  // 5. Salva a alteração
  cy.get('.alterar').click() // ajuste se o botão de salvar tiver outra classe

  // 6. Verifica se os dados editados aparecem na tela
  cy.contains(nomeEditado).should('be.visible')
  cy.contains(emailEditado).should('be.visible')
  cy.contains(telefoneEditado).should('be.visible')
})

it.only('Deve deletar um contato existente', () => {
  const nome = `Contato Para Deletar ${Date.now()}`
  const email = `deletar${Date.now()}@ebac.com.br`
  const telefone = '11977778888'

  // 1. Adiciona um contato
  cy.get('input[placeholder="Nome"]').type(nome)
  cy.get('input[placeholder="E-mail"]').type(email)
  cy.get('input[placeholder="Telefone"]').type(telefone)
  cy.get('button.adicionar').click()

  // 2. Verifica se o contato foi adicionado
  cy.contains('li', nome).should('be.visible')

  // 3. Encontra o contato pelo nome e clica no botão "Deletar"
  cy.contains('li', nome)                 // encontra o <li> com o nome do contato
    .closest('div.contato')               // sobe para o container principal do contato
    .within(() => {                       // limita o escopo
      cy.get('button.delete').click()     // clica no botão de deletar desse contato
    })

  // 4. Confirma que o contato foi removido da tela
  cy.contains('li', nome).should('not.exist')
  cy.contains(email).should('not.exist')
  cy.contains(telefone).should('not.exist')
})



});




  

