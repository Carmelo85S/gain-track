import { useProfile } from "../../hook/profileContext";

const Dashboard = () => {
  const { name } = useProfile();

  return (
    <section className="w-full flex justify-center items-center py-6">
      <div className="w-full max-w-7xl p-8 xs:p-6 rounded-2xl flex items-start md:flex-row md:items-start gap-6 md:gap-12">
        <div className="text-center md:text-left">
          <p className="text-xl font-semibold text-white mb-2">
            <strong>Hello :</strong> {name}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
