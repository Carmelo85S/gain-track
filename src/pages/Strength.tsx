import Dashboard from "../components/dashboard/Dashboard"
import ChooseTraining from "../components/chooseTraining/ChooseTraining";
import StrenghtGraphic from "../assets/strenght.webp"
import { useState } from "react";
import StrengthButton from "../components/buttonList/StrengthButton";

const Strength = () => {

    const [visible, setVisible] = useState(true);

    return (
    <div className="w-full min-h-screen bg-gradient flex items-center flex-col px-4">
        <Dashboard visible={visible} setVisible={setVisible}/>
        <ChooseTraining img={StrenghtGraphic} alt="Strenght graphic" />
        <StrengthButton />
    </div>
  )
}

export default Strength
