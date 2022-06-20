import Slider from "./components/Slider";
import './style/Home.css';
import LoginCard from "./components/LoginCard";
import SignUpCard from "./components/SignUpCard";

function Home() {
  return (
    <>
    <div className="Slider">
    <Slider/>
    </div>
    <div className="Section_1">
      <div>
      <LoginCard/>
      </div>
      <div>
      <SignUpCard/>
      </div>
    </div>
    </>
  );
}

export default Home;