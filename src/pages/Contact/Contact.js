import styles from "./Contact.module.css";
import { useNavigate } from "react-router-dom";
export default function Contact() {
  const Navigate = useNavigate();

  //handle click Git Hub

  return (
    <div className={styles.main}>
      <div className={styles.exerciseTypeContainer}>
        <h1 className={styles.type}> Contact</h1>
        <div className={styles.total}>
          <div>
            <a href="https://github.com/yaminabil">
              <img
                src="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png"
                className={styles.social}
              />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/bilalyounes94/">
              <img
                src="https://www.sfdcamplified.com/wp-content/uploads/2019/04/linkedin-logo-copy.png"
                className={styles.socialLinkdin}
              />
            </a>
          </div>
          <div>
            <a href="">
              <img
                src="https://cdn3.iconfinder.com/data/icons/picons-social/57/43-twitter-512.png"
                className={styles.socialTwitter}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
