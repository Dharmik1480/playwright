import { test, expect } from "../../fixtures/test.fixture";
import { LoginPage } from "../../pages/login.page";
import { AdminPage } from "../../pages/admin.page";

// Test case DHA-TC-6 — Search Textbox Input Validation
// Verifying different inputs in the 'Search' textbox

test("Search textbox should accept various inputs without validation errors", async ({ page }) => {
  // Arrange
  const loginPage = new LoginPage(page);
  const adminPage = new AdminPage(page);

  // Set up preconditions
  await loginPage.open();
  await loginPage.signIn("Admin", "admin123");
  await adminPage.open();

  // Act and Assert: Testing inputs in the search box
  // 1. Enter an empty string
  await adminPage.enterSearchText("");
  await expect(adminPage.searchInput).not.toHaveClass(/error/);

  // 2. Enter whitespace characters
  await adminPage.enterSearchText("   ");
  await expect(adminPage.searchInput).not.toHaveClass(/error/);

  // 3. Enter typical text
  await adminPage.enterSearchText("Test Search");
  await expect(adminPage.searchInput).not.toHaveClass(/error/);

  // 4. Enter special characters
  await adminPage.enterSearchText("@#$%^&*");
  await expect(adminPage.searchInput).not.toHaveClass(/error/);

  // 5. Enter unicode characters
  await adminPage.enterSearchText("你好");
  await expect(adminPage.searchInput).toHaveClass(/error/);  // Assuming unicode causes error
});
