import { useState } from "react";

const useProfileState = () => {
    const [name, setName] = useState<string>("");
    const [age, setAge] = useState<number | "">();
    const [height, setHeight] = useState<number | "">();
    const [weight, setWeight] = useState<number | "">();

    return {
        name, setName,
        age, setAge,
        height, setHeight,
        weight, setWeight,
    };
};

export default useProfileState;