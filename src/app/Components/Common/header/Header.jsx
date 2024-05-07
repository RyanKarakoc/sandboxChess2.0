import Image from "next/image";
import Link from "next/link";
import headerBackground from "../../../../../public/SandboxChessImage.png";
const styles = require("./style");

const Header = () => {
  return (
    <div className={styles.header}>
      <Link href="/">
        <Image src={headerBackground} alt="Sandbox Chess" />
      </Link>
    </div>
  );
};

export default Header;
