import React from "react";
import styled from "styled-components";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

const TeamCardList = () => {
  const cardsData = [
    {
      title: "Dr John Doe",
      subtitle: "MBBS, Mangalore",
      tracks:
        "I love to save lives and that gives me passion to wake up every morning",
      imageUrl: "./svgs/team1.jpg",
    },
    {
      title: "Dr John Doe",
      subtitle: "MBBS, Mangalore",
      tracks:
        "I love to save lives and that gives me passion to wake up every morning",
      imageUrl: "./svgs/team2.jpg",
    },
    {
      title: "Dr John Doe",
      subtitle: "MBBS, Mangalore",
      tracks:
        "I love to save lives and that gives me passion to wake up every morning",
      imageUrl: "./svgs/team3.jpg",
    },
    {
      title: "Dr John Doe",
      subtitle: "MBBS, Mangalore",
      tracks:
        "I love to save lives and that gives me passion to wake up every morning",
      imageUrl: "./svgs/team4.jpg",
    },
    {
      title: "Dr John Doe",
      subtitle: "MBBS, Mangalore",
      tracks:
        "I love to save lives and that gives me passion to wake up every morning",
      imageUrl: "./svgs/team5.jpg",
    },
    {
      title: "Dr John Doe",
      subtitle: "MBBS, Mangalore",
      tracks:
        "I love to save lives and that gives me passion to wake up every morning",
      imageUrl: "./svgs/team6.jpg",
    },
    {
      title: "Dr John Doe",
      subtitle: "MBBS, Mangalore",
      tracks:
        "I love to save lives and that gives me passion to wake up every morning",
      imageUrl: "./svgs/team7.jpg",
    },
    {
      title: "Dr John Doe",
      subtitle: "MBBS, Mangalore",
      tracks:
        "I love to save lives and that gives me passion to wake up every morning",
      imageUrl: "./svgs/team8.jpg",
    },
  ];

  return (
    <StyledCardWrapper className="grid grid-cols-2 md:grid-cols-4 gap-4  py-6 ">
      {cardsData.map((card, index) => (
        <div key={index}>
          <StyledCard className="py-4 pb-0 px-4 flex-col items-center">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={card.imageUrl}
              width={270}
            />
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold pt-2">{card.title}</p>
              <p className="text-tiny uppercase font-bold pt-2">
                {card.subtitle}
              </p>
              <small className="text-default-500 pt-2">
                {card.tracks} Tracks
              </small>
            </CardHeader>
            <CardBody className="overflow-visible py-2"></CardBody>
          </StyledCard>
        </div>
      ))}
    </StyledCardWrapper>
  );
};

export default TeamCardList;

const StyledCard = styled(Card)`
  background-color: #f4f8ff;
`;

const StyledCardWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;
