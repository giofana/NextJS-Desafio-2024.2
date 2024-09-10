'use client'
import { Search as SearchIcon } from "lucide-react";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState} from "react"

type SearchProps = {
    estilo: string;
};

export default function SearchAdm({ estilo }: SearchProps) {

    const search = useSearchParams();
    const router = useRouter();
    const [pesquisa, setPesquisa] = useState<string | ''> (search.get('query') || '');
    const auxiliar = (query:string) => {
        if(!query){
            return
        }
        const params = new URLSearchParams();
        params.set('query', query)
        router.replace(`/searchAdmPage/?${params.toString()}`)
    };

    const enviaPesquisa = (e: React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault()
        auxiliar(pesquisa)
    };
    return (
        <div className="w-auto">
            <form onSubmit={enviaPesquisa} className="" autoComplete="off">
                <div className="flex w-auto justify-center flex-col items-center gap-6 my-10">
                    <div className={`flex rounded-full py-3 w-3/4 px-8 justify-between items-center ${estilo}`}>
                        <input 
                            id="search"
                            name="search"
                            onChange={(e) => setPesquisa(e.target.value)}
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
