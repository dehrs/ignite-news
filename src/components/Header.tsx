// import styles from './Header.module.css'
import { ContainerHeader } from './Header.styles';
import igniteLogo from '../assets/ignite-logo.svg';

export function Header() {
  return (
    <ContainerHeader>
      <img src={igniteLogo} />
    </ContainerHeader>
  );
}
