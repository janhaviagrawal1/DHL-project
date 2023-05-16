import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { action } from "./action";
import { useNavigate } from "react-router-dom";

function Product() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://random-data-api.com/api/coffee/random_coffee")
      .then((response) => response.json())
      .then((list) => {
        dispatch(action(list));
      });
  }, []);

  return <button onClick={() => navigate("/details")}>Click me!</button>;
}

export default Product;
