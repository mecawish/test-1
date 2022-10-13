import styled from "styled-components";

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

export const Container = styled.div`
  display: flex;
  justify-content: center;

  @media ${device.mobileL} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media ${device.laptop} {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
`;

export const TeamLogo = styled.img``;

export const VSLabel = styled.h4`
  display: flex;
  align-items: center;
  margin: 0 4rem;
`;

export const PeriodDropdownContainer = styled.div`
  @media ${device.mobileL} {
    margin-top: 2rem;
  }

  @media ${device.laptop} {
    position: absolute;
    right: 0;
    top: 0;
    margin-right: 6rem;
  }
`;

export const PeriodDropdown = styled.select`
  border: none;
  color: #5a2161;
  font-size: 1.3rem;
  outline: none;
  padding: 0.5rem 2rem;
`;
export const PeriodDropdownOption = styled.option``;
