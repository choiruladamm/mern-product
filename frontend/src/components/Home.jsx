import { Link } from "react-router-dom";
import Button from "./Button";

const Home = () => {
  return (
    <div className="grid h-screen place-items-center">
      <Link to="/dashboard">
        <Button title={"Go to Dashboard"} />
      </Link>
    </div>
  );
};

export default Home;
