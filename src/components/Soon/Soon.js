import "./Soon.css";
import NavBar from "../NavBar/NavBar";

export const Soon = () => {
  return (
    <div>
      <NavBar />
      <div className="soon-ring">
        Em breve!
        <span className="soon-pointer"></span>
      </div>
    </div>
  );
};
