import { BasePage } from "./base.page";
import { Locator, Page } from "@playwright/test";

export class AdminPage extends BasePage {
  protected readonly path = "#"; // assuming we need a placeholder here

  private readonly searchInputLocator: string;

  constructor(page: Page) {
    super(page);
    this.searchInputLocator = 'div.oxd-grid-4.orangehrm-full-width-grid > div.oxd-grid-item.oxd-grid-item--gutters:nth-of-type(1) > div.oxd-input-group.oxd-input-field-bottom-space > div:nth-of-type(2) > input.oxd-input.oxd-input--active';
  }

  async enterSearchText(text: string) {
    const searchInput = this.page.locator(this.searchInputLocator);
    await searchInput.fill(text);
    await searchInput.press('Enter');
  }

  async open() {
    await this.page.getByRole('link', { name: 'Admin' }).click();
  }

  get searchInput() {
    return this.page.locator(this.searchInputLocator);
  }
}
