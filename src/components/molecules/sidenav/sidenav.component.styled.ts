// Vendors
import styled from 'styled-components';

const SidenavComponentStyled = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spaces.space24};
`;

const SidenavComponentListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spaces.space8};
`;

const SidenavComponentListItemStyled = styled.li`
  display: flex;
  gap: ${({ theme }) => theme.spaces.space8};
`;

const SidenavComponentSectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 ${({ theme }) => theme.spaces.space8};
  gap: ${({ theme }) => theme.spaces.space8};
`;

const SidenavComponentTitleStyled = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.size12};
  font-weight: 600;
  padding: 0 ${({ theme }) => theme.spaces.space16};
  text-transform: uppercase;
  color: hsl(${({ theme }) => theme.colors.foreground});
`;

export {
  SidenavComponentStyled,
  SidenavComponentListStyled,
  SidenavComponentListItemStyled,
  SidenavComponentSectionStyled,
  SidenavComponentTitleStyled,
};
