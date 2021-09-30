/* eslint-disable jest/valid-expect */
/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable no-undef */
import "cypress-localstorage-commands";
describe("☘️ User can see data in dashboard Agent", () => {
  beforeEach(() => {
    cy.setLocalStorage("token", "agent");
    cy.saveLocalStorage();
  });

  it("User visit dashboard agent", () => {
    cy.visit("http://localhost:3000");
    cy.wait(1000);
  });

  it("Agent see button details team", () => {
    cy.get('[data-testid="btn-details"]').should("exist");
  });
});
describe("☘️ Agent can reject the trx", () => {
  beforeEach(() => {
    cy.setLocalStorage("token", "agent");
    cy.saveLocalStorage();
  });

  it("User visit dashboard agent", () => {
    cy.visit("http://localhost:3000");
    cy.wait(1000);
  });

  it("User see button details team", () => {
    cy.get('[data-testid="btn-details"]').should("exist");
  });
  it("User click button details team", () => {
    cy.get('[data-testid="btn-details"]').first().click();
    // cy.get(".btn-action-detail").first().click();
  });
  it("User click `tolak`", () => {
    // cy.get('[data-testid="btn-details"]').first().click();
    cy.get(".btn-action-detail").first().click();
  });
  it("User click `agree`", () => {
    // cy.get('[data-testid="btn-details"]').first().click();
    cy.get(".MuiButton-label").contains("Agree").first().should("exist");
    cy.get(".MuiButton-label").contains("Agree").first().click();
  });
});
describe("☘️ Agent can approve the trx", () => {
  beforeEach(() => {
    cy.setLocalStorage("token", "agent");
    cy.saveLocalStorage();
  });

  it("User visit dashboard agent", () => {
    cy.visit("http://localhost:3000");
    cy.wait(1000);
  });

  it("User see button details team", () => {
    cy.get('[data-testid="btn-details"]').should("exist");
  });
  it("User click button details team", () => {
    cy.get('[data-testid="btn-details"]').first().click();
    // cy.get(".btn-action-detail").first().click();
  });
  it("User click `terima`", () => {
    // cy.get('[data-testid="btn-details"]').first().click();
    cy.get(".btn-action-detail.discard").first().click();
  });
  it("User click `agree`", () => {
    // cy.get('[data-testid="btn-details"]').first().click();
    cy.get(".MuiButton-label").contains("Agree").first().should("exist");
    cy.get(".MuiButton-label").contains("Agree").first().click();
  });
});
describe("☘️ Agent disagree can reject the trx", () => {
  beforeEach(() => {
    cy.setLocalStorage("token", "agent");
    cy.saveLocalStorage();
  });

  it("User visit dashboard agent", () => {
    cy.visit("http://localhost:3000");
    cy.wait(1000);
  });

  it("User see button details team", () => {
    cy.get('[data-testid="btn-details"]').should("exist");
  });
  it("User click button details team", () => {
    cy.get('[data-testid="btn-details"]').first().click();
    // cy.get(".btn-action-detail").first().click();
  });
  it("User click `tolak`", () => {
    // cy.get('[data-testid="btn-details"]').first().click();
    cy.get(".btn-action-detail").first().click();
  });
  it("User click `disagree`", () => {
    // cy.get('[data-testid="btn-details"]').first().click();
    cy.get(".MuiButton-label").contains("Disagree").first().should("exist");
    cy.get(".MuiButton-label").contains("Disagree").first().click();
  });
});
describe("☘️ Agent disagree can approve the trx", () => {
  beforeEach(() => {
    cy.setLocalStorage("token", "agent");
    cy.saveLocalStorage();
  });

  it("User visit dashboard agent", () => {
    cy.visit("http://localhost:3000");
    cy.wait(1000);
  });

  it("User see button details team", () => {
    cy.get('[data-testid="btn-details"]').should("exist");
  });
  it("User click button details team", () => {
    cy.get('[data-testid="btn-details"]').first().click();
    // cy.get(".btn-action-detail").first().click();
  });
  it("User click `terima`", () => {
    // cy.get('[data-testid="btn-details"]').first().click();
    cy.get(".btn-action-detail.discard").first().click();
  });
  it("User click `disagree`", () => {
    // cy.get('[data-testid="btn-details"]').first().click();
    cy.get(".MuiButton-label").contains("Disagree").first().should("exist");
    cy.get(".MuiButton-label").contains("Disagree").first().click();
  });
});
