import styled from 'styled-components';
import SEARCH from '../../assets/images/search.svg'
import USER from '../../assets/images/user.svg'

export const HeaderWrapper = styled.header`

`;

export const HeaderContent = styled.nav` 
width:100%;
background-color: ${(props) => props.theme.navBackground};
height: 4rem;
max-height: 4rem;
display:flex;
justify-content: space-between;
align-items: center;
padding: 1rem;
box-sizing: border-box;
`;

export const HeaderSection1 = styled.section`
display: flex;
width: 100%;
align-items: center;
`
export const HeaderSection2 = styled.section`
width:20rem;
align-items:center;
display: none;
@media (min-width: 768px) {
  display: flex;
  }`

export const HeaderMenu = styled.button`
height: 3rem;
width: 3rem;
padding:0.5rem;
background-color: transparent;
border-radius: 50%;
margin-right: 1rem;
border:none;
&:hover {
    background-color: ${(props) => props.theme.menuHoverBackground};
  }
`;

export const HeaderSearchInput = styled.input`
border-radius: 0.25rem;
background-image: url('${SEARCH}');
background-size: 1.5rem;
background-position-y:center;
background-position-x:0.5rem ;
background-repeat:no-repeat;
background-color:  ${(props) => props.theme.inputBackground};
width: 100%;
height: 2rem;
padding: 1rem;
border: none;
@media (min-width: 768px) {
  width: 10rem;
  }
::placeholder{
        padding-left: 1.5rem;
        color:  #FFF;
        font-size: 1rem;
        font-weight: 300;
       
    }
  `;

;

export const HeaderLoginIcon = styled.button`
height: 3rem;
width: 3rem;
padding:0.8rem;
margin:1rem;
background-color:  ${(props) => props.theme.loginBackground};
color: ${(props) => props.theme.loginIconColor};;
border-radius: 50%;
border:none;
display: none;
background-image: url('${USER}');
background-size: 1.5rem;
background-position-y:center;
background-position-x:center;
background-repeat:no-repeat;
transition:all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
@media (min-width: 768px) {
  display: block;
  }
  &:hover {
    background-color: ${(props) => props.theme.cardBackground};
  }
`;

