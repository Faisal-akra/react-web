function Navbar() {
  return (
    <div className="">


    <div className=" hidden lg:flex flex-col  lg:flex-row justify-between bg-blue-200  w-full p-5  ">

      <div className="hidden lg:flex">
        <h1 className="font-bold">Faisal-Akram</h1>
      </div>

      <div className="hidden lg:flex gap-5">
        <a href="#about" className="font-bold">About</a>
        <a href="#skill" className="font-bold">Skills</a>
        <a href="#projects" className="font-bold">Projects</a>
        <a href="#footer" className="font-bold">Contact</a>

      </div>
      </div>



      <div className="lg:hidden flex flex-col  bg-blue-500  ">
       
      <div className="flex items-center justify-center ">
        <h1 className="font-bold text-center">Faisal-Akram</h1>
      </div>


        <div className="flex justify-evenly ">
        <a href="#about">About</a>
        <a href="#skill">Skills</a>
        <a href="#about">Projects</a>
        <a href="#contact">Contact</a>
        </div>
   

      </div>
    </div>



  );
}

export default Navbar;
