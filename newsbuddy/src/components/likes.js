import React from "react";
import { useSelector } from "react-redux";
// import { AiOutlineHeart } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";

import { useDispatch } from "react-redux";
import { removelike } from "../redux/Likeslice";
function Likes() {
  const liked = useSelector((state) => state.likes);
  const dispatch = useDispatch();
  console.log(liked.length);
  return (
    <div className=" mx-10 my-2 ">
      {liked.map((news) => {
        return (
          <div
            key={news.title}
            className="flex justify-center bg-stone-100 my-1 rounded-md hover:bg-stone-200"
          >
            <div
              className="container flex justify-between"
              style={{ width: "80%" }}
            >
              <div className="flex items-center justify-center">
                <AiFillDelete
                  className="h-5 hover:text-red-500"
                  onClick={(e) => {
                    console.log("left");
                    e.target.style.color = "black";
                    dispatch(
                      removelike({
                        id: liked.indexOf(news),
                        title: news.title,
                        description: news.description,
                        author: news.author,
                        url: news.urlToImage,
                        btnurl: news.url,
                      })
                    );
                  }}
                />
              </div>
              <div style={{ width: "95%" }}>
                <div className="mt-5 text-lg  ">{news.title}</div>
                <div className="text-sm">{news.description}</div>
                <div className="text-sm my-2">-{news.author}</div>
                <button className="bg-red-800 text-white p-2 rounded-md my-2 hover:bg-red-400 hover:text-black ">
                  <a href={news.btnurl} target="_blank" rel="noreferrer">
                    Read More
                  </a>
                </button>
              </div>
            </div>
            <div className="w-40 h-40">
              <img
                src={news.url}
                alt=""
                className="w-40 h-36 mt-1 align-middle"
              ></img>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Likes;
