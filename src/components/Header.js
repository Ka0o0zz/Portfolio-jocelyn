import Link from "next/link";

export const Header = () => {
  const date = new Date().getFullYear();
  return (
    <header>
      <h3>Joselin Vargas</h3>
      <nav>
        <ul>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>About</li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="rights">
        <p>©{date} Joselin Vargas.</p>
        <p>All rights reserved.</p>
      </div>
    </header>
  );
};
