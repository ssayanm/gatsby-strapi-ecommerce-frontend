import React from "react";
import { FcAutomotive, FcCheckmark } from "react-icons/fc";
import { RiCarWashingLine } from "react-icons/ri";

export default [
  {
    id: 1,
    icon: <FcCheckmark className="service-icon" />,
    title: "Exterior Wash",
    url: "/contact",
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. `,
  },
  {
    id: 3,
    icon: <FcAutomotive className="service-icon" />,
    title: "Car Servicing",
    url: "/contact",
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
  },
  {
    id: 2,
    icon: <RiCarWashingLine className="service-icon" />,
    title: "Deluxe Wash / Full Wash",
    url: "/contact",
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
  },
];
