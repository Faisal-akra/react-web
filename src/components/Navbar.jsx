function Navbar() {
  return (
    <div className="">
    <div className=" p-5 flex justify-between  bg-blue-300 w-full    ">

      <div className="">
        <h1>Faisal-Akram</h1>
      </div>

      <div className="flex gap-5">
        <a href="about">About</a>
        <a href="#skill">Skills</a>
        <a href="#about">Projects</a>
        <a href="contact">Contact</a>

      </div>
    </div>
    </div>
  );
}

export default Navbar;
