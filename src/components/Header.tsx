"use client";

import Link from "next/link";
import { JSX } from "react";

export default function Header(): JSX.Element {
  return (
    <header className="navbar">
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#projects">Projects</Link>
          </li>
          <li>
            <Link href="/upload">Upload</Link>
          </li>
        </ul>
      </nav>

      <style jsx>{`
        .navbar {
          background: #111;
          padding: 10px 20px;
        }

        nav ul {
          list-style: none;
          display: flex;
          gap: 20px;
          margin: 0;
          padding: 0;
        }

        nav li a {
          color: #fff; /* Chữ trắng sáng */
          text-decoration: none;
          font-weight: bold;
          transition: color 0.3s ease, transform 0.3s ease;
        }

        nav li a:hover {
          color: #00ffff; /* Màu sáng cho hover */
          transform: scale(1.1); /* Tạo hiệu ứng phóng to */
        }
      `}</style>
    </header>
  );
}
