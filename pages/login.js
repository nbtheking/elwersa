import React from "react";

const login = () => {
  return(
  <div className="flex flex-col justify-center  h-full w-full items-center ">
      <div className=" flex shadow-2xl bg-blue-500 items-center justify-center rounded-xl w-[500px] h-[400px] mt-[200px] ">
      <form action="" className="flex flex-col gap-6 text-white font-bold w-[300px]">
          <div>
              <label htmlFor="email"> Email:</label>
          <input className='rounded w-[300px] outline-0 text-black px-4' name="email" type="email" id=""/>
          </div>
          <div>
              <label htmlFor="password">Password:</label>
              <input className='rounded outline-0 text-black px-4 w-[300px]' name="password" type="password" id=""/>
          </div>
          <button type="submit">Login</button>
          
      </form>
      </div>
      </div>
)};

export default login;