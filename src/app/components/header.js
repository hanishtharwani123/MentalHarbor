"use client"
import React, { useState, useEffect } from 'react';
import styles from "@/app/styles/header.module.css";
import Link from "next/link";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleResize = () => {
        if (window.innerWidth <= 1132) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <header className={`${styles.header} ${isMenuOpen ? styles.showMenu : ''}`}>
                <nav className={styles.nav}>
                    <div className={styles.comb}>
                        <Link href="/" className={styles.logo_link}>
                            <h1 className={styles.logo}>Mental</h1>
                        </Link>
                        <Link href="/" className={styles.logo_link}>
                            <h1 className={styles.logo1}>Harbor</h1>
                        </Link>
                    </div>
                    {isMenuOpen && (
                        <div className={styles.closeButton} onClick={toggleMenu}>
                            &#x2715; {/* Close (X) icon */}
                        </div>
                    )}
                    {!isMenuOpen && (
                        <div className={styles.menuButton} onClick={toggleMenu}>
                            &#8801; {/* Three-bar icon */}
                        </div>
                    )}
                    <ul className={`${styles.un_list} ${isMenuOpen ? styles.showMenu : ''}`}>
                        <Link href="#Home" className={styles.links}><li className={styles.list_sty}>Home</li></Link>
                        <Link href="#About" className={styles.links}><li className={styles.list_sty}>About</li></Link>
                        <Link href="#Issues" className={styles.links}><li className={styles.list_sty}>Issues</li></Link>
                        <Link href="#Articles" className={styles.links}><li className={styles.list_sty}>Articles</li></Link>
                        <Link href="#Contact" className={styles.links}><li className={styles.list_sty}>Contact</li></Link>
                    </ul>
                    <Link href="https://my-portfolio-website-three-delta.vercel.app/" className={styles.port}>
                        <button className={styles.btn}>MY PORTFOLIO</button>
                    </Link>
                </nav>
            </header>
        </>
    );
};

export default Header;
