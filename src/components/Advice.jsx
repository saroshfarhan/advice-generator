import React from "react";
import dice from "../assets/icon-dice.svg";
import deskSeperator from "../assets/pattern-divider-desktop.svg";
import mobSeperator from "../assets/pattern-divider-mobile.svg";

function Advice(props) {
  return (
    <div className="relative mx-auto flex h-[312px] w-[342px] flex-col items-center justify-evenly rounded-xl bg-dark_grayish_blue align-middle md:h-[334px] md:w-[540px] lg:h-[334px] lg:w-[540px]">
      <p className="text-center text-sm font-semibold uppercase tracking-[.25rem] text-neon_green">
        Advice #{props.id}
      </p>
      <h2>
        <blockquote className="px-8 text-center text-xl font-bold text-light_cyan lg:px-10 lg:text-2xl">
          "{props.advice}"
        </blockquote>
      </h2>
      <section className="grid items-center justify-center text-light_cyan">
        <img
          src={deskSeperator}
          alt="desktop seperator"
          className="hidden md:block lg:block"
        />
        <img
          src={mobSeperator}
          alt="mobile seprator"
          className="mx-auto md:hidden lg:hidden"
        />
      </section>
      <button
        type="button"
        onClick={props.handleClick}
        className=" absolute top-[90%] flex h-[60px] w-[60px] items-center justify-center rounded-full bg-neon_green  hover:shadow-[0_0px_50px_0px] hover:shadow-neon_green"
      >
        <img src={dice} alt="dice icon" />
      </button>
    </div>
  );
}

// hover:shadow-[0px_0px_0px_10px_rgba(0,0,0,0.3)]

export default Advice;
