describe('Quete6', () => {
it("recuperation de mdp", () => {
  cy.visit("https://preprod.backmarket.fr/fr-fr/password-reset");
  cy.get(".mb-6 > .body-2-bold").click();
  cy.get("#email").type('bb42e2e8-9aca-4b44-bc75-b1db29752094@mailslurp.com');
  cy.get('[data-test="password-reset-submit-button"]').click();
  cy.mailslurp()
    .then((mailslurp) =>
      mailslurp.waitForLatestEmail(
        "bb42e2e8-9aca-4b44-bc75-b1db29752094",
        40000,
        true
      ))

    .then(email =>//expect(email.subject).to.contain("Nouveau mot de passe")); ) 
    cy.document().invoke("write", email.body))
      });
      it('Login', () => {
        cy.visit('https://preprod.backmarket.fr/fr-fr/register');
        cy.get('[data-qa="accept-cta"]').click();
        cy.get('#signin-email').type('bb42e2e8-9aca-4b44-bc75-b1db29752094@mailslurp.com');
        cy.get('#signin-password').type('Furious0677');
        cy.get('[data-qa="signin-submit-button"]').click();

});
});