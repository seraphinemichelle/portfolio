type SectionHeadingProps = {
  number: string;
  label: string;
  light?: boolean;
};

export default function SectionHeading({
  number,
  label,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`section-topline${light ? " light-line" : ""}`}>
      <span>{number}</span>
      <span>{label}</span>
    </div>
  );
}
