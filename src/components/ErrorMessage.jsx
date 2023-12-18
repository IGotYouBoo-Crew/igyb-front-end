

export default function ErrorMessage({error}){
    return(
        <p className="text-red-600 pb-4 mx-auto max-w-[calc(15rem)] md:max-w-md ">
            {error ? error : "" }
        </p>
    )
}