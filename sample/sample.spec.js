/*  describe('Login', () => {
     it('should log in with credentials', () => {
        cy.visit('/login');
        cy.get('[name=login_name]').type(Cypress.env('login'));
        cy.get('[name=passwd]').type(Cypress.env('password'));
        cy.get('[name=send]').click();
        cy.get('.main-header').should('be.visible');
    });
});
*/
describe('My First Test', function() {
	it('Does not much', function() {
		expect(true).to.equal(true)	

		})
	
	
	it('Visits the kitchen sink', function() {
		cy.visit('https://example.cypress.io')
	})
	
	it('Find and click an element', function() {
		cy.visit('https://example.cypress.io')
		cy.contains('type').click()
	})
	
	it('Make an asserion', function() {
		cy.visit('https://example.cypress.io')
		cy.contains('type').click()	
		cy.url()
			.should('include', '/commands/actions')
		
	})
	it('Gets, types and asserts', function() {
		cy.visit('https://example.cypress.io')
		cy.contains('type').click()	
		cy.url()
			.should('include', '/commands/actions')
		cy.get('.action-email')
			.type('fake@email.com')
			.should('have.value', 'fake@email.com')
	})
	
	
	
})