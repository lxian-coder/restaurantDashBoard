import React from 'react';
import styled,{css} from 'styled-components';
import CSSCONST from '../../../../cssConst';


export const Side2Warper = styled.aside`
        display: flex;
        flex-direction:column;
        justify-content: center;
         width: 75%;
         @media only screen and (max-width:961px){
         width: 100%;
      }
     z-index: 2;
`;