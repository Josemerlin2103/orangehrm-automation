# OrangeHRM E2E Automation Framework

![Playwright Tests](https://github.com/Josemerlin2103/orangehrm-automation/actions/workflows/playwright.yml/badge.svg)

A professional End-to-End automation framework for OrangeHRM — a real enterprise HR Management System — built using Playwright and TypeScript.

## 🚀 Key Features

- **Page Object Model (POM)** — Modular and maintainable structure
- **Data Driven Testing** — Centralized test data in TypeScript
- **18 Test Cases** across 4 modules
- **AI-Powered Visual Testing** — Applitools Eyes integration for visual regression testing
- **CI/CD** — GitHub Actions auto-runs tests on every push
- **Screenshot and Video** — Auto-captured on test failure

## 🛠️ Tech Stack

- **Framework:** Playwright
- **Language:** TypeScript
- **Pattern:** Page Object Model
- **AI Visual Testing:** Applitools Eyes
- **CI/CD:** GitHub Actions
- **Reporting:** HTML Report + Trace Viewer

## 📁 Project Structure

- pages/LoginPage.ts
- pages/PIMPage.ts
- pages/LeavePage.ts
- tests/login.spec.ts
- tests/pim.spec.ts
- tests/leave.spec.ts
- tests/visual.spec.ts
- utils/testData.ts
- .github/workflows/playwright.yml

## 🧪 Test Coverage

| Module | Tests |
|--------|-------|
| Login | 5 tests |
| PIM Employee Management | 6 tests |
| Leave Management | 5 tests |
| Visual AI Testing (Applitools) | 2 tests |
| Total | 18 tests |

## ▶️ How to Run

Install dependencies: npm install

Install browsers: npx playwright install

Run all tests: npx playwright test

Run with browser visible: npx playwright test --headed

View HTML report: npx playwright show-report

## 🔗 Application Under Test

OrangeHRM Demo: https://opensource-demo.orangehrmlive.com