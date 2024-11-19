describe('Teste E2E do Formulário de Contato', () => {
    beforeEach(() => {
      cy.visit('http://localhost/contato.html'); // Substitua pela URL correta do formulário
    });
  
    it('Deve enviar o formulário com sucesso', () => {
      // Preenche os campos obrigatórios do formulário
      cy.get('input[name="nome"]').type('João Silva');
      cy.get('input[name="email"]').type('joao@example.com');
      cy.get('input[name="empresa"]').type('Empresa Teste');
      cy.get('textarea[name="mensagem"]').type('Esta é uma mensagem de teste.');
  
      // Envia o formulário
      cy.get('form').submit();
  
      // Verifica a resposta de sucesso
      cy.contains('Dados enviados com sucesso!').should('be.visible');
    });
  
    it('Deve mostrar erro ao enviar formulário sem preencher os campos obrigatórios', () => {
      // Envia o formulário sem preencher os campos
      cy.get('form').submit();
  
      // Verifica a mensagem de erro
      cy.contains('Preencha todos os campos obrigatórios.').should('be.visible');
    });
  });
  