import Image from "next/image";
import Link from "next/link";

function GalleryComponent() {
    return (
        <div className="gallery">
          <div className="gallery-panel">
              <Link href="/TicTacToe">
                <Image src="./img1.jpeg" alt="pic1"/>
              </Link>
          </div>
          <div className="gallery-panel">
              <Link href="/AIChatBot">
                <Image src="./img2.jpeg" alt="pic1"/>
              </Link>
          </div>
          <div className="gallery-panel">
              <Image src="./img3.jpeg" alt="pic3"/>
          </div>
          <div className="gallery-panel">
              <Image src="./img4.jpeg" alt="pic4"/>
          </div>
        </div>
    );
  }