

export default function ErrorMessage({error}){
    return(
        <p className="text-red-600 pb-4 mx-auto ">
            {error ? error : "" }
        </p>
    )
}