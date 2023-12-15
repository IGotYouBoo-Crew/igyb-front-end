import React, { useState } from 'react'
import PostForm from './PostForm'

const PostFormContainer = () => {
  const [showPosttForm, setShowPostForm] = useState(false);

    return (
      <div className="flex flex-col">
        <h2 className='text-center md:text-right mt-10 md:mt-6 font-bold'>GOT SOMETHING TO SAY?</h2>
        <button 
          className='bg-honey text-white rounded-3xl px-6 py-2 mt-2' 
          onClick={() => setShowPostForm(true)}>
          CREATE A POST
        </button>
        <PostForm 
          isVisible={showPostForm}
          onClose={() => setShowPostForm(false)} 
        >
          <div></div>
        </PostForm>
      </div>
      

    )
}

export default PostFormContainer;