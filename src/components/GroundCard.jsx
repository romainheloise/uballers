import { useContext, useEffect, useState } from "react";
import { GroundContext } from "../App";
import "./GroundCard.css";
import { FaStar } from "react-icons/fa";
import AddToFavPop from "./AddToFavPop";

const GroundCard = ({ match }) => {
  const [gList, setGlist] = useContext(GroundContext);
  const [ground, setGround] = useState({});
  const [favIsDisplayed, setFavisDisplayed] = useState(false);

  useEffect(() => {
    const selectedGround = gList.filter((g) => g.groundId === match.params.id);
    setGround(...selectedGround);
  }, [match.params.id, gList]);

  const addToFav = () => {
    let addFavList = [...gList].map((item) => {
      if (item.groundId === match.params.id) {
        item.fav = !item.fav;
        setFavisDisplayed(item.fav);
      }

      return item;
    });
    setGlist(addFavList);
  };

  useEffect(() => {
    if (favIsDisplayed) {
      const dePopMessage = setTimeout(() => {
        setFavisDisplayed(false);
      }, 2000);

      return () => {
        clearTimeout(dePopMessage);
      };
    }
  }, [gList,favIsDisplayed]);

  return (
    <div className="groundcard-all">
      {ground && (
        <div className="groundcard-info">
          <div className="groundcard-top">
            <h2>{ground.groundName}</h2>
            <button onClick={addToFav} className={ground.fav ? "star" : "text"}>
              {ground.fav ? <FaStar size={16} /> : "Ajouter aux favoris"}
            </button>
          </div>
          <div className="groundcard-bottom">
            <h2>Adresse:</h2>
            <p>{ground.address}</p>
            <h2>Limit:</h2>
            <p>{ground.limit}</p>
            <h2>Nombre de paniers:</h2>
            <p>{ground.basketNumber}</p>
            <h2>Comment s'y rendre:</h2>
            <p>{ground.transport}</p>
          </div>
        </div>
      )}
      {favIsDisplayed && <AddToFavPop name={ground.groundName} />}
    </div>
  );
};

export default GroundCard;
