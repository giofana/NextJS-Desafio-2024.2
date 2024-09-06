import { Search as SearchIcon } from "lucide-react";

type SearchProps = {
    estilo: string;
};

export default function Search({ estilo }: SearchProps) {
    return (
        <div className="w-auto">
            <form className="flex basis-full" autoComplete="off">
                <div className="flex w-auto justify-center flex-col items-center gap-6 my-10">
                    <div className={`flex rounded-full py-3 w-auto px-8 items-center ${estilo}`}>
                        <input 
                            id="search"
                            name="search"
                            type="text"
                            className="w-auto text-rosinha bg-transparent caret-rosinha focus:outline-none placeholder:text-white"
                            placeholder="O que você procura?"
                        /> 
                        <SearchIcon className="w-7 h-7 text-rosinha left-4" />
                    </div>
                </div>
            </form>
        </div>
    );
}
