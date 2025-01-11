import { EmployeeProvider } from '@/contexts/EmployeeContext';

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return <EmployeeProvider>{children}</EmployeeProvider>;
}
