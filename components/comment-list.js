import styles from '../src/styles/Comps.module.css'

function CommentList(props) {
  const { items } = props;

  return (
    <ul className={styles.commentList_cont}>
      {items.map((item) => (
        <li key={item.id}>
          <img src={item.user.image} />
          <div className={styles.commentList_inner}>
            <div className={styles.commentList_username}>{item.user.name}</div>
            <div className={styles.commentList_email}>{item.email}</div>
            <div className={styles.commentList_content}>{item.content}</div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
