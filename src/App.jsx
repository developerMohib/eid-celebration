import "./App.css";

function App() {
  return (
    <>
      <div className="cards bg-black p-10">
        <div className="content-eid w-[90%] mx-auto text-left bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text ">
          <h1 className="" >Eid Mubarak</h1>
          <br/>
          <p className="text-sm">
          “Eid Mubarak! May this Eid bring joy, peace, and prosperity to you all
          and your family.” <br />
          “Wishing you a blessed Eid filled with love, laughter, and delicious
          feasts!” <br />
          “On this auspicious occasion of Eid, may Allah’s blessings fill your
          life with happiness and open all the doors of success for you.” <br />
          তাকাব্বালাল্লাহু মিন্না ওয়া মিনকুম
          </p>
        </div> 
        <div className="flex justify-between items-center mt-10">
          <div> <img className="w-20  rounded-lg" src="https://avatars.githubusercontent.com/u/92154638?v=4" alt="" /> </div>
          <div> <h1 className="text-2xl font-bold">Mohib</h1> <p>Hello</p> </div>
        </div>
      </div>
    </>
  );
}

export default App;
