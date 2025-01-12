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
  selectedCode: string;
  handleOnChangeCode: (value: string) => void;
}

interface EmployeeCodesResponse {
  employeeCodes: EmployeeCodeType[];
}

export const EmployeeContext = createContext({} as EmployeeContext);

export function EmployeeProvider({ children }: EmployeesProviderProps) {
  const [employeeCodes, setEmployeeCodes] = useState<EmployeeCodeType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedCode, setSelectedCode] = useState('');

  const handleOnChangeCode = (value: string) => {
    setSelectedCode(value);
  };

  const generateEmployeeCode = async () => {
    setIsLoading(true);

    try {
      const { data } = await api.post('/employee/generate-code');

      setEmployeeCodes((prevCodes) => [data, ...prevCodes]);
      setSelectedCode(data.employeeCode);
    } catch (error) {
      console.error('Error fetching employee codes:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchEmployeeCodes = async () => {
    setIsLoading(true);

    try {
      const response = await api.get<EmployeeCodesResponse>('/employee/codes');
      console.log(response?.data?.employeeCodes);
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
    employeeCodes,
    isLoading,
    selectedCode,
    generateEmployeeCode,
    handleOnChangeCode,
  };

  return (
    <EmployeeContext.Provider value={value}>
      {children}
    </EmployeeContext.Provider>
  );
}
