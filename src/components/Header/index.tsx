import Logo from '../../assets/webpay_logo_white.svg';
import SolanaLogo from '../../assets/solana-sol-logo.svg';

import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

export const Header = () => {
  return (
    <Popover className="relative bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <span className="sr-only">Webpay</span>
              <img className="h-8 w-auto sm:h-10" src={Logo} alt="" />
            </a>
          </div>

          <nav className="hidden md:flex space-x-10">
            <a
              href="docs.webpay.so"
              className="text-base font-medium text-white hover:text-purple"
            >
              Docs
            </a>
            <a
              href="https://twitter.com"
              className="text-base font-medium text-white hover:text-purple"
            >
              Twitter
            </a>
            <a
              href="https://discord.gg/5Jftfevd"
              className="text-base font-medium text-white hover:text-purple"
            >
              Discord
            </a>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <div className="space-x-2 ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 rounded-md shadow-sm text-base font-medium text-white bg-purple">
              <img className="h-4 w-auto" src={SolanaLogo} alt="" />

              <a href="https://app.webpay.so" className="">
                Launch App
              </a>
            </div>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-black rounded-md p-2 inline-flex items-center justify-center text-white hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0  transition transform origin-top-right md:hidden z-10"
        >
          <div className="shadow-lg ring-1 ring-black ring-opacity-5 bg-black divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img className="h-8 w-auto sm:h-10" src={Logo} alt="" />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-black rounded-md p-2 inline-flex items-center justify-center text-white hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <a
                    href="https://docs.webpay.so"
                    className="text-base font-medium text-white hover:text-purple"
                  >
                    Docs
                  </a>
                  <a
                    href="https://twitter.com"
                    className="text-base font-medium text-white hover:text-purple"
                  >
                    Twitter
                  </a>
                  <a
                    href="https://discord.gg/5Jftfevd"
                    className="text-base font-medium text-white hover:text-purple"
                  >
                    Discord
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};
