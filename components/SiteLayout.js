import Link from "next/link";

const SiteLayout = ({ children }) => (
  <div className="Site">
    <div>
      <nav>
        <div className="Home">
          <img className="logo" src="/logo2.svg" alt="" />
              <Link href="/">
                <a>Home</a>
              </Link>
              <Link href="/submenu-one/tab-one">
                <a className="Submenu">
                  Settings
                </a>
              </Link>
        </div>
        <div className="Search">
              <input
                className="Input"
                placeholder="Search..."
              />
        </div>
      </nav>
    </div>
    <div className="main">{children}</div>
  </div>
);

export const getLayout = page => <SiteLayout>{page}</SiteLayout>;

export default SiteLayout;
