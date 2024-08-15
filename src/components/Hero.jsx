import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div>
      <div className="hero bg-base-100 py-40 my-8">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src=""
            className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Ingliz tili Endi biz bilan ancha oson</h1>
            <p className="py-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis non, necessitatibus modi nulla consequatur magnam cum saepe cupiditate cumque est.
            </p>
            <button className="btn btn-info"><Link to="/quizes">Quizlar</Link></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
