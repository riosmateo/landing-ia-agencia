import styled from 'styled-components';
import { useEffect, useState } from 'react';

const HeaderContainer = styled.header<{scrolled: boolean}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background: ${({ scrolled }) => (scrolled ? 'rgba(17,17,17,0.95)' : 'transparent')};
  box-shadow: ${({ scrolled }) => (scrolled ? '0 2px 16px 0 rgba(0,0,0,0.12)' : 'none')};
  transition: background 0.3s, box-shadow 0.3s;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.2rem 2rem;

  @media (max-width: 600px) {
    padding: 0.7rem 1rem;
  }
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--color-gold);
  letter-spacing: 2px;
  cursor: pointer;
  @media (max-width: 600px) {
    font-size: 1.1rem;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 600px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: var(--color-text);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  transition: color 0.2s;
  &:hover {
    color: var(--color-gold);
  }
`;

const CTAButton = styled.a`
  background: var(--color-gold);
  color: #111;
  font-weight: 700;
  padding: 0.7rem 1.6rem;
  border-radius: 32px;
  margin-left: 2rem;
  font-size: 1rem;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.10);
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  cursor: pointer;
  border: none;
  text-decoration: none;
  &:hover {
    background: #fffbe6;
    color: #111;
    box-shadow: 0 4px 16px 0 rgba(0,0,0,0.18);
  }
  @media (max-width: 600px) {
    font-size: 0.95rem;
    padding: 0.6rem 1.2rem;
    margin-left: 1rem;
  }
`;

const links = [
  { href: '#hero', label: 'Inicio' },
  { href: '#proceso', label: 'Nuestro Proceso' },
  { href: '#beneficios', label: 'Beneficios' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <HeaderContainer scrolled={scrolled}>
      <Nav>
        <Logo href="#hero">AutoIA</Logo>
        <NavLinks>
          {links.map(link => (
            <li key={link.href}>
              <NavLink href={link.href}>{link.label}</NavLink>
            </li>
          ))}
        </NavLinks>
        <CTAButton href="#contacto">Solicitar Demo</CTAButton>
      </Nav>
    </HeaderContainer>
  );
} 