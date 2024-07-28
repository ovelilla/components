// Vendors
import styled from 'styled-components';

const DialogHeaderComponentStyled = styled.div`
  align-items: center;
  display: flex;
  gap: 16px;
  justify-content: space-between;
  padding: 16px;
  cursor: move;
  user-select: none;
  touch-action: none;
`;

const DialogHeaderComponentTitleStyled = styled.div``;

const DialogHeaderComponentActionsStyled = styled.div`
  display: flex;
  gap: 16px;
`;

export {
  DialogHeaderComponentStyled,
  DialogHeaderComponentTitleStyled,
  DialogHeaderComponentActionsStyled,
};
