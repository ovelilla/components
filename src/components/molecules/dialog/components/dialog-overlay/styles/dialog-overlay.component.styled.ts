// Vendors
import { motion } from 'framer-motion';
import styled from 'styled-components';

const DialogOverlayComponentStyled = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.4);
  height: 100%;
  left: 0;
  padding: ${({ theme }) => theme.spaces.space16};
  position: fixed;
  top: 0;
  width: 100%;
`;

export { DialogOverlayComponentStyled };
