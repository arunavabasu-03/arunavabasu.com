import Link from "next/link";
import Image from "next/image";
import PopOver from "./PopOver";
import { NavLinkType, navLinks } from "@/constants/NavLinks";

function Header() {
  return (
    <div>
      <header className="select-none sticky top-0 w-full flex gap-4 md:gap-10 items-center z-20 px-4 md:px-10 py-6 bg-white dark:bg-gray-900 dark:contrast-more:bg-black supports-backdrop-blur:bg-white/80 dark:supports-backdrop-blur:bg-gray-900/90 dark:contrast-more:supports-backdrop-blur:bg-black/90 backdrop-blur motion-safe:transition">
        <Link href={`/`}>
          <div className="shrink-0 motion-safe:transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-600 dark:focus-visible:ring-offset-gray-900 dark:contrast-more:focus-visible:ring-offset-black rounded-full">
            <Image
              aria-hidden="true"
              src="/assets/logo.png"
              className="w-10 h-10 rounded-full border border-gray-200 dark:border-transparent shadow-sm"
              alt="Logo"
              width={10}
              height={10}
            />
            <span className="sr-only">{"routes.home"}</span>
          </div>
        </Link>

        <nav
          className="hidden md:block text-sm px-3 motion-safe:transition bg-white dark:bg-gray-800 rounded-full shadow-lg shadow-gray-800/5 ring-1 ring-gray-900/5 dark:ring-gray-700 dark:contrast-more:ring-gray-600"
          aria-label="Menu principal"
        >
          <ul className="flex">
            {navLinks.map((link: NavLinkType, index: number) => (
              <li key={index}>
                <Link href={link.route}>
                  <div
                    className={`relative px-3 py-2 block font-medium dark:text-gray-50 hover:text-primary-600 focus-visible:text-primary-600 dark:hover:text-primary-400 dark:focus-visible:text-primary-400 motion-safe:transition rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-600 dark:focus-visible:ring-offset-gray-900 dark:contrast-more:focus-visible:ring-offset-black
text-primary-600 dark:text-primary-400 }`}
                  >
                    {link.title}
                    <div className="absolute -bottom-px inset-x-0 h-px bg-gradient-to-r from-primary-500/0 via-primary-500/40 to-primary-500/0" />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex gap-4 ml-auto"></div>
      </header>
      <div className="md:hidden">
        <PopOver />
      </div>
    </div>
  );
}

export default Header;
