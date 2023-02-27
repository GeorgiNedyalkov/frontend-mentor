import Comments from "./components/Comments";
import { commentsData } from "./data";
import { useState } from "react";
import JuliusAvatar from "./assets/images/avatars/image-juliusomo.webp";

function App() {
  const [comments, setComments] = useState(commentsData);

  return (
    <div className="App">
      <div className="container">
        <Comments comments={comments} />
        <AddComment />
      </div>
    </div>
  );
}

const AddComment = () => {
  const [comment, setComment] = useState("");
  return (
    <>
      <form className="add_comment">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add comment..."
        />
        <div className="add_comment__footer">
          <div>
            <img className="add_comment__image" src={JuliusAvatar} alt="" />
          </div>
          <button className="add_comment__btn" type="submit">
            SEND
          </button>
        </div>
      </form>
    </>
  );
};

let nextId = 5;

export default App;
