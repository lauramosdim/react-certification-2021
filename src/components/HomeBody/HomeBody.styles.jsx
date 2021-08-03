import styled from 'styled-components';

export const HomeBodyWrapper = styled.div`
  background-color: ${(props) => props.theme.background};
  padding: 2rem 1rem;
  min-width: 18rem;
`;

export const HomeBodyTitle = styled.h1`
  font-size: 3.75rem;
  font-weight: 300;
  color: ${(props) => props.theme.secondary};
  opacity: 0.87;
  width: 100%;
  height: auto;
  text-align: center;
`;

export const HomeBodyContent = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
