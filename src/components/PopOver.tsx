"use client";
import { Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";
const navLinks: any = [
  { title: "About", to: "/about" },
  { title: "Articles", to: "/posts" },
  { title: "Projects", to: "/projects" },
];
function PopOver() {
  const [isOpen, setIsOpen] = useState(false);

  const openPopover = () => {
    setIsOpen(true);
  };

  const closePopover = () => {
    setIsOpen(false);
  };
  return (
    <div>
      {" "}
      <Popover>
        {({ open }) => (
          <>
            <Popover.Button
              className="fixed top-6 right-4 z-30 bg-white dark:bg-gray-800 p-2 rounded-full flex items-center shadow-lg shadow-gray-800/5 ring-1 ring-gray-900/5 hover:ring-gray-900/10 dark:ring-gray-700 dark:contrast-more:ring-gray-600 dark:hover:ring-gray-600 dark:contrast-more:hover:ring-gray-500 motion-safe:transition focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-600 dark:focus-visible:ring-primary-600 dark:focus-visible:ring-offset-gray-900 dark:contrast-more:focus-visible:ring-offset-black"
              onClick={openPopover}
            >
              <span className="sr-only">Toggle Menu</span>
              <Bars3Icon
                className="w-6 h-6 text-gray-500 dark:text-gray-400 motion-safe:transition"
                aria-hidden="true"
              />
            </Popover.Button>

            {isOpen && (
              <Popover.Panel className="fixed inset-x-4 z-30 top-8 p-8 rounded-3xl bg-white dark:bg-gray-800 dark:contrast-more:bg-gray-900 motion-safe:transition ring-1 ring-gray-900/5 dark:ring-gray-800 dark:contrast-more:ring-gray-600">
                <div className="flex items-center justify-between -mt-2">
                  <h2 className="font-medium text-sm text-gray-700 dark:text-gray-400 dark:contrast-more:text-gray-300 motion-safe:transition">
                    Navigation
                  </h2>
                  <button
                    type="button"
                    onClick={closePopover}
                    className="p-2 -mr-3 flex items-center justify-center"
                  >
                    <XMarkIcon
                      className="w-6 h-6 dark:text-gray-300"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Close Menu</span>
                  </button>
                </div>

                <nav className="mt-4" aria-label="Main Menu">
                  <ul className="divide-y dark:divide-gray-600">
                    {navLinks.map((link: any) => (
                      <li key={link.to}>
                        <a
                          href={`/api`}
                          className="py-2.5 block font-normal dark:text-gray-50 motion-safe:transition"
                          onClick={() => {
                            closePopover(); // Close the popover when a link is clicked
                          }}
                        >
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </Popover.Panel>
            )}
          </>
        )}
      </Popover>
    </div>
  );
}

export default PopOver;
