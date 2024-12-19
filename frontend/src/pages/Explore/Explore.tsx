import React from "react";
import NewsSection from "../../components/NewsSection/NewsSection";
import FlightPreview from "../../components/FlightPreview/FlightPreview";
import BookingSection from "../../components/BookingSection/BookingSection";
import Layout from "../../components/Layout/Layout";
import GenericCard from "../../components/GenericCard/GenericCard";

import image1 from '../../assets-test/Images/plane3.webp';
import image2 from '../../assets-test/Images/hanoi.jpg';
import image6 from '../../assets-test/Images/seoul.jpg';
import image7 from '../../assets-test/Images/paris.jpg';
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <Layout>
      <div className="w-[1016px] mx-[16vw] pt-4"> <p className="text-3xl text-golden font-bold">Explore</p></div>
      <div className="flex flex-col items-center my-4">
        <GenericCard image={image2} title={"Destination"} link={"destination"} width={"66.3vw"} />
        <div className="flex justify-center items-center my-4 gap-4">
          <GenericCard image={image6} title={"Experience"} link={"experience"} width={"32.7vw"}/>
          <GenericCard image={image7} title={"Offer"} link={"offer"} width={"32.7vw"}/>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;