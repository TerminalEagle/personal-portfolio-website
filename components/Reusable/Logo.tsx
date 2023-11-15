import Image from "next/image";
import React from "react";
import PortfolioLogo from "../../public/logo.svg";

export const Logo = () => {
  return (
    <div>
      <Image src={PortfolioLogo} alt="logo of the portfolio" />
    </div>
  );
};
