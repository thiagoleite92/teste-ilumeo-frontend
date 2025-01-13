import { Button } from '@/components/ui/button';
import { api } from '@/lib/axios';

import {
  clearStorage,
  getEmployeeCode,
  getEmployeeLogs,
  updateEmployeeLogsEntryTime,
  updateEmployeeLogsExitTime,
} from '@/storage/storageEmployeeLogs';
import { EmployeeLogType } from '@/types/EmployeeLog';
import { extractDate, extractTime } from '@/utils/date-format';
import { createFileRoute, redirect, useNavigate } from '@tanstack/react-router';
import { LogOut } from 'lucide-react';
import { useEffect, useState } from 'react';

export const Route = createFileRoute('/work-shifts')({
  component: () => <RouteComponent />,
  loader: () => {
    const employeeCode = getEmployeeCode();

    if (!employeeCode) {
      redirect({
        to: '/',
        throw: true,
      });
    }

    return { employeeCode };
  },
});

function RouteComponent() {
  const { employeeCode } = Route.useLoaderData();
  const navigate = useNavigate();

  const [logs, setLogs] = useState<EmployeeLogType[]>([]);
  const [code, setCode] = useState('');

  const handleRegisterEntryTime = async () => {
    try {
      const response = await api.post<{
        entryTime: EmployeeLogType;
        message: string;
      }>('/work-shift/entry-time', {
        employeeCode: code,
      });

      updateEmployeeLogsEntryTime(response.data.entryTime);
      setLogs((oldState) => {
        const logs = oldState.slice();

        return [response.data.entryTime, ...logs];
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleRegisterExitTIme = async () => {
    try {
      const response = await api.post<{
        exitTime: EmployeeLogType;
        message: string;
      }>('/work-shift/exit-time', {
        employeeCode: code,
      });

      updateEmployeeLogsExitTime(response.data.exitTime);
      setLogs((oldState) => {
        const logs = oldState.slice();

        const logIndex = logs.findIndex(
          (log) => log.id === response.data.exitTime.id
        );

        if (logIndex > -1) {
          logs[logIndex] = response.data.exitTime;
          return logs;
        }

        return logs;
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogOut = () => {
    clearStorage();
    navigate({ to: '/' });
  };

  useEffect(() => {
    setLogs(getEmployeeLogs());
    setCode(getEmployeeCode() || '');
  }, []);

  return (
    <>
      <div className="flex items-center justify-center flex-col gap-8 w-[400px] bg-blue p-4 bg-white/10 border border-white/20 shadow-lg rounded-lg  text-white">
        <div className="flex justify-between w-full">
          <h3 className="text-xl text-gray self-start flex flex-col">
            Data: {extractDate(new Date().toISOString())}
          </h3>
          <div className="flex flex-col gap-2">
            <Button
              className="bg-yellowBg w-full text-blue-text font-bold"
              onClick={handleLogOut}
            >
              Sair <LogOut />
            </Button>

            <span className="font-regular flex flex-col justify-end">
              #{employeeCode?.toUpperCase()}
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-6 w-full">
          <Button
            className="bg-yellowBg w-full text-blue-text font-bold"
            onClick={() => {
              handleRegisterEntryTime();
            }}
          >
            Registrar Horário de Entrada
          </Button>
        </div>

        {logs?.length === 0 && (
          <div className="flex items-center justify-center w-full">
            <p className="text-white">Nenhum Registro Encontrado</p>
          </div>
        )}

        <div className="flex items-center justify-start flex-col w-full">
          {logs && logs?.length > 0 && (
            <>
              <h3 className="w-full py-2 items-start flex justify-start rounded-sm">
                Registro de Horários
              </h3>
              <ul className=" overflow-y-auto max-h-[375px]  w-full space-y-2">
                {logs.map((log) => (
                  <li key={log.id}>
                    <Button
                      asChild
                      className="bg-blue-text w-full flex justify-between items-center rounded-sm py-2 hover:cursor-pointer uppercase disabled:cursor-not-allowed"
                      key={log?.id}
                      onClick={() => {
                        handleRegisterExitTIme();
                      }}
                      disabled={!!log?.exitTime}
                    >
                      <div>
                        <span>{extractDate(log?.entryTime)}</span>
                        <span>{extractTime(log.entryTime)}</span>
                      </div>
                    </Button>
                    <span className="text-sm italic text-yellowBg">
                      {log?.exitTime
                        ? `Saída: ${extractTime(log?.exitTime)}`
                        : 'Clique para registrar saída'}
                    </span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </>
  );
}
