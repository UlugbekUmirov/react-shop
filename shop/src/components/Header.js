import "./Header.css";
export default function Header() {
  return (
    <nav className="black navbar sticky">
      <div className="nav-wrapper ">
        <a href="# " className="brand-logo Logo">
          React<span className="Shop">shop</span>
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="# ">REPO</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
