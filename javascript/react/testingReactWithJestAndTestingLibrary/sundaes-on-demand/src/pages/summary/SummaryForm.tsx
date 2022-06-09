import {
  useState,
  Dispatch,
  FC,
  ChangeEvent,
  SetStateAction,
  FormEventHandler,
} from 'react';
import { Form, Button, Popover, OverlayTrigger } from 'react-bootstrap';

export const SummaryFormPage: FC<{
  setOrderPhase: Dispatch<SetStateAction<string>>;
}> = ({ setOrderPhase }) => {
  const [tcChecked, setTcChecked] = useState<boolean>(false);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    // pass along to the next phase.
    // The next page will handle submitting order from context.
    setOrderPhase('completed');
  };

  const popover = (
    <Popover id='popover-basic'>
      <Popover.Header></Popover.Header>
      <Popover.Body>No ice cream will actually be delivered</Popover.Body>
    </Popover>
  );

  const checkboxLabel = (
    <span>
      I agree to
      <OverlayTrigger placement='right' overlay={popover}>
        <span style={{ color: 'blue' }}>Terms and Conditions</span>
      </OverlayTrigger>
    </span>
  );

  return (
    <Form onSubmit={handleSubmit}>
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
      <Button variant='primary' type='submit' disabled={!tcChecked}>
        Confirm order
      </Button>
    </Form>
  );
};

export default SummaryFormPage;
