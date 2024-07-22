import React, { useEffect, useState } from "react";
import axios from "axios";
// import { AiOutlineHeart } from "react-icons/ai";
import { FaBookmark } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addlike, removelike } from "../redux/Likeslice";
import { useSelector } from "react-redux";
function Headline(props) {
  const state = useSelector((state) => state);
  console.log(state.likes);
  const dispatch = useDispatch();
  // const [like, setLike] = useState(false);
  let next = ">";
  let previ = "<";
  // const prvbtn = useRef(null);
  //   let size = 10;
  //   const [total, settotal] = useState(0);
  const [pageNo, setPageNo] = useState(1);
  const [headlines, setheadlines] = useState([]);
  let url = `https://newsapi.org/v2/everything?q=${props.topic}&sortBy=popularity&page=${pageNo}&apiKey=f84d00b0a7e64d79bee1ac9c502be059`;
  useEffect(() => {
    axios.get(url).then((response) => {
      setheadlines(response.data.articles);
      //   settotal(response.totalResults);
    });
  }, [pageNo, url]);
  function nextpage() {
    setPageNo(pageNo + 1);
    console.log(pageNo);
  }
  function previouspage() {
    setPageNo(pageNo - 1);
  }
  const likecheck = (arr, titletockeck) => {
    const exists = arr.some((obj) => obj.title === titletockeck);
    return exists;
  };
  return (
    <div className=" mx-10 ">
      {headlines.map((heads) => {
        return (
          <div key={headlines.indexOf(heads)} className="flex justify-center">
            {heads.author !== "[Removed]" &&
            heads.title !== "[Removed]" &&
            heads.description !== "[Removed]" &&
            heads.urlToImage !== null &&
            heads.title !== "[Removed]" &&
            heads.title !== null &&
            heads.description !== null ? (
              <div
                className="container flex justify-between"
                style={{ width: "80%" }}
              >
                <div style={{ width: "78%" }}>
                  <div className="mt-5 text-lg  ">{heads.title}</div>
                  <div className="text-sm">{heads.description}</div>
                  <div className="text-sm my-2">-{heads.author}</div>
                  <button className="bg-red-800 text-white p-2 rounded-md my-2 hover:bg-red-400 hover:text-black ">
                    <a href={heads.url} target="_blank" rel="noreferrer">
                      Read More
                    </a>
                  </button>
                </div>
                <div className="flex items-center justify-center">
                  <FaBookmark
                    className="w-5 h-5 hover:text-red-500"
                    onClick={(e) => {
                      if (!likecheck(state.likes, heads.title)) {
                        console.log("entered");
                        e.target.style.color = "red";
                        dispatch(
                          addlike({
                            id: headlines.indexOf(heads),
                            title: heads.title,
                            description: heads.description,
                            author: heads.author,
                            url: heads.urlToImage,
                            btnurl: heads.url,
                          })
                        );
                      } else {
                        console.log("left");
                        e.target.style.color = "black";
                        dispatch(
                          removelike({
                            id: headlines.indexOf(heads),
                            title: heads.title,
                            description: heads.description,
                            author: heads.author,
                            url: heads.urlToImage,
                            btnurl: heads.url,
                          })
                        );
                      }
                    }}
                  />
                </div>
                <div className="w-40 h-40">
                  <img
                    src={heads.urlToImage}
                    alt=""
                    className="w-40 h-36 mt-1 align-middle"
                  ></img>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        );
      })}
      <div className="flex justify-center space-x-4 my-5 mx-5">
        <button
          className="bg-red-800 text-white p-2 rounded-md my-2 hover:bg-red-400 hover:text-black"
          onClick={previouspage}
          disabled={pageNo <= 1}
        >
          {previ}
        </button>
        <text className="bg-gray-300 my-2 py-2 px-4">{pageNo}</text>
        <button
          className="bg-red-800 text-white p-2 rounded-md my-2 hover:bg-red-400 hover:text-black"
          onClick={nextpage}
        >
          {next}
        </button>
      </div>
    </div>
  );
}

export default Headline;
