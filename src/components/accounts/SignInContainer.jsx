import { useState } from "react";
import { buttonStyle } from "../../constants/styles";
import colourways from "../../constants/colourways";
import SignInForm from "./SignInForm";
import CreateAccountForm from "./CreateAccountForm";

const containerStyle = {
    false:
        " min-h-fit min-w-fit my-8 px-8 md:px-24 py-8 rounded-3xl flex flex-col items-center justify-center " +
        colourways.accounts.container,
    true:
        "min-h-fit min-w-fit my-8 px-8 md:px-24 py-8 rounded-3xl flex flex-col items-center justify-center " +
        colourways.accounts.container,
};

export default function SignInContainer() {
    let [createAccount, setCreateAccount] = useState(false);
    let [fade, setFade] = useState(false)

    async function handleClick(e) {
        e.preventDefault();
        setFade(true)
        setTimeout(() => {
            setCreateAccount(!createAccount);
            setFade(false)
        }, 600);
    }

    return (
        <div className={containerStyle[createAccount] + (fade ? " animate-fade-away" : " animate-fade-towards")}>
            {createAccount ? <CreateAccountForm fade={()=>setFade(!fade)} /> : <SignInForm fade={()=>setFade(!fade)}  />}
            <p className="my-2">--------------- or ---------------</p>
            <button
                className={buttonStyle.default + colourways.accounts.outlineButton}
                onClick={(e) => handleClick(e)}
            >
                {createAccount ? "back to sign in" : "create account"}
            </button>
        </div>
    );
}
