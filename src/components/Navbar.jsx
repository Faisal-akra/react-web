function Navbar() {
  return (
    <div className="">
    <div className="flex flex-col  sm:flex-row justify-between bg-blue-200  w-full p-5  ">

      <div className="">
        <h1 className="font-bold">Faisal-Akram</h1>
      </div>

      <div className="hidden sm:flex gap-5">
        <a href="#about" className="font-bold">About</a>
        <a href="#skill" className="font-bold">Skills</a>
        <a href="#projects" className="font-bold">Projects</a>
        <a href="#footer" className="font-bold">Contact</a>

      </div>



      <div className="sm:hidden">
        <div className="flex flex-col ">
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
