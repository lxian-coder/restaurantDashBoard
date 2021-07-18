import styled,{css} from 'styled-components';
import CSSCONST from '../../../../../../cssConst';


export const GREEN =" rgb(4, 170, 109)";

export const InputBtn = styled.input`
 height:35px;
 margin-top:5px;
 font-size:12px;
display:flex;
justify-content: center;
align-items: center;
border-radius: 8px;
font-weight: 600;
color: white;
background-color: ${GREEN};
 
`;
export const BackBtn  = styled.button`
 height:35px;
 margin-top:5px;
 font-size:12px;
display:flex;
justify-content: center;
align-items: center;
border-radius: 8px;
font-weight: 600;
color: white;
background-color: ${GREEN};
`;

export const Input = styled.input`
       width: 50px;
       border-radius: 5px;
       font-family: ${CSSCONST.FONT_ASAR};
`;
export const Textarea = styled.textarea`
        width:450px;
        font-size: 16px;
        border-radius: 5px;
        font-family: ${CSSCONST.FONT_ASAR};
`;

export const Label = styled.label`
   color:${GREEN};
`;

export const Form = styled.form`
   display: flex;
   flex-direction: column;

`;