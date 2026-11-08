// Renders `text`, setting the first occurrence of `accent` in italic serif with the brand gradient.
const Accent = ({ text, accent }) => {
  const start = accent ? text.indexOf(accent) : -1;
  if (start === -1) return text;

  return (
    <>
      {text.slice(0, start)}
      <span className="text-gradient pr-[0.08em] font-serif font-normal italic">{accent}</span>
      {text.slice(start + accent.length)}
    </>
  );
};

export default Accent;
