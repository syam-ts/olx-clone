import { useState } from "react";

const Header = () => {

   const [isCategory, setIsCategory] = useState(false)

  return (
    <div className="border-2 border-gray-200 h-10 pt-2 font-light text-sm text-gray-500">
      <ul className="flex gap-4 ml-64">
        <li className="text-gray-950 flex">
          ALL CATEGORIES
          {isCategory ? (
  <img
    className="w-6"
    src="../arrowhead-up.png"
    onMouseEnter={() => setIsCategory(false)}
    onMouseLeave={() => setIsCategory(true)}
  />
) : (
  <img
    className="w-6"
    src="../down-arrow.png"
    onMouseEnter={() => setIsCategory(true)}
    onMouseLeave={() => setIsCategory(false)}
  />
)}

         { isCategory &&
          <ul className="bg-white absolute flex olx-font gap-52 p-5 mt-6">
            <div>
              <ul>
                <li>
                 <span className="font-bold"> Properties</span>
                  <ul>
                    <li>For Sale: Houses & Apartments</li>
                    <li>For Rent: Houses & Apartments</li>
                    <li>Lands & Plots</li>
                    <li>For Rent: Shops & Offices</li>
                    <li>For Sale: Shops & Offices</li>
                    <li>PG & Guest Houses</li>
                  </ul>
                </li>
                <li>
                  Mobiles
                  <ul>
                    <li>Mobile Phones</li>
                    <li>Accessories</li>
                    <li>Tablets</li>
                  </ul>
                </li>
                <li>Cars</li>
              </ul>
              <ul>
                    <li>
                      Bikes
                      <ul>
                        <li>Motorcycles</li>
                        <li>Scooters</li>
                        <li>Spare Parts</li>
                      </ul>
                    </li>
                    <li>Bicycles</li>
                  </ul>
                  <ul>
                    <li>
                      Bikes
                      <ul>
                        <li>Cycle</li>
                        <li>Tempo</li>
                        <li>Old Parts</li>
                      </ul>
                    </li>
                    <li>Auto</li>
                  </ul>
            </div>
            <div>
              <ul>
                <li>
                <span className="font-bold"> Jobs</span>
                  <ul>
                    <li>Data entry & Back office</li>
                    <li>Sales & Marketing</li>
                    <li>BPO & Telecaller</li>
                    <li>Driver</li>
                    <li>Office Assistant</li>
                    <li>Delivery & Collection</li>
                    <li>Teacher</li>
                    <li>Cook</li>
                    <li>Receptionist & Front office</li>
                    <li>Operator & Technician</li>
                    <li>IT Engineer & Developer</li>
                    <li>Hotel & Travel Executive</li>
                    <li>Accountant</li>
                    <li>Designer</li>
                    <li>Other Jobs</li>
                  </ul>
                </li>
                <li>
                  Vehicles
                  <ul>
                    <li>
                      Bikes
                      <ul>
                        <li>Motorcycles</li>
                        <li>Scooters</li>
                        <li>Spare Parts</li>
                      </ul>
                    </li>
                    <li>Bicycles</li>
                  </ul>
                </li>
              </ul>
            </div>
<div>
<ul>
<span className="font-bold"> Electronics & Appliances</span>
  <li>
    <ul>
      <li>TVs, Video - Audio</li>
      <li>Kitchen & Other Appliances</li>
      <li>Computers & Laptops</li>
      <li>Cameras & Lenses</li>
      <li>Games & Entertainment</li>
      <li>Fridges</li>
      <li>Computer Accessories</li>
      <li>Hard Disks, Printers & Monitors</li>
      <li>ACs</li>
      <li>Washing Machines</li>
    </ul>
  </li>
  <li>Vehicles
    <ul>
      <li>Commercial Vehicles & Spares</li>
      <li>Commercial & Other Vehicles</li>
      <li>Spare Parts</li>
    </ul>
  </li>
  <li>Furniture
    <ul>
      <li>Sofa & Dining</li>
      <li>Beds & Wardrobes</li>
      <li>Home Decor & Garden</li>
      <li>Kids Furniture</li>
      <li>Other Household Items</li>
    </ul>
  </li>
  <li>Fashion
    <ul>
      <li>Men</li>
      <li>Women</li>
      <li>Kids</li>
    </ul>
  </li>
</ul>
</div>

<div>
<ul>
  <span className="font-bold">Books, Sports & Hobbies</span>
  <li>
    <ul>
      <li>Books</li>
      <li>Gym & Fitness</li>
      <li>Musical Instruments</li>
      <li>Sports Equipment</li>
      <li>Other Hobbies</li>
    </ul>
  </li>
  <li>Pets
    <ul>
      <li>Fishes & Aquarium</li>
      <li>Pet Food & Accessories</li>
      <li>Dogs</li>
      <li>Other Pets</li>
    </ul>
  </li>
  <li>Services
    <ul>
      <li>Education & Classes</li>
      <li>Tours & Travel</li>
      <li>Electronics Repair & Services</li>
      <li>Health & Beauty</li>
      <li>Home Renovation & Repair</li>
      <li>Cleaning & Pest Control</li>
      <li>Legal & Documentation Services</li>
      <li>Packers & Movers</li>
      <li>Other Service</li>
    </ul>
  </li>
</ul>
</div>

          </ul> }
        </li>
        <li>Cars</li>
        <li>Motorcycles</li>
        <li>Mobile Phones</li>
        <li>ForSale:Houses & Apartments</li>
        <li>Scooters</li>
        <li>Commercial & Other Vehicles</li>
        <li>For Rent:Houses & Apartments</li>
      </ul>
    </div>
  );
};

export default Header;
