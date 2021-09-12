import React from 'react';
import styled,{css} from 'styled-components';
import CSSCONST from '../../cssConst';
import FooterP1 from './components/FooterP1/FooterPart';


const FooterContainer = styled.footer`
      background-color: ${CSSCONST.BLUE};
      width: 100%;
      margin-top: 3%;
      z-index: 5;
      position: relative;
`;

const Footer = ()=>{

    return <FooterContainer>
             <FooterP1></FooterP1>
    </FooterContainer>;
};

export default Footer;