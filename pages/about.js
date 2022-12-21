import Link from "next/link";
import img1 from "../pages/images/pele.jpg"
import img2 from "../pages/images/3_Ronaldinho.jpg"
import img3 from "../pages/images/roberto.jpg"
import React from "react";
import Image from "next/image";

function about() {
  return (
    <div className="mb-80">
     {/*  <div className="ml-12 mt-5">
        
          {" "}
          <ol class="list-decimal">
            <li className="text-3xl font-semibold"><Link href="/react">React In Next Level...</Link></li>
            <li>fiee</li>
          </ol>
        
        <Link href="">
          {" "}
          <ol class="list-decimal">
            <li>React In Next Level...</li>
          </ol>
        </Link>
        <ul class="list-disc">
          <li>
            Now this is a story all about how, my life got flipped-turned upside
            down
          </li>
        </ul>

        <li>
          Now this is a story all about how, my life got flipped-turned upside
          down
        </li>
      </div>

      <h1>Next js</h1> */}
    <div className="grid lg:grid-cols-3 sm:grid-cols-1 sm:gap-20 lg:gap-4 ml-7  mt-3">
  
  <div class="card w-96 bg-base-100 shadow-xl image-full">
  <figure><Image src={img1} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">পেলে</h2>
    <p> ফুটবলের বাদশা পেলে ক্রিকেটে যেমন ব্রাডম্যান , হকিতে যেমন ধ্যানচাঁদ , তেমনই ফুটবলের বাদশা হলো পেলে (Pele) । </p>
    <div className="card-actions justify-end ">
      <Link href="/pele">আরো</Link>
    </div>
  </div>
</div>
  
  
  {/* 2 */}
  <div class="card w-96 bg-base-100 shadow-xl image-full">
  <figure><Image src={img2} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">
রোনালদিনহো</h2>
    <p> রোনালদিনহো (Ronaldinho) হলেন ব্রাজিলের বিখ্যাত ফুটবল খেলোয়াড়। ইদানীং কালের সবচেয়ে আকর্ষণীয় ফুটবলার হিসেবে তিনি স্বীকৃত। </p>
    <div className="card-actions justify-end ">
      <Link href="/">আরো</Link>
    </div>
  </div>
</div>
{/* 3 */}
<div class="card w-96 bg-base-100 shadow-xl image-full">
  <figure><Image src={img3} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">রবার্তো কার্লোস</h2>
    <p> রোবের্তো কার্লোস, পুরো নাম রোবের্তো কার্লোস দা সিলভা (জন্ম এপ্রিল ১০, ১৯৭৩, সাও পাওলো), একজন ব্রাজিলীয় ফুটবলার। </p>
    <div className="card-actions justify-end ">
      <Link href="/pele">আরো</Link>
    </div>
  </div>
</div>
{/* 4 */}
<div class="card w-96 bg-base-100 shadow-xl image-full">
  <figure><Image src={img1} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">পেলে</h2>
    <p> ফুটবলের বাদশা পেলে ক্রিকেটে যেমন ব্রাডম্যান , হকিতে যেমন ধ্যানচাঁদ , তেমনই ফুটবলের বাদশা হলো পেলে (Pele) । </p>
    <div className="card-actions justify-end ">
      <Link href="/pele">আরো</Link>
    </div>
  </div>
</div>
</div>
    </div>
  );
}

export default about;
