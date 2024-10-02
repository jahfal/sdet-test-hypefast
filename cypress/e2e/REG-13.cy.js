describe("Test case REG-13", () => {
  beforeEach(() => {
    cy.visit(
      "https://dashboard.melaka.app/register"
    );
  });
  it("Melakukan pendaftran mengisi field password tanpa kombinasi angka dan huruf", function () {
    cy.get("input[id='input-:R36l6:']").type("andre");
    cy.get("input[id='input-:R156l6:']").type("0812345678901234");
    cy.get("input[id='input-:R76l6:']").type("Retail");
    cy.get("input[id='distributor-:R696l6:']").click();
    cy.get("input[id='input-:Rb6l6:']").type("testemail@gmail.com");
    cy.get("input[id='input-:Rd6l6:']").type("password");
    cy.get("input[id='input-:Rf6l6:']").type("password");
    cy.get("#register__checkbox__tnc").click();
    cy.get("button[type='submit']").click();
    cy.get('[data-testid="register__text-field__password__error"]').should(
      "have.text",
      "Min. 8 karakter, harus kombinasi dari huruf dan angka."
    );
  });
});
