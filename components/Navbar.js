import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <div class="navbar bg-slate-800 ">
        <div class="navbar-start">
          <a class="uppercase text-red-600 font-extrabold text-3xl">কি কেন কিভাবে</a>
        </div>

        <div class="navbar-end text-gray-100">
          <ul class="menu menu-horizontal px-1 ">
            <li>
            <Link href="/home">Home</Link>
              
            </li>
            <li tabindex="0">
            <Link href="/about">About</Link>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>

        
      </div>
    </div>
  );
}
