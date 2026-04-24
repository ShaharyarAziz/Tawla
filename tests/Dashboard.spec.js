
class Dashboard {
  constructor(page) {
    this.page = page;
    
    // Selectors
    this.pageTitle = 'h1:has-text("Dashboard")';
    this.welcomeMessage = '.welcome-text';
    this.logoutButton = 'button:has-text("Logout")';
    this.userProfile = '.user-profile';
    this.mainContent = '.main-content';
  }

  async navigateTo() {
    await this.page.goto('/dashboard');
    await this.page.waitForLoadState('networkidle');
  }

  async isDisplayed() {
    return await this.page.isVisible(this.pageTitle);
  }

  async getWelcomeMessage() {
    return await this.page.textContent(this.welcomeMessage);
  }

  async logout() {
    await this.page.click(this.logoutButton);
    await this.page.waitForLoadState('networkidle');
  }

  async clickUserProfile() {
    await this.page.click(this.userProfile);
  }

  async isContentVisible() {
    return await this.page.isVisible(this.mainContent);
  }
}

module.exports = Dashboard;

