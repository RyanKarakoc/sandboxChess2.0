"use client";
import Link from "next/link";
const styles = require("./style");
const navContainer = styles.navContainer();
const buttons = styles.buttons();

const MainMenu = () => {
  const pages = ["sandbox", "analysis", "daily puzzle"];
  console.log(styles);

  return (
    <nav className={navContainer}>
      {pages.map((page) => {
        return (
          <Link key={page} href={`/${page}`}>
            <button className={buttons}>{page}</button>
          </Link>
        );
      })}
    </nav>
  );
};

export default MainMenu;
