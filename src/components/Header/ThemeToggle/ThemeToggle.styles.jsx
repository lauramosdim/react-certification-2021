import styled from 'styled-components';

export const ToggleWrapper = styled.label`
  padding: 0.625rem;
  margin: 0.625rem 0;
  margin-left: auto;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

export const ToggleSlider = styled.span`
  display: flex;
  cursor: pointer;
  width: 3.125rem;
  height: 1.56rem;
  border-radius: 6.25rem;
  background-color: ${(props) => props.theme.toggleBackground};
  position: relative;
  transition: background-color 0.3s;

  &:before {
    content: '';
    position: absolute;
    top: 0.125rem;
    left: 0.125rem;
    width: 1.3rem;
    height: 1.3rem;
    border-radius: 1.3rem;
    transition: 0.2s;
    background: ${(props) => props.theme.toggleCircle};
  }
`;

export const ToggleInput = styled.input`
  position: absolute;
  left: -9999px;
  top: -9999px;

  &:checked + span {
    background-color: ${(props) => props.theme.secondary};
    &:before {
      left: 1.7rem;
    }
  }
`;

export const ToggleLabel = styled.label`
  color: #fff;
  opacity: 50%;
  padding: 0.625rem 0;
  margin: 0.68rem 1.875px 0.625rem 0.25rem;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;
