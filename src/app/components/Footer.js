'use client'
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="w-full  bg-[#0A0A0A] px-4 pt-10 pb-12 text-sm text-gray-700 md:px-8 lg:px-12"
    >
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-4 md:flex-row">
        {/* Links */}
        <nav className="flex flex-wrap items-center justify-center gap-6 font-medium">
          <Link href="/about" className="transition hover:text-[#0077B6]">
            About
          </Link>
          <Link href="/privacy" className="transition hover:text-[#0077B6]">
            Privacy
          </Link>
          <Link href="/contact" className="transition hover:text-[#0077B6]">
            Contact
          </Link>
        </nav>

        {/* Copyright */}
        <p className="text-center text-xs text-gray-500 md:text-right">
          © {year} MyCompany. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
