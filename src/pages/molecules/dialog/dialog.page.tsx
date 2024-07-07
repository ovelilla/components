// Vendors
import React, { useState } from 'react';
// Components
import { ButtonComponent } from 'components/atoms/button/button.component';
import { DialogComponent } from 'components/molecules/dialog/dialog.component';
import { ParagraphComponent } from 'components/atoms/paragraph/paragraph.component';
// Styles
import { DialogPageStyled } from './dialog.page.styled';

const DialogPage = (): React.ReactElement => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  const handleOpen = () => setOpen(true);

  return (
    <DialogPageStyled>
      <ButtonComponent {...{ onClick: handleOpen }}>Open Dialog</ButtonComponent>
      <DialogComponent {...{ open, onClose: handleClose, title: 'Lorem ipsum' }}>
        <ParagraphComponent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero nec
          ultricies. Integer nec sapien sit amet nulla ultrices ultricies. Sed nec metus id augue
          fermentum fermentum. Nullam nec nunc eget libero ultricies ultricies. Sed nec metus id
          augue fermentum fermentum. Nullam nec nunc eget libero ultricies ultricies.
        </ParagraphComponent>
      </DialogComponent>
    </DialogPageStyled>
  );
};

export { DialogPage };
