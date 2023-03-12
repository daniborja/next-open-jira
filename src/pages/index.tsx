import { NextPage } from 'next';

import { MainLayout } from '@/layouts';
import { OpenJira } from '@/jira';

const HomePage: NextPage = () => {
  return (
    <MainLayout title="Home - OpenJira">
      <OpenJira />
    </MainLayout>
  );
};

export default HomePage;
