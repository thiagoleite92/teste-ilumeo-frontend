import { createContext } from 'react';

interface WorkShiftsContext {
  isLoading: boolean;
  handleEmployeeLogIn: (employeeCode: string) => void;
}

export const WorkShiftsContext = createContext({} as WorkShiftsContext);
