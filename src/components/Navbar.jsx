function Navbar() {
  return (
    <div className="">
    <div className=" p-5 flex justify-between bg-blue-200  w-full   ">

      <div className="">
        <h1>Faisal-Akram</h1>
      </div>

      <div className="hidden sm:flex gap-5">
        <a href="about">About</a>
        <a href="#skill">Skills</a>
        <a href="#about">Projects</a>
        <a href="contact">Contact</a>

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
