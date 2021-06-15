import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Section from '../components/Section'
import JotformEmbed from 'react-jotform-embed'
import Helmet from 'react-helmet'

const Index = () => (
  <Layout>
    <Helmet>
      <meta charSet='utf-8' />
      <title>DCC Academy: Front End Dev Bootcamp</title>
      <link rel='canonical' href='https://www.dccacademy.be' />
      <meta
        name='description'
        content='Word Front End Dev rockstar en geef je carrièrekansen een boost met deze 6 weekse bootcamp.'
      />
      <meta
        property='og:image'
        content='https://www.dccacademy.be/fb-share.jpg'
      />
    </Helmet>
    <Header
      title='Front End Web Dev'
      subTitle='6 week bootcamp'
      cta='Sign Up'
    />
    <Section title='Wat'>
      <p>
        Heb je ervaring met UI design en nieuwsgierig naar de technische kant
        van het web? Zet de eerste stap in het ontwikkelen van web en mobile
        apps en geef je carrièrekansen een boost.
      </p>
    </Section>
    <Section title='Hoe'>
      <p>
        Duik in de wereld van front end development voor websites en mobile
        apps. Leer programmeren en de tools gebruiken voor een optimale
        workflow. Starten doen we bij de basis, maar naargelang de bootcamp
        vordert krijg je een meer geïndividualiseerd traject. Zo maken we
        optimaal gebruik van jouw sterktes en interesses op jouw leertempo.
      </p>
      <p>
        Elke week start met een cursusdag in{' '}
        <a href='https://thetimechamber.be/home/'>The Timechamber</a>. Daar leer
        je over de te ontdekken onderwerpen van die week. Daarna is het aan jou:
        je verdiept je in de behandelde stof of je werkt aan een opdracht,
        eventueel samen met de andere cursisten. Je kiest je eigen tempo en waar
        je graag werkt, dat kan in de coworking space, thuis of op je favoriete
        vakantiebestemming. Je staat steeds online in contact met de
        cursusbegeleider en de andere cursisten om elkaar te helpen.
      </p>
    </Section>
    <Section title='Maak kennis met'>
      <ul>
        <li>🚀 JavaScript</li>
        <li>
          🚀 <a href='https://reactjs.org/'>React</a>
        </li>
        <li>
          🚀 CSS frameworks zoals{' '}
          <a href='https://material-ui.com/'>Material UI</a> &{' '}
          <a href='https://getbootstrap.com/'>Bootstrap</a>
        </li>
        <li>🚀 Responsive design</li>
        <li>🚀 API’s & praten met de backend</li>
        <li>
          🚀 Git, <a href='https://github.com/'>GitHub</a> & in team werken aan
          code
        </li>
        <li>
          🚀 <a href='https://nodejs.org/en/'>Node.js</a> &{' '}
          <a href='https://www.npmjs.com/'>NPM</a>
        </li>
        <li>
          🚀 <a href='https://www.gatsbyjs.com/'>GatsbyJS</a> & andere frontend
          frameworks
        </li>
      </ul>
    </Section>
    <Section title='Voor wie'>
      <ul>
        <li>👌 Je hebt al basiskennis HTML/CSS</li>
        <li>👌 Je hebt ervaring of voeling met UI/UX ontwerp</li>
        <li>👌 Je bent nieuwsgierig naar programmeren</li>
        <li>👌 Je kan werken met grafische programma’s</li>
      </ul>
    </Section>
    <Section title='Jouw carrière'>
      <p>
        Zowel als freelancer als sollicitant is er een grote vraag naar
        JavaScript en React ontwikkelaars. Deze bootcamp zorgt voor een serieuze
        stap in die richting. Een werkgever vinden die jou de mogelijkheid biedt
        jezelf verder te ontwikkelen in deze industrie ligt na de bootcamp
        binnen handbereik. Ook bij{' '}
        <a href='https://gorillamarketing.be/'>Gorilla Marketing</a> bieden we
        graag kansen aan beloftevol talent. Als deelnemer heb je al zeker een
        streepje voor. 😎
      </p>
    </Section>
    <Section title='Locatie'>
      <p>
        De bootcamp gaat door in The Timechamber, een polyvalente hub voor
        creatives. Gelegen te Ranst, vlakbij de E313, kan je er terecht voor
        fotoshoot’s, videoproductie in de industriele hal of het opnemen van
        podcasts. Daarnaast is er de coworking space waar o.a. de marketeers van
        Gorilla Marketing flink tekeer gaan voor hun klanten. De fitness en het
        voetbalterrein worden gebruikt door sporters en personal coaches, maar
        ook de medewerkers en coworkers geven er soms het beste van zichzelf.
      </p>
      <p>
        Tijdens de bootcamp ben je er dagelijks welkom tussen 9u en 18u. Je kan
        gebruik maken van alle faciliteiten en je drinkt er onbeperkt koffie,
        thee en water. Tijdens de middag is er een simpele lunch inbegrepen die
        je deelt met je coworkers. Als je na een sportsessie wilt douchen,
        voorzie je wel je eigen handdoek.
      </p>
      <p>
        <a href='https://thetimechamber.be/home/'>The Timechamber</a> en{' '}
        <a href='https://digitalcontentcreators.be/'>DCC Academy</a> zijn beide
        initiatieven van het full marketingbureau{' '}
        <a href='https://gorillamarketing.be/'>Gorilla Marketing</a>.
      </p>{' '}
    </Section>
    <Section title='Bootcamp instructeur'>
      <b>Tomas Vink 👨‍🏫</b>
      <ul>
        <li>
          <a href='https://www.linkedin.com/in/tomasvink'>
            https://www.linkedin.com/in/tomasvink
          </a>
        </li>
        <li>
          <a href='https://github.com/TomasVink'>
            https://github.com/TomasVink
          </a>
        </li>
      </ul>
      <p>
        Als Full Stack JavaScript ontwikkelaar en projectmanager heeft Tomas op
        ruim 8 jaar tijd al aan heel wat kleine en grote projecten gewerkt. Hij
        heeft steeds de vinger aan de pols in het snel veranderende
        technologisch landschap. Als projectmanager legt hij complexe zaken op
        een eenvoudige manier uit aan klanten en andere stakeholders in een
        project. Diezelfde skill zet hij ook graag in voor de opleiding van
        jonge collega’s.
      </p>
      Zijn visie?
      <br />
      <blockquote className='blockquote'>
        <em>
          “Geef talent een basis toolset in handen en leer ze vooral
          zelfredzaamheid. Dat is wellicht de belangrijkste skill voor een
          developer, jezelf steeds blijven uitdagen op zoek te gaan naar een nog
          betere oplossing.”
        </em>
      </blockquote>
    </Section>
    <Section title='Data'>
      <p> 9 augustus tot 17 september (6 weken)</p>
      <p>
        <b>🏠 Fase 1: The Basics</b>
        <br />
        <em>JavaScript, Git en andere tools</em>
        <br />
        Lesdag op 9 en 16 augustus.
      </p>
      <p>
        <b>🏗️ Fase 2: The Start Up</b>
        <br /> <em>React en CSS frameworks</em>
        <br />
        Lesdag op 23 en 30 augustus.
      </p>
      <p>
        <b>🌐 Fase 3: The Bigger Picture</b>
        <br /> <em>Node.js, API’s & front end frameworks</em>
        <br />
        Lesdag op 6 en 13 september
      </p>
    </Section>
    <Section title='Prijs & inschrijven' id='signup'>
      <p>249€ per week of 1.249€ voor 6 weken. Incl. BTW.</p>
      <p>
        Stuur een mailtje naar{' '}
        <a href='mailto:info@dccacademy.be'>info@dccacademy.be</a> voor meer
        informatie en vragen over de inschrijving.
      </p>
      <p>Inschrijven kan door onderstaande formulier in te vullen.</p>
      <p>
        <b>
          ⚠️ Schrijf je snel in, voor de eerste groep zijn slechts 5 plaatsen
          beschikbaar. ⚠️
        </b>
      </p>
    </Section>
    <section>
      <div className='container px-4 my-5'>
        <JotformEmbed src='https://form.jotformeu.com/211612715835049' />
      </div>
    </section>
  </Layout>
)

export default Index
