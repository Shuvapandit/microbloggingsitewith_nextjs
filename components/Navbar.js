import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <div class="navbar bg-slate-800  ">
        <div class="navbar-start ">
          <a class="uppercase text-slate-50 font-extrabold text-2xl">কি কেন কিভাবে</a>
        </div>

        <div class="navbar-end text-gray-100  ">
          <ul class="menu menu-horizontal  px-1 ">
            <li>
            <Link className="btn btn-active btn-ghost" href="/">Home</Link>
              
            </li>
            <li tabindex="0">
            <Link className="btn btn-active btn-ghost" href="/about">About</Link>
            </li>
            <li>
            <Link className="btn btn-active btn-ghost" href="">Contact us</Link>
              
            </li>
          </ul>
        </div>

        
      </div>
    </div>
  );
}
