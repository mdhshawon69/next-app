import classes from "./comment-list.module.css";

function CommentList(props) {
  const { comments } = props;
  return (
    <ul className={classes.comments}>
      {comments.map((item, index) => (
        <li key={index}>
          <p>{item.text}</p>
          <div>
            By <address>{item.name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
