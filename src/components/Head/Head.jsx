import { Link } from "react-router-dom";
import popcorn from "../../images/popcorn.png";
import films from "../../images/films.png";
import actors from "../../images/actors.png";
import "./head.style.css";
export function Head() {
  return (
    <div>
      <div className="text-head">TMDB PORTAL</div>
      <div className="bg-black ml-3 mr-3 rounded-lg border border-indigo-600 mt-2 mb-2">
        <div className="flex flex-wrap justify-between  mx-auto max-w-screen-xl p-4 ">
          <Link to="/" className="logo pt-10">
            <img
              src={popcorn}
              alt="Sorry! Something went wrong!"
              width="115"
              height="115"
            />
          </Link>
          <Link to="/" className="pt-10 ">
            <img className="img" src={films} alt="img" width="115" height="115" />
          </Link>
          <Link to="actors " className="pt-10">
            <img className="img" src={actors} alt="img" width="115" height="115" />
          </Link>
        </div>
      </div>
    </div>
  );
}
