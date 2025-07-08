import Head from 'next/head'
import Header from '../src/components/Header'
import Hero from '../src/components/Hero'
import Proceso from '../src/components/Proceso'
import Beneficios from '../src/components/Beneficios'
import Formulario from '../src/components/Formulario'

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
