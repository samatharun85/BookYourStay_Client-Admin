import Sidebar from "../../components/sidebar/Sidebar";
import "./home.scss";
const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        Welcome to Admin Page...
      </div>
    </div>
  );
};
export default Home;