import React from "react";
import Card from "./Card";

function CardGrid() {
  const cards = [
    {
      heading: "Automated Expense Tracking",
      description:
        "Eclipse automatically tracks your expenses and provides monthly report, in just a single click.",
    },

    {
      heading: "Automated Expense Tracking",
      description:
        "Eclipse automatically tracks your expenses and provides monthly report, in just a single click.",
    },
    {
      heading: "Automated Expense Tracking",
      description:
        "Eclipse automatically tracks your expenses and provides monthly report, in just a single click.",
    },
    {
      heading: "Automated Expense Tracking",
      description:
        "Eclipse automatically tracks your expenses and provides monthly report, in just a single click.",
    },
    {
      heading: "Automated Expense Tracking",
      description:
        "Eclipse automatically tracks your expenses and provides monthly report, in just a single click.",
    },
    {
      heading: "Automated Expense Tracking",
      description:
        "Eclipse automatically tracks your expenses and provides monthly report, in just a single click.",
    },
  ];

  return (
    <div className="grid grid-rows-2 grid-cols-3 gap-6">
      {cards.map((card) => (
        <Card heading={card.heading} desc={card.description} />
      ))}
    </div>
  );
}

export default CardGrid;
