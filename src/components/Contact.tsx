import React from "react";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiFacebook,
  FiInstagram,
} from "react-icons/fi";
import styles from "../app/page.module.css";

const ContactSection = () => {
  return (
    <>
      <section id="contacts">
        <div className={styles.contactSection}>
          <div className={styles.contactGrid}>
            {/* Contact Information */}
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <FiUser className={styles.contactIcon} />
                <span className={styles.contactText}>Marvin Toh</span>
              </div>

              <div className={styles.contactItem}>
                <FiMail className={styles.contactIcon} />
                <a
                  href="mailto:soulskate143@gmail.com"
                  className={styles.contactLink}
                >
                  soulskate143@gmail.com
                </a>
              </div>

              <div className={styles.contactItem}>
                <FiPhone className={styles.contactIcon} />
                <a href="tel:+1234567890" className={styles.contactLink}>
                  09202075832
                </a>
              </div>

              <div className={styles.contactItem}>
                <FiMapPin className={styles.contactIcon} />
                <span className={styles.contactText}>
                  Tayud, Consolacion, <br />
                  Cebu, Philippines
                </span>
              </div>
            </div>

            {/* Social Media */}
            <div className={styles.socialLinks}>
              <a
                href="https://www.facebook.com/marvin.toh.1"
                className={styles.socialItem}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiFacebook className={styles.socialIcon} />
              </a>

              <a
                href="https://www.instagram.com/dravenpvp?igsh=OGh0ano4NXN1OWE%3D&utm_source=qr"
                className={styles.socialItem}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiInstagram className={styles.socialIcon} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer at the bottom */}
      <footer className={styles.footer} >
        <p>© 2025 Marvin Toh. All rights reserved.</p>
      </footer>
    </>
  );
};

export default ContactSection;
