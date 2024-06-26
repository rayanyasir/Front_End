import Name from './component/name';
import './App.css';
import { useState } from 'react';

function App() {

const [count, setCount] = useState(0);
  return(
    <>
    <h1>{"React App"}</h1>
    <button
      onClick={()=> {
      setCount(count + 1);
      }}
      >
        {"Count++"}
    </button>
    <button
      onClick={()=> {
      setCount(count - 1);
      }}
      >
        {"Count--"}
    </button>
    <h1>{count}</h1>
    <div className="container bg-green-300 w-screen h-screen flex justify-center items-center">
        <div className="login-container h-2/4 bg-gray-400 w-1/3 rounded-md px-2">
          <div className="heading text-green-700 w-full h-1/4 flex justify-center items-center text-2xl font-semibold">
            Login
          </div>
          <div className="input-fields mt-3 outline-none flex flex-col pb-2">
            <input
              className="my-2 p-2 rounded"
              type="text"
              name="text"
              id="text"
              placeholder="Email"
            />
            <input
              className="my-2 p-2 rounded"
              type="password"
              placeholder="Password"
            />
          </div>
          <button className="w-full mt-5 outline-none h-2/8 bg-green-500 text-gray-300 py-2 font-semibold ">
            Login
          </button>
        </div>
      </div>
  </>
  );
  
}

export default App;
