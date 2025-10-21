
import { test, expect } from '@playwright/test';
import http from 'http';
import handler from 'serve-handler';
import path from 'path';

const PORT = 8080;
const server = http.createServer((request, response) => {
  return handler(request, response, {
    public: path.resolve(__dirname, './'),
  });
});

test.beforeAll(async () => {
  await new Promise(resolve => server.listen(PORT, resolve));
});

test.afterAll(async () => {
  await new Promise(resolve => server.close(resolve));
});

test('verify fixes', async ({ page }) => {
  await page.goto(`http://localhost:${PORT}/index.html`, { waitUntil: 'load' });

  // Verify video is visible
  const video = page.locator('video');
  await expect(video).toBeVisible();

  // Verify footer logo is visible
  const footerLogo = page.locator('.footer-logo');
  await expect(footerLogo).toBeVisible();

  // Verify navigation links
  const navLinks = [
    { name: 'Home', href: 'index.html' },
    { name: 'Services', href: 'services.html' },
    { name: 'Portfolio', href: 'portfolio.html' },
    { name: 'About Us', href: 'about.html' },
    { name: 'Contact', href: 'contact.html' },
    { name: 'Pricing', href: 'pricing.html' },
  ];

  for (const link of navLinks) {
    await page.goto(`http://localhost:${PORT}/${link.href}`, { waitUntil: 'load' });
    await page.screenshot({ path: `screenshot-${link.name}.png` });
  }
});
