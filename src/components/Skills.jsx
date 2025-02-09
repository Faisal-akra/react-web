import html from '../assets/skills/html.png';
import css from '../assets/skills/tailwind.png';
import java from '../assets/skills/java.png';
import react from '../assets/skills/react.png'
import github from '../assets/skills/github.png'
import git from '../assets/skills/git.png'

function Skill() {
  return (
    <div className="p-5">
      <h1 id="skill" className=" text-center font-extrabold p-5">Skills</h1>

      <div className="hidden sm:flex justify-evenly text-center group ">


        <div className=" w-56 h-50 text-center justify-center content-center  border border-black p-5 hover:bg-blue-800 hover:text-white">
          <img src={html} alt="" />
          <p>HTML</p>
        </div>

           
        <div className="bg-blue-400 w-56 h-50 text-center justify-center content-center border border-black   hover:bg-blue-800 hover:text-white">
        <img src={css} alt="" />
        <p>Tailwind css </p>
          
        </div>


        <div className="bg-blue-400 w-56 h-50 text-center justify-center content-center border border-black   hover:bg-blue-800 hover:text-white">
        <img src={java} alt="" />
        <p>Java Script</p>

        </div>


      </div>



      <div className="hidden sm:flex justify-evenly text-center group mt-10  ">


        <div className="bg-blue-400 w-56 h-50 text-center justify-center content-center  border border-black p-5 hover:bg-blue-800 hover:text-white">
        <img src={react} alt="" />
        <p>React</p>

        </div>

           
        <div className="bg-blue-400 w-56 h-50 text-center justify-center content-center border border-black   hover:bg-blue-800 hover:text-white">
        <img src={github} alt="" />
        <p>Github</p>

        </div>


        <div className="bg-blue-400 w-56 h-50 text-center justify-center content-center border border-black   hover:bg-blue-800 hover:text-white">
        <img src={git} alt="" />
        <p>Git</p>

        </div>


      </div>
















      {/* This is for mobile */}

      <div className="sm:hidden flex justify-evenly text-center group gap-8 ">


<div className=" w-56 h-50 text-center justify-center content-center  border border-black p-5 hover:bg-blue-800 hover:text-white">
  <img src={html} alt="" />
  <p>HTML</p>
</div>

   
<div className="bg-blue-400 w-56 h-50 text-center justify-center content-center border border-black   hover:bg-blue-800 hover:text-white">
<img src={css} alt="" />
<p>Tailwind css </p>
  
</div>


<div className="bg-blue-400 w-56 h-50 text-center justify-center content-center border border-black   hover:bg-blue-800 hover:text-white">
<img src={java} alt="" />
<p>Java Script</p>

</div>


</div>



<div className="sm:hidden flex justify-evenly text-center group mt-5 gap-8 ">


<div className="bg-blue-400 w-56 h-50 text-center justify-center content-center  border border-black p-5 hover:bg-blue-800 hover:text-white">
<img src={react} alt="" />
<p>React</p>

</div>

   
<div className="bg-blue-400 w-56 h-50 text-center justify-center content-center border border-black   hover:bg-blue-800 hover:text-white">
<img src={github} alt="" />
<p>Github</p>

</div>


<div className="bg-blue-400 w-56 h-50 text-center justify-center content-center border border-black   hover:bg-blue-800 hover:text-white">
<img src={git} alt="" />
<p>Git</p>

</div>


      
    </div>
    </div>


    
  );
}

export default Skill;
