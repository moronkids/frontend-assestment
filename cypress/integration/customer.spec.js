/* eslint-disable jest/valid-expect */
/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable no-undef */
import "cypress-localstorage-commands";
describe("☘️ User can see data in dashboard customer", () => {
  beforeEach(() => {
    cy.setLocalStorage("token", "customer");
    cy.saveLocalStorage();
  });

  it("User visit dashboard customer", () => {
    cy.visit("http://localhost:3000");
    cy.wait(1000);
  });

  it("customer see button details team", () => {
    cy.get("button").contains("Details").first().should("exist");
  });
});
describe("☘️ customer can reject the trx", () => {
  beforeEach(() => {
    cy.setLocalStorage("token", "customer");
    cy.saveLocalStorage();
  });

  it("User visit dashboard customer", () => {
    cy.visit("http://localhost:3000");
    cy.wait(1000);
  });

  it("User see button details team", () => {
    cy.get("button").contains("Details").first().should("exist");
  });
  it("User click button details team", () => {
    cy.get("button").contains("Details").first().should("exist").click();
    // cy.get(".btn-action-detail").first().click();
  });
  it("User click `Batalkan`", () => {
    // cy.get('[data-testid="btn-details"]').first().click();
    cy.get("button").contains("Batalkan").first().click();
  });
  it("User click `agree`", () => {
    // cy.get('[data-testid="btn-details"]').first().click();
    cy.get(".MuiButton-label").contains("Agree").first().should("exist");
    cy.get(".MuiButton-label").contains("Agree").first().click();
  });
});
describe("☘️ customer delete trx", () => {
  beforeEach(() => {
    cy.setLocalStorage("token", "customer");
    cy.saveLocalStorage();
  });

  it("User visit dashboard customer", () => {
    cy.visit("http://localhost:3000");
    cy.wait(1000);
  });

  it("User see button details team", () => {
    cy.get('[data-qa-id="1-details-team"]').should("exist");
  });
  it("User click button details team", () => {
    cy.get('[data-qa-id="1-details-team"]').click();
    // cy.get(".btn-action-detail").first().click();
  });
  it("User click `Batalkan`", () => {
    // cy.get('[data-testid="btn-details"]').first().click();
    cy.get("button").contains("Hapus").first().click();
  });
  it("User click `agree`", () => {
    // cy.get('[data-testid="btn-details"]').first().click();
    cy.get(".MuiButton-label").contains("Agree").first().should("exist");
    cy.get(".MuiButton-label").contains("Agree").first().click();
  });
});
describe("☘️ customer ad rate trx", () => {
  beforeEach(() => {
    cy.setLocalStorage("token", "customer");
    cy.saveLocalStorage();
  });

  it("User visit dashboard customer", () => {
    cy.visit("http://localhost:3000");
    cy.wait(1000);
  });

  it("User see button details team", () => {
    cy.get('[data-qa-id="2-details-team"]').should("exist");
  });
  it("User click button details team", () => {
    cy.get('[data-qa-id="2-details-team"]').click();
    // cy.get(".btn-action-detail").first().click();
  });
  it("User click `Batalkan`", () => {
    // cy.get('[data-testid="btn-details"]').first().click();
    cy.get("button").contains("Beri Rating").first().click();
    cy.get("div").contains("Submit").first().click();
  });
  //   it("User click `agree`", () => {
  //     // cy.get('[data-testid="btn-details"]').first().click();
  //     cy.get(".MuiButton-label").contains("Agree").first().should("exist");
  //     cy.get(".MuiButton-label").contains("Agree").first().click();
  //   });
});
