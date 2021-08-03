import styled from 'styled-components';

export const CardWrapper = styled.li`
  height: 21rem;
  width: 21rem;
  min-height: 18rem;
  min-width: 18rem;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%),
    0px 1px 3px 0px rgb(0 0 0 / 12%);
  margin: 1rem;
  border-radius: 0.25rem;
  background-color: transparent;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  color: ${(props) => props.theme.secondary};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.cardBackground};
  }
`;

export const CardContent = styled.a``;

export const CardImage = styled.div`
  height: 8.75rem;
  width: 100%;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  border-color: transparent;
  background: no-repeat url('${({ bckgImage }) => bckgImage}');
  background-size: cover;
`;

export const CardInfo = styled.div`
  height: 9.5rem;
  padding: 1rem;
`;

export const CardTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 2rem;
`;

export const CardDescription = styled.p`
  font-weight: 300;
  opacity: 60%;
  font-size: 0.9rem;
  line-height: 1.3rem;
  margin-top: 0.8rem;
`;
