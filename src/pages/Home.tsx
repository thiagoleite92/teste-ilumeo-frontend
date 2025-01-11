import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { EmployeeContext } from '@/contexts/EmployeeContext';
import { useCallback, useContext, useState } from 'react';

export function Home() {
  const { generateEmployeeCode, employeeCodes } = useContext(EmployeeContext);

  const [selectedCode, setSelectedCode] = useState<string>('');

  const handleGenerateEmployeeCode = () => {
    generateEmployeeCode();
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value?.length > 6) {
      return;
    }
    setSelectedCode(event.target.value);
  };

  const handleConfirmCode = (selectedCode: string) => {
    console.log(
      employeeCodes.find((codes) => codes.employeeCode === selectedCode)
    );
  };

  return (
    <div className="flex items-center justify-center h-screen flex-col w-[350px] gap-10 mx-auto">
      <h1 className="text-xl font-regular text-gray self-start ">
        Ponto <span className="font-bold">Ilumeo</span>
      </h1>
      <div className="flex flex-col justify-center gap-6 w-full">
        <div className="flex gap-4">
          <Input
            type="text"
            placeholder="Insira ou Selecione o código"
            className="outline-none bg-blue-text border-none focus:boder-none focus:outline-none uppercase text-white"
            value={selectedCode}
            onChange={handleOnChange}
          />
          {selectedCode && selectedCode?.length >= 6 && (
            <Button
              className="text-blue-text font-bold "
              variant="secondary"
              onClick={() => setSelectedCode('')}
            >
              Limpar
            </Button>
          )}
        </div>
        <Button
          className="bg-yellowBg w-full text-blue-text font-bold"
          onClick={() => {
            handleConfirmCode(selectedCode);
          }}
        >
          Confirmar
        </Button>
        <Button
          className=" w-full text-blue-text font-bold "
          variant="secondary"
          onClick={handleGenerateEmployeeCode}
        >
          Gerar Código
        </Button>
      </div>

      {employeeCodes?.length === 0 && (
        <div className="flex items-center justify-center w-full">
          <p className="text-white">Nenhum código encontrado</p>
        </div>
      )}
      {employeeCodes?.length > 0 && (
        <>
          <h3 className="bg-blue-text w-full py-2 items-center flex justify-center">
            Selecione um código
          </h3>
          <ul className=" overflow-y-auto h-1/3 w-full space-y-2">
            {employeeCodes?.map((code) => (
              <Button
                asChild
                className="bg-blue-text w-full flex justify-center items-center rounded-sm py-2 hover:cursor-pointer uppercase"
                key={code?.id}
                onClick={() => setSelectedCode(code.employeeCode)}
              >
                <li>{code?.employeeCode}</li>
              </Button>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
