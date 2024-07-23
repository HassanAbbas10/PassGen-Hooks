import React, { useCallback,useRef } from "react";
const Home = () => {
  const [password, setPassword] = React.useState("");
  const [length, setLength] = React.useState(6);
  const [numAllowed, setNumAllowed] = React.useState(false);
  const [charAllowed, setCharAllowed] = React.useState(false);
  const PasswrdRef = useRef(null);
  let maxvalue = 20;
const PassCopyToClip = useCallback (()=>{

  window.navigator.clipboard.writeText(password);
  PasswrdRef.current?.select();
  PasswrdRef.current?.setSelectionRange(0,maxvalue)

},[password])





  const PassWordGenerator = useCallback(() => {


    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "~!@#$%^&*_+-={}[]|";

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
    
  }, [length, numAllowed, charAllowed, setPassword]); 

React.useEffect(()=>{
  PassWordGenerator()
},[PassWordGenerator])

  
    

  return (
    <div className="bg-violet-300 h-screen w-full">
      <div className="flex items-center justify-center h-screen w-full">
        <div className="hover:shadow-2xl hover:shadow-orange-400 transition duration-500 bg-orange-200 h-[17rem] w-[40rem] shadow-lg shadow-blue-700 border-2 rounded-2xl border-slate-400 ">
          <section className="flex pt-4 font-mono text-xl italic text-rose-500 justify-center">
            <p>Password Generator Using Hooks</p>
          </section>
          <div className="flex justify-center items-center pt-6 gap-x-4">
            <input className="p-2 px-4 w-[25rem] border-2 border-indigo-600 rounded-lg"
            value={password}
            ref={PasswrdRef}
            />
            <button 
            onClick={PassCopyToClip}
            className="p-2 px-6 hover:bg-orange-400 hover:text-white transition duration delay-300 bg-violet-300 border-2 italic uppercase font-mono text-red-600 border-slate-400 rounded-lg">
              Copy
            </button>
          </div>

          <div className="flex justify-center pt-5 ">
            <div className="gap-x-3">
              <input
                type="range"
                className="cursor-pointer bg-blue outline-none"
                value={length}
                min={6}
                max={maxvalue}
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label htmlFor="inprange" className="text-lg italic text-orange-400">
                Length:{length}
              </label>
            </div>

            <div className="flex items-center gap-x-3 mx-2">
                  <input
                  type="checkbox"
                  defaultChecked={numAllowed}
                  id="numallowed"
                  onChange={()=>{
                    setNumAllowed((prev)=> !prev)
                  }}
                  />
                  <label htmlFor="numallowed"
                  className="text-lg italic text-orange-400"
                  >Number</label>
            </div>
            <div className="flex items-center gap-x-3 mx-2">
                  <input
                  type="checkbox"
                  defaultChecked={charAllowed}
                  id="charallowed"
                  onChange={()=>{
                    setCharAllowed((prev)=> !prev)
                  }}
                  />
                  <label htmlFor="charallowed"
                  className="text-lg italic text-orange-400"
                  >Character</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
