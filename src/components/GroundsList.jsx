import { useContext } from "react";
import { Link } from "react-router-dom";
import { GroundContext } from "../App";
import "./GroundList.css";
import { FaStar } from "react-icons/fa";

const GroundsList = () => {
  const [gList] = useContext(GroundContext);

  return (
    <div className="groundlist-all">
      <h2>Liste des terrains</h2>
      {gList.map((ground) => {
        return (
          <Link to={"/ground/" + ground.groundId} key={ground.groundId}>
            <div className="groundlist-solo">
              <h3>{ground.groundName}</h3>
              {ground.fav && <FaStar />}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default GroundsList;
