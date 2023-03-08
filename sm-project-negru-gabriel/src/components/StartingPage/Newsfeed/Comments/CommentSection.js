import styles from "./CommentSection.module.scss";

import { Link } from "react-router-dom";

const CommentSection = (props) => {
  return (
    <>
      <div className={styles.comments}>
        <Link to="/">
          <div className={styles.userInfo}>
            <img
              src={require("../assets/profilePicture.jpg")}
              alt="Profile Picture"
              className={styles.profilePictureImg}
            ></img>
            <div>
              <p>{props.commentData.username}</p>
              <p>{props.commentData.date}</p>
            </div>
          </div>
        </Link>

        <div className={styles.commentInfo}>
          <p>{props.commentData.comment}</p>
        </div>
      </div>
    </>
  );
};

export default CommentSection;