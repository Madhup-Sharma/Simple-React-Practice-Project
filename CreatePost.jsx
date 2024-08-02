import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const userIDElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIDElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIDElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userId, postTitle, postBody, reactions, tags);
  };
  return (
    <form className="create-post" onSubmit={handleSubmit}>
      {/* User Id  */}

      <div className="mb-3">
        <label htmlFor="userID" className="form-label">
          User ID
        </label>
        <input
          type="text"
          ref={userIDElement}
          className="form-control"
          id="userID"
          placeholder=""
        />
      </div>

      {/* Post Title */}
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          ref={postTitleElement}
          placeholder="What's on your Mind? ..."
        />
      </div>

      {/* Post Content  */}
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          rows="4"
          type="text"
          className="form-control"
          id="body"
          ref={postBodyElement}
          placeholder="Wanna Say Something? ..."
        />
      </div>
      {/* Reactions  */}
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of Reactions
        </label>
        <input
          type="text"
          className="form-control"
          ref={reactionsElement}
          id="reactions"
          placeholder="How many people reacted on your post..."
        />
      </div>

      {/* Post Tags  */}
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Related Tags
        </label>
        <input
          type="text"
          className="form-control"
          ref={tagsElement}
          id="tags"
          placeholder="Enter the tags with spaces between them..."
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
