
const Home = () => {
  return (
    <div className="bg-violet-300 h-screen w-full">

      <div className="flex items-center justify-center h-screen w-full">

        <div className="hover:shadow-2xl hover:shadow-orange-400 transition duration-500 bg-orange-200 h-[17rem] w-[40rem] shadow-lg shadow-blue-700 border-2 rounded-2xl border-slate-400 ">
          <section className="flex pt-4 font-mono text-xl italic text-rose-500 justify-center">
            <p>Password Generator Using Hooks</p>
          </section>
          <div className="flex justify-center items-center pt-6 gap-x-4">
          <input className="p-2 px-4 w-[25rem] border-2 border-rose-600 rounded-lg" />
          <button className="p-2 px-6 hover:bg-orange-400 hover:text-white transition duration delay-300 bg-violet-300 border-2 italic uppercase font-mono text-red-600 border-slate-400 rounded-lg">Copy</button>
        </div>
        </div>

      </div>
   
    </div>
  );
};

export default Home;
