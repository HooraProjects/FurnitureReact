import React from "react";
import Sofa from "./Sofa";

export default function Sofas() {
  const sofas = [
    {
      id: 1,
      name: "Lala Sofa",
      price: "2,195",
      img1: "/images/lalaSofa.png",
      img2: "/images/sofa2.png",
      quantity: 1,
    },
    {
      id: 2,
      name: "Rio Sofa",
      price: "2,295",
      img1: "/images/RioSofa.png",
      img2: "/images/riosofa2.png",
      quantity: 1,
    },
    {
      id: 3,
      name: "Nik Sofa",
      price: "4,495",
      img1: "/images/nikSofa.png",
      img2: "/images/sofa22.png",
      quantity: 1,
    },
    {
      id: 4,
      name: "Zavis Sofa",
      price: "2,695",
      img1: "/images/zavisSofa.png",
      img2: "/images/zavissofa2.png",
      quantity: 1,
    },
    {
      id: 5,
      name: "Dekay Sofa",
      price: "2,395",
      img1: "/images/dekaySofa.png",
      img2: "/images/dekaySofa2.png",
      quantity: 1,
    },
    {
      id: 6,
      name: "Rio Plush Sofa",
      price: "4,495",
      img1: "/images/rioPlushSofa.jpg",
      img2: "/images/rioPlushSofa2.png",
      quantity: 1,
    },
    {
      id: 7,
      name: "Rio Plush Modern Sofa",
      price: "2,995",
      img1: "/images/rioPlushModern.png",
      img2: "/images/rioPlushModern2.png",
      quantity: 1,
    },
    {
      id: 8,
      name: "Kaydan Sofa",
      price: "3,495",
      img1: "/images/kaydanSofa.png",
      img2: "/images/kaydanSofa2.png",
      quantity: 1,
    },
    {
      id: 9,
      name: "Bluemen Sofa",
      price: "2,995",
      img1: "/images/bluemenSofa.png",
      img2: "/images/bluemenSofa2.png",
      quantity: 1,
    },
    {
      id: 10,
      name: "Gio Sofa",
      price: "4,995",
      img1: "/images/gioSofa.png",
      img2: "/images/gioSofa2.png",
      quantity: 1,
    },
    {
      id: 11,
      name: "Mota Sofa",
      price: "2,395",
      img1: "/images/motaSofa.png",
      img2: "/images/motaSofa2.png",
      quantity: 1,
    },
  ];

  return (
    <div
      className="grid grid-cols-3 gap-4"
      style={{ backgroundColor: "#F6F6F2" }}
    >
      {sofas.map((sofa) => (
        <Sofa
          key={sofa.id}
          id={sofa.id}
          name={sofa.name}
          price={parseFloat(sofa.price.replace(/,/g, ""))}
          img1={sofa.img1}
          img2={sofa.img2}
          quantity={sofa.quantity} // Pass quantity as a number
        />
      ))}
    </div>
  );
}
