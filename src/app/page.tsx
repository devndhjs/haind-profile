"use client";

import { JSX } from "react";
import styles from "./page.module.css";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function ProfilePage(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <div className={styles.profile}>
        <div className={styles.overlay}>
          <div className={styles.about}>
            <h4>Kim Sarah</h4>
            <span>Software Developer</span>
          </div>
          <ul className={styles["social-icons"]}>
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaLinkedin />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaInstagram />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
