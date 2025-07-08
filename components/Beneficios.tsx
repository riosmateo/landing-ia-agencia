import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaRobot, FaHeadset, FaCogs } from 'react-icons/fa';

const Section = styled.section`
  width: 100%;
  background: #131313;
  padding: 5rem 0 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 600px) {
    padding: 2.5rem 0 1.5rem 0;
  }
`;

const Title = styled(motion.h2)`
  color: var(--color-gold);
  font-size: 2.1rem;
  font-weight: 800;
  margin-bottom: 2.2rem;
  text-align: center;
`;

const BenefitsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  justify-content: center;
  margin-top: 1.5rem;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 1.2rem;
    width: 100%;
    align-items: center;
  }
`;

const Benefit = styled(motion.div)`
  background: #191919;
  border-radius: 16px;
  padding: 2.2rem 1.7rem;
  min-width: 220px;
  max-width: 260px;
  box-shadow: 0 2px 16px 0 rgba(0,0,0,0.10);
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 600px) {
    min-width: 0;
    max-width: 95vw;
    padding: 1.2rem 0.7rem;
  }
`;

const IconWrapper = styled.div`
  font-size: 2.5rem;
  color: var(--color-gold);
  margin-bottom: 1.1rem;
  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

const BenefitTitle = styled.h3`
  color: var(--color-gold);
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const BenefitDesc = styled.p`
  color: var(--color-text-secondary);
  font-size: 1rem;
  text-align: center;
`;

const benefits = [
  {
    icon: <FaRobot />,
    title: 'Lead Generation Automática',
    desc: 'Atraé y calificá clientes potenciales 24/7 con IA y automatizaciones.'
  },
  {
    icon: <FaHeadset />,
    title: 'Soporte al Cliente Inteligente',
    desc: 'Responde consultas y resuelve problemas de tus clientes en tiempo real.'
  },
  {
    icon: <FaCogs />,
    title: 'Automatizaciones n8n',
    desc: 'Integra y automatiza procesos internos para máxima eficiencia.'
  },
];

export default function Beneficios() {
  return (
    <Section id="beneficios">
      <Title
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Beneficios de Automatizar con IA
      </Title>
      <BenefitsGrid>
        {benefits.map((benefit, i) => (
          <Benefit
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * i, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <IconWrapper>{benefit.icon}</IconWrapper>
            <BenefitTitle>{benefit.title}</BenefitTitle>
            <BenefitDesc>{benefit.desc}</BenefitDesc>
          </Benefit>
        ))}
      </BenefitsGrid>
    </Section>
  );
} 