import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFavoriteAction } from "../slices/favoriteSlice";

function Favorites() {
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state.favoriteReducer);
  return (
    <div>
      {favorites?.length > 0 ? (
        favorites?.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => dispatch(removeFavoriteAction(item.id))}>Remove</button>
          </li>
        ))
      ) : (
        <h1>Empty</h1>
      )}
    </div>
  );
}

export default Favorites;
