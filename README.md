### Fill in the Basic Salary and other earnings/deductions.
### Click the "Calculate" button to see the salary details.
### Use the "Reset" button to clear the form.

- ## Project Description

This Salary Calculator is a React application that allows users to input their basic salary, earnings, and deductions to calculate their net salary, EPF, ETF, APIT, and the cost to the company.

## Features

- Input for basic salary
- Input for multiple earnings with EPF applicability option
- Input for multiple deductions
- Calculation of net salary, EPF, ETF, APIT, and cost to the company
- Data persistence using localStorage
- Form reset functionality

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/dilsha15720/salary-calculator-2024-Q1-dilsha15720.git
   cd salary-calculator-2024-Q1-dilsha15720
### Install dependencies:
npm install
### Run the application:
npm start

Access the application at http://localhost:3000.

### Usage Instructions
Basic Salary:

Enter the basic salary in the provided input field.

Earnings:

Add multiple earnings by clicking the "Add Earning" button.
For each earning, enter the name, amount, and select if it is EPF applicable.

Deductions:

Add multiple deductions by clicking the "Add Deduction" button.
For each deduction, enter the name and amount.

Calculate:

Click the "Calculate" button to see the salary details including net salary, EPF, ETF, APIT, and cost to the company.
Reset:

Click the "Reset" button to clear the form and reset all fields.
File Structure
src/
components/
SalaryForm.js: The form component for inputting salary details.
SalaryDisplay.js: The component for displaying calculated salary details.
context/
SalaryContext.js: The context and reducer logic for managing salary calculation state.
App.js: The main application component.
index.js: The entry point for the React application.
Calculation Logic
Total Earnings: Sum of basic salary and all earnings.
Total Deductions: Sum of all deductions.
Gross Earnings: Total earnings minus total deductions.
EPF Earnings: Sum of basic salary and EPF applicable earnings.
Employee EPF: 8% of EPF earnings.
Employer EPF: 12% of EPF earnings.
Employer ETF: 3% of EPF earnings.
APIT: 18% of gross earnings minus 25,500.
Net Salary: Gross earnings minus employee EPF and APIT.
Cost to Company: Gross earnings plus employer EPF and ETF.
Dependencies
React: ^17.0.2
React DOM: ^17.0.2
Contributing
Fork the repository.

### License
This project is licensed under the MIT License.
