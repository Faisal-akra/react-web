function Navbar() {
  return (
    <div className=" ">
    <div className="flex flex-col  lg:flex-row justify-between bg-blue-200  w-full p-5  ">

      <div className="hidden lg:flex">
        <h1 className="font-bold">Faisal-Akram</h1>
      </div>

      <div className="hidden lg:flex gap-5">
        <a href="#about" className="font-bold">About</a>
        <a href="#skill" className="font-bold">Skills</a>
        <a href="#projects" className="font-bold">Projects</a>
        <a href="#footer" className="font-bold">Contact</a>

      </div>



      <div className="lg:hidden flex flex-col justify-center">
       
      <div className="flex ">
        <h1 className="font-bold text-center">Faisal-Akram</h1>
      </div>


        <div className="flex gap-4 ">
        <a href="about">About</a>
        <a href="#skill">Skills</a>
        <a href="#about">Projects</a>
        <a href="contact">Contact</a>
        </div>
   

      </div>
    </div>
    </div>



  );
}

export default Navbar;
