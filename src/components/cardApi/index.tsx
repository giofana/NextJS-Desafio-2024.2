
type ApiProps = {
    id: number,
    title: string,
    text: string
  }
export default function CardApi({id, title, text}:ApiProps){
    return(
        <div className="flex flex-col justify-center items-center p-4 bg-rosaB gap-2 text-center h-full hover:scale-105 transition ease-in-out md:w-2/4 lg:justify-around lg:w-1/4">
            <h1 className="text-xl">{title}</h1>
            <span>{text}</span>
        </div>
    )
}