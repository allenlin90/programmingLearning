import { FC } from 'react';
import { Col } from 'react-bootstrap';
import { OptionType } from 'src/types';

export const ScoopOption: FC<OptionType> = ({ name, imagePath }) => {
  return (
    <Col xs={12} sx={6} md={4} lg={3} style={{ textAlign: 'center' }}>
      <img
        style={{ width: '75%' }}
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name}_scoop`}
      />
    </Col>
  );
};

export default ScoopOption;
