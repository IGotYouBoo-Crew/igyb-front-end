

export default function ErrorMessage({error, className}){
    return(
        <p className={"text-red-600 pb-4 mx-auto max-w-[calc(15rem)] md:max-w-md " + className}>
            {error ? error : "" }
        </p>
    )
}