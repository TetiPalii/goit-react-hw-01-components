import * as S from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <S.TableContainer>
      <S.Table className="transaction-history">
        <thead>
          <S.TableRow>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </S.TableRow>
        </thead>

        <tbody>
          {items.map(({ id, type, amount, currency }) => {
            return (
              <S.TbodyRow key={id}>
                <S.Td>{type}</S.Td>
                <S.Td>{amount}</S.Td>
                <S.Td>{currency}</S.Td>
              </S.TbodyRow>
            );
          })}
        </tbody>
      </S.Table>
    </S.TableContainer>
  );
};
