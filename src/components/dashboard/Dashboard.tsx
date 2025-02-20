import Logo from "../../assets/Logo.png";


const Dashboard = () => {

  return (
    <section className="w-full min-h-screen flex justify-center items-center bg-primary-100 px-4">
        <div className="w-full max-w-3xl bg-primary-200 p-8 xs:p-4 rounded-2xl shadow-lg flex flex-col items-center md:flex-row md:items-start text-white">
            <img src={Logo} className="w-32 xs:w-20 object-contain mb-4" alt="Logo" />
            <div className="md:px-9">
                <p></p>
            </div>
        </div>
    </section>
  )
}

export default Dashboard
