import Link from "next/link";
import styles from './GalleryComponent.module.css';

export default function GalleryComponent() {
    return (
        <div className={styles['gallery']}>
          <div className={styles['gallery-panel']}>
              <Link href="/TicTacToe">
                <img src="./img1.jpeg" alt="pic1"/>
              </Link>
          </div>
          <div className={styles['gallery-panel']}>
              <Link href="/AIChatBot">
                <img src="./img2.jpeg" alt="pic2"/>
              </Link>
          </div>
          <div className={styles['gallery-panel']}>
              <img src="./img3.jpeg" alt="pic3"/>
          </div>
          <div className={styles['gallery-panel']}>
              <img src="./img4.jpeg" alt="pic4"/>
          </div>
        </div>
    );
}
