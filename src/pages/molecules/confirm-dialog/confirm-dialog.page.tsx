// Vendors
import React, { useState } from 'react';
// Components
import { ButtonComponent } from 'components/atoms/button/button.component';
import { ConfirmDialogComponent } from 'components/molecules/confirm-dialog/confirm-dialog.component';
// Styles
import { ConfirmDialogPageStyled } from './confirm-dialog.page.styled';

const ConfirmDialogPage = (): React.ReactElement => {
  const [modalsOpen, setModalsOpen] = useState([false, false]);

  const handleCancel = (index: number) => {
    handleClose(index);
  };

  const handleClose = (index: number) => {
    setModalsOpen((prev) => prev.map((_, i) => (i === index ? false : _)));
  };

  const handleConfirm = (index: number) => {
    handleClose(index);
  };

  const handleOpen = (index: number) => {
    setModalsOpen((prev) => prev.map((_, i) => (i === index ? true : _)));
  };

  return (
    <ConfirmDialogPageStyled>
      <ButtonComponent {...{ onClick: () => handleOpen(0) }}>Open Confirm Dialog</ButtonComponent>
      <ConfirmDialogComponent
        {...{
          message:
            'Lorem ipsum dolor sit amet? Consectetur adipiscing elit. Nullam nec erat nec ligula ultricies aliquam.',
          onCancel: () => handleCancel(0),
          onClose: () => handleClose(0),
          onConfirm: () => handleConfirm(0),
          open: modalsOpen[0],
          title: 'Lorem ipsum?',
        }}
      />
    </ConfirmDialogPageStyled>
  );
};

export { ConfirmDialogPage };
