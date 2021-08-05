//Testing main page of demosite

describe('Test Main Page', function() {
	it('Customer can go to login', function() {
		cy.visit(
		"https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login")
		cy.get('button[ng-click="customer()"]').click()
		cy.url().should('include', '/customer')		
		})
	
	it('Bank Manager can go to login', function() {
		cy.visit(
		"https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login")
		cy.get('button[ng-click="manager()"]').click()
		cy.url().should('include', '/manager')	
				
		})
	it('Bank Manager can return home', function() {
		cy.visit(
		"https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login")
		cy.get('button[ng-click="manager()"]').click()
		cy.get('button[ng-click="home()"]').click()
		cy.url().should('include', '/login')	
				
		})
	it('Customer can return home', function() {
		cy.visit(
		"https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login")
		cy.get('button[ng-click="customer()"]').click()
		cy.get('button[ng-click="home()"]').click()
		cy.url().should('include', '/login')	
				
		})
})