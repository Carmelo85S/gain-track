import { useState } from "react";
import { Training } from "../../types/MenuButtonProps";

const ChoosenTrainingButton: React.FC<Training> = ({ label }) => {

  const [progress, setProgress] = useState<number>(0);

  const handleProgress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProgress(Number(e.target.value));
  };


  return (
    <div className="w-full h-auto my-2 bg-training-100 text-training-text font-semibold text-lg flex justify-start items-center rounded-xs">
    <button
      className="flex-1 h-40 bg-blue-500 text-white font-semibold text-lg rounded-xs"
      onClick={() => console.log(`Hai cliccato su ${label}`)}
    >
      <span>{label}</span>
    </button>
    <div className="flex justify-center flex-col items-center">
      <label htmlFor="progress" className="text-sm text-center mb-3">Progress (kg)</label>
      <input
        type="number"
        name="progress"
        id="progress"
        value={progress}
        onChange={handleProgress}
        className="border p-2 mx-2 rounded-md w-24"
        min="0"
      />
    </div>
  </div>
  );
};

export default ChoosenTrainingButton;
