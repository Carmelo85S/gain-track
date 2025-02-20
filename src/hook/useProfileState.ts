import { useState } from "react";

const useProfileState = () => {
    const [name, setName] = useState<string>("");
    const [age, setAge] = useState<number | "">(18);
    const [height, setHeight] = useState<number | "">(150);
    const [weight, setWeight] = useState<number | "">(150);

    return {
        name, setName,
        age, setAge,
        height, setHeight,
        weight, setWeight,
    };
};

export default useProfileState;