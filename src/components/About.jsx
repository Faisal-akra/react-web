import profile from "../assets/about/profile.png";

function About() {
  return (
    <>
      <div className=" p-3">
        <div className="flex justify-center flex-col content-center text-center  p-3 mt-20">
          <h1 id="about" className="font-extrabold font-sans">Hi, Im Faisal-Akram</h1>
          <h2 className="font-semibold font-mono">Front-End-Developer</h2>
        </div>

        <div className="  flex justify-between ">
          <div className="  flex flex-col text-center justify-center  ">
            <h1>
              Im a junior front-end developer i have two years experience in relative field ill make responsive websites using css and tailwind css
              ill learn web-development full course in Smit-Aziz-Jan Trust Peshawar 
            </h1>
            <div className="flex justify-center gap-5 mt-8">
            <button>My-Projects</button>
            <button>My-Projects</button>
            </div>

          </div>

          <div className="  ">
            <img src={profile}  className="h-96 w-96 rounded-full" />
          </div>


        </div>
      </div>
    </>
  );
}

export default About;
