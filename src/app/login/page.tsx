import Botao from "@/components/botao";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="py-16 px-4 flex flex-col gap-4 md:px-">
      <h1 className="text-rosaMarrom text-3xl">Login</h1>
      <div className="flex flex-col gap-1">
        <span className="text-sm">Email:</span>
        <input className="bg-rosa rounded-md p-2 text-sm text-acinzentado placeholder-acinzentado/70" type="text" placeholder="exemplo@mail.com"/>
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-sm">Senha: </span>
        <input className="bg-rosa rounded-md p-2 text-sm placeholder-acinzentado/70 text-acinzentado" type="text" placeholder="Adicione sua senha"/>
      </div>
      <div className="w-full flex justify-center ">
        <Link href={'gerenciamento'}>
            <Botao borda="rosa" corFundo="rosa" corTexto="acinzentado" redondo="md" titulo="Login"/>
        </Link>
      </div>
    </div>
  );
}
