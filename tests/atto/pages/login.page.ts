import { BasePage } from "./base.page";
import { Locator, Page } from "@playwright/test";

export class LoginPage extends BasePage {
  protected readonly path = "/auth/login";

  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameInput = page.getByPlaceholder('Username');
    this.passwordInput = page.getByPlaceholder('Password');
  }

  async signIn(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.passwordInput.press('Enter');
  }

  async open() {
    await super.open();
  }
}
