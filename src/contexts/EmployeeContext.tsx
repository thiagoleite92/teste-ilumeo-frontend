import { api } from '@/lib/axios';
import { EmployeeCodeType } from '@/types/EmployeeCode';
import { createContext, ReactNode, useEffect, useState } from 'react';

interface EmployeesProviderProps {
  children: ReactNode;
}

interface EmployeeContext {
  employeeCodes: EmployeeCodeType[];
  generateEmployeeCode: VoidFunction;
  isLoading: boolean;
}

interface EmployeeCodesResponse {
  employeeCodes: EmployeeCodeType[];
}

export const EmployeeContext = createContext({} as EmployeeContext);

export function EmployeeProvider({ children }: EmployeesProviderProps) {
  const [employeeCodes, setEmployeeCodes] = useState<EmployeeCodeType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const generateEmployeeCode = async () => {
    const { data } = await api.post('/employee/generate-code');

    setEmployeeCodes((prevCodes) => [data, ...prevCodes]);
  };

  const fetchEmployeeCodes = async () => {
    setIsLoading(true);

    try {
      const response = await api.get<EmployeeCodesResponse>('/employee/codes');
      setEmployeeCodes(response.data.employeeCodes);
    } catch (error) {
      console.error('Error fetching employee codes:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployeeCodes();
  }, []);

  const value = {
    generateEmployeeCode,
    employeeCodes,
    isLoading,
  };

  return (
    <EmployeeContext.Provider value={value}>
      {children}
    </EmployeeContext.Provider>
  );
}
