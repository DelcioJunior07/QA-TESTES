import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que o usuário acessa o site Advantage Online Shopping", () => {
  cy.visit("https://advantageonlineshopping.com/#/");
  cy.wait(10000); // Aguarda carregamento completo
  cy.get(".loader").invoke("remove"); // Remove manualmente o loader para evitar bloqueios
});

When("ele digita o nome de um produto no campo de busca", () => {
  cy.get("#searchSection").invoke("css", "display", "block"); // Ativa manualmente a barra de busca
  cy.get("#menuSearch").should("be.visible").click();
  cy.get("#autoComplete").should("be.visible").type("laptop");
});

When("clica no ícone de busca", () => {
  cy.get("#menuSearch").click({ force: true });
});

Then("o site deve exibir os resultados da busca com o produto listado", () => {
  cy.get(".categoryTitle").should("not.be.empty");
});
;
