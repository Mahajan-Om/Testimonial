import React, { useState } from "react";
import Card from "./Card";
import '../App.css';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";


function Testimonial(props){

  let reviews=props.reviews;
  
  const [index,setindex] =useState(0);

  function leftshiftHandler(){
    if(index-1<0){
      setindex(reviews.length-1);
    }
    else{
      setindex(index-1);
    }
  }

  function rightshiftHandler(){
    if(index+1>=reviews.length){
      setindex(0);
    }
    else{
      setindex(index+1);
    }
  }

  function surpriseHandler(){
    let randomindex = Math.floor(Math.random() * reviews.length) ; // math.random 0 se 1 ke bich me random value  dega ab isko n se mult kiya to 0 se n ke bich ki balue mil gyi ab ye point me bhi ho sakti hai isliye floor functon ka use kiya 
    setindex(randomindex);
  }

  return (

    <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-2xl">

        <Card review={reviews[index]}></Card>

        <div className="flex mt-5 text-3xl gap-3 text-violet-400 font-bold mx-auto text-center"> 
                <button 
                   onClick={leftshiftHandler} className="cursor-pointer hover:text-violet-500 ">
                    <FiChevronLeft/>
                </button>

                <button 
                   onClick={rightshiftHandler} className="cursor-pointer hover:text-violet-500 ">
                    <FiChevronRight/>
                </button>
            </div>

            <div>

                <button onClick={surpriseHandler} className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md text-violet-500 text-lg mt-4">
                    Surprise Me...
                </button>
            </div>

    </div>
  );
}

export default Testimonial;