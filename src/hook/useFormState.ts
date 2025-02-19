import { useState } from "react";

const useFormState = () => {
    const [email, setEmail] = useState<string>("");  
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("")
    const [error, setError] = useState<string>("");

    return(
        {
            email,
            setEmail,
            password,
            setPassword,
            confirmPassword,
            setConfirmPassword,
            error,
            setError
        }
    )
}

export default useFormState;

