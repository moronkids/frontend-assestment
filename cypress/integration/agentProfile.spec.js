/* eslint-disable no-undef */
import "cypress-localstorage-commands";
describe("☘️ Agent can see profile page", () => {
  beforeEach(() => {
    cy.setLocalStorage("token", "agent");
    cy.saveLocalStorage();
  });

  it("Agent visit profile agent", () => {
    cy.visit("http://localhost:3000/profile");
    cy.wait(1000);
  });

  it("Agent see button save min saldo", () => {
    cy.get("h5").contains("Jumlah Saldo Minimum").should("exist");
  });
});
describe("☘️ Agent can update min saldo trx", () => {
  beforeEach(() => {
    cy.setLocalStorage("token", "agent");
    cy.saveLocalStorage();
  });

  it("Agent visit profile agent", () => {
    cy.visit("http://localhost:3000/profile");
    cy.wait(1000);
  });

  it("Agent see button save min saldo", () => {
    cy.get("h5").contains("Jumlah Saldo Minimum").should("exist");
  });
  it("Agent see form for min saldo", () => {
    cy.get(".saldo-min").should("exist");
  });
  it("Agent click button save min saldo", () => {
    cy.get("h5").contains("Jumlah Saldo Minimum").click();
  });
});
