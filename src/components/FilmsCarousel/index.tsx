import { useTranslation } from "react-i18next";
import { FilmCard } from "./FilmCard";
import type { FilmProps } from "./FilmCard";
import "../../animations/animation.css";

const films: FilmProps[] = [
  { name: "2001: A Space Odyssey", src: "/films/2001.jpg" },
  { name: "Arrival", src: "/films/arrival.jpg" },
  { name: "Bohemian Rhapsody", src: "/films/bohemian_rhaspsody.jpg" },
  { name: "Cabra Marcado Para Morrer", src: "/films/cabra_marcado_para_morrer.jpg" },
  { name: "City of God", src: "/films/city_of_god.jpg" },
  { name: "Coherence", src: "/films/coherence.jpg" },
  { name: "Dead Poets Society", src: "/films/dead_poets_society.jpeg" },
  { name: "Eternal Sunshine of the Spotless Mind", src: "/films/eternal_sunshine.jpg" },
  { name: "Everything Everywhere All at Once", src: "/films/Everything_Everywhere_All_at_Once.jpg" },
  { name: "Flow", src: "/films/flow.jpg" },
  { name: "Hour of the Star", src: "/films/hour_of_the_star.jpg" },
  { name: "Inception", src: "/films/inception.jpg" },
  { name: "Inglourious Basterds", src: "/films/inglorious_basterds.jpg" },
  { name: "Jojo Rabbit", src: "/films/jojo_rabbit.jpg" },
  { name: "Mad Max: Fury Road", src: "/films/mad_max_fury_road.jpg" },
  { name: "Mickey 17", src: "/films/mickey_17.jpg" },
  { name: "Mulholland Drive", src: "/films/mulholland_drive.jpg" },
  { name: "Pan's Labyrinth", src: "/films/pans_labyrinth.jpg" },
  { name: "Parasite", src: "/films/parasite.jpg" },
  { name: "Project Hail Mary", src: "/films/project_hail_mary.jpg" },
  { name: "Spirited Away", src: "/films/spirited_away.jpg" },
  { name: "The Hunger Games: Catching Fire", src: "/films/the_hunger_games_catching_fire.jpg" },
  { name: "The Second Mother", src: "/films/the_second_mother.jpg" },
  { name: "The Truman Show", src: "/films/the_truman_show.jpg" },
];

export const FilmsCarousel = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full flex flex-col items-center gap-6 mb-10 mt-2">
      <h3 className="text-[12px] font-bold uppercase tracking-[0.25em] text-[#6b6560] font-code">
        {t("about.filmsTitle")}
      </h3>

      <div className="overflow-hidden w-full h-[175px] md:h-[220px] flex items-center">
        <div className="animate-slow flex">
          <div className="flex">
            {films.map((film, i) => (
              <FilmCard key={i} {...film} />
            ))}
          </div>
          <div className="flex" aria-hidden="true">
            {films.map((film, i) => (
              <FilmCard key={`dup-${i}`} {...film} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
