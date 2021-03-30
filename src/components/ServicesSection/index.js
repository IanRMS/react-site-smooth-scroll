import React from "react";
import Icon1 from "../../images/svg-1.svg";
import Icon2 from "../../images/svg-3.svg";
import Icon3 from "../../images/svg-5.svg";
import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  Servicesh2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
} from "./styles";

const ServicesSection = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <Servicesh2>Reduce expenses</Servicesh2>
          <ServicesP>
            We help reduce your fess and increase your overall revenue.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <Servicesh2>Vertual Offices</Servicesh2>
          <ServicesP>
            Your can access our platform online anywhere in the world.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <Servicesh2>Premium Benefits</Servicesh2>
          <ServicesP>
            Unlock our special membership card that returns 5% cash back.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default ServicesSection;
