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
        className={`relative flex h-[120px] w-[150px] items-center justify-center overflow-hidden rounded-xl`}
      >
        <img
          src={icon}
          alt={name}
          className="w-[100px] h-auto rounded-xl object-cover object-center"
        />
      </div>
    </a>
  );
};
