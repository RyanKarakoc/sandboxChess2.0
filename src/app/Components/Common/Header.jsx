import Image from "next/image";
import Link from "next/link";
import headerBackground from "../../../../public/SandboxChessImage.png";
const headerTheme = require("../../../../tailwind.config.js").theme.header;

const Header = () => {
  return (
    <div className={`${headerTheme.layout} ${headerTheme.spacing}`}>
      <Link href="/">
        <Image src={headerBackground} alt="Sandbox Chess" />
      </Link>
    </div>
  );
};

export default Header;
