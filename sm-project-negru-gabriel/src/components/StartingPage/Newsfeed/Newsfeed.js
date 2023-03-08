import styles from "./Newsfeed.module.scss";
import { useRef, useState } from "react";
import { useFetch } from "../../../hooks/useFetch";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import InfoTwoToneIcon from "@mui/icons-material/Info";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ReplyIcon from "@mui/icons-material/Reply";
import CommentIcon from "@mui/icons-material/Comment";
import CommentSection from "./Comments/CommentSection";

const COMMENTS = [
  {
    username: "Gabriel",
    date: "15.02.2023",
    comment: "Acesta este primul comment",
    id: 0,
  },
  {
    username: "Milena",
    date: "25.02.2023",
    comment: "Acesta este al doilea comment",
    id: 1,
  },
];

export function Newsfeed(props) {
  const [likes, setLikes] = useState(Math.floor(Math.random() * 100));
  const [share, setShares] = useState(Math.floor(Math.random() * 100));

  const [isLiked, setIsLiked] = useState(false);
  const [isShared, setIsShared] = useState(false);

  const [comments, setComments] = useState(COMMENTS);

  const commentDescription = useRef();

  const userProfile = useFetch(
    "https://jsonplaceholder.typicode.com/users/" + props.postData.userId
  );

  const handleLike = () => {
    setIsLiked((prevState) => {
      return !prevState;
    });

    if (isLiked) {
      setLikes((prevState) => {
        return --prevState;
      });
    } else {
      setLikes((prevState) => {
        return ++prevState;
      });
    }
  };

  const handleShare = () => {
    setIsShared((prevState) => {
      return !prevState;
    });

    if (isShared) {
      setShares((prevState) => {
        return ++prevState;
      });
    } else {
      setShares((prevState) => {
        return --prevState;
      });
    }
  };

  const addComment = (event) => {
    if (event.keyCode === 13) {
      const commentValue = commentDescription.current.value;

      setComments((prevState) => {
        const newComment = {
          id: prevState.length,
          username: "Gabriel " + props.postData.id,
          date: "15.02.2023",
          comment: commentValue,
        };

        return [...prevState, newComment];
      });
    }
  };

  return (
    <>
      <div className={styles.mainPost}>
        <div className={styles.userInfo}>
          
            <img
              src={require("./assets/profilePicture.jpg")}
              alt="Profile Picture"
              className={styles.profilePictureImg}
            ></img>
            <span className={styles.username}></span>
          
          <div className={styles.contextMenu}>
            <MoreHorizIcon></MoreHorizIcon>
          </div>
        </div>

        <div className={styles.content}>
          <p>{props.postData.title}</p>

          <div className={styles.imageWrapper}>
            <img
              src={require(`./assets/post${props.postData.id % 2}.jpg`)}
              className={styles.mainPostImage}
            ></img>
            <div className={styles.infoIcon}>
              <InfoTwoToneIcon></InfoTwoToneIcon>
            </div>
          </div>

          <p>{props.postData.body}</p>
        </div>

        <div className={styles.reacts}>
          <div className={styles.likesNumber}>
            <ThumbUpIcon></ThumbUpIcon>
            <span className={styles.reactsCount}>{likes} likes</span>
          </div>
          <div className={styles.commentsNumber}>
            <ReplyIcon></ReplyIcon>
            <span className={styles.reactsCount}>{share} shares</span>
          </div>
        </div>

        <hr></hr>

        <div className={styles.reactsActions}>
          <div
            className={`${styles.reaction} ${isLiked && styles.blue}`}
            onClick={handleLike}
          >
            <ThumbUpIcon></ThumbUpIcon>
            <span>Like</span>
          </div>

          <div className={styles.reaction}>
            <CommentIcon></CommentIcon>
            <span>Comment</span>
          </div>

          <div
            className={`${styles.reaction} ${isShared && styles.blue}`}
            onClick={handleShare}
          >
            <ReplyIcon></ReplyIcon>
            <span>Share</span>
          </div>
        </div>

        <div className={styles.commentContainer}>
          <div className={styles.insertCommentField}>
            <input
              type="text"
              placeholder="Write the comment..."
              ref={commentDescription}
              onKeyUp={addComment}
              
            ></input>
          </div>

          {comments &&
            comments.map((comment) => {
              return (
                <CommentSection
                  key={comment.id}
                  commentData={comment}
                ></CommentSection>
              );
            })}
        </div>
      </div>
    </>
  );
}
