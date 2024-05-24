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

export default function Home() {
  return (
    <main>
      <Hero />
      <Headings
        title="Our Services"
        description=" Lorem ipsum dolor sit amet consectetur. Faucibus arcu ultrices gravida
        et dictumst duis gravida odio semper. Integer potenti viverra et
        interdum lobortis amet nisi lorem. Amet sed sit risus dictum dolor. Sem
        enim eget ac morbi placerat. interdum lobortis amet nisi lorem. Amet sed"
      />

      <ServicesCard />
      <StyledClinicWrapper className="mt-10 pb-12">
        <Headings title="Our Clinic" />
        <OurClinicSlider />
      </StyledClinicWrapper>

      <Headings title="Meet Our Team" description=" Lorem ipsum dolor sit amet consectetur. Faucibus arcu ultrices gravida
        et dictumst duis gravida odio semper. Integer potenti viverra et
        interdum lobortis amet nisi lorem. Amet sed sit risus dictum dolor. Sem
        enim eget ac morbi placerat. interdum lobortis amet nisi lorem. Amet sed" />
      <TeamCArd />
      <Headings title="Contact Us" />
      <StyledMapParent className="flex gap-3 justify-center">
        <StyledMapWrapper>
          <Map />
          <Address />
        </StyledMapWrapper>
        <StyledMapWrapper>
          <Map />
          <Address />
        </StyledMapWrapper>
        <StyledMapWrapper>
          <Map />
          <Address />
        </StyledMapWrapper>
      </StyledMapParent>
      <Headings title="FAQs" />
      <StyledFaqWrapper>
        <FAQS />
        <FAQS />
        <FAQS />
        <FAQS />
        <FAQS />
        <FAQS />
        <FAQS />
        <FAQS />
      </StyledFaqWrapper>
      <div className="mt-20" style={{ background: "#F4F8FF" }}>
        <Headings title="Send Us An Inquiry" />
        <SendUsInquiry />
      </div>
      <div>
        <Headings title="Our Trusted Partners" />
        <Partners />
      </div>
    </main>
  );
}

const StyledServicesCardWrapper = styled.div`
  background-color: orange;
`;
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
