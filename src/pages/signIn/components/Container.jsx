export default function SignInContainer() {
    const inputStyle =
        "focus:outline text-black placeholder:text-sm md:placeholder:text-base rounded-3xl pl-5 pr-3 py-3 mt-2 mb-4 outline-honey";
    const buttonStyle =
        "outline-white outline w-fit py-2 px-4 rounded-3xl mx-auto hover:bg-honey hover:outline-white active:bg-indigo";

    const backendURL = process.env.REACT_APP_BACKEND_TEST

    // TODO: figure out how to make the submit button just submit without redirecting
    function handleClick(event) {
        // event.preventDefault()
        console.log(event)

    }
    return (
        <div className="h-1/2 w-1/3 min-h-fit min-w-fit p-8 text-white bg-periwinkle rounded-3xl flex flex-col items-center justify-center">
            <iframe name="dummyframe" id="dummyframe" className="hidden"></iframe>
            <form action={ backendURL + "account/signIn"} target="dummyframe" method="POST" className="flex flex-col">
                <label>USERNAME: </label>
                <input
                    type="text"
                    name="username"
                    id="usernameInput"
                    placeholder="USERNAME"
                    className={inputStyle}
                />
                <label>PASSWORD: </label>
                <input
                    type="text"
                    name="password"
                    id="passwordInput"
                    placeholder="PASSWORD"
                    className={inputStyle}
                />
                <button className={buttonStyle} onClick={(e)=>handleClick(e)}>SUBMIT</button>
            </form>
        </div>
    );
}
