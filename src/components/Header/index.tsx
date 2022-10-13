import {
  Container,
  LogoContainer,
  PeriodDropdown,
  PeriodDropdownContainer,
  PeriodDropdownOption,
  TeamLogo,
  VSLabel,
} from "./styles";
import { HeaderProps } from "./types";

const Header = ({
  homeTeamId,
  awayTeamId,
  periodNumbers,
  currentPeriod,
  setCurrentPeriod,
}: HeaderProps) => {
  const homeTeamLogo = require(`../../assets/${homeTeamId}-120.png`);
  const awayTeamLogo = require(`../../assets/${awayTeamId}-120.png`);

  const onChange = (e: React.FormEvent<HTMLSelectElement>) => {
    setCurrentPeriod(Number(e.currentTarget.value));
  };

  return (
    <Container data-testid="gameStatisticsHeader">
      <LogoContainer>
        <TeamLogo src={homeTeamLogo} />
        <VSLabel>VS</VSLabel>
        <TeamLogo src={awayTeamLogo} />
      </LogoContainer>
      <PeriodDropdownContainer>
        <PeriodDropdown onChange={(e) => onChange(e)} value={currentPeriod}>
          {periodNumbers.map((pn) => (
            <PeriodDropdownOption key={pn} value={pn}>
              {pn === 0 ? "Total" : `Period ${pn}`}
            </PeriodDropdownOption>
          ))}
        </PeriodDropdown>
      </PeriodDropdownContainer>
    </Container>
  );
};

export default Header;
