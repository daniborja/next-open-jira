import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

import { useUi } from '@/context/hooks';

export interface SidebarProps {}

const menuItems: string[] = ['Inbox', 'Starred', 'Send Email', 'Drafts'];

const Sidebar: React.FC<SidebarProps> = () => {
  const { isSidemenuOpen, closeSideMenu } = useUi();

  return (
    <Drawer anchor="left" open={isSidemenuOpen} onClose={closeSideMenu}>
      <Box sx={{ width: 250 }}>
        <Box p="5px 10px">
          <Typography variant="h4">Menu</Typography>
        </Box>

        <List>
          {menuItems.map((text, i) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {i % 2 ? <InboxOutlinedIcon /> : <EmailOutlinedIcon />}
                </ListItemIcon>
                <ListItemText>{text}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider />

        <List>
          {menuItems.map((text, i) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {i % 2 ? <InboxOutlinedIcon /> : <EmailOutlinedIcon />}
                </ListItemIcon>
                <ListItemText>{text}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
