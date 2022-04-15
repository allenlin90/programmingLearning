import { FC } from 'react';
import { MainNavigation } from 'components';
import classes from './Layout.module.css';
import { useRouter } from 'next/router';

export const Layout: FC = ({ children }) => {
  const router = useRouter();
  if (router.pathname === '/_error') return <>{children}</>;

  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{children}</main>
    </div>
  );
};

export default Layout;
