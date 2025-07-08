"use client";
import { useState, useEffect } from "react";
import { Coffee, Sparkles, TrendingUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const LandingPage = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 3);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

   const items = [
    {
      title: 'Your supporters, not customers.',
      desc: 'We don’t see people as numbers. They’re part of your journey.',
    },
    {
      title: 'Full control over your audience.',
      desc: 'You own your connections. Access Anywhere Anytime.',
    },
    {
      title: 'Talk to real humans.',
      desc: 'Support and advice from people who actually care.',
    },
    {
      title: 'Instant payouts.',
      desc: 'Funds go directly to your wallet or bank—no waiting, no fees.',
    },
  ];

  return (
    <main
      className={`min-h-screen w-full pt-[7rem] transition-colors duration-300 ${
        scrolled ? "bg-[#0A0A0A]" : "bg-[#121212]"
      }`}
    >
      {/* ─────────── Hero Section ─────────── */}
      <section className="relative isolate flex flex-col items-center px-4 sm:px-8 lg:px-12 xl:px-0">
        {/* Blurred blobs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-16 -left-20 h-56 w-56 rounded-full bg-primary/15 blur-3xl animate-pulse-subtle" />
          <div
            className="absolute bottom-24 -right-16 h-72 w-72 rounded-full bg-secondary/15 blur-3xl animate-pulse-subtle"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-2/3 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/15 blur-3xl animate-pulse-subtle"
            style={{ animationDelay: "2s" }}
          />
        </div>

        {/* Content container */}
        <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center text-center">
          {/* Badge strip */}
          <div
            className="relative mb-8 md:mb-12 inline-flex rounded-full p-[2px] bg-gradient-to-br
                       from-[#F213A4]/80 via-[#B20DAF]/80 to-[#5204BF]/80
                       shadow-[0_0_2px_2px_rgba(241,19,165,0.15)]
                       transition-shadow duration-300 ease-out
                       hover:shadow-[0_0_2px_2px_rgba(241,19,165,0.35)]"
          >
            <div className="inline-flex items-center gap-3 rounded-full bg-[#0A0A0A]/90 px-5 py-2 shadow-sm backdrop-blur">
              <BadgeItem
                icon={Sparkles}
                label="Decentralized"
                className="text-accent"
              />
              <Divider />
              <BadgeItem
                icon={TrendingUp}
                label="Secure"
                className="text-secondary"
              />
              <Divider />
              <BadgeItem icon={Zap} label="Instant" className="text-primary" />
            </div>
          </div>

          {/* Headline */}
          <h1 className="mb-6  max-w-3xl text-6xl text-center font-bold leading-tight  text-white sm:text-4xl md:text-4xl lg:text-7xl ">
            Fund your
            <br /> creativity in Crypto
          </h1>

          {/* Sub‑headline */}
          <p className="mb-10 max-w-3xl text-base text-gray-200 sm:text-sm md:text-base lg:text-lg">
            Let fans support you with crypto - instantly, globally, and with
            full ownership.
          </p>

          {/* CTA buttons */}
          <div className="mb-6 pt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Button
              size="lg"
              className="rounded-full text-base font-semibold bg-yellow-400 text-black hover:bg-yellow-300 px-7
               py-8 cursor-pointer"
            >
              Get Supporters
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="rounded-full text-base font-semibold bg-[#1C1C1E] text-gray-100 hover:bg-[#2A2A2A] px-7
               py-8 cursor-pointer"
            >
              Support a Creator
            </Button>
          </div>

          <p className="text-[0.8rem] font-medium text-gray-400">
            Global and borderless support.
          </p>

          {/* Premium Floating Card */}
        </div>
      </section>

      <section className="mt-20">
        <div className="max-w-5xl mx-4 lg:mx-auto flex flex-col items-center justify-center bg-[#181818] text-center text-[#121212] rounded-4xl lg:rounded-[48px] px-10 py-20 md:px-16 md:py-32 mt-42 lg:px-24 lg:py-28  ">
          <h2 className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-4 md:text-sm text-left">
            What is driply?
          </h2>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-10  text-gray-100">
            A decentralized way <br className="hidden sm:block" /> to say
            thanks.
          </h1>

          <p className="text-lg md:text-xl leading-relaxed  text-gray-300 max-w-3xl">
            driply is a blockchain-based tipping platform that lets creators
            receive crypto support instantly and directly—no middlemen, no
            waiting. Supporters can leave a message, send a tip, and show
            appreciation in just a few taps.
          </p>
        </div>
      </section>

       <section
  className="
    /* overall frame */
    max-w-5xl
    mx-4 sm:mx-6 md:mx-8 lg:mx-auto
    flex flex-col items-center justify-center
    text-left text-[#121212]
    rounded-3xl sm:rounded-4xl lg:rounded-[48px]
    px-6 py-16
    sm:px-10 sm:py-20
    md:px-14 md:py-24
    lg:px-20 lg:py-28
    xl:px-24 xl:py-32
  "
>
  {/* Heading */}
  <h2
    className="
      font-bold leading-tight mb-12
      text-4xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-7xl
      text-gray-100
      text-left sm:text-center
    "
  >
    Built for people, <br />
    <span className="text-gray-500">not for institutions.</span>
  </h2>

  {/* Feature grid */}
  <div
    className="
      grid gap-y-12 gap-x-10
      sm:gap-y-14 sm:gap-x-16
      md:gap-y-16 md:gap-x-20
      lg:grid-cols-2 lg:text-left
      sm:grid-cols-1
      w-full
    "
  >
    {items.map(({ title, desc }, i) => (
      <div
        key={i}
        className="
          flex gap-4 sm:gap-6 items-start
          max-w-sm sm:max-w-none
          mx-auto sm:mx-0
        "
      >
        {/* Check‑mark circle */}
        <div
          className="
            flex-shrink-0
            w-10 h-10 xs:w-8 xs:h-8 md:w-10 md:h-10
            border border-gray-100 rounded-full
            flex items-center justify-center
          "
        >
          <svg
            className="w-5 h-5 xs:w-6 xs:h-6 md:w-7 md:h-7 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Copy */}
        <div className="flex-1">
          <h3
            className="
              font-semibold mb-1
              text-base xs:text-lg sm:text-xl
              text-white
            "
          >
            {title}
          </h3>
          <p
            className="
              text-gray-500
              text-base xs:text-[17px] sm:text-lg
              leading-relaxed
            "
          >
            {desc}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>



      
    </main>
  );
};

export default LandingPage;


































/* ---------- helpers ---------- */
const BadgeItem = ({ icon: Icon, label, className = "" }) => (
  <span className="flex items-center gap-2 text-xs font-medium text-gray-300">
    <Icon size={12} className={`animate-pulse-subtle ${className}`} />
    {label}
  </span>
);

const Divider = () => <span className="h-1 w-1 rounded-full bg-white/30" />;


















































































// {/* <div className="relative max-w-2xl mx-auto mt-20 group [perspective:1600px]">
//             <div
//               className="premium-card relative rounded-3xl lg:rounded-[2rem] p-8 lg:p-16 border border-white/5 overflow-hidden
//                bg-gradient-to-br from-[#0b0b0d] via-[#111112] to-[#1a1a1c]
//                shadow-[0_25px_40px_-10px_rgba(0,0,0,0.8)]
//                transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(.25,.8,.25,1)]
//                group-hover:[transform:translateY(-10px)_rotateX(7deg)_rotateY(-7deg)]
//                group-hover:shadow-[0_50px_60px_-10px_rgba(0,0,0,0.9)]"
//             >
//               {/* Shimmer overlay */}
//               <span className="shimmer absolute inset-0 opacity-70 group-hover:opacity-40 transition-opacity duration-500" />

//               {/* Main content */}
//               <div className="relative z-10 flex items-center justify-center space-x-8 lg:space-x-16 pointer-events-none">
//                 {/* Coffee */}
//                 <div className="relative">
//                   <Coffee
//                     size={64}
//                     className="text-accent drop-shadow-[0_0_6px_rgba(242,19,164,.4)]
//                      lg:w-20 lg:h-20 transition-transform duration-500
//                      group-hover:[transform:scale(1.15)_rotate(-6deg)]"
//                   />
//                   <span className="absolute inset-0 blur-2xl bg-accent/25 rounded-full scale-150" />
//                   <span className="absolute -top-2 -right-2 w-4 h-4 bg-accent/70 rounded-full animate-ping" />
//                 </div>

//                 {/* Plus */}
//                 <div
//                   className="text-secondary text-5xl lg:text-7xl font-black font-mono
//                       transition-transform duration-500 group-hover:rotate-[8deg]"
//                 >
//                   +
//                 </div>

//                 {/* Ethereum */}
//                 <div className="relative">
//                   <div
//                     className="w-16 h-16 lg:w-24 lg:h-24 rounded-2xl lg:rounded-3xl grid place-items-center
//                      bg-gradient-to-br from-primary via-secondary to-accent
//                      shadow-[0_0_12px_2px_rgba(178,13,175,.4)]
//                      transition-transform duration-500
//                      group-hover:[transform:rotate(18deg)_scale(1.12)]"
//                   >
//                     <span className="font-black text-white text-2xl lg:text-4xl font-mono">
//                       <svg fill="currentColor" class="h-[35px] w-[22px] opacity-85 hover:opacity-100" viewBox="0 0 115 182" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M57.5054 181V135.84L1.64064 103.171L57.5054 181Z" fill="#F0CDC2" stroke="#1616B4" stroke-linejoin="round"></path><path d="M57.6906 181V135.84L113.555 103.171L57.6906 181Z" fill="#C9B3F5" stroke="#1616B4" stroke-linejoin="round"></path><path d="M57.5055 124.615V66.9786L1 92.2811L57.5055 124.615Z" fill="#88AAF1" stroke="#1616B4" stroke-linejoin="round"></path><path d="M57.6903 124.615V66.9786L114.196 92.2811L57.6903 124.615Z" fill="#C9B3F5" stroke="#1616B4" strokeLinejoin="round"></path><path d="M1.00006 92.2811L57.5054 1V66.9786L1.00006 92.2811Z" fill="#F0CDC2" stroke="#1616B4" strokeLinejoin="round"></path><path d="M114.196 92.2811L57.6906 1V66.9786L114.196 92.2811Z" fill="#B8FAF6" stroke="#1616B4" strokeLinejoin="round"></path></svg>
//                     </span>
//                   </div>
//                   <span
//                     className="absolute inset-0 rounded-2xl lg:rounded-3xl blur-2xl opacity-30
//                          bg-gradient-to-br from-primary via-secondary to-accent"
//                   />
//                   <span
//                     className="absolute -top-2 -right-2 w-4 h-4 bg-primary/70 rounded-full animate-ping"
//                     style={{ animationDelay: "0.5s" }}
//                   />
//                 </div>
//               </div>

//               {/* Subtitle */}
//               <div className="mt-10 space-y-1.5 text-center">
//                 <p className="text-gray-200 font-bold text-lg lg:text-xl font-mono">
//                   Coffee&nbsp;+&nbsp;Ethereum&nbsp;=&nbsp;
//                   <span className="text-accent text-2xl lg:text-3xl">∞</span>
//                 </p>
//                 <p className="text-gray-500 text-sm lg:text-base font-medium">
//                   Decentralized tipping made&nbsp;simple
//                 </p>
//               </div>
//             </div>
//           </div>
