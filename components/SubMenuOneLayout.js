import Link from "next/link";
import { getLayout as getSiteLayout } from "./SiteLayout";
import { useRouter } from "next/router";

const ActiveLink = ({ children, href, className }) => {
  const router = useRouter();
  return (
    <Link href={href} scroll={false}>
      <a
        className={`example`}
      >
        {children}
      </a>
    </Link>
  );
};

const SubMenuLayout = ({ children }) => {
  return (
    <div>
    <h1 className="bold">Account Settings</h1>

      <div
        className="example"
        style={{ boxShadow: "inset 0 -2px 0 #edf2f7" }}
      >
        <ActiveLink href="/submenu-one/tab-one">
         Tab One
        </ActiveLink>

        <ActiveLink href="/submenu-one/tab-two" className="example">
         Tab Two
        </ActiveLink>
      </div>
    <div>
        <div>{children}</div>
    </div>
    </div>
  );
};

export const getLayout = page => getSiteLayout(<SubMenuLayout>{page}</SubMenuLayout>);

export default SubMenuLayout;