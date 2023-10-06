import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SpeedIcon from '@mui/icons-material/Speed';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
export const Card = ({ detail }) => {
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

                  <PeopleAltIcon className="h-5 w-4 text-sky-400" />
                  <span className="text-slate-500 text-base mr-10 whitespace-nowrap">
                    {passengers} people
                  </span>
                  <LocalGasStationIcon className="h-5 w-4 text-sky-400" />

                  <p className="text-slate-500 text-base mr-10">{fuelType}</p>
                </div>
                <div className="flex justify-between mt-2 whitespace-nowrap">

                  <SpeedIcon className="h-5 w-4 text-sky-400" />
                  <p className="text-slate-500 text-base mr-11">{mileage}</p>

                  <DirectionsCarIcon className="h-5 w-4 text-sky-400" />
                  <p className="text-slate-500 text-base mr-5">{transmission}</p>
                </div>
                <div className="border-t border-gray-300 my-4"></div>
                <div className="flex justify-between">
                  <p className="p-1">${price}<span className="text-sm">/month</span></p>
                  <FavoriteBorderIcon className="h-10 mt-3 rounded-lg text-white bg-sky-400 border hover:bg-white hover:text-black hover:text-red-500 flex items-center justify-center" />


                  <button className="bg-sky-400 text-white text-center text-base rounded-lg mt-2 p-1 hover:bg-white hover:text-black">Rent Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
