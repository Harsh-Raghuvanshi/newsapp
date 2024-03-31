import React from "react";
import Buttonicon from "./Buttonicon";

import {
  faCoffee,
  faNewspaper,
  faBitcoinSign,
  faFilm,
  faVideo,
  faCalendar,
  faHeartPulse,
  faHeartBroken,
  faSpaceShuttle,
  faFaceLaugh,
  faIndustry,
  faIndianRupeeSign,
  faCar,
  faVirus,
  faChalkboardTeacher,
  faLeaf,
  faCarCrash,
  faAtlas,
} from "@fortawesome/free-solid-svg-icons";

export default function Trendingnews() {
  return (
    <div className="">
      <Buttonicon types={faCoffee} iconname="Coffee" />
      <Buttonicon types={faNewspaper} iconname="Trending" />
      <Buttonicon types={faBitcoinSign} iconname="Bitcoin" />
      <Buttonicon types={faSpaceShuttle} iconname="Space" />
      <Buttonicon types={faFaceLaugh} iconname="funny" />
      <Buttonicon types={faIndustry} iconname="Industry" />
      <Buttonicon types={faIndianRupeeSign} iconname="Financial" />
      <Buttonicon types={faFilm} iconname="Films" />
      <Buttonicon types={faCalendar} iconname="Dates" />
      <Buttonicon types={faHeartBroken} iconname="Distressing" />
      <Buttonicon types={faHeartPulse} iconname="Health" />
      <Buttonicon types={faCar} iconname="Vechiles" />
      <Buttonicon types={faVideo} iconname="Video" />
      <Buttonicon types={faChalkboardTeacher} iconname="Learning" />
      <Buttonicon types={faLeaf} iconname="Environment" />
      <Buttonicon types={faAtlas} iconname="Atlas" />
      <Buttonicon types={faVirus} iconname="Caution" />
      <Buttonicon types={faCarCrash} iconname="Accidents" />
    </div>
  );
}
