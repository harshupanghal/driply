"use client";

import { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const lastScrollY = useRef(0);

  const {
    connectWallet,
    disconnectWallet,
    isAuthenticated,
    loading,
    currentAccount,
    message,
  } = useAuth();

  

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const scrollingDown = currentY > lastScrollY.current;
      const scrollingUp = currentY < lastScrollY.current;

      if (currentY <= 3) {
        setVisible(true);
        setScrolled(false);
      } else {
        if (scrollingDown) {
          setVisible(false);
        } else if (scrollingUp) {
          setVisible(true);
          setScrolled(true);
        }
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleConnectClick = () => {
    if (isAuthenticated) {
      setShowMenu(!showMenu);
    } else {
      connectWallet();
    }
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full h-20 transform transition-all duration-300 backdrop-blur-md
        ${visible ? "translate-y-0" : "-translate-y-full"}
        ${scrolled ? "bg-[#111111] shadow-xs" : "bg-transparent"}
      `}
    >
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-4 md:px-8 lg:px-12 xl:px-16">
        <a href="/" className="text-2xl font-extrabold text-gray-100">driply</a>

        <div className="flex items-center gap-4 lg:gap-6">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 h-5 w-5 text-xs -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search creator"
              className="h-8 w-42 py-5 rounded-full border-gray-300 text-gray-100 bg-black/70 pl-12 pr-4 text-xs outline-none placeholder-gray-500"
            />
          </div>

          <button
            aria-label="Open search"
            className="rounded-full p-2 transition hover:bg-gray-100 md:hidden"
          >
            <Search className="h-5 w-5 text-gray-700" />
          </button>

          {/* Wallet Button */}
          <div className="relative">
            <button
              onClick={handleConnectClick}
              className="rounded-full py-2 px-4 transition bg-yellow-300 hover:bg-yellow-400 hover:scale-105 active:scale-95 font-semibold cursor-pointer text-black"
              disabled={loading}
            >
              {loading
                ? "Connecting..."
                : isAuthenticated
                ? `${currentAccount.slice(0, 6)}...${currentAccount.slice(-4)}`
                : "Connect Wallet"}
            </button>

            {isAuthenticated && showMenu && (
              <div className="absolute right-0 mt-2 bg-white text-black rounded-md shadow-md z-10">
                <button
                  onClick={disconnectWallet}
                  className="px-4 py-2 w-full text-left hover:bg-gray-200"
                >
                  Disconnect
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* {message && (
  <div className="text-center text-sm text-yellow-300 mt-2 transition-opacity duration-300">
    {message}
  </div>
)} */}

    </header>
  );
};

export default Navbar;
