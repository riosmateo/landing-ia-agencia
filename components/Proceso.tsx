import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  width: 100%;
  background: #181818;
  padding: 6rem 0 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 600px) {
    padding: 3.5rem 0 2rem 0;
  }
`;

const Title = styled(motion.h2)`
  color: var(--color-gold);
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 2.2rem;
  text-align: center;
`;

const VideoWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  aspect-ratio: 16/9;
  margin-bottom: 2.5rem;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 4px 32px 0 rgba(0,0,0,0.18);
  @media (max-width: 600px) {
    max-width: 100vw;
    border-radius: 10px;
  }
`;

const Steps = styled.div`
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

const Step = styled(motion.div)`
  background: #222;
  border-radius: 16px;
  padding: 2rem 1.5rem;
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

const StepNumber = styled.div`
  background: var(--color-gold);
  color: #111;
  font-weight: 900;
  font-size: 1.3rem;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

const StepTitle = styled.h3`
  color: var(--color-gold);
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const StepDesc = styled.p`
  color: var(--color-text-secondary);
  font-size: 1rem;
  text-align: center;
`;

const steps = [
  {
    title: 'Diagnóstico Inteligente',
    desc: 'Analizamos tu agencia y detectamos oportunidades de automatización con IA.',
  },
  {
    title: 'Implementación Ágil',
    desc: 'Desplegamos soluciones personalizadas y las integramos con tus sistemas.',
  },
  {
    title: 'Resultados Medibles',
    desc: 'Monitoreamos, optimizamos y te mostramos el impacto real en tu negocio.',
  },
];

export default function Proceso() {
  return (
    <Section id="proceso">
      <Title
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Nuestro Proceso
      </Title>
      <VideoWrapper>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Video de proceso IA"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </VideoWrapper>
      <Steps>
        {steps.map((step, i) => (
          <Step
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * i, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <StepNumber>{i + 1}</StepNumber>
            <StepTitle>{step.title}</StepTitle>
            <StepDesc>{step.desc}</StepDesc>
          </Step>
        ))}
      </Steps>
    </Section>
  );
} 