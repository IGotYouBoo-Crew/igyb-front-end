import React, { useState } from "react";


const UpdateEventForm = ({
    event,  
    hostInitialText = "", 
    imageInitialText = "", 
    titleInitialText = "", 
    startInitialText = "", 
    finishInitialText = "", 
    ticketLinkInitialText = "", 
    contentInitialText = "", 
    formCancelHandler = null, 
    formSubmitHandler, 
    loading = false}) => {

  const [host, setHost] = useState(hostInitialText);
  const [image, setImage] = useState(imageInitialText);
  const [title, setTitle] = useState(titleInitialText);
  const [start, setStart] = useState(startInitialText);
  const [finish, setFinish] = useState(finishInitialText);
  const [ticketLink, setTicketLink] = useState(ticketLinkInitialText);
  const [content, setContent] = useState(contentInitialText);

  const handleSubmit = async (e) => {
    e.preventDefault()

    try{
    formSubmitHandler(host, image, title, start, finish, ticketLink, content);

    // reload page so we can see the fresh stuff!
      window.location.reload();

    } catch (error) {
      console.log('Looks like we have a problem:', error);
    } 
  }

  return (
    <form onSubmit={handleSubmit} className="flex justify-center">
        <div className="pt-2 px-6 bg-indigo text-white w-3/4  mt-5 mb-8 py-3 lg:px-10 rounded-3xl">
            <h1 className="mt-2 font-bold text-2xl text-center uppercase mb-4">
                Update your event
            </h1>

            <div className="w-full lg:flex lg:justify-between lg:gap-x-6">
                <div className="w-full">
                    <label
                        for="titleInput"
                        className="w-full uppercase ">
                        Title
                    </label>
                    <input
                        id="titleInput"
                        name="titleInput"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="formInput "
                        rows="2"
                    />
                </div>

                <div className="w-full">
                    <label
                        for="hostInput"
                        className="w-full uppercase ">
                        Host
                    </label>
                    <input
                        id="hostInput"
                        name="hostInput"
                        type="text"
                        value={host}
                        onChange={(e) => setHost(e.target.value)}
                        className="formInput "
                        rows="2"
                    />
                </div>
            </div>

            <label
                for="imageInput"
                className="w-full uppercase ">
                Image URL
            </label>
            <input
                id="imageInput"
                name="imageInput"
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="formInput "
                rows="2"
            />

            <label
                for="startInput"
                className="w-full uppercase ">
                Start Time
            </label>
            <input
                id="startInput"
                name="startInput"
                type="text"
                value={start}
                onChange={(e) => setStart(e.target.value)}
                className="formInput "
                rows="2"
            />

            <label
                for="finishInput"
                className="w-full uppercase ">
                Finish Time
            </label>
            <input
                id="finishInput"
                name="finishInput"
                type="text"
                value={finish}
                onChange={(e) => setFinish(e.target.value)}
                className="formInput "
                rows="2"
            />

            <label
                for="ticketLinkInput"
                className="w-full uppercase ">
                Link for Tickets / RSVP
            </label>
            <input
                id="ticketLinkInput"
                name="ticketLinkInput"
                type="text"
                value={ticketLink}
                onChange={(e) => setTicketLink(e.target.value)}
                className="formInput "
                rows="2"
            />

            <label
                for="contentInput"
                className="w-full uppercase ">
                Event details
            </label>
            <textarea
                id="contentInput"
                name="contentInput"
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="formContentInput "
                rows="5"
            />
            <div className="flex flex-col-reverse gap-y-2 items-center gap-x-4 pt-2 min-[420px]:flex-row min-[420px]:justify-center">
                {formCancelHandler && (
                    <button
                    onClick={formCancelHandler}
                    className=" bg-white text-red-500"
                    >
                    Cancel
                    </button>
                )}
                <button
                    className=" border-white text-white"
                    type="submit"
                    disabled={loading}
                >
                    Update
                </button>
            </div>
        </div>
    </form>
  );
};

export default UpdateEventForm;