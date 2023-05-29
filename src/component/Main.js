import { useState } from "react";
import Card from "./Card";
import axios from "axios";

const Main = () => {
  const [search, setSearch] = useState("");
  const [bookData, setBookData] = useState([]);

  const searchBook = () => {
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          search +
          "&key=AIzaSyDCrxsHvWDua5qgdhz7MZR_SGsB3b_JxE4"
      )
      .then((res) => {
        setBookData(res.data.items);
        // console.log(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      searchBook();
    }
  };

  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>
            A room without books is like
            <br /> a body without a soul.
          </h1>
        </div>
        <div className="row2">
          <h2>Find Your Book</h2>
          <div className="search">
            <input
              type="text"
              placeholder="Enter Your Book Name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyUp={handleKeyPress}
            />
            <button onClick={searchBook}>
              <i className="fas fa-search"></i>
            </button>
          </div>
          {/* <img src="book-finder\src\asset\images\cover.png" alt=" " /> */}
        </div>
      </div>

      <div className="container">
        <Card book={bookData} />
      </div>
    </>
  );
};

export default Main;
