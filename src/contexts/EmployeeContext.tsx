import { EmployeeCodeType } from '@/types/EmployeeCode';
import { createContext } from 'react';

export interface EmployeeContext {
  employeeCodes: EmployeeCodeType[];
  generateEmployeeCode: VoidFunction;
  isLoading: boolean;
  selectedCode: string;
  handleOnChangeCode: (value: string) => void;
}

export const EmployeeContext = createContext({} as EmployeeContext);
