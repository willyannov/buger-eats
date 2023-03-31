describe('Ser um entregador', () => {

    it('Ser um entregador Burger Eats', () => {
        cy.visit('/');
        cy.get('a[href="/deliver"]').click();
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas');
        
    });
        
    
});