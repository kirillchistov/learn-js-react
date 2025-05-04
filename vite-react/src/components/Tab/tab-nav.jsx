'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import styles from './tab.module.css';

export const TabNav = ({ children, href }) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={classNames(styles.container, {
        [styles.navActive]: pathname === href,
      })}
    >
      {children}
    </Link>
  );
};