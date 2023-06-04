import PropTypes from 'prop-types';
import * as S from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <S.StatsSection className="statistics">
      {title && <S.StatsTitle className="title">{title}</S.StatsTitle>}
      <S.StatList className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <S.StatListItem className="item" key={id}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}</span>
          </S.StatListItem>
        ))}
      </S.StatList>
    </S.StatsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object),
};
