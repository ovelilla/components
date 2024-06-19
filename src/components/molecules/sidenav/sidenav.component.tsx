// Components
import { ButtonComponent } from '../../atoms/button/button.component';
// Constants
import { BUTTON_PROPS, SIDENAV } from './constants/sidenav.component.constants';
// Styles
import {
  SidenavComponentStyled,
  SidenavComponentListStyled,
  SidenavComponentListItemStyled,
  SidenavComponentSectionStyled,
  SidenavComponentTitleStyled,
} from './sidenav.component.styled';

const SidenavComponent = (): React.ReactElement => (
  <SidenavComponentStyled>
    {SIDENAV.map((section, index) => (
      <SidenavComponentSectionStyled key={index}>
        <SidenavComponentTitleStyled>{section.title}</SidenavComponentTitleStyled>
        {section.items.length > 0 && (
          <SidenavComponentListStyled>
            {section.items.map((item, index) => (
              <SidenavComponentListItemStyled key={index}>
                <ButtonComponent {...{ ...BUTTON_PROPS, href: item.link }}>
                  {item.name}
                </ButtonComponent>
              </SidenavComponentListItemStyled>
            ))}
          </SidenavComponentListStyled>
        )}
      </SidenavComponentSectionStyled>
    ))}
  </SidenavComponentStyled>
);

export { SidenavComponent };
