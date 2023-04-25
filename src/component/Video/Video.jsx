import React, { useContext } from "react";
import { Authcontext } from "../Authprovider/Authprovider";
import { Link } from "react-router-dom";

const Video = () => { 
    const {user}=useContext(Authcontext)
  return (
    <div>
     <div className="rounded my-8 p-6 mx-20 flex bg-yellow-500">
     <video className="me-4 rounded"  width="40%" height="150px" controls>
        
        <source
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          type="video/mp4"
        />
      </video> 
      <div>
      <h2 className="text-xl text-black"><span className="font-bold">Title : </span>3D Animation Video for Bongo Social Media Site</h2>

      <p className="text-base my-6 text-black"><span className="font-bold">Description : </span> The process of 3D animation typically involves several stages, including modeling, texturing, rigging, animation, lighting, and rendering. In the modeling stage, artists use specialized software to create digital 3D models of objects, characters, and environments. The next stage involves texturing, where artists add surface detail and texture to the 3D models to make them appear more realistic.</p> 
      {
        user ? <>
        <div className="rating rating-lg rating-half">
  <input type="radio" name="rating-10" className="rating-hidden" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-1" checked />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-2" />
</div>
        </>:<Link to='/login'></Link>
      }
      
      </div>
     </div>
     <div className="rounded my-8 p-6 mx-20 flex bg-yellow-500">
     <video className="me-4 rounded"  width="40%" height="150px" controls>
        
        <source
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          type="video/mp4"
        />
      </video> 
      <div>
      <h2 className="text-xl text-black"><span className="font-bold">Title : </span>3D Animation Video for Bongo Social Media Site</h2>

      <p className="text-base my-6 text-black"><span className="font-bold">Description : </span> The process of 3D animation typically involves several stages, including modeling, texturing, rigging, animation, lighting, and rendering. In the modeling stage, artists use specialized software to create digital 3D models of objects, characters, and environments. The next stage involves texturing, where artists add surface detail and texture to the 3D models to make them appear more realistic.</p> 
      {
        user ? <>
        <div className="rating rating-lg rating-half">
  <input type="radio" name="rating-10" className="rating-hidden" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-1" checked />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-2" />
</div>
        </>:<Link to='/login'></Link>
      }
      
      </div>
     </div>
     <div className="rounded my-8 p-6 mx-20 flex bg-yellow-500">
     <video className="me-4 rounded"  width="40%" height="150px" controls>
        
        <source
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          type="video/mp4"
        />
      </video> 
      <div>
      <h2 className="text-xl text-black"><span className="font-bold">Title : </span>3D Animation Video for Bongo Social Media Site</h2>

      <p className="text-base my-6 text-black"><span className="font-bold">Description : </span> The process of 3D animation typically involves several stages, including modeling, texturing, rigging, animation, lighting, and rendering. In the modeling stage, artists use specialized software to create digital 3D models of objects, characters, and environments. The next stage involves texturing, where artists add surface detail and texture to the 3D models to make them appear more realistic.</p> 
      {
        user ? <>
        <div className="rating rating-lg rating-half">
  <input type="radio" name="rating-10" className="rating-hidden" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-1" checked />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-2" />
</div>
        </>:<Link to='/login'></Link>
      }
      
      </div>
     </div>
     <div className="rounded my-8 p-6 mx-20 flex bg-yellow-500">
     <video className="me-4 rounded"  width="40%" height="150px" controls>
        
        <source
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          type="video/mp4"
        />
      </video> 
      <div>
      <h2 className="text-xl text-black"><span className="font-bold">Title : </span>3D Animation Video for Bongo Social Media Site</h2>

      <p className="text-base my-6 text-black"><span className="font-bold">Description : </span> The process of 3D animation typically involves several stages, including modeling, texturing, rigging, animation, lighting, and rendering. In the modeling stage, artists use specialized software to create digital 3D models of objects, characters, and environments. The next stage involves texturing, where artists add surface detail and texture to the 3D models to make them appear more realistic.</p> 
      {
        user ? <>
        <div className="rating rating-lg rating-half">
  <input type="radio" name="rating-10" className="rating-hidden" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-1" checked />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-2" />
</div>
        </>:<Link to='/login'></Link>
      }
      
      </div>
     </div>
     <div className="rounded my-8 p-6 mx-20 flex bg-yellow-500">
     <video className="me-4 rounded"  width="40%" height="150px" controls>
        
        <source
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          type="video/mp4"
        />
      </video> 
      <div>
      <h2 className="text-xl text-black"><span className="font-bold">Title : </span>3D Animation Video for Bongo Social Media Site</h2>

      <p className="text-base my-6 text-black"><span className="font-bold">Description : </span> The process of 3D animation typically involves several stages, including modeling, texturing, rigging, animation, lighting, and rendering. In the modeling stage, artists use specialized software to create digital 3D models of objects, characters, and environments. The next stage involves texturing, where artists add surface detail and texture to the 3D models to make them appear more realistic.</p> 
      {
        user ? <>
        <div className="rating rating-lg rating-half">
  <input type="radio" name="rating-10" className="rating-hidden" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-1" checked />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-2" />
</div>
        </>:<Link to='/login'></Link>
      }
      
      </div>
     </div>
     <div className="rounded my-8 p-6 mx-20 flex bg-yellow-500">
     <video className="me-4 rounded"  width="40%" height="150px" controls>
        
        <source
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          type="video/mp4"
        />
      </video> 
      <div>
      <h2 className="text-xl text-black"><span className="font-bold">Title : </span>3D Animation Video for Bongo Social Media Site</h2>

      <p className="text-base my-6 text-black"><span className="font-bold">Description : </span> The process of 3D animation typically involves several stages, including modeling, texturing, rigging, animation, lighting, and rendering. In the modeling stage, artists use specialized software to create digital 3D models of objects, characters, and environments. The next stage involves texturing, where artists add surface detail and texture to the 3D models to make them appear more realistic.</p> 
      {
        user ? <>
        <div className="rating rating-lg rating-half">
  <input type="radio" name="rating-10" className="rating-hidden" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-1" checked />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-2" />
</div>
        </>:<Link to='/login'></Link>
      }
      
      </div>
     </div>
     <div className="rounded my-8 p-6 mx-20 flex bg-yellow-500">
     <video className="me-4 rounded"  width="40%" height="150px" controls>
        
        <source
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          type="video/mp4"
        />
      </video> 
      <div>
      <h2 className="text-xl text-black"><span className="font-bold">Title : </span>3D Animation Video for Bongo Social Media Site</h2>

      <p className="text-base my-6 text-black"><span className="font-bold">Description : </span> The process of 3D animation typically involves several stages, including modeling, texturing, rigging, animation, lighting, and rendering. In the modeling stage, artists use specialized software to create digital 3D models of objects, characters, and environments. The next stage involves texturing, where artists add surface detail and texture to the 3D models to make them appear more realistic.</p> 
      {
        user ? <>
        <div className="rating rating-lg rating-half">
  <input type="radio" name="rating-10" className="rating-hidden" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-1" checked />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-2" />
</div>
        </>:<Link to='/login'></Link>
      }
      
      </div>
     </div>
     <div className="rounded my-8 p-6 mx-20 flex bg-yellow-500">
     <video className="me-4 rounded"  width="40%" height="150px" controls>
        
        <source
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          type="video/mp4"
        />
      </video> 
      <div>
      <h2 className="text-xl text-black"><span className="font-bold">Title : </span>3D Animation Video for Bongo Social Media Site</h2>

      <p className="text-base my-6 text-black"><span className="font-bold">Description : </span> The process of 3D animation typically involves several stages, including modeling, texturing, rigging, animation, lighting, and rendering. In the modeling stage, artists use specialized software to create digital 3D models of objects, characters, and environments. The next stage involves texturing, where artists add surface detail and texture to the 3D models to make them appear more realistic.</p> 
      {
        user ? <>
        <div className="rating rating-lg rating-half">
  <input type="radio" name="rating-10" className="rating-hidden" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-1" checked />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-2" />
</div>
        </>:<Link to='/login'></Link>
      }
      
      </div>
     </div>
     <div className="rounded my-8 p-6 mx-20 flex bg-yellow-500">
     <video className="me-4 rounded"  width="40%" height="150px" controls>
        
        <source
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          type="video/mp4"
        />
      </video> 
      <div>
      <h2 className="text-xl text-black"><span className="font-bold">Title : </span>3D Animation Video for Bongo Social Media Site</h2>

      <p className="text-base my-6 text-black"><span className="font-bold">Description : </span> The process of 3D animation typically involves several stages, including modeling, texturing, rigging, animation, lighting, and rendering. In the modeling stage, artists use specialized software to create digital 3D models of objects, characters, and environments. The next stage involves texturing, where artists add surface detail and texture to the 3D models to make them appear more realistic.</p> 
      {
        user ? <>
        <div className="rating rating-lg rating-half">
  <input type="radio" name="rating-10" className="rating-hidden" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-1" checked />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-2" />
</div>
        </>:<Link to='/login'></Link>
      }
      
      </div>
     </div>
     <div className="rounded my-8 p-6 mx-20 flex bg-yellow-500">
     <video className="me-4 rounded"  width="40%" height="150px" controls>
        
        <source
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          type="video/mp4"
        />
      </video> 
      <div>
      <h2 className="text-xl text-black"><span className="font-bold">Title : </span>3D Animation Video for Bongo Social Media Site</h2>

      <p className="text-base my-6 text-black"><span className="font-bold">Description : </span> The process of 3D animation typically involves several stages, including modeling, texturing, rigging, animation, lighting, and rendering. In the modeling stage, artists use specialized software to create digital 3D models of objects, characters, and environments. The next stage involves texturing, where artists add surface detail and texture to the 3D models to make them appear more realistic.</p> 
      {
        user ? <>
        <div className="rating rating-lg rating-half">
  <input type="radio" name="rating-10" className="rating-hidden" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-1" checked />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-2" />
</div>
        </>:<Link to='/login'></Link>
      }
      
      </div>
     </div>
     <div className="rounded my-8 p-6 mx-20 flex bg-yellow-500">
     <video className="me-4 rounded"  width="40%" height="150px" controls>
        
        <source
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          type="video/mp4"
        />
      </video> 
      <div>
      <h2 className="text-xl text-black"><span className="font-bold">Title : </span>3D Animation Video for Bongo Social Media Site</h2>

      <p className="text-base my-6 text-black"><span className="font-bold">Description : </span> The process of 3D animation typically involves several stages, including modeling, texturing, rigging, animation, lighting, and rendering. In the modeling stage, artists use specialized software to create digital 3D models of objects, characters, and environments. The next stage involves texturing, where artists add surface detail and texture to the 3D models to make them appear more realistic.</p> 
      {
        user ? <>
        <div className="rating rating-lg rating-half">
  <input type="radio" name="rating-10" className="rating-hidden" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-1" checked />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-violet-700 mask mask-star-2 mask-half-2" />
</div>
        </>:<Link to='/login'></Link>
      }
      
      </div>
     </div>
    </div>
  );
};

export default Video;
