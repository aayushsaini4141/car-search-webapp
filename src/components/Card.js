import React from 'react';

export const Card = ({detail}) => {
  const {
      name,
      year,
      passengers,
      fuelType,
      mileage,
      transmission,
      price,
      image,
  } = detail
  return (
    <>
    <div className="w-[273px] justify-between mx-8 my-5">
      <div className="place-content-start">
        <div className="p-4 max-w-sm mx-auto bg-white border rounded-xl shadow-lg items-center space-x-1">
          <div>
            <img
              className="h-40 w-15 rounded-xl"
              src={image}
              alt=""
            />
          </div>
          <div>
            <div className="text-2xl font-medium mt-2">
              <div className="flex justify-between my-2 ">
                {name}
                <p className="text-slate-500 rounded-3xl border-dashed border-2 border-blue-500 flex items-center justify-center text-sm py-1 px-1">
                  {year}
                </p>
              </div>

              <div className="flex justify-between">
                <img className="h-5 w-4" src="../images/user.png" alt="img not supported" />
                <span className="text-slate-500 text-base mr-10 whitespace-nowrap">
                  {passengers} people
                </span>
                <img className="h-5 w-4" src="../images/gasoline-pump.png" alt="" />
                <p className="text-slate-500 text-base mr-10">{fuelType}</p>
              </div>
              <div className="flex justify-between mt-2 whitespace-nowrap">
                <img className="h-5 w-4" src="../images/speedometer.png" alt="" />
                <p className="text-slate-500 text-base mr-11">{mileage}</p>
                <img className="h-5 w-4" src="../images/steering-wheel.png" alt="" />
                <p className="text-slate-500 text-base mr-5">{transmission}</p>
              </div>
              <div className="border-t border-gray-300 my-4"></div>
              <div className="flex justify-between">
                <p className="p-1">${price}<span className="text-sm">/month</span></p>
                <img className="h-8 w-8 mt-2 text-white rounded-xl bg-sky-400 border flex items-center justify-center" src="../images/favorite.png" alt="" />
                <button className="bg-sky-400 text-white text-center text-base rounded-lg mt-2 p-1 hover:bg-white hover:text-black">Rent Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="grid  h-screen">
        <div className="p-4 max-w-sm mx-auto bg-white rounded-xl shadow-lg items-center space-x-1">
          <div>
            <img
              className="h-40 w-15 rounded-xl"
              src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div>
            <div className="text-2xl font-medium mt-2">
              <div className="flex justify-between my-2 ">
                Nissan GTR
                <p className="text-slate-500 rounded-3xl border-dashed border-2 border-blue-500 flex items-center justify-center text-sm py-1 px-1">
                  2021
                </p>
              </div>

              <div className="flex justify-between">
                <img className="h-5 w-4" src="../images/user.png" alt="img not supported" />
                <span className="text-slate-500 text-base mr-10">
                  2 people
                </span>
                <img className="h-5 w-4" src="../images/gasoline-pump.png" alt="" />
                <p className="text-slate-500 text-base mr-10">Hybrid</p>
              </div>
              <div className="flex justify-between mt-2">
                <img className="h-5 w-4" src="../images/speedometer.png" alt="" />
                <p className="text-slate-500 text-base mr-11">6.1km/1-l</p>
                <img className="h-5 w-4" src="../images/steering-wheel.png" alt="" />
                <p className="text-slate-500 text-base mr-5">Automatic</p>
              </div>
              <div className="border-t border-gray-300 my-4"></div>
              <div className="flex justify-between">
                <p className="p-1">$440<span className="text-sm">/month</span></p>
                <img className="h-8 w-8 mt-2 text-white rounded-xl bg-sky-400 border flex items-center justify-center" src="../images/favorite.png" alt="" />
                <button className="bg-sky-400 text-white text-center text-base rounded-lg mt-2 p-1 hover:bg-white hover:text-black">Rent Now</button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      </div>
    </>
  );
}

export default Card;
