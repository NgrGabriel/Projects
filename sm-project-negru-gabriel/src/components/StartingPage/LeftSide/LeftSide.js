import styles from "./Leftside.module.scss";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import ChatIcon from "@mui/icons-material/Chat";
import GroupIcon from "@mui/icons-material/Group";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import SettingsIcon from "@mui/icons-material/Settings";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";

export function LeftSide(props) {
  return (
    <>
      <div className={styles.LeftSide}>
        <div className={styles.LeftSideWrapper}>
          <ul className={styles.LeftSideList}>
            <li className={styles.LeftSideListItem}>
              <NewspaperIcon className={styles.LeftSideIcon}></NewspaperIcon>
              <span className={styles.LeftSideListItemText}>News</span>
            </li>

            <hr></hr>

            <li className={styles.LeftSideListItem}>
              <ChatIcon className={styles.LeftSideIcon}></ChatIcon>
              <span className={styles.LeftSideListItemText}>Chat</span>
            </li>

            <hr></hr>

            <li className={styles.LeftSideListItem}>
              <GroupIcon className={styles.LeftSideIcon}></GroupIcon>
              <span className={styles.LeftSideListItemText}>Friends</span>
            </li>

            <hr></hr>

            <li className={styles.LeftSideListItem}>
              <BookmarkIcon className={styles.LeftSideIcon}></BookmarkIcon>
              <span className={styles.LeftSideListItemText}>Saved</span>
            </li>

            <hr></hr>

            <li className={styles.LeftSideListItem}>
              <SettingsIcon className={styles.LeftSideIcon}></SettingsIcon>
              <span className={styles.LeftSideListItemText}>Settings</span>
            </li>

            <hr></hr>

            <li className={styles.LeftSideListItem}>
              <LocalGroceryStoreIcon
                className={styles.LeftSideIcon}
              ></LocalGroceryStoreIcon>
              <span className={styles.sidebarListItemText}>Market</span>
            </li>

            <hr></hr>

            <div className={styles.contactPictures}>
              <span className={styles.constactStyle}>Contacts</span>
            </div>

            <div className={styles.contactPictures}>
              <img
                src={require("./images/caini.jpeg")}
                alt="First contact"
                className={styles.firstContact}
              />
              <span className={styles.contactStyle}>Om cu caini</span>

              <img
                src={require("./images/greendot.png")}
                alt="greenDot"
                className={styles.greenDot}
              />
            </div>

            <div className={styles.contactPictures}>
              <img
                src={require("./images/mama.jpg")}
                alt="Second contact"
                className={styles.firstContact}
              />
              <span className={styles.contactStyle}>Negru Simona</span>
              <img
                src={require("./images/greendot.png")}
                alt="greenDot"
                className={styles.greenDot}
              />
            </div>

            <div className={styles.contactPictures}>
              <img
                src={require("./images/milena.jpg")}
                alt="third contact"
                className={styles.firstContact}
              />
              <span className={styles.contactStyle}>Milena Rosnov</span>
              <img
                src={require("./images/greendot.png")}
                alt="greenDot"
                className={styles.greenDot}
              />
            </div>

            <div className={styles.contactPictures}>
              <img
                src={require("./images/Birsi.jpg")}
                alt="fourth contact"
                className={styles.firstContact}
              />
              <span className={styles.contactStyle}>Birzi</span>
              <img
                src={require("./images/greendot.png")}
                alt="greenDot"
                className={styles.greenDot}
              />
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}
