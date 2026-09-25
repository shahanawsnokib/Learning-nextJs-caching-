// 'clint side'

import React from 'react';

// Get : 
// post:
// UPDATE: PUT OR PATCH
//DELETE 
const getPost=async()=>{
   try{
     const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    return res.json()
   }catch(error){
    throw new Error("failed to fetch Posts")
   }
}

 
const postpage = async () => {
     const posts = await getPost();
     console.log(posts);
     
    // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    // const posts = await res.json();

    return (
        <div >
            <h2>Hellow Post: {posts.length}</h2>

           <div className='grid grid-cols-4'>
             {
                posts.map(post => post.id)
            }
           </div>
        </div>
    );
};

export default postpage;