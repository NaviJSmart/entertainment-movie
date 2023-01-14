import Link from "next/link";
import { useRouter } from "next/router";

interface navTitleProps {
  navTitle: string;
}

const NavItem = ({ navTitle }: navTitleProps) => {
  let urlRef = navTitle === "home" ? "/" : `/${navTitle.replace(/\s/g, "")}`;
  const router = useRouter();
  const activeLink = router.pathname === urlRef;
  return (
    <li className="text-[#A1C0C6]">
      {" "}
      <Link
        className="px-3 py-2 rounded-full cursor-pointer hover:bg-slate-700 transition-all"
        href={urlRef}
        style={activeLink ? { backgroundColor: "#131129" } : {}}
      >
        {navTitle.toUpperCase()}
      </Link>
    </li>
  );
};

export default NavItem;
