import { Button } from '@/components/ui/button';
import { api } from '@/lib/axios';

import {
  getEmployeeCode,
  getEmployeeLogs,
} from '@/storage/storageEmployeeLogs';
import { EmployeeLogType } from '@/types/EmployeeLog';
import { extractDate, extractTime } from '@/utils/date-format';
import { createFileRoute, redirect } from '@tanstack/react-router';
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

    return { employeeLogs: getEmployeeLogs(), employeeCode: employeeCode };
  },
});

function RouteComponent() {
  const { employeeLogs, employeeCode } = Route.useLoaderData();

  const [logs, setLogs] = useState<EmployeeLogType[]>([
    {
      id: 7,
      employeeId: 67,
      entryTime: '2025-01-12T11:30:23.542Z',
      exitTime: null,
      createdAt: '2025-01-12T11:30:23.544Z',
      updatedAt: '2025-01-12T11:30:23.544Z',
    },
  ]);

  const handleRegisterEntryTime = async (employeeCode: string) => {
    setLogs([
      {
        id: 7,
        employeeId: 67,
        entryTime: '2025-01-12T11:30:23.542Z',
        exitTime: null,
        createdAt: '2025-01-12T11:30:23.544Z',
        updatedAt: '2025-01-12T11:30:23.544Z',
      },
    ]);
    return;
    try {
      const response = await api.post('/work-shift/entry-time', {
        employeeCode,
      });

      console.log(response);
    } catch (error) {}
  };

  useEffect(() => {
    setLogs([
      {
        id: 7,
        employeeId: 67,
        entryTime: '2025-01-12T11:30:23.542Z',
        exitTime: null,
        createdAt: '2025-01-12T11:30:23.544Z',
        updatedAt: '2025-01-12T11:30:23.544Z',
      },
      {
        id: 7,
        employeeId: 67,
        entryTime: '2025-01-12T11:30:23.542Z',
        exitTime: null,
        createdAt: '2025-01-12T11:30:23.544Z',
        updatedAt: '2025-01-12T11:30:23.544Z',
      },
      {
        id: 7,
        employeeId: 67,
        entryTime: '2025-01-12T11:30:23.542Z',
        exitTime: null,
        createdAt: '2025-01-12T11:30:23.544Z',
        updatedAt: '2025-01-12T11:30:23.544Z',
      },
      {
        id: 7,
        employeeId: 67,
        entryTime: '2025-01-12T11:30:23.542Z',
        exitTime: null,
        createdAt: '2025-01-12T11:30:23.544Z',
        updatedAt: '2025-01-12T11:30:23.544Z',
      },
      {
        id: 7,
        employeeId: 67,
        entryTime: '2025-01-12T11:30:23.542Z',
        exitTime: null,
        createdAt: '2025-01-12T11:30:23.544Z',
        updatedAt: '2025-01-12T11:30:23.544Z',
      },
      {
        id: 7,
        employeeId: 67,
        entryTime: '2025-01-12T11:30:23.542Z',
        exitTime: null,
        createdAt: '2025-01-12T11:30:23.544Z',
        updatedAt: '2025-01-12T11:30:23.544Z',
      },
      {
        id: 7,
        employeeId: 67,
        entryTime: '2025-01-12T11:30:23.542Z',
        exitTime: null,
        createdAt: '2025-01-12T11:30:23.544Z',
        updatedAt: '2025-01-12T11:30:23.544Z',
      },
      {
        id: 7,
        employeeId: 67,
        entryTime: '2025-01-12T11:30:23.542Z',
        exitTime: null,
        createdAt: '2025-01-12T11:30:23.544Z',
        updatedAt: '2025-01-12T11:30:23.544Z',
      },
      {
        id: 7,
        employeeId: 67,
        entryTime: '2025-01-12T11:30:23.542Z',
        exitTime: null,
        createdAt: '2025-01-12T11:30:23.544Z',
        updatedAt: '2025-01-12T11:30:23.544Z',
      },
      {
        id: 7,
        employeeId: 67,
        entryTime: '2025-01-12T11:30:23.542Z',
        exitTime: null,
        createdAt: '2025-01-12T11:30:23.544Z',
        updatedAt: '2025-01-12T11:30:23.544Z',
      },
      {
        id: 7,
        employeeId: 67,
        entryTime: '2025-01-12T11:30:23.542Z',
        exitTime: null,
        createdAt: '2025-01-12T11:30:23.544Z',
        updatedAt: '2025-01-12T11:30:23.544Z',
      },
      {
        id: 7,
        employeeId: 67,
        entryTime: '2025-01-12T11:30:23.542Z',
        exitTime: null,
        createdAt: '2025-01-12T11:30:23.544Z',
        updatedAt: '2025-01-12T11:30:23.544Z',
      },
      {
        id: 7,
        employeeId: 67,
        entryTime: '2025-01-12T11:30:23.542Z',
        exitTime: null,
        createdAt: '2025-01-12T11:30:23.544Z',
        updatedAt: '2025-01-12T11:30:23.544Z',
      },
      {
        id: 7,
        employeeId: 67,
        entryTime: '2025-01-12T11:30:23.542Z',
        exitTime: null,
        createdAt: '2025-01-12T11:30:23.544Z',
        updatedAt: '2025-01-12T11:30:23.544Z',
      },
      {
        id: 7,
        employeeId: 67,
        entryTime: '2025-01-12T11:30:23.542Z',
        exitTime: null,
        createdAt: '2025-01-12T11:30:23.544Z',
        updatedAt: '2025-01-12T11:30:23.544Z',
      },
      {
        id: 7,
        employeeId: 67,
        entryTime: '2025-01-12T11:30:23.542Z',
        exitTime: null,
        createdAt: '2025-01-12T11:30:23.544Z',
        updatedAt: '2025-01-12T11:30:23.544Z',
      },
      {
        id: 7,
        employeeId: 67,
        entryTime: '2025-01-12T11:30:23.542Z',
        exitTime: null,
        createdAt: '2025-01-12T11:30:23.544Z',
        updatedAt: '2025-01-12T11:30:23.544Z',
      },
      {
        id: 7,
        employeeId: 67,
        entryTime: '2025-01-12T11:30:23.542Z',
        exitTime: null,
        createdAt: '2025-01-12T11:30:23.544Z',
        updatedAt: '2025-01-12T11:30:23.544Z',
      },
      {
        id: 7,
        employeeId: 67,
        entryTime: '2025-01-12T11:30:23.542Z',
        exitTime: null,
        createdAt: '2025-01-12T11:30:23.544Z',
        updatedAt: '2025-01-12T11:30:23.544Z',
      },
      {
        id: 7,
        employeeId: 67,
        entryTime: '2025-01-12T11:30:23.542Z',
        exitTime: null,
        createdAt: '2025-01-12T11:30:23.544Z',
        updatedAt: '2025-01-12T11:30:23.544Z',
      },
      {
        id: 7,
        employeeId: 67,
        entryTime: '2025-01-12T11:30:23.542Z',
        exitTime: null,
        createdAt: '2025-01-12T11:30:23.544Z',
        updatedAt: '2025-01-12T11:30:23.544Z',
      },
    ]);
    return;
    setLogs(employeeLogs);
  }, []);

  return (
    <>
      <div className="flex items-center justify-center flex-col sm:max-w-[600px] gap-8 mx-auto flex-1  px-4  shadow-lg shadow-yellowBg">
        <div className="flex justify-between w-full">
          <h1 className="text-xl text-gray self-start flex flex-col">
            Data atual: {extractDate(new Date().toISOString())}
            <span className="font-bold italic text-md">não registrada</span>
          </h1>
          <span className="font-regular flex flex-col justify-end">
            {employeeCode}
            <span>Código</span>
          </span>
        </div>
        <div className="flex flex-col justify-center gap-6 w-full">
          <Button
            className="bg-yellowBg w-full text-blue-text font-bold"
            onClick={() => {
              handleRegisterEntryTime('');
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
                  <Button
                    asChild
                    className="bg-blue-text w-full flex justify-between items-center rounded-sm py-2 hover:cursor-pointer uppercase"
                    key={log?.id}
                    onClick={() => {
                      console.log('oi');
                    }}
                  >
                    <li>
                      <span>{extractDate(log?.entryTime)}</span>
                      <span>{extractTime(log.entryTime)}</span>
                    </li>
                  </Button>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </>
  );
}
