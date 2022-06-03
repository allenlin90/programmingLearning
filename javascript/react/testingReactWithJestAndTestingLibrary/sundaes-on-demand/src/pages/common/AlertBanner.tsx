import { FC } from 'react';
import Alert from 'react-bootstrap/Alert';

interface AlertBannerProps {
  message?: string;
  variant?: string;
}

export const AlertBanner: FC<AlertBannerProps> = ({
  message = 'An unexpected error ocurred. Please try again later.',
  variant = 'danger',
}) => {
  return (
    <Alert variant={variant} style={{ backgroundColor: 'red' }}>
      {message}
    </Alert>
  );
};

export default AlertBanner;
