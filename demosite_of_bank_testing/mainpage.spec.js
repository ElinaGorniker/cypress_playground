//Testing main page of demosite

describe('Test Main Page', function() {
	it('Customer can go to login', function() {
		cy.visit(
		"https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login")
		cy.get('body > div > div > div.ng-scope > div > div.borderM.box.padT20 > div:nth-child(1) > button').click()
		cy.url().should('include', '/customer')		
		})
	
	it('Bank Manager can go to login', function() {
		cy.visit(
		"https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login")
		cy.get('body > div > div > div.ng-scope > div > div.borderM.box.padT20 > div:nth-child(3) > button').click()
		cy.url().should('include', '/manager')	
				
		})
	it('Bank Manager can return home', function() {
		cy.visit(
		"https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login")
		cy.get('body > div > div > div.ng-scope > div > div.borderM.box.padT20 > div:nth-child(3) > button').click()
		cy.url().should('include', '/login')	
				
		})
	it('Customer can return home', function() {
		cy.visit(
		"https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login")
		cy.get('body > div > div > div.ng-scope > div > div.borderM.box.padT20 > div:nth-child(1) > button').click()
		cy.get('body > div > div > div.box.mainhdr > button.btn.home').click()
		cy.url().should('include', '/login')	
				
		})
})