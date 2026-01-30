"use client";

import { useEffect, useState } from "react";
import HeroScrollIndicator from "./HeroScrollIndicator";

 function ClientScrollIndicator() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <HeroScrollIndicator scrolled={scrolled} />;
}
export default ClientScrollIndicator