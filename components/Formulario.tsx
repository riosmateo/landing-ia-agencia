import styled from 'styled-components';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Section = styled.section`
  width: 100%;
  background: #181818;
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
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 2rem;
  text-align: center;
`;

const Form = styled.form`
  background: #222;
  border-radius: 18px;
  padding: 2.5rem 2rem;
  box-shadow: 0 2px 16px 0 rgba(0,0,0,0.10);
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  min-width: 320px;
  max-width: 400px;
  width: 100%;
  @media (max-width: 600px) {
    min-width: 0;
    max-width: 98vw;
    padding: 1.2rem 0.7rem;
  }
`;

const Label = styled.label`
  color: var(--color-gold);
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
`;

const Input = styled.input`
  padding: 0.7rem 1rem;
  border-radius: 8px;
  border: none;
  background: #191919;
  color: var(--color-text);
  font-size: 1rem;
  outline: none;
`;

const Textarea = styled.textarea`
  padding: 0.7rem 1rem;
  border-radius: 8px;
  border: none;
  background: #191919;
  color: var(--color-text);
  font-size: 1rem;
  min-height: 90px;
  outline: none;
`;

const Button = styled(motion.button)`
  background: var(--color-gold);
  color: #111;
  font-weight: 700;
  padding: 0.9rem 2rem;
  border-radius: 32px;
  font-size: 1.1rem;
  box-shadow: 0 2px 16px 0 rgba(0,0,0,0.18);
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  cursor: pointer;
  border: none;
  margin-top: 0.5rem;
  &:hover {
    background: #fffbe6;
    color: #111;
    box-shadow: 0 4px 32px 0 rgba(0,0,0,0.22);
  }
`;

const SuccessMsg = styled(motion.div)`
  color: var(--color-gold);
  background: #191919;
  border-radius: 10px;
  padding: 1.2rem 1rem;
  margin-top: 1.5rem;
  text-align: center;
  font-weight: 600;
`;

export default function Formulario() {
  const [form, setForm] = useState({ nombre: '', email: '', empresa: '', mensaje: '' });
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nombre || !form.email || !form.mensaje) {
      setError('Por favor completá los campos obligatorios.');
      return;
    }
    setEnviado(true);
    setTimeout(() => setEnviado(false), 4000);
    setForm({ nombre: '', email: '', empresa: '', mensaje: '' });
  };

  return (
    <Section id="contacto">
      <Title
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Contactanos
      </Title>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <div>
          <Label htmlFor="nombre">Nombre*</Label>
          <Input id="nombre" name="nombre" value={form.nombre} onChange={handleChange} required />
        </div>
        <div>
          <Label htmlFor="email">Email*</Label>
          <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} required />
        </div>
        <div>
          <Label htmlFor="empresa">Empresa</Label>
          <Input id="empresa" name="empresa" value={form.empresa} onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="mensaje">Mensaje*</Label>
          <Textarea id="mensaje" name="mensaje" value={form.mensaje} onChange={handleChange} required />
        </div>
        {error && <SuccessMsg initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{error}</SuccessMsg>}
        <Button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Enviar
        </Button>
        {enviado && (
          <SuccessMsg
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            ¡Gracias! Te contactaremos pronto.
          </SuccessMsg>
        )}
      </Form>
    </Section>
  );
} 