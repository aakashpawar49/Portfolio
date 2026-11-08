// Renders text where **double asterisks** mark emphasised phrases.
const RichText = ({ text }) => (
  <>
    {text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
      part.startsWith('**') && part.endsWith('**') ? (
        <strong key={i} className="font-medium text-fg">
          {part.slice(2, -2)}
        </strong>
      ) : (
        part
      ),
    )}
  </>
);

export default RichText;
