import styled from '@emotion/styled';

export const Card = styled.div`
  position: relative;
  border: ${props => `2px dashed ${props.theme.colors.black}`};
  padding: ${props => props.theme.spacing(2)};
  border-radius: ${props => props.theme.spacing(1)};
  cursor: pointer;

  :hover {
    transform: scale(1.05);
  }
`;

export const EventName = styled.h2`
  margin-top: ${props => props.theme.spacing(0)};
  font-size: 14px;
  line-height: ${props => props.theme.spacing(6)};
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

export const Info = styled.p`
  display: flex;
  align-items: center;
  margin-top: ${props => props.theme.spacing(0)};
  margin-bottom: ${props => props.theme.spacing(2)};
  color: ${props => props.theme.colors.primaryText};
  font-size: ${props => props.theme.spacing(4)};
  line-height: ${props => props.theme.spacing(6)};
  font-weight: 400;
  letter-spacing: 0.25px;
  svg {
    display: block;
    margin-right: ${props => props.theme.spacing(2)};
    color: ${props => props.theme.colors.secondaryText};
  }
`;

export const Chip = styled.span`
  position: absolute;
  bottom: ${props => props.theme.spacing()};
  right: ${props => props.theme.spacing()};
  padding: ${props => props.theme.spacing()} ${props => props.theme.spacing(2)};
  border-radius: ${props => props.theme.spacing()};
  text-transform: uppercase;
  color: ${props => props.theme.colors.white};
  background-color: ${({ eventType, theme }) => {
    switch (eventType) {
      case 'free':
        return theme.colors.green;
      case 'paid':
        return theme.colors.blue;
      case 'vip':
        return theme.colors.red;
      default:
        return theme.colors.black;
    }
  }};
`;
