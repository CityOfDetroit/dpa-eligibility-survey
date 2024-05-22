describe('Load start screen', () => {
    it('successfully loads', () => {
      cy.visit('/') 
      cy.get('dpa-survey')
      .contains('Welcome to the elegibility checker for the Detroit Down Payment Assistance Program')
    })

    it('start survey', () => {
      cy.visit('/') 
      cy.get('dpa-survey')
      .contains('Welcome to the elegibility checker for the Detroit Down Payment Assistance Program')
      cy.get('dpa-survey')
      .contains('Start Survey')
      cy.get('dpa-survey')
      .get('cod-button').click()
      cy.get('dpa-survey')
      .contains('Have you lived in the City of Detroit for the last 12 months or lost a home to property tax foreclosure in the City of Detroit between 2010-2016?')
    })
})