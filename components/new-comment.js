import { useRef } from "react";
import styles from '../src/styles/Comps.module.css';

function NewComment(props) {
  const commentInputRef = useRef();

  function sendCommentHandler(event) {
    event.preventDefault();

    const enteredComment = commentInputRef.current.value;

    props.onAddComment({
      content: enteredComment,
    });
  }

  return (
    <form className={styles.newComment_cont} onSubmit={sendCommentHandler}>
      {/* <label htmlFor="comment">Your comment</label> */}
      <textarea placeholder="Leave your comment here" id="comment" rows="5" ref={commentInputRef}></textarea>

      <button className={styles.regular_btn} style={{alignSelf:"flex-end"}}>Submit</button>
    </form>
  );
}

export default NewComment;
