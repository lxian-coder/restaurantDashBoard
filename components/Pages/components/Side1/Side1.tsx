import React from 'react';
import styled,{css} from 'styled-components';
import CSSCONST from '../../../../cssConst';



export const Side1Warper = styled.aside`
          font-family: ${CSSCONST.FONT_RAKKAS};
          font-size: 48px;
          width: 29%;
          display: flex;
          justify-content: flex-start;
          flex-direction: column;
          z-index: 1;

          @media only screen and (max-width: 961px){
           display: none;
    }
   
`;

