import React, { useEffect } from 'react';
import styles from "@/app/styles/contact.module.css";
import { faEnvelope, faGlobe, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Add AOS styles
import Link from "next/link";

const Contact = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with your preferred options
    }, []);

    return (
        <>
            <div id="contact" className={styles.contact} data-aos="fade-up" id="Contact">
                <div className={styles.contact_box}>
                    <div className={styles.box1}>
                        <h1 className={styles.query}>Send us a message</h1>
                        <form action="https://formsubmit.co/hanish.tharwani2021@vitbhopal.ac.in" method="POST" className={styles.card}>
                            <div className={styles.fly}>
                                <label className={styles.head_name}>Name</label>
                                <input type="text" name="name" className={styles.input} />
                            </div>

                            <div className={styles.fly}>
                                <label className={styles.head_name}>Email</label>
                                <input type="email" name="email" className={styles.input} />
                            </div>

                            <div className={styles.fly}>
                                <label className={styles.head_name}>Message</label>
                                <textarea name="Message" id="" cols="30" rows="10" className={styles.text}></textarea>
                            </div>
                            <button className={styles.send}>Send Message</button>
                        </form>
                    </div>
                    <div className={styles.box2}>
                        <h1 className={styles.contact_us}>Contact us </h1>
                        <p className={styles.we}>We're open for any suggestion or just to have a chat</p>

                        <div className={styles.touch}>
                            <div className={styles.cat1}>
                                <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
                                <div className={styles.add}>
                                    <h1 className={styles.address}>Address:</h1>
                                    <p className={styles.west}>Sector 11, Udaipur 313002, Rajasthan India</p>
                                </div>
                            </div>
                            <div className={styles.cat1}>
                                <FontAwesomeIcon icon={faPhone} className={styles.icon} />
                                <div className={styles.add}>
                                    <h1 className={styles.address}>Phone:</h1>
                                    <p className={styles.west}>+91 9024308901</p>
                                </div>
                            </div>
                            <div className={styles.cat1}>
                                <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
                                <div className={styles.add}>
                                    <h1 className={styles.address}>Email:</h1>
                                    <p className={styles.west}>hanishtharwani283@gmail.com</p>
                                </div>
                            </div>
                            <div className={styles.cat1}>
                                <FontAwesomeIcon icon={faGlobe} className={styles.icon} />
                                <div className={styles.add}>
                                    <h1 className={styles.address}>Website:</h1>
                                    <Link href="https://my-portfolio-website-three-delta.vercel.app/" className={styles.west}>My Portfolio</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
