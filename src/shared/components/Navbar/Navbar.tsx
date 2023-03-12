import NextLink from 'next/link';
import { AppBar, IconButton, Link, Toolbar, Typography } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

import { useUi } from '@/context/hooks';

export interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const { openSideMenu } = useUi();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton onClick={openSideMenu} size="large" edge="start">
          <MenuOutlinedIcon />
        </IconButton>

        <NextLink
          href="/"
          passHref
          style={{ textDecoration: 'none', color: 'inherit' }}
          // legacyBehavior // to have Link of MUI
        >
          <Typography variant="h6">OpenJira</Typography>
        </NextLink>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
