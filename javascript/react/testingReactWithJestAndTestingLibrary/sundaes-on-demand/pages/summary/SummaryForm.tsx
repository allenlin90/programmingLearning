import { useState, FC, ChangeEvent } from 'react';
import { Form, Button } from 'react-bootstrap';

export const SummaryFormPage: FC = () => {
  const [tcChecked, setTcChecked] = useState<boolean>(false);
  const checkboxLabel = (
    <span>
      I agree to <span style={{ color: 'blue' }}>Terms and Conditions</span>
    </span>
  );

  return (
    <Form>
      <Form.Group controlId='terms-and-conditions'>
        <Form.Check
          type='checkbox'
          checked={tcChecked}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTcChecked(e.target.checked)
          }
          label={checkboxLabel}
        />
      </Form.Group>
      <Button variant='primary' type='submit' disabled={tcChecked}>
        Confirm order
      </Button>
    </Form>
  );
};

export default SummaryFormPage;
