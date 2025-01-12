import { api } from '@/lib/axios';
import {
  saveEmployeeCode,
  saveEmployeeLogs,
} from '@/storage/storageEmployeeLogs';
import { EmployeeLogType } from '@/types/EmployeeLog';
import { useNavigate } from '@tanstack/react-router';
import { createContext, ReactNode, useState } from 'react';

interface WorkShiftsProviderProps {
  children: ReactNode;
}

interface WorkShiftsContext {
  isLoading: boolean;
  handleEmployeeLogIn: (employeeCode: string) => void;
}

export type EmployeeLogsResponse = {
  employeeLogs: EmployeeLogType[];
};

export const WorkShiftsContext = createContext({} as WorkShiftsContext);

export function WorkShiftsProvider({ children }: WorkShiftsProviderProps) {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleEmployeeLogIn = async (employeeCode: string) => {
    setIsLoading(true);
    try {
      const response = await api.post<EmployeeLogsResponse>('/employee', {
        employeeCode,
      });

      saveEmployeeCode(employeeCode);

      saveEmployeeLogs(response.data.employeeLogs);
      navigate({ to: '/work-shifts', state: true });
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  const value = {
    isLoading,
    handleEmployeeLogIn,
  };

  return (
    <WorkShiftsContext.Provider value={value}>
      {children}
    </WorkShiftsContext.Provider>
  );
}
