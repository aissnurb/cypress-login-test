/** OrangeHRM Login Feature Test

* This test will cover 5 test scenarios:

* login with correct data
* login with incorrect username/password
* login with blank data
* verify "Forgot your password?" link navigation
* login case sensitivity

* Pre-condition: user must be registered */


describe('OrangeHRM Login Test with correct data', ()=> {
  
  it('login with correct data', () =>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="password"]').type('admin123')
    cy.get('.oxd-button').click()
    cy.get('.oxd-topbar-header').should('be.visible')
  })

  })


  describe('login with incorrect username/password', () => {

    it('login with correct username and incorrect password', () =>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="password"]').type('katasandi')
    cy.get('.oxd-button').click()
    cy.get('.oxd-alert').should('be.visible')

  })

    it('login with incorrect username and correct password', () =>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type('User')
    cy.get('[name="password"]').type('admin123')
    cy.get('.oxd-button').click()
    cy.get('.oxd-alert').should('be.visible')

  })
    it('login with both username and password are incorrect', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type('User')
    cy.get('[name="password"]').type('katasandi')
    cy.get('.oxd-button').click()
    cy.get('.oxd-alert').should('be.visible')
  })

  })
  
  describe('login with blank data', () => {

    it('login with blank username, correct password', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').clear()
    cy.get('[name="password"]').type('admin123')
    cy.get('.oxd-button').click()
    cy.get(':nth-child(2) > .oxd-input-group > .oxd-text').should('be.visible')
  })

    it('login with correct username, blank password', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="password"]').clear()
    cy.get('.oxd-button').click()
    cy.get(':nth-child(3) > .oxd-input-group > .oxd-text').should('be.visible')
  })

    it('login with both username and password are blank', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').clear()
    cy.get('[name="password"]').clear()
    cy.get('.oxd-button').click()
    cy.get(':nth-child(2) > .oxd-input-group > .oxd-text').should('be.visible')
    cy.get(':nth-child(3) > .oxd-input-group > .oxd-text').should('be.visible')
  })

  })
  
  
  describe('verify "Forgot your password?" link navigation', () =>{
    it('verify "Forgot your password?" link navigation', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('.orangehrm-login-forgot > .oxd-text').click()
    cy.url().should('include', '/requestPasswordResetCode')
    cy.get('.oxd-text--h6').should('contain', 'Reset Password')
  })


  })
  
  describe('check login case sensitivity: username in lowercase with correct password', () =>{
    it('should NOT allow login when username is typed in lowercase', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type('admin') //aslinya 'Admin'
    cy.get('[name="password"]').type('admin123')
    cy.get('.oxd-button').click()
    cy.url().should('include', '/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('be.visible')

  })
  })
  


