import Botao from "@/components/botao";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex flex-row justify-center items-center min-h-screen">
      <div className="p-0 w-2/3 xl:w-1/2 flex flex-row items-center justify-between bg-white rounded-lg">
        <Image alt="Imagem" src={'assets/Imgaem.svg'} width={500} height={500} className="hidden md:block h-full w-1/2 rounded-l-lg "/>
        <div className="px-4 py-4 flex flex-col w-1/2 h-full justify-center">
          <h1 className="text-rosaMarrom text-3xl">Login</h1>

          <div className="flex flex-col pb-4 gap-2">
            <span className="text-sm">Email:</span>
            <input className="bg-rosa rounded-md p-2 text-sm text-acinzentado placeholder-acinzentado/70" type="text" placeholder="exemplo@mail.com"/>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm">Senha: </span>
            <input className="bg-rosa rounded-md p-2 text-sm placeholder-acinzentado/70 text-acinzentado" type="password" placeholder="Adicione sua senha"/>
          </div>
          <div className="w-full flex pt-5 justify-center">
            <Link href={'/gerenciamento'}>
              <Botao estilo="bg-rosa text-acinzentado rounded-md px-4 py-1.5" titulo="Login"/>
            </Link>
          </div>
        </div>
      </div>
    </div>

  );
}
