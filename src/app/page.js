'use client'
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

export default function Home() {
  return (
    <main >
      <Hero />
      <Headings title="Our Services" description=" Lorem ipsum dolor sit amet consectetur. Faucibus arcu ultrices gravida
        et dictumst duis gravida odio semper. Integer potenti viverra et
        interdum lobortis amet nisi lorem. Amet sed sit risus dictum dolor. Sem
        enim eget ac morbi placerat. interdum lobortis amet nisi lorem. Amet sed" />
      <ServicesCard />
      <Headings title="Our Clinic" />
      <OurClinicSlider />
      <Headings title="Meet Our Team" />
      <TeamCArd />
      <Headings title="Contact Us" />
      <StyledMapParent className="flex gap-5 justify-evenly">
        <StyledMapWrapper>
          <Map />
          < Address />
        </StyledMapWrapper>
        <StyledMapWrapper>
          <Map />
          < Address />
        </StyledMapWrapper>
        <StyledMapWrapper>
          <Map />
          < Address />
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
      <div>
        <Headings title="Send Us An Inquiry" />
        <SendUsInquiry />
      </div>

    </main>
  );
}

const StyledMapParent = styled.div`
padding: 10px;
@media only screen and (max-width: 768px) {
 display: flex;
 justify-content: center;
 flex-direction: column;
 align-items: center;
}
`

const StyledMapWrapper = styled.div`
min-width: 30%;
max-width: 95%;
@media only screen and (max-width: 768px) {
 width: 95%;
}
`
const StyledFaqWrapper = styled.div`
padding: 0 20px;
`