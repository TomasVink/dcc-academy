import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Section from '../components/Section'

const Index = () => (
  <Layout>
    <Header
      title='Front End Web Dev'
      subTitle='6 week bootcamp'
      cta='Sign Up'
    />
    <Section title='Wat'>
      <p>
        Ervaring met UI design en nieuwsgierig naar de technische kant van het
        web? Zet de eerste stap richting het ontwikkelen van web en mobile apps
        en geef je carrière een boost.
      </p>
    </Section>
    <Section title='Hoe'>
      <p>
        Op zes weken tijd wordt je ondergedompeld in de wereld van front end
        development voor websites en mobile apps. Je leert programmeren en de
        tools gebruiken voor een optimale workflow. We starten uiteraard met de
        basis, maar naargelang de bootcamp vordert gaan we naar een meer
        geïndividualiseerd traject. Zo maken we optimaal gebruik van jouw
        sterktes, interesses en leertempo.
      </p>
      <p>
        We starten elke week met een cursusdag op locatie. Daarin leggen we de
        basis voor de die week te ontdekken onderwerpen. De rest van de week is
        het aan jou: je verdiept je verder in de behandelde stof, werkt samen
        met andere cursisten of je werkt aan een opdracht voor die week. Je
        kiest verder je eigen tempo en waar je graag werkt, dat kan in TTC,
        thuis of op je favoriete vakantiebestemming. Je staat steeds online in
        contact met de cursusbegeleider en de andere cursisten om elkaar te
        helpen.
      </p>
    </Section>
    <Section title='Maak kennis met'>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>CSS frameworks (Material UI, Bootstrap)</li>
        <li>Responsive design</li>
        <li>API’s & praten met de backend</li>
        <li>Git, GitHub & in team werken aan code</li>
        <li>Nodejs & npm</li>
        <li>Gatsbyjs & andere frontend frameworks</li>
      </ul>
    </Section>
    <Section title='Benodigde vaardigheden'>
      <ul>
        <li>Basiskennis HTML/CSS</li>
        <li>Ervaring met UI ontwerp</li>
        <li>Voeling met UX</li>
        <li>Kunnen werken met grafische programma’s naar keuze</li>
      </ul>
    </Section>
    <Section title='Na de bootcamp'>
      <ul>
        <li>
          Kan je een persoonlijke website op zetten, bv een blog of portfolio
        </li>
        <li>Denk je mobile first, bij UI/UX design</li>
        <li>Weet je hoe je je verder verdiept in web development</li>
      </ul>
    </Section>
  </Layout>
)

export default Index
