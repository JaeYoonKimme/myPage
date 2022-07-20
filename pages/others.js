import Image from 'next/image';
import Link from 'next/link';
import utilStyles from '../styles/utils.module.css';
import styles from '../styles/others.module.css';
import profile from '../public/images/profile_heera.jpg';


function Information() {
    return (
        <div className={styles.mainContainer}>
            <div style={{minHeight:'15vh'}} className={styles.favContainer}>
                <div>NPM Members</div>
            </div>
            <div className={styles.favContainer}>
                <Image
                    priority
                    src={profile}
                    className={utilStyles.borderCircle}
                    height={200}
                    width={200}
                    alt="profile"
                />
            </div>
            <div style={{textAlign:'center'}}>
                <h1 className={utilStyles.heading2Xl}>Heera Choi</h1>
                <div className={styles.contentTitle}>School of Global Entrepreneurship and ICT</div><br/>
                <section className={styles.contents}>
                    <div className={styles.contentTitle}>Major</div>
                    <div>ICT Convergence / Visual and Performing Arts</div>
                    <div className={styles.contentTitle}>Skills</div>
                    <div>💻 Python, Javascript, HTML, CSS</div>
                    <div>📽️ Premiere Pro, After Effects</div>
                </section>
                <Link href="/" passHref><button className={styles.button}>Home</button></Link>
            </div>
        </div>
    );
};

export default Information;