import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';

import {
  SidebarContainer,
  Cover,
  Profile,
  SidebarFooter,
} from './Siderbar.styles';

export function Sidebar() {
  return (
    <SidebarContainer>
      <Cover src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />

      <Profile>
        <Avatar src="https://github.com/dehrs.png" />
        <strong>Débora Rodrigues</strong>
        <span>Web Developer</span>
      </Profile>

      <SidebarFooter>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </SidebarFooter>
    </SidebarContainer>
  );
}
