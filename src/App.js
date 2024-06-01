import React from 'react';
import SalaryForm from './components/SalaryForm';
import SalaryDisplay from './components/SalaryDisplay';
import { SalaryProvider } from './context/SalaryContext';

const App = () => {
  return (
    <SalaryProvider>
      <div className="App">
        <h1>Salary Calculator</h1>
        <SalaryForm />
        <SalaryDisplay />
      </div>
    </SalaryProvider>
  );
};

export default App;