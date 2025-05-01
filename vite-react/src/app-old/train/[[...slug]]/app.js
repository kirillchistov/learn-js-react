'use client';

import dynamic from 'next/dynamic';

const AppDynamic = dynamic(() => import('../../components/App/app'), {
  ssr: false,
});

export const ClientOnlyApp = () => {
  return <AppDynamic />;
};