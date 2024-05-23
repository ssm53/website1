import React, { useState } from "react";
import styled from "styled-components";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { CiHospital1 } from "react-icons/ci";
const ServiceCard = ({ icon, header, body }) => {
  return (
    <div
      className="flex justify-center"
      style={{
        margin: "2px",
        height: "auto",
        margin: "0 auto",
      }}
    >
      <StyledCard className=" p-7 my-16 ">
        <CardHeader className="flex flex-col justify-center items-center">
          {icon}
          <StyledHeading>{header}</StyledHeading>
        </CardHeader>
        <CardBody className="text-center">
          <p>{body}</p>
        </CardBody>
        <CardFooter className="flex justify-center pt-8">
          <StyledButton>Learn More</StyledButton>
        </CardFooter>
      </StyledCard>
    </div>
  );
};

const ServicesCard = () => {
  const [showAll, setShowAll] = useState(false);
  const cardsData = [
    {
      icon: <CiHospital1 size={80} />,
      header: "Services Overview 1",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut velit dolorem dignissimos et neque id cupiditate aspernatur obcaecati",
    },
    {
      icon: <CiHospital1 size={80} />,
      header: "Services Overview 1",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut velit dolorem dignissimos et neque id cupiditate aspernatur obcaecati",
    },
    {
      icon: <CiHospital1 size={80} />,
      header: "Services Overview 1",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut velit dolorem dignissimos et neque id cupiditate aspernatur obcaecati",
    },
    {
      icon: <CiHospital1 size={80} />,
      header: "Services Overview 1",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut velit dolorem dignissimos et neque id cupiditate aspernatur obcaecati",
    },
    {
      icon: <CiHospital1 size={80} />,
      header: "Services Overview 1",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut velit dolorem dignissimos et neque id cupiditate aspernatur obcaecati",
    },
    {
      icon: <CiHospital1 size={80} />,
      header: "Services Overview 1",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut velit dolorem dignissimos et neque id cupiditate aspernatur obcaecati",
    },
    {
      icon: <CiHospital1 size={80} />,
      header: "Services Overview 1",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut velit dolorem dignissimos et neque id cupiditate aspernatur obcaecati",
    },
    {
      icon: <CiHospital1 size={80} />,
      header: "Services Overview 1",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut velit dolorem dignissimos et neque id cupiditate aspernatur obcaecati",
    },
    {
      icon: <CiHospital1 size={80} />,
      header: "Services Overview 1",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut velit dolorem dignissimos et neque id cupiditate aspernatur obcaecati",
    },
    {
      icon: <CiHospital1 size={80} />,
      header: "Services Overview 1",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut velit dolorem dignissimos et neque id cupiditate aspernatur obcaecati",
    },
  ];

  const handleToggleCards = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };
  return (
    <>
      <ServicesGrid>
        {showAll
          ? cardsData.map((card, index) => (
              <ServiceCard
                key={index}
                icon={card.icon}
                header={card.header}
                body={card.body}
              />
            ))
          : cardsData
              .slice(0, 6)
              .map((card, index) => (
                <ServiceCard
                  key={index}
                  icon={card.icon}
                  header={card.header}
                  body={card.body}
                />
              ))}
      </ServicesGrid>
      <div className="flex justify-center">
        <StyledLoadMoreButton className="" onClick={handleToggleCards}>
          {showAll ? "Show Less" : "More Services"}
        </StyledLoadMoreButton>
      </div>
    </>
  );
};

export default ServicesCard;

const StyledHeading = styled.h2`
  font-size: 20px;
  font-weight: 500;
`;

const StyledCard = styled(Card)`
  width: 90%;
  max-width: 400px;
  min-width: 230px;
  background-color: #f4f8ff;
`;

const StyledButton = styled(Button)`
  width: 10rem;
  height: 3rem;
  border: 2px solid #003366;
  color: #003366;
  background-color: transparent;
  font-weight: 600;
`;

const ServicesGrid = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
const StyledLoadMoreButton = styled(Button)`
  width: 200px;
  height: 50px;
  background-color: #007bff;
`;
