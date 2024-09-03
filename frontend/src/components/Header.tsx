import React from 'react'

function Header() {
  return (
    <div className="border-2 border-gray-200 h-10 font-light text-sm text-gray-500">
        <ul className="flex gap-4 ml-64">
            <li className="text-gray-950">ALL CATEGORIES</li>
            <li>Cars</li>
            <li>Motorcycles</li>
            <li>Mobile Phones</li>
            <li>ForSale:Houses & Apartments</li>
            <li>Scooters</li>
            <li>Commercial & Other Vehicles</li>
            <li>For Rent:Houses & Apartments</li>
        </ul>
    </div>
  )
}

export default Header