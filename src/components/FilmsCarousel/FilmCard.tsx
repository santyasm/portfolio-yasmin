export interface FilmProps {
  name: string;
  src: string;
}

export const FilmCard = ({ name, src }: FilmProps) => {
  return (
    <div className="relative mx-2 flex-shrink-0 group">
      <div className="w-[100px] md:w-[130px] overflow-hidden rounded-lg">
        <img
          src={src}
          alt={name}
          className="w-full aspect-[2/3] object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 rounded-lg bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2">
        <span className="text-white text-[10px] md:text-[11px] font-light leading-tight font-code">
          {name}
        </span>
      </div>
    </div>
  );
};
