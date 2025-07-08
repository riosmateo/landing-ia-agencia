import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Proceso from '../components/Proceso'
import Beneficios from '../components/Beneficios'
import Formulario from '../components/Formulario'

export default function Home() {
  return (
    <>
      <Head>
        <title>Landing IA Automotriz - ¡Ahora sí funciona!</title>
        <meta name="description" content="Landing page de agencia de automatización con IA para el sector automotriz." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <Proceso />
      <Beneficios />
      <Formulario />
    </>
  )
}
