describe('My First Test', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'You did it!')
    cy.eyesOpen({
      appName: 'Demo App',
      testName: 'My Demo App test',
    })
    cy.eyesCheckWindow({
      tag: "Home Page",
      target: 'window',
      fully: true
  });
    cy.eyesClose()
  })
})
