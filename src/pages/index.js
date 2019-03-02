import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';

import Layout from '../components/layout';
import SEO from '../components/seo';
import SectionHeader from '../components/section-header';
import Next from '../components/next';
import Archives from '../components/archives';

const isDebug = false;
const debug = isDebug ? 'border border-white' : '';
const centerFlex = 'flex flex-col items-center justify-around';
const contentTextHeader = 'mb-10 text-center';
const contentText =
  'font-mono mt-10 flex-grow md:w-2/5 text-lg leading-loose mx-auto font-thin';

function IndexPage() {
  return (
    <Layout>
      <SEO title="Noodesign" keywords={['noodesign']} />

      <Parallax pages={5}>
        <ParallaxLayer offset={0} speed={0.5}>
          <section
            id="noosdesign"
            className={`min-h-screen ${centerFlex} ${debug}`}
          >
            <h1 className="text-5xl font-thin">NOÖSDESIGN</h1>
          </section>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.5}>
          <section
            id="quisommesnous"
            className={`min-h-screen ${centerFlex} md:text-center ${debug}`}
          >
            <SectionHeader
              className={contentTextHeader}
              title={'qui sommes-noös ?'}
            />

            <p className={contentText}>
              S’«il faut donner du style à son caractère», comme l’écrivait
              Nietzsche, pionnier de l’individuation, il faut que les processus
              du design participatif déterminent non seulement une fonction
              commune, mais aussi un style qui recouvre les formes du design
              pour dessiner un sens collectif partagé qui incarne une sympathie
              dans une matière et une technicité devenant politiques, car
              résultant d’une synthèse collective.
            </p>
          </section>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.5}>
          <section
            id="avenir"
            className={`min-h-screen relative md:w-5/6 mx-auto ${debug}`}
          >
            <SectionHeader title={'à venir'} rotate="left" />

            <Next />
          </section>
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={0.5}>
          <section
            id="projets"
            className={`min-h-screen ${centerFlex} md:text-center ${debug}`}
          >
            <SectionHeader className={contentTextHeader} title={'projets'} />

            <p className={contentText}>
              S’«il faut donner du style à son caractère», comme l’écrivait
              Nietzsche, pionnier de l’individuation, il faut que les processus
              du design participatif déterminent non seulement une fonction
              commune, mais aussi un style qui recouvre les formes du design
              pour dessiner un sens collectif partagé qui incarne une sympathie
              dans une matière et une technicité devenant politiques, car
              résultant d’une synthèse collective.
            </p>
          </section>
        </ParallaxLayer>

        <ParallaxLayer offset={4} speed={0.5}>
          <section
            id="archives"
            className={`min-h-screen relative md:w-5/6 mx-auto ${debug}`}
          >
            <SectionHeader title={'archives'} rotate="right" />

            <Archives />
          </section>
        </ParallaxLayer>
      </Parallax>
    </Layout>
  );
}

export default IndexPage;
