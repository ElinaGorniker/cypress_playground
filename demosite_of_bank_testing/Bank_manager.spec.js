// Testing page of Bank manager account

describe('Bank manager can work', function() {
	it('Bank manager go to add customer', function() {
		cy.visit(
		"https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager")
		cy.get('body > div > div > div.ng-scope > div > div.center > button:nth-child(1)').click()
		cy.url().should('include', '/addCust')		
		})
	it('Bank manager go to open account', function() {
		cy.visit(
		"https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager")
		cy.get('body > div > div > div.ng-scope > div > div.center > button:nth-child(2)').click()
		cy.url().should('include', '/openAccount')		
		})
	it('Bank manager go to Customers', function() {
		cy.visit(
		"https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager")
		cy.get('body > div > div > div.ng-scope > div > div.center > button:nth-child(3)').click()
		cy.url().should('include', '/list')		
		})
	
	it('Bank manager can add customer', function() {
		cy.visit(
		"https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager")
		cy.get('body > div > div > div.ng-scope > div > div.center > button:nth-child(1)').click()
		cy.get('body > div > div > div.ng-scope > div > div.ng-scope > div > div > form > div:nth-child(1) > input').type("Fakename")
		cy.get('body > div > div > div.ng-scope > div > div.ng-scope > div > div > form > div:nth-child(2) > input').type("Fakelastname")		
		cy.get('body > div > div > div.ng-scope > div > div.ng-scope > div > div > form > div:nth-child(3) > input').type("123987")
		cy.get('.btn.btn-default').click()
		cy.on ('window:confirm', (txt)=>{
		expect(txt).to.contains('Customer added successfully with customer id')})
		cy.get('body > div > div > div.ng-scope > div > div.center > button:nth-child(3)').click()
		cy.get(".ng-binding").should('include.text', 'FakenameFakelastname123987')
		
	})
		
	it('Bank manager cant add customer without First name', function() {
		cy.visit(
		"https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager")
		cy.get('body > div > div > div.ng-scope > div > div.center > button:nth-child(1)').click()
		cy.get('body > div > div > div.ng-scope > div > div.ng-scope > div > div > form > div:nth-child(2) > input').type("Fakelastname")		
		cy.get('body > div > div > div.ng-scope > div > div.ng-scope > div > div > form > div:nth-child(3) > input').type("123987")
		cy.get('.btn.btn-default').click()
		cy.get('body > div > div > div.ng-scope > div > div.center > button:nth-child(3)').click()
		cy.get(".ng-binding").should('not.include.text', 'Fakelastname123987')
	})
	
		it('Bank manager can add account for customer', function() {
		cy.visit(
		"https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager")
		cy.get('body > div > div > div.ng-scope > div > div.center > button:nth-child(1)').click()
		cy.get('body > div > div > div.ng-scope > div > div.ng-scope > div > div > form > div:nth-child(1) > input').type("Fakename")
		cy.get('body > div > div > div.ng-scope > div > div.ng-scope > div > div > form > div:nth-child(2) > input').type("Fakelastname")		
		cy.get('body > div > div > div.ng-scope > div > div.ng-scope > div > div > form > div:nth-child(3) > input').type("123987")
		cy.get('.btn.btn-default').click()
		cy.get('body > div > div > div.ng-scope > div > div.center > button:nth-child(3)').click()
		cy.get(".ng-binding").should('include.text', 'FakenameFakelastname123987')
		cy.get('body > div > div > div.ng-scope > div > div.center > button:nth-child(2)').click()
		cy.get('#userSelect').select('Fakename Fakelastname')
		cy.get('#currency').select('Dollar')
		cy.get('body > div > div > div.ng-scope > div > div.ng-scope > div > div > form > button').click()
		cy.on ('window:confirm', (txt)=>{
		expect(txt).to.contains('Account created successfully')})
		
		
	})
	
	it('Bank manager can delete customer', function() {
		cy.visit(
		"https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager")
		cy.get('body > div > div > div.ng-scope > div > div.center > button:nth-child(1)').click()
		cy.get('body > div > div > div.ng-scope > div > div.ng-scope > div > div > form > div:nth-child(1) > input').type("Fakename")
		cy.get('body > div > div > div.ng-scope > div > div.ng-scope > div > div > form > div:nth-child(2) > input').type("Fakelastname")		
		cy.get('body > div > div > div.ng-scope > div > div.ng-scope > div > div > form > div:nth-child(3) > input').type("123987")
		cy.get('.btn.btn-default').click()

		cy.get('body > div > div > div.ng-scope > div > div.center > button:nth-child(3)').click()
		cy.get("body > div > div > div.ng-scope > div > div.ng-scope > div > div > table > tbody > tr:nth-child(6)").should('include.text', 'Fakename')
		cy.get('body > div > div > div.ng-scope > div > div.ng-scope > div > div > table > tbody > tr:nth-child(6) > td:nth-child(5) > button').click()
		cy.get("body > div > div > div.ng-scope > div > div.ng-scope > div > div > table > tbody > tr:nth-child(6)").should('not.exist')
	})
			
})
