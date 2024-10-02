describe("Melaka Registration Test Scenario", () => {
  beforeEach(() => {
    cy.visit(
      "https://dashboard.melaka.app/register"
    );
  });
  
  it("REG-1 Input pendaftaran dengan semua input yang valid", function () {
    cy.get("input[id='input-:R36l6:']").type("andre");
    cy.get("input[id='input-:R156l6:']").type("8943734723");
    cy.get("input[id='input-:R76l6:']").type("Retail");
    cy.get("input[id='distributor-:R696l6:']").click();
    cy.get("input[id='input-:Rb6l6:']").type("testemail@gmail.com");
    cy.get("input[id='input-:Rd6l6:']").type("Sml@12345");
    cy.get("input[id='input-:Rf6l6:']").type("Sml@12345");
    cy.get("#register__checkbox__tnc").click();
    cy.get("button[type='submit']").click();
  });

  it("REG-2 Melakukan pendaftran tanpa mengisi nama.", function () {
    cy.get("input[id='input-:R156l6:']").type("8943734723");
    cy.get("input[id='input-:R76l6:']").type("Retail");
    cy.get("input[id='distributor-:R696l6:']").click();
    cy.get("input[id='input-:Rb6l6:']").type("testemail@gmail.com");
    cy.get("input[id='input-:Rd6l6:']").type("Sml@12345");
    cy.get("input[id='input-:Rf6l6:']").type("Sml@12345");
    cy.get("#register__checkbox__tnc").click();
    cy.get("button[type='submit']").click();
    cy.get('[data-testid="register__text-field__name__error"]').should(
      "have.text",
      "Wajib diisi."
    );
  });

  it("REG-3 Melakukan pendaftaran dengan nomor telepon yang tidak valid.", function () {
    cy.get("input[id='input-:R36l6:']").type("andre");
    cy.get("input[id='input-:R156l6:']").type("123");
    cy.get("input[id='input-:R76l6:']").type("Retail");
    cy.get("input[id='distributor-:R696l6:']").click();
    cy.get("input[id='input-:Rb6l6:']").type("testemail@gmail.com");
    cy.get("input[id='input-:Rd6l6:']").type("Sml@12345");
    cy.get("input[id='input-:Rf6l6:']").type("Sml@12345");
    cy.get("#register__checkbox__tnc").click();
    cy.get("button[type='submit']").click();
    cy.get('[data-testid="register__text-field__phone-number__error"]').should(
      "have.text",
      "Wajib diisi. Nomor telepon tidak boleh kurang dari 10 atau lebih dari 12 karakter."
    );
  });

  it("REG-4 Melakukan pendaftaran tanpa mengisi email.", function () {
    cy.get("input[id='input-:R36l6:']").type("andre");
    cy.get("input[id='input-:R156l6:']").type("8943734723");
    cy.get("input[id='input-:R76l6:']").type("Retail");
    cy.get("input[id='distributor-:R696l6:']").click();
    cy.get("input[id='input-:Rd6l6:']").type("Sml@12345");
    cy.get("input[id='input-:Rf6l6:']").type("Sml@12345");
    cy.get("#register__checkbox__tnc").click();
    cy.get("button[type='submit']").click();
    cy.get('[data-testid="register__text-field__email__error"]').should(
      "have.text",
      "Wajib diisi."
    );
  });

  it("REG-5 Melakukan pendaftaran ketika kata sandi dan konfirmasi kata sandi tidak cocok", function () {
    cy.get("input[id='input-:R36l6:']").type("andre");
    cy.get("input[id='input-:R156l6:']").type("8943734723");
    cy.get("input[id='input-:R76l6:']").type("Retail");
    cy.get("input[id='distributor-:R696l6:']").click();
    cy.get("input[id='input-:Rb6l6:']").type("testemail@gmail.com");
    cy.get("input[id='input-:Rd6l6:']").type("Sml@12345");
    cy.get("input[id='input-:Rf6l6:']").type("Password123");
    cy.get("#register__checkbox__tnc").click();
    cy.get("button[type='submit']").click();
    cy.get('[data-testid="register__text-field__confirm-password__error"]').should(
      "have.text",
      "Belum sesuai dengan kata sandi."
    );
  });

  it("REG-6 Melakukan pendaftaran tanpa menyetujui syarat dan ketentuan.", function () {
    cy.get("input[id='input-:R36l6:']").type("andre");
    cy.get("input[id='input-:R156l6:']").type("8943734723");
    cy.get("input[id='input-:R76l6:']").type("Retail");
    cy.get("input[id='distributor-:R696l6:']").click();
    cy.get("input[id='input-:Rb6l6:']").type("testemail@gmail.com");
    cy.get("input[id='input-:Rd6l6:']").type("Sml@12345");
    cy.get("input[id='input-:Rf6l6:']").type("Sml@12345");
    cy.get("button[type='submit']").should('be.disabled');
  });

  it("REG-7 Melakukan pendaftaran dengan kata sandi yang terlalu pendek.", function () {
    cy.get("input[id='input-:R36l6:']").type("andre");
    cy.get("input[id='input-:R156l6:']").type("8943734723");
    cy.get("input[id='input-:R76l6:']").type("Retail");
    cy.get("input[id='brand-:Re96l6:']").click();
    cy.get("input[id='input-:Rb6l6:']").type("testemail@gmail.com");
    cy.get("input[id='input-:Rd6l6:']").type("1234567");
    cy.get("input[id='input-:Rf6l6:']").type("1234567");
    cy.get("#register__checkbox__tnc").click();
    cy.get("button[type='submit']").click();
    cy.get('[data-testid="register__text-field__password__error"]').should(
      "have.text",
      "Min. 8 karakter, harus kombinasi dari huruf dan angka."
    );
  });

  it("REG-8 Melakukan pendaftaran dengan karakter khusus dalam nama bisnis.", function () {
    cy.get("input[id='input-:R36l6:']").type("andre");
    cy.get("input[id='input-:R156l6:']").type("8943734723");
    cy.get("input[id='input-:R76l6:']").type("@Business!");
    cy.get("input[id='retail_store-:Ra96l6:']").click();
    cy.get("input[id='input-:Rb6l6:']").type("testemail@gmail.com");
    cy.get("input[id='input-:Rd6l6:']").type("Sml@12345");
    cy.get("input[id='input-:Rf6l6:']").type("Sml@12345");
    cy.get("#register__checkbox__tnc").click();
    cy.get("button[type='submit']").click();
    cy.get('[data-testid="register__text-field__business-name__error"]').should(
      "have.text",
      "Tidak dapat menggunakan karakter spesial selain titik (.) koma (,) strip (-)"
    );
  });

  it("REG-9 Melakukan pendaftran tanpa mengisi nomor telepon.", function () {
    cy.get("input[id='input-:R36l6:']").type("andre");
    cy.get("input[id='input-:R76l6:']").type("Retail");
    cy.get("input[id='online_seller-:Ri96l6:']").click();
    cy.get("input[id='input-:Rb6l6:']").type("testemail@gmail.com");
    cy.get("input[id='input-:Rd6l6:']").type("Sml@12345");
    cy.get("input[id='input-:Rf6l6:']").type("Sml@12345");
    cy.get("#register__checkbox__tnc").click();
    cy.get("button[type='submit']").click();
    cy.get('[data-testid="register__text-field__phone-number__error"]').should(
      "have.text",
      "Wajib diisi. Nomor telepon tidak boleh kurang dari 10 atau lebih dari 12 karakter."
    );
  });

  it("REG-10 Melakukan pendaftran tanpa mengisi field nama bisnis.", function () {
    cy.get("input[id='input-:R36l6:']").type("andre");
    cy.get("input[id='input-:R156l6:']").type("8943734723");
    cy.get("input[id='distributor-:R696l6:']").click();
    cy.get("input[id='input-:Rb6l6:']").type("testemail@gmail.com");
    cy.get("input[id='input-:Rd6l6:']").type("Sml@12345");
    cy.get("input[id='input-:Rf6l6:']").type("Sml@12345");
    cy.get("#register__checkbox__tnc").click();
    cy.get("button[type='submit']").click();
    cy.get('[data-testid="register__text-field__business-name__error"]').should(
      "have.text",
      "Wajib diisi."
    );
  });

  it("REG-11 Melakukan pendaftran mengisi field email dengan format yang tidak sesuai.", function () {
    cy.get("input[id='input-:R36l6:']").type("andre");
    cy.get("input[id='input-:R156l6:']").type("8943734723");
    cy.get("input[id='input-:R76l6:']").type("Retail");
    cy.get("input[id='retail_store-:Ra96l6:']").click();
    cy.get("input[id='input-:Rb6l6:']").type("john@invalid");
    cy.get("input[id='input-:Rd6l6:']").type("Sml@12345");
    cy.get("input[id='input-:Rf6l6:']").type("Sml@12345");
    cy.get("#register__checkbox__tnc").click();
    cy.get("button[type='submit']").click();
    cy.get('[data-testid="register__text-field__email__error"]').should(
      "have.text",
      "Harap isi dengan format yang benar."
    );
  });

  it("REG-12 Melakukan pendaftran mengisi field no telepon lebih dari 12 angka.", function () {
    cy.get("input[id='input-:R36l6:']").type("andre");
    cy.get("input[id='input-:R156l6:']").type("0812345678901234");
    cy.get("input[id='input-:R76l6:']").type("Retail");
    cy.get("input[id='distributor-:R696l6:']").click();
    cy.get("input[id='input-:Rb6l6:']").type("testemail@gmail.com");
    cy.get("input[id='input-:Rd6l6:']").type("Sml@12345");
    cy.get("input[id='input-:Rf6l6:']").type("Sml@12345");
    cy.get("#register__checkbox__tnc").click();
    cy.get("button[type='submit']").click();
    cy.get('[data-testid="register__text-field__phone-number__error"]').should(
      "have.text",
      "Wajib diisi. Nomor telepon tidak boleh kurang dari 10 atau lebih dari 12 karakter."
    );
  });

  it("REG-13 Melakukan pendaftran mengisi field password tanpa kombinasi angka dan huruf", function () {
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
