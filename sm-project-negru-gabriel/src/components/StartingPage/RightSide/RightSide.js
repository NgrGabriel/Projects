import styles from "./RightSide.module.scss";
import { Button } from "@mui/material";
import CakeRoundedIcon from "@mui/icons-material/CakeRounded";
import { NavLink } from "react-router-dom";


export function RightSide() {
  return (
    <aside className={styles.RightSideContent}>
      <div className={styles.contactSection}>
        <p className={styles.Advertisement}>Sponsored</p>

        <hr></hr>
        
        <NavLink to = "https://store.steampowered.com/" >
        <img
          src={require("./images/Steam.jpg")}
          alt="Steam"
          className={styles.advertisementStyle}
        />
        <span className={styles.advertisementPhoto}> Steam </span>
        </NavLink>
        
        <NavLink to = "https://itschool.ro/">
        <img
          src={require("./images/itschool.png")}
          alt="IT"
          className={styles.advertisementStyle}
        />
        <span className={styles.advertisementPhoto}> ITSCHOOL.ro </span>
        </NavLink>
      </div>

      <hr></hr>

      <div className={styles.contactPictures}>
        <div className={styles.friendRequest}>
          <span>Friends requests </span>
          <span className={styles.seeSection}>See all</span>
          <br />

          <img
            src={require("./images/birsi.jpg")}
            alt="friendRequest"
            className={styles.friendR}
          />

          <Button variant="contained" className={styles.buttonStyle}>
            Accept
          </Button>

          <Button variant="contained" className={styles.buttonStyle}>
            Delete
          </Button>
          


          
        </div>
      </div>
    
      <hr></hr>

      <div className={styles.birthday}>Birthday</div>
      <CakeRoundedIcon className={styles.birthdayIcon}></CakeRoundedIcon>
      <span className={styles.textDecoration}>
        Today is the birthday of <b>Milena Rosnov.</b>
      </span>
   
      <hr></hr>
     

     
    </aside>
  );
}