export default async function postNewUser(formData) {
    let response = await fetch(process.env.REACT_APP_BACKEND_URL + "/account/newUser", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
    });
    return await response.json()
}