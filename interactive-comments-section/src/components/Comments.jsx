import PlusIcon from "../assets/images/icon-plus.svg";
import MinusIcon from "../assets/images/icon-minus.svg";
import ReplyIcon from "../assets/images/icon-reply.svg";
import "./Comment.css";
import { useState } from "react";

const Comments = ({ comments }) => {
  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>
          <Comment {...comment} />
        </li>
      ))}
    </ul>
  );
};

const Comment = ({ avatar, username, timestamp, content, commentVotes }) => {
  const [votes, setVotes] = useState(commentVotes);

  const addVote = () => {
    setVotes(votes + 1);
  };

  const removeVote = () => {
    setVotes(votes - 1);
  };

  return (
    <div className="comment">
      <div className="comment__header">
        <div>
          <img className="comment__avatar" src={avatar} alt="user avatar" />
        </div>
        <p className="comment__username">{username}</p>
        <p className="comment__timestamp">{timestamp}</p>
      </div>
      <div className="comment__content">
        <p>{content}</p>
      </div>
      <div className="comment__votes-container">
        <button onClick={addVote}>
          <img src={PlusIcon} alt="add vote" />
        </button>
        <span className="comment__votes">{votes}</span>
        <div className="comment__btn">
          <button onClick={removeVote}>
            <img src={MinusIcon} alt="remove vote" />
          </button>
        </div>
      </div>
      <div className="comment__btn-reply">
        <button className="comment__btn-reply">
          <img src={ReplyIcon} alt="reply to comment" /> Reply
        </button>
      </div>
    </div>
  );
};

export default Comments;
