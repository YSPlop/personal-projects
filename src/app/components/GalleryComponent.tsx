import Image from "next/image";
import Link from "next/link";

export default function GalleryComponent() {
    return (
        <div className="gallery">
          <div className="gallery-panel">
              <Link href="/TicTacToe">
                <img src="./img1.jpeg" alt="pic1"/>
              </Link>
          </div>
          <div className="gallery-panel">
              <Link href="/AIChatBot">
                <img src="./img2.jpeg" alt="pic1"/>
              </Link>
          </div>
          <div className="gallery-panel">
              <img src="./img3.jpeg" alt="pic3"/>
          </div>
          <div className="gallery-panel">
              <img src="./img4.jpeg" alt="pic4"/>
          </div>
        </div>
    );
  }