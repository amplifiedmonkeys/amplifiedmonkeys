import Link from 'next/link';
import styles from './Footer.module.scss';

// address
const contactInfo = (
    <p>
        326/7, <br />
        Market road, <br />
        Thrissur,kerala
    </p>
);

// Navigation links
const navigationLinks = [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/about' },
    { text: 'Projects', href: '/projects' },
    { text: 'Contact', href: '/contact' },
].map(({ text, href }) => (
    <Link key={text} href={href}>{text}</Link>
));

// Social links
const socialLinks = [
    { text: 'Instagram', href: 'https://www.instagram.com/vimal.das.tr' },
    { text: 'Linkedin', href: 'https://www.linkedin.com/in/vimal-das-tr' },
    { text: 'Dribble', href: 'https://dribbble.com/amplifiedmonkeys' },
    { text: 'Framer', href: 'https://framer.com/projects/folder/recent?team=8e057f7a-d986-3e53-a192-280d80cbfd6c' },
].map(({ text, href }) => (
    <Link key={text} href={href} target="_blank" rel="noopener noreferrer">{text}</Link>
));

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.col}>
                        {contactInfo}
                        <Link href='mailto:amplifiedmonkeys@gmail.com'>das@amplifiedmonkeys.com</Link>
                    </div>
                    <div className={styles.linksCol}>
                        {navigationLinks}
                    </div>
                </div>
                <div className={styles.border} />
                <div className={styles.copyrights}>
                    <div className={styles.col}>
                        <p>© All rights reserved / 2024</p>
                    </div>
                    <div className={styles.linksCol}>
                        {socialLinks}
                    </div>
                </div>
            </div>
            <h2 className={styles.bigText}>VIMAL DAS</h2>
        </footer>
    );
};

export default Footer;