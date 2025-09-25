export interface SkillProps {
  name: string;
  link: string;
  icon: string;
}

export const SkillCard = ({ link, icon, name }: SkillProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
      // data-blobity-tooltip={name}
    >
      <div
        className={`relative flex h-auto w-[120px] md:w-[160px] items-center justify-center overflow-hidden`}
      >
        <img
          src={icon}
          alt={name}
          className="w-[60px] md:w-[100px] h-auto rounded-xl object-cover object-center"
        />
      </div>
    </a>
  );
};
