/* eslint-disable no-undef */
describe("☘️ login positive case", () => {
  it("User visit page", () => {
    cy.visit("http://localhost:3000");
  });
  it("User see form", () => {
    cy.get('[data-qa-id="login-form-email"]').should("have.length", 1);
    cy.get('[data-qa-id="login-form-password"]').should("have.length", 1);
  });
  it("User see button", () => {
    cy.get('[data-qa-id="login-btn-submit"]').should("have.length", 1);
  });
  it("User fill form fields", () => {
    cy.get('[data-qa-id="login-form-email"]').type("agent@rakamin.com");
    cy.get('[data-qa-id="login-form-password"]').type("root");
  });
  it("User click button login", () => {
    cy.get('[data-qa-id="login-btn-submit"]').click();
  });
  it("User success login and redirect into dashboard", () => {
    cy.get('[data-qa-id="dashboard-agent"]');
  });
});
describe("🔥 login negative case", () => {
  it("User visit page", () => {
    cy.visit("http://localhost:3000");
  });
  it("User see form", () => {
    cy.get('[data-qa-id="login-form-email"]').should("have.length", 1);
    cy.get('[data-qa-id="login-form-password"]').should("have.length", 1);
  });
  it("User see button", () => {
    cy.get('[data-qa-id="login-btn-submit"]').should("have.length", 1);
  });
  it("User fill form fields", () => {
    cy.get('[data-qa-id="login-form-email"]').type("agent@rakamin.comz");
    cy.get('[data-qa-id="login-form-password"]').type("root");
  });
  it("User click button login", () => {
    cy.get('[data-qa-id="login-btn-submit"]').click();
  });
  it("User success login and redirect into dashboard", () => {
    cy.get('[data-qa-id="dashboard-agent"]').should("have.length", 0);
  });
});
