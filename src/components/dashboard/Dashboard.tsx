import { useNavigate } from "react-router-dom";
import { useProfile } from "../../hook/profileContext";

const Dashboard = ({ visible, setVisible }: { visible: boolean, setVisible: React.Dispatch<React.SetStateAction<boolean>> }) => {


  const { name } = useProfile();
  const navigate = useNavigate();

  return (
    <section className="w-full flex items-center">
      <div className="w-full p-2 xs:p-2 rounded-2xl flex items-start md:flex-row md:items-start gap-6 md:gap-12">
        <div className="w-full py-5 m-auto flex align-center justify-between">
          <p className="my-auto text-xl font-semibold text-white">
            <strong>Hello :</strong> {name}
          </p>
          {(visible &&
            <button 
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              onClick={() => navigate('/home-page')}
              >
                Go back
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
