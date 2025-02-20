import TrainingButton from "../button/TrainingButton"

const trainingTypes = [
  {
    label: "Strength",
    link: "/strength"
  },
  {
    label: "Endurance",
    link: "/endurance",
  },
  {
    label: "Functional",
    link: "/functional",
  },
  {
    label: "Stretching",
    link: "/stretching",
  },
  {
    label: "Circuit",
    link: "/circuit",
  },
  {
    label: "HIIT",
    link: "/hiit",
  },
  {
    label: "Cardio",
    link: "/cardio",
  },
  {
    label: "Plyometrics",
    link: "/plyometrics",
  },
  {
    label: "Mobility",
    link: "/mobility",
  },
  {
    label: "Core",
    link: "/core",
  },
  {
    label: "Balance",
    link: "/balance",
  },
  {
    label: "Powerlifting",
    link: "/powerlifting",
  }
]

const TrainingMenu = () => {
  return (
    <nav className="w-full min-h-10 max-w-3xl my-8 p-8 xs:p-4 flex justify-between flex-wrap items-center md:flex-row md:items-start text-white">
      {trainingTypes.map((item, index) => (
        <TrainingButton 
          key={index} 
          label={item.label} 
          link={item.link} />
      ))}
    </nav>
  )
}

export default TrainingMenu
