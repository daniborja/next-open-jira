import Head from 'next/head';
import { Box } from '@mui/material';

import { Navbar, Sidebar } from '@/shared/components';

export interface MainLayoutProps {
  children: JSX.Element | JSX.Element[];
  title?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ title, children }) => {
  return (
    <Box sx={{ flexFlow: 1 }}>
      <Head>
        <title>{title || 'OpenJira'}</title>
        <meta
          name="description"
          content="OpenJira app - effectively manage your tasks"
        />
        <meta name="keywords" content="openjira, tasks, todos, manage" />
      </Head>

      <Navbar />
      <Sidebar />

      <Box sx={{ p: '10px 20px' }}>{children}</Box>
    </Box>
  );
};

export default MainLayout;
