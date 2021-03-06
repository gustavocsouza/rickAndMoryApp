import styled from 'styled-components';

export const HomeContainer = styled.div`

`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
`;

export const ListCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  a {
    text-decoration: none;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: ${({ page }) => (page !== 1 ? 'space-between' : 'end')};
  margin-bottom: 32px;
  button {
    background: ${({ theme }) => theme.colors.purple.dark};
    border: none;
    color: #fff;
    font-size: 20px;
    padding: 8px;
    border-radius: 8px;
  }

`;
