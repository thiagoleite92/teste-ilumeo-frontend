import { api } from '@/lib/axios';
import {
  saveEmployeeCode,
  saveEmployeeLogs,
} from '@/storage/storageEmployeeLogs';
import { EmployeeLogType } from '@/types/EmployeeLog';
import { useNavigate } from '@tanstack/react-router';
import { useState, ReactNode } from 'react';
import { WorkShiftsContext } from './WorkShiftsContext';

interface WorkShiftsProviderProps {
  children: ReactNode;
}

export type EmployeeLogsResponse = {
  employeeLogs: EmployeeLogType[];
};

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
      console.log(error);
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
