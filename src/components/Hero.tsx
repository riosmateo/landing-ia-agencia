import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center;
  background: linear-gradient(120deg, #111 60%, #FFD700 120%);
  overflow: hidden;
  padding: 0 1.5rem;

  @media (max-width: 600px) {
    min-height: 90vh;
    padding: 0 0.5rem;
  }
`;

const AnimatedBg = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background: radial-gradient(circle at 70% 30%, rgba(255,215,0,0.12) 0, transparent 60%),
              radial-gradient(circle at 20% 80%, rgba(255,215,0,0.10) 0, transparent 70%);
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  font-weight: 900;
  color: var(--color-gold);
  margin-bottom: 1.2rem;
  letter-spacing: 1px;
  z-index: 1;
  text-shadow: 0 2px 24px #000a;

  @media (max-width: 600px) {
    font-size: 2.1rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.35rem;
  color: var(--color-text);
  margin-bottom: 2.5rem;
  z-index: 1;
  max-width: 600px;
  text-shadow: 0 1px 8px #0007;

  @media (max-width: 600px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`;

const CTAButton = styled(motion.a)`
  display: inline-block;
  background: var(--color-gold);
  color: #111;
  font-weight: 700;
  padding: 1rem 2.5rem;
  border-radius: 32px;
  font-size: 1.2rem;
  box-shadow: 0 2px 16px 0 rgba(0,0,0,0.18);
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  cursor: pointer;
  border: none;
  text-decoration: none;
  z-index: 1;
  &:hover {
    background: #fffbe6;
    color: #111;
    box-shadow: 0 4px 32px 0 rgba(0,0,0,0.22);
  }

  @media (max-width: 600px) {
    font-size: 1rem;
    padding: 0.8rem 1.5rem;
  }
`;

export default function Hero() {
  return (
    <HeroSection id="hero">
      <AnimatedBg />
      <Title
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Automatizá tu Agencia Automotriz con IA
      </Title>
      <Subtitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Soluciones inteligentes para ventas, soporte y gestión. Impulsá tu negocio con tecnología de Silicon Valley, diseño premium y resultados reales.
      </Subtitle>
      <CTAButton
        href="#contacto"
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.97 }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.7 }}
      >
        Solicitar Demo
      </CTAButton>
    </HeroSection>
  );
} 