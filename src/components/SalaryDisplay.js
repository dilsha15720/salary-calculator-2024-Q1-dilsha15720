import React, { useContext } from 'react';
import { SalaryContext } from '../context/SalaryContext';

const SalaryDisplay = () => {
  const { calculatedSalary } = useContext(SalaryContext);

  return (
    <div>
      <h2>Salary Details</h2>
      <p>Net Salary: {calculatedSalary.netSalary}</p>
      {/* Display other salary components like EPF, ETF, etc. */}
    </div>
  );
};

export default SalaryDisplay;