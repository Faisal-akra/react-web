import profile from "../assets/about/profile.png";

function About() {
  return (
    <>
      <div id="about" className=" p-3">
        <div className="flex justify-center flex-col content-center text-center  p-3 mt-20">
          <h1  className="font-extrabold font-sans">Hi, Im Faisal-Akram</h1>
          <h2 className="font-semibold font-mono">Front-End-Developer</h2>
        </div>

        <div className=" hidden sm:flex justify-evenly  p-3">

          <div className="  flex flex-col text-center justify-center  ">
            <h1>
              Hey Im a junior front-end developer. <br /> I have two years of experience in relative field. <br /> Ill make responsive websites using  tailwind css. <br />
              ill learn web-development full course in Smit-Aziz-Jan Trust Peshawar 
            </h1>
            
            <div className="flex justify-center gap-5 mt-8">
            <button className="border border-black rounded-md p-1"><a href="#projects">My-Projects</a></button>
            <button className="border border-black rounded-md p-1"><a href="#skill">My-Skills</a></button>
            
            </div>

          </div>

          <div className="  ">
            <img src={profile}  className="h-96 w-96 rounded-full" />
          </div>


        </div>









{/* This is for mobile */}

        <div className="sm:hidden flex justify-evenly   p-3">

<div className="  flex flex-col text-center justify-center  ">
  <h1>
    Hey Im a junior front-end developer. <br /> I have two years of experience in relative field. <br /> Ill make responsive websites using  tailwind css. <br />
    ill learn web-development full course in Smit-Aziz-Jan Trust Peshawar 
  </h1>
  
  <div className="flex justify-center gap-5 mt-8">
  <button className="border border-black rounded-md p-1">My-Projects</button>
  <button className="border border-black rounded-md p-1">My-Skills</button>
  </div>

</div>

<div className="  ">
  <img src={profile}  className="h-36 w-36 rounded-full" />
</div>


</div>
      </div>
    </>
  );
}

export default About;
