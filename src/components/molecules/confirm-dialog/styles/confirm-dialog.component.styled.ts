// Vendors
import styled from 'styled-components';

const ConfirmDialogComponentStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 100%;
  overflow: hidden;
`;

const ConfirmDialogComponentBodyStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 16px;
  padding: 0 24px;
`;

const ConfirmDialogComponentFooterStyled = styled.div`
  display: flex;
  gap: 16px;
  justify-content: space-between;
  padding: 0 24px 24px 24px;
`;

export {
  ConfirmDialogComponentStyled,
  ConfirmDialogComponentBodyStyled,
  ConfirmDialogComponentFooterStyled,
};
