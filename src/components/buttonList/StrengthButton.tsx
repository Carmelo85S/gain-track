import ChoosenTraningButton from "../button/ChoosenTraningButton";

const choosenTraining = [
    { "label": "Barbell Bench Press"},
    { "label": "Incline Bench Press 45°"},
    { "label": "Dumbbell Flyes"},
    { "label": "Lateral Raises"},
    { "label": "Overhead Press"},
    { "label": "Rear Deltoid Flyes"},
    { "label": "Tricep Rope Pushdown"}
  ];

const StrengthButton = () => {
  return (
    <section className="w-full pt-8 md:mt-56 xs:pt-4 flex justify-center items-center flex-col gap-4 xs:mt-0">
      {choosenTraining.map((item) => (
        <ChoosenTraningButton
              key={item.label}
              label={item.label}
        />
      ))}
    </section>
  );
};

export default StrengthButton;
