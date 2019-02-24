import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import SectionHeader from "../components/section-header";
import Next from "../components/next";
import Archives from "../components/archives";

function IndexPage() {
  return (
    <Layout>
      <SEO title="Noodesign" keywords={["noodesign"]} />

      <section
        id="noosdesign"
        className="min-h-screen flex items-center justify-around"
      >
        <h1 className="text-5xl font-thin">NOÖSDESIGN</h1>
      </section>

      <section id="quisommesnous" className="mt-24 md:text-center min-h-screen">
        <SectionHeader title={"qui sommes-noös ?"} />

        <p className="mt-10 md:w-2/5 text-lg leading-loose mx-auto font-thin">
          S’«il faut donner du style à son caractère», comme l’écrivait
          Nietzsche, pionnier de l’individuation, il faut que les processus du
          design participatif déterminent non seulement une fonction commune,
          mais aussi un style qui recouvre les formes du design pour dessiner un
          sens collectif partagé qui incarne une sympathie dans une matière et
          une technicité devenant politiques, car résultant d’une synthèse
          collective.
        </p>
      </section>

      <section
        id="avenir"
        className="mt-24 relative mx-auto md:w-5/6 min-h-screen"
      >
        <SectionHeader title={"à venir"} rotate="left" />

        <Next />
      </section>

      <section id="projets" className="mt-24 md:text-center min-h-screen">
        <SectionHeader title={"projets"} />

        <p className="mt-10 md:w-2/5 text-lg leading-loose mx-auto font-thin">
          S’«il faut donner du style à son caractère», comme l’écrivait
          Nietzsche, pionnier de l’individuation, il faut que les processus du
          design participatif déterminent non seulement une fonction commune,
          mais aussi un style qui recouvre les formes du design pour dessiner un
          sens collectif partagé qui incarne une sympathie dans une matière et
          une technicité devenant politiques, car résultant d’une synthèse
          collective.
        </p>
      </section>

      <section
        id="archives"
        className="my-24 relative mx-auto md:w-5/6 min-h-screen"
      >
        <SectionHeader title={"archives"} rotate="right" />

        <Archives />
      </section>
    </Layout>
  );
}

export default IndexPage;
