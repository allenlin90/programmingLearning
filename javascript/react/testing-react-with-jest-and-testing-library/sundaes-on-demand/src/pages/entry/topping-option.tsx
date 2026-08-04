import { ChangeEvent, FC } from 'react';
import { Col, Form } from 'react-bootstrap';
import { OptionType } from 'src/types';

export const ToppingOption: FC<OptionType> = ({
  name,
  imagePath,
  updateItemCount,
}) => {
  return (
    <Col xs={12} sx={6} md={4} lg={3} style={{ textAlign: 'center' }}>
      <img
        style={{ width: '75%' }}
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name}_topping`}
      />
      <Form.Group controlId={`${name}-topping-checkbox`}>
        <Form.Check
          type='checkbox'
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            if (updateItemCount) {
              updateItemCount(name, e.target.checked ? 1 : 0);
            }
          }}
          label={name}
        />
      </Form.Group>
    </Col>
  );
};

export default ToppingOption;
