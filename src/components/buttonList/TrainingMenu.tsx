import TrainingButton from "../button/TrainingButton";

const trainingTypes = [
  { label: "Strength", link: "/strength" },
  { label: "Endurance", link: "/endurance" },
  { label: "Functional", link: "/functional" },
  { label: "Circuit", link: "/circuit" },
  { label: "HIIT", link: "/hiit" },
  { label: "Cardio", link: "/cardio" },
  { label: "Core", link: "/core" },
  { label: "Powerlifting", link: "/powerlifting" },
];

const TrainingMenu = () => {
  return (
    <section className="w-full pt-8 md:mt-56 xs:pt-4 flex justify-center items-center flex-wrap gap-4 xs:mt-0">
      {trainingTypes.map((item) => (
        <TrainingButton
          key={item.label}
          label={item.label}
          link={item.link}
        />
      ))}
    </section>
  );
};

export default TrainingMenu;
