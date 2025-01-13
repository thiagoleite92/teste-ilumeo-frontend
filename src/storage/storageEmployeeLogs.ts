import { EmployeeLogType } from '@/types/EmployeeLog';

const EMPLOYEE_LOGS = '@app:ilumeo-employee-logs';
const EMPLOYEE_CODE = '@app:ilumeo:employee-code';

export function saveEmployeeLogs(employeeLogs: EmployeeLogType[]) {
  localStorage.setItem(EMPLOYEE_LOGS, JSON.stringify(employeeLogs));
}

export function getEmployeeLogs(): EmployeeLogType[] {
  const employeeLogs = localStorage.getItem(EMPLOYEE_LOGS);
  return employeeLogs ? (JSON.parse(employeeLogs) as EmployeeLogType[]) : [];
}

export function saveEmployeeCode(employeeCode: string) {
  localStorage.setItem(EMPLOYEE_CODE, employeeCode);
}

export function getEmployeeCode(): string | null {
  return localStorage.getItem(EMPLOYEE_CODE);
}

export function updateEmployeeLogsEntryTime(employeeLog: EmployeeLogType) {
  const logs = getEmployeeLogs();

  logs.unshift(employeeLog);

  saveEmployeeLogs(logs);
}

export function updateEmployeeLogsExitTime(employeeLog: EmployeeLogType) {
  const logs = getEmployeeLogs();

  const logIndex = logs.findIndex((log) => log.id === employeeLog.id);

  if (logIndex > -1) {
    logs[logIndex] = employeeLog;
    saveEmployeeLogs(logs);
    return;
  }
}
