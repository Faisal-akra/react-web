import port from "../assets/projects/port.png";
import coffeeShop from '../assets/projects/coffe-shop.png'
import bookShop from '../assets/projects/book-shop.png'
import todo from '../assets/projects/todo.png'
import api from '../assets/projects/api.png'

const Projects = () => {
  return (

    <>
     <h1 id="projects" className="text-center mt-10 mb-5 font-extrabold  ">Projects</h1>
    

    <div className="flex flex-col gap-5 sm:gap-5  md:gap-0 lg:flex-row justify-evenly items-center">


      <div className="group border border-x-red-900 w-96 ">
        <div className=" p-2 w-96 border border-black relative flex justify-center items-center  group-hover:bg-red-500  ">
          <img
            src={api}
            alt="project-img"
            className="border border-black h-fit"
          />

          <div className=" absolute inset-0 flex justify-center items-center">
            <button className=" opacity-0 group-hover:opacity-100 group-hover:border group-hover:h-8 group-hover:w-20  group-hover:bg-red-400 group-hover:rounded-md group-hover:text-white  ">
              <a href="https://api-project-coral-one.vercel.app/">View SIte</a>
            </button>
          </div>
        </div>
      </div>




      <div className="group border border-black w-96 ">
        <div className=" p-2 w-96 border border-black relative flex justify-center items-center  group-hover:bg-red-500 ">
          <img
            src={coffeeShop}
            alt="project-img"
            className="border border-black h-fit"
          />

          <div className=" absolute inset-0 flex justify-center items-center">
            <button className=" opacity-0 group-hover:opacity-100 group-hover:border group-hover:h-8 group-hover:w-20  group-hover:bg-red-400 group-hover:rounded-md group-hover:text-white  ">
              <a href="https://coffee-shop-livid-sigma.vercel.app/">View SIte</a>
            </button>
          </div>
        </div>
      </div>




      <div className="group border border-black w-96 ">
        <div className=" p-2 w-96 border border-black relative flex justify-center items-center  group-hover:bg-red-500 ">
          <img
            src={bookShop}
            alt="project-img"
            className="border border-black h-fit"
          />

          <div className=" absolute inset-0 flex justify-center items-center">
            <button className=" opacity-0 group-hover:opacity-100 group-hover:border group-hover:h-8 group-hover:w-20  group-hover:bg-red-400 group-hover:rounded-md group-hover:text-white  ">
              <a href="https://books-website-react.vercel.app/">View SIte</a>
            </button>
          </div>
        </div>
      </div>
    </div>

















    <div className="flex flex-col gap-5  sm:gap-5 md:gap-0 lg:flex-row justify-evenly items-center mt-10">

<div className="group border border-black w-96 ">
  <div className=" p-2 w-96 border border-black relative flex justify-center items-center  group-hover:bg-red-500 ">
    <img
      src={todo}
      alt="project-img"
      className="border border-black h-fit"
    />

    <div className=" absolute inset-0 flex justify-center items-center">
      <button className=" opacity-0 group-hover:opacity-100 group-hover:border group-hover:h-8 group-hover:w-20  group-hover:bg-red-400 group-hover:rounded-md group-hover:text-white  ">
        <a href="https://faisal-akra.github.io/java_todo_list_task/?authuser=0">View SIte</a>
      </button>
    </div>
  </div>
</div>




<div className="group border border-black w-96 ">
  <div className=" p-2 w-96 border border-black relative flex justify-center items-center  group-hover:bg-red-500 ">
    <img
      src={port}
      alt="project-img"
      className="border border-black h-fit"
    />

    <div className=" absolute inset-0 flex justify-center items-center">
      <button className=" opacity-0 group-hover:opacity-100 group-hover:border group-hover:h-8 group-hover:w-20  group-hover:bg-red-400 group-hover:rounded-md group-hover:text-white  ">
        <a href="https://react-web-plum.vercel.app/">View SIte</a>
      </button>
    </div>
  </div>
</div>




<div className="group border border-black w-96 ">
  <div className=" p-2 w-96 border border-black relative flex justify-center items-center  group-hover:bg-red-500 ">
    <img
      src={port}
      alt="project-img"
      className="border border-black h-fit"
    />

    <div className=" absolute inset-0 flex justify-center items-center">
      <button className=" opacity-0 group-hover:opacity-100 group-hover:border group-hover:h-8 group-hover:w-20  group-hover:bg-red-400 group-hover:rounded-md group-hover:text-white  ">
        <a href="https://react-web-plum.vercel.app/">View SIte</a>
      </button>
    </div>
  </div>
</div>
</div>








{/* Mobile screens */}


{/* <h1 id="projects" className=" sm:hidden text-center mt-10 mb-5 font-extrabold  ">Projects</h1> */}
{/* 
<div className=" sm:hidden flex flex-col justify-evenly gap-5  ">


  <div className="group border border-black w-96 ">
    <div className=" p-2 w-96 border border-black relative flex justify-center items-center  group-hover:bg-red-500 ">
      <img
        src={port}
        alt="project-img"
        className="border border-black h-fit"
      />

      <div className=" absolute inset-0 flex justify-center items-center">
        <button className=" opacity-0 group-hover:opacity-100 group-hover:border group-hover:h-8 group-hover:w-20  group-hover:bg-red-400 group-hover:rounded-md group-hover:text-white  ">
          <a href="https://react-web-plum.vercel.app/">View SIte</a>
        </button>
      </div>
    </div>
  </div>




  <div className="group border border-black w-96 ">
    <div className=" p-2 w-96 border border-black relative flex justify-center items-center  group-hover:bg-red-500 ">
      <img
        src={port}
        alt="project-img"
        className="border border-black h-fit"
      />

      <div className=" absolute inset-0 flex justify-center items-center">
        <button className=" opacity-0 group-hover:opacity-100 group-hover:border group-hover:h-8 group-hover:w-20  group-hover:bg-red-400 group-hover:rounded-md group-hover:text-white  ">
          <a href="https://react-web-plum.vercel.app/">View SIte</a>
        </button>
      </div>
    </div>
  </div>




  <div className="group border border-black w-96 ">
    <div className=" p-2 w-96 border border-black relative flex justify-center items-center  group-hover:bg-red-500 ">
      <img
        src={port}
        alt="project-img"
        className="border border-black h-fit"
      />

      <div className=" absolute inset-0 flex justify-center items-center">
        <button className=" opacity-0 group-hover:opacity-100 group-hover:border group-hover:h-8 group-hover:w-20  group-hover:bg-red-400 group-hover:rounded-md group-hover:text-white  ">
          <a href="https://react-web-plum.vercel.app/">View SIte</a>
        </button>
      </div>
    </div>
  </div>
</div>

















<div className="sm:hidden mt-10 flex flex-col justify-center gap-5  ">


<div className="group border border-black w-96 ">
<div className=" p-2 w-96 border border-black relative flex justify-center items-center  group-hover:bg-red-500 ">
<img
  src={port}
  alt="project-img"
  className="border border-black h-fit"
/>

<div className=" absolute inset-0 flex justify-center items-center">
  <button className=" opacity-0 group-hover:opacity-100 group-hover:border group-hover:h-8 group-hover:w-20  group-hover:bg-red-400 group-hover:rounded-md group-hover:text-white  ">
    <a href="https://react-web-plum.vercel.app/">View SIte</a>
  </button>
</div>
</div>
</div>




<div className="group border border-black w-96 ">
<div className=" p-2 w-96 border border-black relative flex justify-center items-center  group-hover:bg-red-500 ">
<img
  src={port}
  alt="project-img"
  className="border border-black h-fit"
/>

<div className=" absolute inset-0 flex justify-center items-center">
  <button className=" opacity-0 group-hover:opacity-100 group-hover:border group-hover:h-8 group-hover:w-20  group-hover:bg-red-400 group-hover:rounded-md group-hover:text-white  ">
    <a href="https://react-web-plum.vercel.app/">View SIte</a>
  </button>
</div>
</div>
</div>




<div className="group border border-black w-96 ">
<div className=" p-2 w-96 border border-black relative flex justify-center items-center  group-hover:bg-red-500 ">
<img
  src={port}
  alt="project-img"
  className="border border-black h-fit"
/>

<div className=" absolute inset-0 flex justify-center items-center">
  <button className=" opacity-0 group-hover:opacity-100 group-hover:border group-hover:h-8 group-hover:w-20  group-hover:bg-red-400 group-hover:rounded-md group-hover:text-white  ">
    <a href="https://react-web-plum.vercel.app/">View SIte</a>
  </button>
</div>
</div>
</div>
</div>

 */}






    </>
  );
};




export default Projects;

