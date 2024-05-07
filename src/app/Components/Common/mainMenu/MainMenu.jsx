"use client";
import Link from "next/link";
const styles = require("./style");

const MainMenu = () => {
  const pages = ["sandbox", "analysis", "daily puzzle"];
  console.log(styles);

  return (
    <nav className={styles.navContainer}>
      {pages.map((page) => {
        return (
          <Link key={page} href={`/${page}`}>
            <button className={styles.buttons}>{page}</button>
          </Link>
        );
      })}
    </nav>
  );
};

export default MainMenu;
