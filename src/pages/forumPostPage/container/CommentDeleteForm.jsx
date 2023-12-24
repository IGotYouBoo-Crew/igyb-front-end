import React from "react";

const CommentDeleteForm = ({
  commentData,
  initialText = "",
  formCancelHandler = null,
  formSubmitHandler,
  loading = false,
}) => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      formSubmitHandler();

      // reload page so we can see that the comment
      // has been deleted
      window.location.reload();
    } catch (error) {
      console.log("Looks like we have a problem:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col bg-white rounded-3xl items-end px-5 py-2 mt-6 mb-4"
    >
      <h1 className="w-full background-transparent text-red-500">
        Are you sure you want to delete this comment?
      </h1>
      <div className="flex flex-col-reverse gap-y-2 items-center gap-x-2 pt-2 min-[420px]:flex-row">
        {formCancelHandler && (
          <button
            onClick={formCancelHandler}
            className="px-6 py-2.5 rounded-3xl border border-red-500 text-red-500"
          >
            Cancel
          </button>
        )}
        <button
          className="px-6 py-2.5 rounded-3xl bg-red-500 border border-red-500 text-white"
          type="submit"
          disabled={loading}
        >
          Delete
        </button>
      </div>
    </form>
  );
};

export default CommentDeleteForm;
