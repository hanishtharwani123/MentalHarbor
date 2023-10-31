import React, { useEffect } from 'react';
import styles from "@/app/styles/hero.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image'
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Add AOS styles

const Hero = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with your preferred options
    }, []);

    return (
        <>
            <div className={styles.main} id="Home">
                <div className={styles.contain} data-aos="fade-up">
                    <h1 className={styles.tagline}>Your Source of Strength for Mental Health & Wellness</h1>
                    <div className={styles.cent} data-aos="fade-up">
                        <p className={styles.tag}>Explore below to uncover the pathways to healing and discover solutions for your mental well-being.</p>
                    </div>
                </div>
                <div className={styles.btn} data-aos="fade-up">
                    <Link href="#Issues" className={styles.exp}>Begin Your Journey  <FontAwesomeIcon
                        icon={faArrowRight}
                    /></Link>
                </div>
                <div className={styles.ctn} data-aos="fade-right">
                    <Image src="./An1.svg" alt="main image" width={650} height={650} className={styles.hit}/>
                </div>
            </div>
            <hr className={styles.line} />
        </>
    )
}

export default Hero;
