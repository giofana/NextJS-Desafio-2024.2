import { Search as SearchIcon } from "lucide-react";

type SearchProps = {
    estilo: string;
};

export default function Search({ estilo }: SearchProps) {
    return (
        <div>
            <form className="flex basis-full" autoComplete="off">
                <div className="flex w-full justify-center flex-col items-center gap-6 my-10">
                    <div className={`flex rounded-full py-3 w-3/4 md:w-1/2 px-8 items-center ${estilo}`}>
                        <input 
                            id="search"
                            name="search"
                            type="text"
                            className="w-full text-acinzetado bg-transparent caret-marrom focus:outline-none placeholder:text-marrom"
                            placeholder="O que você procura?"
                        />
                        <SearchIcon className="w-7 h-7 text-marrom left-4" />
                    </div>
                </div>
            </form>
        </div>
    );
}
