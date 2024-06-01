import React, { createContext, useReducer, useEffect } from 'react';

const initialState = {
  basicSalary: 0,
  earnings: [],
  deductions: [],
  calculatedSalary: {
    netSalary: 0,
    epf: 0,
    etf: 0,
    apit: 0,
    costToCompany: 0
  }
};

const salaryReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_SALARY_DETAIL':
      const { basicSalary, earnings, deductions } = action.payload;
      const totalEarnings = basicSalary + earnings.reduce((acc, earning) => acc + parseFloat(earning.amount), 0);
      const totalDeductions = deductions.reduce((acc, deduction) => acc + parseFloat(deduction.amount), 0);
      const grossEarnings = totalEarnings - totalDeductions;
      const epfEarnings = basicSalary + earnings.filter(earning => earning.epfApplicable).reduce((acc, earning) => acc + parseFloat(earning.amount), 0);
      const grossSalaryForEPF = epfEarnings - totalDeductions;
      const employeeEPF = grossSalaryForEPF * 0.08;
      const employerEPF = grossSalaryForEPF * 0.12;
      const employerETF = grossSalaryForEPF * 0.03;
      const apit = grossEarnings * 0.18 - 25500;
      const netSalary = grossEarnings - employeeEPF - apit;
      const costToCompany = grossEarnings + employerEPF + employerETF;

      return {
        ...state,
        basicSalary,
        earnings,
        deductions,
        calculatedSalary: {
          netSalary,
          epf: employeeEPF,
          etf: employerETF,
          apit,
          costToCompany
        }
      };
    case 'RESET_FORM':
      return initialState;
    case 'LOAD_SAVED_STATE':
      return action.payload;
    default:
      return state;
  }
};

export const SalaryContext = createContext(initialState);

export const SalaryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(salaryReducer, initialState);

  useEffect(() => {
    const savedState = JSON.parse(localStorage.getItem('salaryState'));
    if (savedState) {
      dispatch({ type: 'LOAD_SAVED_STATE', payload: savedState });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('salaryState', JSON.stringify(state));
  }, [state]);

  const addSalaryDetail = (detail) => {
    dispatch({ type: 'ADD_SALARY_DETAIL', payload: detail });
  };

  const resetForm = () => {
    dispatch({ type: 'RESET_FORM' });
  };

  return (
    <SalaryContext.Provider value={{ ...state, addSalaryDetail, resetForm }}>
      {children}
    </SalaryContext.Provider>
  );
};
