import Service from '@ember/service';

import { content } from '../models/content';

export default class extends Service {
  fetch() {
    return contentGroupByType();
  }
}

content.push({
  title: '"Démocratie Numérique Populaire"',
  description: [
    'Loin des clichés médiatiques, il faut attester que le mouvement des Gilets Jaunes s’est différencié des luttes politiques françaises antérieures par de nombreux usages, pratiques et projets technologiques, médiatiques et numériques.',
    'Les Gilets Jaunes ont habité les réseaux sociaux numériques (Facebook, Instagram, Whatsapp, Telegram, Mastodon, etc.) pour communiquer, se mobiliser, se coordonner, se regrouper. Certains ont fait corps avec de nouvelles technologies audiovisuelles (caméras embarquées, GoPro, smartphones, etc.) pour informer ou documenter des aspects méconnus ou des expériences vécues au sein du mouvement social. D’autres plus célèbres se sont réappropriés des dispositifs tels que le Facebook Live pour créer de nouvelles manières interactives de faire communauté.',
    'Au-delà de ces appropriations, les Gilets Jaunes sont aussi devenus des concepteurs de plateformes numériques pour développer de nouveaux outils technologiques d’organisation et de délibération.',
    'Les Gilets Jaunes ne se sont donc pas seulement retrouvés sur les ronds-points de France ou venus manifester sur les Champs-Elysées, ils ont en plus imaginé et produit des conceptions numériques de la politique, fondées sur leurs cultures et leurs enjeux, afin de développer de nouvelles puissances et expériences politiques.',
    'C’est cette nouvelle Démocratie Numérique Populaire que nous souhaitons mettre en discussion le 7 mars entre des chercheurs, des ingénieurs, des designers numériques et bien sûr de nombreux Gilets Jaunes qui viendront de Paris, de région parisienne et de province.',
    'Nous espérons que les usages et productions numériques des Gilets Jaunes qui seront présentés puissent être nourris par la diversité des intervenants invités qui prendront part aux débats. L’après-midi, des ateliers communs (intervenants + public) seront organisés pour approfondir ces discussions avec l’ensemble des personnes présentes à l’évènement. Ces ateliers seront animés par les institutions et associations partenaires, citoyennes, Gilets Jaunes ou spécialisées sur le numérique.',
    'L’évènement sera filmé et retransmis en direct par l’équipe de la chaîne Quartier Général.',
    'Nous serons également en duplex avec l’Assemblée des Assemblées n°5 des Gilets Jaunes, qui aura lieu à Toulouse, le même jour.',
    'En espérant vous voir nombreux !'
  ],
  date: 'Le samedi 7 mars 2020, de 9h à 19h30',
  location:
    'Maison des Sciences de l’Homme Paris Nord https://www.mshparisnord.fr',
  partners: [
    {
      label: 'Partenaires scientifiques et financiers',
      partners: ['Costech', 'EnCommuns', 'Le Médialab', 'CFE-CGC'].sort()
    },
    {
      label: 'Partenaires médias',
      partners: [
        'Quartier Général',
        'Médiapart',
        'Reporterre',
        'Sud Radio'
      ].sort()
    },
    {
      label: 'Automédias citoyens',
      partners: [
        'Le Pixel Mort',
        'Licorne News',
        'Le Canard Réfractaire',
        'La mule du pape',
        'Bang Bang TV',
        'JR Cinematics',
        'Cémil choses à te dire'
      ].sort()
    },
    {
      label: 'Associations issues du mouvement des Gilets Jaunes',
      partners: [
        'Objectif RIC',
        'Culture RIC ',
        'Le Vrai Débat',
        'La Ligne Jaune',
        'La Ligue Citoyenne',
        'Gilets Jaunes Coordination'
      ].sort()
    },

    {
      label: 'Associations numériques citoyennes',
      partners: [
        'La FFDN',
        'Framasoft',
        'Assemblée Virtuelle',
        'RiseFor',
        'Noödesign',
        'CartoDEBAT'
      ].sort()
    },

    {
      label: 'Partenaires universitaires',
      partners: [
        'ArTeC',
        'Le LERASS',
        'Le Laboratoire Triangle',
        'Labex COMOD',
        'Maison des Sciences de l’Homme Paris Nord'
      ].sort()
    }
  ],
  guests: [
    'Natasha',
    'Jude Mas',
    'Yohan Pavec',
    'Kevin Revol',
    'Lucas Remak',
    'Cléo Collomb',
    'Aude Lancelin',
    'Stéphane Alliés',
    'Hervé Kempf',
    'Didier Maisto',
    'Yves Citton',
    'Clément Mabi',
    'Nikos Bonnieure',
    'Hakim Lowe',
    'David Prost',
    'Michael Gas',
    'Florence',
    'Bernard Stiegler',
    'Pascal Marchand',
    'Vincent Ventresque',
    'Stephane Crozat',
    'Pierre-Yves Gosset',
    'Nicole Alix',
    'Igor Galligo',
    'Priscillia Ludosky',
    'Maxime Nicolle',
    'Faouzi Lellouche',
    'Philippe le Hérisse',
    'Dominique Cardon',
    'Dominique Pasquier',
    'Benjamin Coriat',
    'Luc Gwiazdzinski',
    'Victor Petit',
    'Caterina Froio',
    'Louis Ollagnon',
    'Didier Fradin',
    'Julien Lepeigneul',
    'Cémil Sanli'
  ].sort(),
  published: true,
  type: 'event',
  label: 'Démocratie Numérique Populaire',
  urls: [],
  archived: false,
  slug: 'dnp-2020',
  color: 1,
  isDnp: true
});

async function contentGroupByType() {
  let about,
    events = [],
    upcoming = [],
    archived = [],
    projects = [];

  for (let block of content) {
    switch (block.type) {
      case 'event':
        events.push(block);
        if (block.archived) {
          archived.push(block);
        } else {
          upcoming.push(block);
        }
        break;
      case 'project':
        projects.push(block);
        break;
      default:
        about = block;
    }
  }

  return { about, projects, events, upcoming, archived };
}
