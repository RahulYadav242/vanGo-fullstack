import React from "react"
import bgImg from '../assets/images/about-hero.png'
import { Link } from "react-router-dom"

export default function About() {
  return (
    <div className="flex flex-col items-center gap-10 pt-10 px-4 py-10">
      
      {/* ✅ Square & smaller image */}
      <img
        src={bgImg}
        alt="Van on a road trip"
        className="w-80 h-80 object-cover rounded-xl shadow-lg mt-0"
      />

      <div className="text-center max-w-3xl space-y-4">
        <h1 className="text-4xl font-bold">Don’t squeeze in a sedan when you could relax in a van.</h1>
        <p className="text-base-content/80">
          Our mission is to enliven your road trip with the perfect travel van rental.
          Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        
      </div>

      <div className="bg-base-200 rounded-lg p-6 shadow-md text-center space-y-4">
        <h2 className="text-2xl font-semibold">
          Your destination is waiting.
          <br />
          Your van is ready.
        </h2>
        <Link to="/vans" className="btn btn-primary">Explore our vans</Link>
      </div>
    </div>
  )
}
