import useAppContext from "@/useContext";
import Link from "next/link";

export const Header = () => {
  const date = new Date().getFullYear();
  const { animation } = useAppContext();
  return (
    <header>
      <Link href="/"><h3 className={!animation ? "animation" : ""}>Joselin Vargas</h3></Link>
      <nav className={!animation ? "animation" : ""}>
        <ul>
          <li>
            <Link href="/">Portfolio</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className={`rights ${!animation ? "animation" : ""}`}>
        <p>©{date} Joselin Vargas.</p>
        <p>All rights reserved.</p>
      </div>

      <button>
        <span />
        <span />
        <span />
      </button>
    </header>
  );
};
