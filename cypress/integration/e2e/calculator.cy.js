describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it ('should update the display of the running total', () => {
    cy.get('#number2').click()
    cy.get('[data-testid="operator-add"]').click()
    cy.get('#number2').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '4')
  })

  it ('should update the display with the result of the operation - add', () => {
    cy.get('#number2').click()
    cy.get('[data-testid="operator-add"]').click()
    cy.get('#number8').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '10')
  })

  it ('should update the display with the result of the operation - subtract', () => {
    cy.get('#number8').click()
    cy.get('#operator-subtract').click()
    cy.get('#number2').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '6')
  })

  it ('should update the display with the result of the operation - multiply', () => {
    cy.get('#number2').click()
    cy.get('#operator-multiply').click()
    cy.get('#number2').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '4')
  })
  
  it ('should update the display with the result of the operation - divide', () => {
    cy.get('#number4').click()
    cy.get('#operator-divide').click()
    cy.get('#number2').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '2')
  })

  it ('should be able to chain multiple operations together', () => {
    cy.get('#number2').click()
    cy.get('[data-testid="operator-add"]').click()
    cy.get('#number2').click()
    cy.get('#operator-subtract').click()
    cy.get('#number2').click()
    cy.get('#operator-multiply').click()
    cy.get('#number2').click()
    cy.get('#operator-divide').click()
    cy.get('#number2').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '2')
  })

  it ('should have an expected output for a range of numbers - positive', () => {
    cy.get('#number8').click()
    cy.get('#operator-multiply').click()
    cy.get('#number8').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '64')
  })

  it ('should have an expected output for a range of numbers - negative', () => {
    cy.get('#number8').click()
    cy.get('#operator-subtract').click()
    cy.get('#number1').click()
    cy.get('#number0').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '-2')
  })

  it ('should have an expected output for a range of numbers - decimals', () => {
    cy.get('#number5').click()
    cy.get('#operator-multiply').click()
    cy.get('#number0').click()
    cy.get('#decimal').click()
    cy.get('#number5').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '2.5')
  })

  it ('should have an expected output for a range of numbers - very large', () => {
    cy.get('#number1').click()
    cy.get('#number7').click()
    cy.get('#number2').click()
    cy.get('#operator-multiply').click()
    cy.get('#number3').click()
    cy.get('#number5').click()
    cy.get('#number1').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '60372')
  })

  it ('should show the original number fi you try to divide that number by zero', () => {
    cy.get('#number2').click()
    cy.get('#operator-divide').click()
    cy.get('#number0').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', 'ERROR!!')
  })

})
