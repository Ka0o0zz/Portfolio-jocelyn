import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <h3>Joselin Vargas</h3>
      <nav>
        <ul>
          <li><Link href="/portfolio">Portfolio</Link></li>
          <li>About</li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
