import React, { useContext, useState } from 'react';
import { SalaryContext } from '../context/SalaryContext';

const SalaryForm = () => {
  const { addSalaryDetail, resetForm } = useContext(SalaryContext);
  const [form, setForm] = useState({
    basicSalary: '',
    earnings: [],
    deductions: []
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addSalaryDetail(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        name="basicSalary"
        value={form.basicSalary}
        onChange={handleChange}
        placeholder="Basic Salary"
      />
      {/* Add inputs for earnings, deductions, EPF/ETF checkboxes */}
      <button type="button" onClick={resetForm}>Reset</button>
      <button type="submit">Calculate</button>
    </form>
  );
};

export default SalaryForm;