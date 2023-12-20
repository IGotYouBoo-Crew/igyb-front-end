// import React, { useState } from 'react'

// const CommentForm = ({ 
//     btnLabel, 
//     formSubmitHandler, 
//     formCancelHandler = null,
//     initialText = "",
// }) => {
//     const [value, setValue] = useState(initialText);

//     const submitHandler = (e) => {
//         e.preventDefault();
//         formSubmitHandler(value);
//         setValue("");
//     }

//   return (
//     <form onSubmit={submitHandler}>
//         <div className='flex flex-col bg-white rounded-3xl items-end p-4 mt-4'>
            // <textarea 
            //     className='w-full focus:outline-none bg-transparent' 
            //     rows="2" 
            //     placeholder='Add a comment...'
            //     value={value}
            //     onChange={(e) => setValue(e.target.value)}
            // />
            // <div className='flex flex-col-reverse gap-y-2 items-center gap-x-2 pt-2 min-[420px]:flex-row'>
            //     {formCancelHandler && (
            //         <button onClick={formCancelHandler} 
            //             className='px-6 py-2.5 rounded-3xl border border-red-500 text-red-500'
            //         >
            //             Cancel
            //         </button>    
            //     )}
            //     <button type="submit" className='px-6 py-2.5 rounded-3xl bg-periwinkle border border-periwinkle text-white'>
            //         {btnLabel}
            //     </button>
            // </div>
//         </div>
//     </form>
//   )
// }

// export default CommentForm