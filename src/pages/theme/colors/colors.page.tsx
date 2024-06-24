// Vendors
import React from 'react';
import styled from 'styled-components';

const ColorContainerStyled = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 8px;
`;
// const DEFAULT_COLORS_LIGHT = {
//   accent: '210 40% 96.1%',
//   accentForeground: '222.2 47.4% 11.2%',
//   background: '0 0% 100%',
//   border: '214.3 31.8% 91.4%',
//   card: '0 0% 100%',
//   cardForeground: '222.2 84% 4.9%',
//   destructive: '0 84.2% 60.2%',
//   destructiveForeground: '210 40% 98%',
//   foreground: '222.2 84% 4.9%',
//   input: '214.3 31.8% 91.4%',
//   muted: '210 40% 96.1%',
//   mutedForeground: '215.4 16.3% 46.9%',
//   popover: '0 0% 100%',
//   popoverForeground: '222.2 84% 4.9%',
//   primary: '222.2 47.4% 11.2%',
//   primaryForeground: '210 40% 98%',
//   ring: '222.2 84% 4.9%',
//   secondary: '210 40% 96.1%',
//   secondaryForeground: '222.2 47.4% 11.2%',
//   transparent: '0 0% 0% / 0',
// } as const;
const ColorAccentStyled = styled(ColorContainerStyled)`
  background-color: hsl(${({ theme }) => theme.colors.accent});
`;

const ColorAccentForegroundStyled = styled(ColorContainerStyled)`
  background-color: hsl(${({ theme }) => theme.colors.accentForeground});
`;

const ColorBackgroundStyled = styled(ColorContainerStyled)`
  background-color: hsl(${({ theme }) => theme.colors.background});
`;

const ColorBorderStyled = styled(ColorContainerStyled)`
  background-color: hsl(${({ theme }) => theme.colors.border});
`;

const ColorCardStyled = styled(ColorContainerStyled)`
  background-color: hsl(${({ theme }) => theme.colors.card});
`;

const ColorCardForegroundStyled = styled(ColorContainerStyled)`
  background-color: hsl(${({ theme }) => theme.colors.cardForeground});
`;

const ColorDestructiveStyled = styled(ColorContainerStyled)`
  background-color: hsl(${({ theme }) => theme.colors.destructive});
`;

const ColorDestructiveForegroundStyled = styled(ColorContainerStyled)`
  background-color: hsl(${({ theme }) => theme.colors.destructiveForeground});
`;

const ColorForegroundStyled = styled(ColorContainerStyled)`
  background-color: hsl(${({ theme }) => theme.colors.foreground});
`;

const ColorInputStyled = styled(ColorContainerStyled)`
  background-color: hsl(${({ theme }) => theme.colors.input});
`;

const ColorMutedStyled = styled(ColorContainerStyled)`
  background-color: hsl(${({ theme }) => theme.colors.muted});
`;

const ColorMutedForegroundStyled = styled(ColorContainerStyled)`
  background-color: hsl(${({ theme }) => theme.colors.mutedForeground});
`;

const ColorPopoverStyled = styled(ColorContainerStyled)`
  background-color: hsl(${({ theme }) => theme.colors.popover});
`;

const ColorPopoverForegroundStyled = styled(ColorContainerStyled)`
  background-color: hsl(${({ theme }) => theme.colors.popoverForeground});
`;

const ColorPrimaryStyled = styled(ColorContainerStyled)`
  background-color: hsl(${({ theme }) => theme.colors.primary});
`;

const ColorPrimaryForegroundStyled = styled(ColorContainerStyled)`
  background-color: hsl(${({ theme }) => theme.colors.primaryForeground});
`;

const ColorRingStyled = styled(ColorContainerStyled)`
  background-color: hsl(${({ theme }) => theme.colors.ring});
`;

const ColorSecondaryStyled = styled(ColorContainerStyled)`
  background-color: hsl(${({ theme }) => theme.colors.secondary});
`;

const ColorSecondaryForegroundStyled = styled(ColorContainerStyled)`
  background-color: hsl(${({ theme }) => theme.colors.secondaryForeground});
`;

const ColorTransparentStyled = styled(ColorContainerStyled)`
  background-color: hsl(${({ theme }) => theme.colors.transparent});
`;

const ColorsPage = (): React.ReactElement => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      <ColorAccentStyled />
      <ColorAccentForegroundStyled />
      <ColorBackgroundStyled />
      <ColorBorderStyled />
      <ColorCardStyled />
      <ColorCardForegroundStyled />
      <ColorDestructiveStyled />
      <ColorDestructiveForegroundStyled />
      <ColorForegroundStyled />
      <ColorInputStyled />
      <ColorMutedStyled />
      <ColorMutedForegroundStyled />
      <ColorPopoverStyled />
      <ColorPopoverForegroundStyled />
      <ColorPrimaryStyled />
      <ColorPrimaryForegroundStyled />
      <ColorRingStyled />
      <ColorSecondaryStyled />
      <ColorSecondaryForegroundStyled />
      <ColorTransparentStyled />
    </div>
  );
};

export { ColorsPage };
