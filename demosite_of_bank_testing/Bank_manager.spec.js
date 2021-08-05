// Testing page of Bank manager account

describe('Bank manager can work', function() {
	it('Bank manager go to add customer', function() {
		cy.visit(
		"https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager")
		cy.get('button[ng-click="addCust()"]').click()
		cy.url().should('include', '/addCust')		
		})
	it('Bank manager go to open account', function() {
		cy.visit(
		"https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager")
		cy.get('button[ng-click="openAccount()"]').click()
		cy.url().should('include', '/openAccount')		
		})
	it('Bank manager go to Customers', function() {
		cy.visit(
		"https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager")
		cy.get('button[ng-click="showCust()"]').click()
		cy.url().should('include', '/list')		
		})
	
	it('Bank manager can add customer', function() {
		cy.visit(
		"https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager")
		cy.get('button[ng-click="addCust()"]').click()
		cy.get('input[ng-model="fName"]').type("Fakename")
		cy.get('input[ng-model="lName"]').type("Fakelastname")		
		cy.get('input[ng-model="postCd"]').type("123987")
		cy.get('.btn.btn-default').click()
		cy.on ('window:confirm', (txt)=>{
		expect(txt).to.contains('Customer added successfully with customer id')})
		cy.get('button[ng-click="showCust()"]').click()
		cy.get(".ng-binding").should('include.text', 'FakenameFakelastname123987')
		
	})
		
	it('Bank manager cant add customer without First name', function() {
		cy.visit(
		"https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager")
		cy.get('button[ng-click="addCust()"]').click()
		cy.get('input[ng-model="lName"]').type("Fakelastname")		
		cy.get('input[ng-model="postCd"]').type("123987")
		cy.get('.btn.btn-default').click()
		cy.get('button[ng-click="showCust()"]').click()
		cy.get(".ng-binding").should('not.include.text', 'Fakelastname123987')
	})
	
		it('Bank manager can add account for customer', function() {
		cy.visit(
		"https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager")
		cy.get('button[ng-click="addCust()"]').click()
			cy.get('input[ng-model="fName"]').type("Fakename")
		cy.get('input[ng-model="lName"]').type("Fakelastname")		
		cy.get('input[ng-model="postCd"]').type("123987")
		cy.get('.btn.btn-default').click()
		cy.get('button[ng-click="openAccount()"]').click()
		cy.get('#userSelect').select('Fakename Fakelastname')
		cy.get('#currency').select('Dollar')
		cy.get('button[type="submit"]').click()
		cy.on ('window:confirm', (txt)=>{
		expect(txt).to.contains('Account created successfully')})
		
	})
	
	it('Bank manager can delete customer', function() {
		cy.visit(
		"https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager")
		cy.get('button[ng-click="addCust()"]').click()
			cy.get('input[ng-model="fName"]').type("Fakename")
		cy.get('input[ng-model="lName"]').type("Fakelastname")		
		cy.get('input[ng-model="postCd"]').type("123987")
		cy.get('.btn.btn-default').click()
		cy.get('button[ng-click="showCust()"]').click()
		cy.get("body > div > div > div.ng-scope > div > div.ng-scope > div > div > table > tbody > tr:nth-child(6)").should('include.text', 'Fakename')
		cy.get('body > div > div > div.ng-scope > div > div.ng-scope > div > div > table > tbody > tr:nth-child(6) > td:nth-child(5) > button').click()
		cy.get("body > div > div > div.ng-scope > div > div.ng-scope > div > div > table > tbody > tr:nth-child(6)").should('not.exist')
	})
	
		
})

