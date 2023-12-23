import React, { useState } from "react";

const UpdateEventForm = ({
    event,
    formCancelHandler = null,
    formSubmitHandler,
    loading = false,
}) => {
    const [host, setHost] = useState(event.host);
    const [image, setImage] = useState(event.image);
    const [title, setTitle] = useState(event.title);
    const [start, setStart] = useState(event.start);
    const [finish, setFinish] = useState(event.finish);
    const [ticketLink, setTicketLink] = useState(event.ticketLink);
    const [content, setContent] = useState(event.content);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let dataToBeUpdated = {
                "host": host,
                "image": image,
                "title": title,
                "start": start,
                "finish": finish,
                "ticketLink": ticketLink,
                "content": content,}
            let updatedEventData = {};
            for (const stateName in dataToBeUpdated) {
                if(dataToBeUpdated[stateName].length > 0){
                    updatedEventData[stateName] = dataToBeUpdated[stateName] 
                }
            }
            await formSubmitHandler(updatedEventData, event);

            // reload page so we can see the fresh stuff!
            window.location.reload();
        } catch (error) {
            console.log("Looks like we have a problem:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex justify-center">
            <div className="pt-2 px-6 bg-indigo text-white w-3/4  mt-5 mb-8 py-3 lg:px-10 rounded-3xl">
                <h1 className="mt-2 font-bold text-2xl text-center uppercase mb-4">
                    Update your event
                </h1>

                <div className="w-full lg:flex lg:justify-between lg:gap-x-6">
                    <div className="w-full ">
                        <label for="titleInput" className="w-full uppercase ">
                            Title
                        </label>
                        <input
                            id="titleInput"
                            name="titleInput"
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="formInputHalf "
                            rows="2"
                        />
                    </div>

                    <div className="w-full">
                        <label for="hostInput" className="w-full uppercase ">
                            Host
                        </label>
                        <input
                            id="hostInput"
                            name="hostInput"
                            type="text"
                            value={host}
                            onChange={(e) => setHost(e.target.value)}
                            className="formInputHalf  "
                            rows="2"
                        />
                    </div>
                </div>

                <div className="w-full lg:flex lg:justify-between lg:gap-x-6">
                    <div className="w-full">
                        <label for="startInput" className="w-full uppercase ">
                            Start Time
                        </label>
                        <input
                            id="startInput"
                            name="startInput"
                            type="text"
                            value={start}
                            onChange={(e) => setStart(e.target.value)}
                            className="formInputHalf  "
                            rows="2"
                        />
                    </div>

                    <div className="w-full">
                        <label for="finishInput" className="w-full uppercase ">
                            Finish Time
                        </label>
                        <input
                            id="finishInput"
                            name="finishInput"
                            type="text"
                            value={finish}
                            onChange={(e) => setFinish(e.target.value)}
                            className="formInputHalf "
                            rows="2"
                        />
                    </div>
                </div>

                <label for="imageInput" className="w-full uppercase ">
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

                <label for="ticketLinkInput" className="w-full uppercase text-left">
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

                <label for="contentInput" className="w-full uppercase ">
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
                            className="buttonCancel bg-white text-red-500"
                        >
                            Cancel
                        </button>
                    )}
                    <button
                        className="buttonUpdate border-white bg-indigo text-white"
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
