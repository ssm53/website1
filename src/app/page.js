"use client";
import styled from "styled-components";
import Hero from "@/components/hero";
import Headings from "@/components/headings";
import ServicesCard from "@/components/services_card";
import OurClinicSlider from "@/components/our_clinic_slider";
import TeamCArd from "@/components/team_card";
import Map from "@/components/map";
import Address from "@/components/address";
import FAQS from "@/components/faqs";
import SendUsInquiry from "@/components/send-us-inquiry";
import Partners from "@/components/partners";

const faqs = [
  {
    question: "How long has Klinik Keluarga Desa been running?",
    answer: "We have been serving the community since 2002",
  },
  {
    question: "Do you accept bookings?",
    answer: "No, we only accept walk-ins.",
  },
  {
    question: "Are your doctors experienced?",
    answer:
      "Yes, our main three doctors have a combined professional history of over 90 years!",
  },
  {
    question: "Do you accept new patients?",
    answer: "Yes, new patients are welcome!",
  },
  {
    question: "Who owns Klinik Keluarga Desa",
    answer:
      "Dr Suresh and Dr Ramesh are the owners of Klinik Keluarga Desa. Over the last few years, Dr. Usharani is our trusted senior doctor, covering most morning slots (9AM - 1PM)",
  },
];

export default function Home() {
  return (
    <main style={{ margin: "0 auto" }}>
      <div id="home">
        <Hero />
      </div>
      <div id="services">
        <Headings
          title="Our Services"
          description=" Welcome to our clinic, where your health and well-being are our top priorities. We offer a wide range of medical services to meet all your healthcare needs, delivered by a team of experienced and compassionate professionals. Explore our services below to see how we can support you on your journey to optimal health."
        />
        <ServicesCard />
      </div>
      <StyledClinicWrapper className="mt-10 pb-12">
        <Headings title="Our Clinic" />
        <OurClinicSlider />
      </StyledClinicWrapper>
      <div id="ourteam">
        <Headings
          title="Meet Our Team"
          description=" At our clinic, we believe that exceptional healthcare starts with an exceptional team. Our doctors, nurses, and support staff are not only highly skilled and experienced but also deeply committed to providing compassionate and personalized care to every patient. Get to know the professionals who make our clinic a trusted healthcare provider in the community."
        />
        <TeamCArd />
      </div>
      <StyledContactUsWrapper id="contactus" className="py-10">
        <Headings title="Contact Us" />
        <StyledMapParent className="flex flex-col items-center gap-3 justify-center">
          <StyledMapWrapper>
            <Map />
            <Address />
          </StyledMapWrapper>
          {/* <StyledMapWrapper>
            <Map />
            <Address />
          </StyledMapWrapper>
          <StyledMapWrapper>
            <Map />
            <Address />
          </StyledMapWrapper> */}
        </StyledMapParent>
      </StyledContactUsWrapper>
      <div id="faqs">
        <Headings title="FAQs" />
        <StyledFaqWrapper>
          {faqs.map((faq, index) => (
            <FAQS key={index} question={faq.question} answer={faq.answer} />
          ))}
        </StyledFaqWrapper>
      </div>
      {/* <div className="mt-20" style={{ background: "#F4F8FF" }}>
        <Headings title="Send Us An Inquiry" />
        <SendUsInquiry />
      </div> */}
      <div>
        <Headings title="Our Trusted Partners" />
        <Partners />
      </div>
    </main>
  );
}

const StyledServicesCardWrapper = styled.div``;
const StyledClinicWrapper = styled.div`
  background-color: #f4f8ff;
`;

const StyledMapParent = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;

const StyledMapWrapper = styled.div`
  min-width: 30%;
  @media only screen and (max-width: 768px) {
    width: 95%;
  }
`;
const StyledFaqWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0 20px;
`;

const StyledContactUsWrapper = styled.div`
  background-color: #f1f1f1;
`;
