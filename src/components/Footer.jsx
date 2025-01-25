import React from "react";
import { GrFacebookOption } from "react-icons/gr";
import { IoLogoInstagram } from "react-icons/io5";
import { FaPinterestP } from "react-icons/fa";

export default function Footer() {
  return (
    <div
      style={{ backgroundColor: "#F6F6F2" }}
      className="p-8 space-y-8 md:space-y-0 flex flex-col md:grid md:grid-cols-4 gap-8"
    >
      {/* Newsletter Section */}
      <div className="flex flex-col">
        <h1 className="text-2xl md:text-3xl text-gray-400 mb-4">
          Join our Newsletter
        </h1>
        <p className="text-gray-400 mb-4">
          Join for 5% off your first order, new releases, and more.
        </p>
        <input
          type="email"
          placeholder="E-mail"
          className="placeholder:text-slate-400 block bg-white border w-full max-w-md mb-4 p-4 border-slate-300 rounded-md shadow-sm focus:outline-none"
        />
        <input
          type="number"
          placeholder="Cell Number (Optional)"
          className="placeholder:text-slate-400 block bg-white border w-full max-w-md mb-4 p-4 border-slate-300 rounded-md shadow-sm focus:outline-none"
        />
        <div className="flex text-gray-500 space-x-4 mt-8">
          <GrFacebookOption className="w-6 h-6 cursor-pointer" />
          <IoLogoInstagram className="w-6 h-6 cursor-pointer" />
          <FaPinterestP className="w-6 h-6 cursor-pointer" />
        </div>
      </div>

      {/* Explore Section */}
      <div className="flex flex-col">
        <h4 className="text-lg font-semibold mb-4">Explore</h4>
        <ul>
          <li className="text-gray-400 mb-2">
            <a href="#">Our Story</a>
          </li>
          <li className="text-gray-400 mb-2">
            <a href="#">Craftsmanship</a>
          </li>
          <li className="text-gray-400 mb-2">
            <a href="#">Lookbook</a>
          </li>
          <li className="text-gray-400 mb-2">
            <a href="#">Blog and Home Tours</a>
          </li>
          <li className="text-gray-400 mb-2">
            <a href="#">Giving Back</a>
          </li>
          <li className="text-gray-400 mb-2">
            <a href="#">Certifications</a>
          </li>
        </ul>
      </div>

      {/* Helpful Tools Section */}
      <div className="flex flex-col">
        <h4 className="text-lg font-semibold mb-4">Helpful Tools</h4>
        <ul>
          <li className="text-gray-400 mb-2">
            <a href="#">FAQ</a>
          </li>
          <li className="text-gray-400 mb-2">
            <a href="#">Reviews</a>
          </li>
          <li className="text-gray-400 mb-2">
            <a href="#">Comfort Guide</a>
          </li>
          <li className="text-gray-400 mb-2">
            <a href="#">Product Care</a>
          </li>
          <li className="text-gray-400 mb-2">
            <a href="#">Shipping</a>
          </li>
          <li className="text-gray-400 mb-2">
            <a href="#">Financing</a>
          </li>
          <li className="text-gray-400 mb-2">
            <a href="#">Trade Program</a>
          </li>
        </ul>
      </div>

      {/* Support Section */}
      <div className="flex flex-col">
        <h4 className="text-lg font-semibold mb-4">Support</h4>
        <ul>
          <li className="text-gray-400 mb-2">
            <a href="#">Contact</a>
          </li>
          <li className="text-gray-400 mb-2">
            <a href="#">Free Design Advice</a>
          </li>
          <li className="text-gray-400 mb-2">
            <a href="#">Order Tracking</a>
          </li>
          <li className="text-gray-400 mb-2">
            <a href="#">Warranty</a>
          </li>
          <li className="text-gray-400 mb-2">
            <a href="#">30-Day Trial and Returns</a>
          </li>
          <li className="text-gray-400 mb-2">
            <a href="#">Phone: (323) 801-6892</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
