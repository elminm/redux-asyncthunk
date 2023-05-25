import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavoritesAction, removeFavoriteAction } from "../slices/favoriteSlice";
export default function Products() {
  const [data, setData] = useState(null);
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state.favoriteReducer);
  useEffect(() => {
    axios.get("https://northwind.vercel.app/api/products").then(({ data }) => setData(data));
  }, []);
  const handleClick = (item) => {
    favorites?.find((q) => q.id == item.id) ? dispatch(removeFavoriteAction(item)) : dispatch(addFavoritesAction(item))

  }
  console.log(removeFavoriteAction());
  return (
    <> <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Unit Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.unitPrice}</td>
              <td>
                <button onClick={() => handleClick(item)}>
                  {favorites?.find((q) => q.id == item.id)
                    ? "remove"
                    : "Add Favorites"}
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table></>
  );
}

