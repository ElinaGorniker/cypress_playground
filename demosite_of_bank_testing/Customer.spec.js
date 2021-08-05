//Testing Customer page of demosite

describe('Customer can do transactions', function() {
	it('Customer login', function() {
		cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer')
		cy.get('#userSelect').select('Hermoine Granger')
		cy.get('button[class="btn btn-default"]').click()
		cy.get('body > div > div > div.ng-scope > div > div:nth-child(3) > strong:nth-child(1)').should('exist').should('have.text', '1001 ')

		})
	it('Customer can reset all transactions and clear Balance', function() {
		cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer')
		cy.get('#userSelect').select('Hermoine Granger')
		cy.get('button[class="btn btn-default"]').click()
		cy.get('button[ng-click="transactions()"]').click()
		cy.get('#anchor0 > td:nth-child(3)').should('exist')
		cy.get('button[ng-click="reset()"]').click()
		cy.get('#anchor0 > td:nth-child(3)').should('not.exist')
		cy.get('button[ng-click="back()"]').click()
		cy.get('body > div > div > div.ng-scope > div > div:nth-child(3) > strong:nth-child(2)').should('have.text',"0")
	})
		
	it('Customer can add money to deposit', function() {
		cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer')
		cy.get('#userSelect').select('Hermoine Granger')
		cy.get('body > div > div > div.ng-scope > div > form > button').click()
		cy.get('body > div > div > div.ng-scope > div > div:nth-child(3) > strong:nth-child(2)').should('have.text',"5096")
		cy.get('button[ng-click="deposit()"]').click()
		cy.get('input[ng-model="amount"]').type('1000')
		cy.get('button[class="btn btn-default"]').click()
		cy.get('body > div > div > div.ng-scope > div > div:nth-child(3) > strong:nth-child(2)').should('have.text',"6096")
		cy.get('span[class="error ng-binding"]').should('exist').should('have.text', "Deposit Successful") 

			
})
	
	it('Customer can remove money from balance', function() {
		cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer')
		cy.get('#userSelect').select('Hermoine Granger')
		cy.get('body > div > div > div.ng-scope > div > form > button').click()
		cy.get('body > div > div > div.ng-scope > div > div:nth-child(3) > strong:nth-child(2)').should('have.text',"5096")
		cy.get('button[ng-click="withdrawl()"]').click()
		cy.get('input[ng-model="amount"]').type('1000')
		cy.get('button[class="btn btn-default"]').click()
		cy.get('body > div > div > div.ng-scope > div > div:nth-child(3) > strong:nth-child(2)').should('have.text',"4096")
		cy.get('span[class="error ng-binding"]').should('exist').should('have.text', "Transaction successful")
			
})

	it('Customer cant remove more money than exist on balance', function() {
		cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer')
		cy.get('#userSelect').select('Hermoine Granger')
		cy.get('body > div > div > div.ng-scope > div > form > button').click()
		cy.get('body > div > div > div.ng-scope > div > div:nth-child(3) > strong:nth-child(2)').should('have.text',"5096")
		cy.get('button[ng-click="withdrawl()"]').click()
		cy.get('input[ng-model="amount"]').type('5097')
		cy.get('button[class="btn btn-default"]').click()
		cy.get('body > div > div > div.ng-scope > div > div:nth-child(3) > strong:nth-child(2)').should('have.text',"5096")
		cy.get('span[class="error ng-binding"]').should('exist').should('have.text', "Transaction Failed. You can not withdraw amount more than the balance.")
	
			
})
		it('Customer can logout', function() {
		cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer')
		cy.get('#userSelect').select('Hermoine Granger')
		cy.get('body > div > div > div.ng-scope > div > form > button').click()
		cy.get('button[class="btn logout"]').click()
		cy.get('#userSelect').should('not.to.be.selected')
		
})
})