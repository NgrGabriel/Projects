import { Newsfeed } from "./Newsfeed/Newsfeed";
import styles from "./StartingPage.module.scss";
import {useFetch} from '../../hooks/useFetch';
import { LeftSide } from "./LeftSide/LeftSide";
import { RightSide } from "./RightSide/RightSide";



export function StartingPage() {

  // const posts = POSTS;
  const posts = useFetch('https://jsonplaceholder.typicode.com/posts');

  return (
    <section className={styles.mainContainer}>
      <LeftSide></LeftSide>


      <div className={styles.newsfeed}>
        {posts &&
        posts.map((post) => {
          return <Newsfeed postData={post} key={post.id}></Newsfeed>
        })};
        
        </div>
        <RightSide></RightSide>
        
      
    </section>


  );
}