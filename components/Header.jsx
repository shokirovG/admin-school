"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

import React, { useEffect } from "react";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const date = new Date();
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            Bosh menu
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    pathname.includes("/sentabr") ? "active" : ""
                  } `}
                  href="/sentabr"
                >
                  Sentabr
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  className={`nav-link ${
                    pathname.includes("/oktabr") ? "active" : ""
                  } `}
                  href="/oktabr"
                >
                  Oktabr
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    pathname.includes("/noyabr") ? "active" : ""
                  } `}
                  href="/noyabr"
                >
                  Noyabr
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    pathname.includes("/dekabr") ? "active" : ""
                  } `}
                  href="/dekabr"
                >
                  Dekabr
                </Link>
              </li>
            </ul>
          </div>
          <p>
            {date.getDate() +
              "/" +
              parseInt(parseInt(date.getMonth()) + 1) +
              "/" +
              date.getFullYear()}
          </p>
        </div>
      </nav>
      <button
        type="button"
        className={`ortga btn btn-secondary ${
          pathname === "/" ? "d-none" : ""
        }`}
        onClick={() => {
          router.back();
        }}
      >
        Ortga
      </button>
    </>
  );
};

export default Header;
