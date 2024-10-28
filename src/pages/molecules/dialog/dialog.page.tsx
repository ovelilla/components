// Vendors
import React, { useState } from 'react';
// Components
import { ButtonComponent } from 'components/atoms/button/button.component';
import { DialogComponent } from 'components/molecules/dialog/dialog.component';
import { ParagraphComponent } from 'components/atoms/paragraph/paragraph.component';
// Styles
import { DialogPageStyled } from './dialog.page.styled';

const DialogPage = (): React.ReactElement => {
  const [modalsOpen, setModalsOpen] = useState([false, false]);

  const handleClose = (index: number) => {
    setModalsOpen((prev) => prev.map((_, i) => (i === index ? false : _)));
  };

  const handleOpen = (index: number) => {
    setModalsOpen((prev) => prev.map((_, i) => (i === index ? true : _)));
  };

  return (
    <DialogPageStyled>
      <ButtonComponent {...{ onClick: () => handleOpen(0) }}>Open Dialog</ButtonComponent>
      <DialogComponent
        {...{
          animation: {
            container: {
              active: false,
            },
            overlay: {
              active: false,
            },
          },
          buttonCloseProps: {
            tooltipProps: {
              title: 'Close dialog',
            },
          },
          buttonFullscreenProps: {
            tooltipProps: {
              title: 'Full screen',
            },
          },
          onClose: () => handleClose(0),
          open: modalsOpen[0],
          title: 'Lorem ipsum',
        }}>
        <div style={{ padding: '16px' }}>
          <ParagraphComponent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero nec
            ultricies. Integer nec sapien sit amet nulla ultrices ultricies. Sed nec metus id augue
            fermentum fermentum. Nullam nec nunc eget libero ultricies ultricies. Sed nec metus id
            augue fermentum fermentum. Nullam nec nunc eget libero ultricies ultricies.
          </ParagraphComponent>
          <ParagraphComponent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero nec
            ultricies. Integer nec sapien sit amet nulla ultrices ultricies. Sed nec metus id augue
            fermentum fermentum. Nullam nec nunc eget libero ultricies ultricies. Sed nec metus id
            augue fermentum fermentum. Nullam nec nunc eget libero ultricies ultricies.
          </ParagraphComponent>
        </div>
      </DialogComponent>

      <ButtonComponent {...{ onClick: () => handleOpen(1) }}>Open Dialog</ButtonComponent>
      <DialogComponent
        {...{
          buttonCloseProps: {
            tooltipProps: {
              title: 'Close dialog',
            },
          },
          buttonFullscreenProps: {
            tooltipProps: {
              title: 'Full screen',
            },
          },
          onClose: () => handleClose(1),
          open: modalsOpen[1],
          title: 'Lorem ipsum',
        }}>
        <div style={{ padding: '16px' }}>
          <ParagraphComponent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero nec
            ultricies. Integer nec sapien sit amet nulla ultrices ultricies. Sed nec metus id augue
            fermentum fermentum. Nullam nec nunc eget libero ultricies ultricies. Sed nec metus id
            augue fermentum fermentum. Nullam nec nunc eget libero ultricies ultricies.
          </ParagraphComponent>
        </div>
      </DialogComponent>
    </DialogPageStyled>
  );
};

export { DialogPage };
