import { motion, useTransform } from 'motion/react';
import { Atom, Server, Sparkles, Workflow } from 'lucide-react';
import profile from '../data/profile';
import { EASE } from '../lib/motion';

const [roleTitle, roleFocus] = profile.role.split('|').map((part) => part.trim());

// Each line is a list of [text, token-type] pairs for simple syntax colouring.
const CODE = [
  [['const ', 'kw'], ['engineer', 'var'], [' = {', 'punc']],
  [['  name', 'key'], [': ', 'punc'], [`"${profile.name}"`, 'str'], [',', 'punc']],
  [['  role', 'key'], [': ', 'punc'], [`"${roleTitle}"`, 'str'], [',', 'punc']],
  [['  stack', 'key'], [': [', 'punc']],
  [['    "React"', 'str'], [', ', 'punc'], ['"Node.js"', 'str'], [',', 'punc']],
  [['    "ASP.NET Core"', 'str'], [', ', 'punc'], ['"Python"', 'str'], [',', 'punc']],
  [['  ]', 'punc'], [',', 'punc']],
  [['  focus', 'key'], [': ', 'punc'], [`"${roleFocus}"`, 'str'], [',', 'punc']],
  [['  based', 'key'], [': ', 'punc'], [`"${profile.location}"`, 'str'], [',', 'punc']],
  [['  shipping', 'key'], [': ', 'punc'], ['true', 'bool'], [',', 'punc']],
  [['};', 'punc']],
  [['', 'punc']],
  [[`// ${profile.availability}`, 'comment']],
];

const TOKEN_CLASS = {
  kw: 'text-[#c792ea]',
  var: 'text-[#82aaff]',
  key: 'text-fg/90',
  str: 'text-accent-2',
  bool: 'text-accent-3',
  punc: 'text-muted',
  comment: 'text-muted/70 italic',
};

const CHIPS = [
  { label: 'React', Icon: Atom, position: '-left-8 top-10', depth: 36, delay: '0s' },
  { label: 'Node.js', Icon: Server, position: '-right-6 top-1/4', depth: -28, delay: '1.2s' },
  { label: 'Gemini API', Icon: Sparkles, position: '-left-20 bottom-28', depth: 52, delay: '0.6s' },
  { label: 'LangChain', Icon: Workflow, position: '-right-6 -bottom-12', depth: -44, delay: '1.8s' },
];

// Tech badge floating at its own depth: moves further with the pointer the "closer" it is.
const Chip = ({ label, Icon, position, depth, delay, pointerX, pointerY }) => {
  const x = useTransform(pointerX, [-0.5, 0.5], [-depth, depth]);
  const y = useTransform(pointerY, [-0.5, 0.5], [-depth, depth]);

  return (
    <motion.div style={{ x, y }} className={`absolute z-20 hidden sm:block ${position}`}>
      <div
        className="animate-float flex items-center gap-2 rounded-full border border-white/10 bg-ink-3/80 px-3.5 py-2 text-xs font-medium text-fg shadow-xl shadow-black/40 backdrop-blur-md"
        style={{ animationDelay: delay }}
      >
        <Icon className="h-3.5 w-3.5 text-accent" />
        {label}
      </div>
    </motion.div>
  );
};

// Hero visual: a code editor card that tilts in 3D toward the pointer, ringed by floating tech chips.
const CodeWindow = ({ pointerX, pointerY }) => {
  const rotateX = useTransform(pointerY, [-0.5, 0.5], [9, -9]);
  const rotateY = useTransform(pointerX, [-0.5, 0.5], [-12, 12]);

  return (
    <div className="relative mx-auto w-full max-w-120 perspective-[1400px]">
      {CHIPS.map((chip) => (
        <Chip key={chip.label} {...chip} pointerX={pointerX} pointerY={pointerY} />
      ))}

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.35, ease: EASE }}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative"
      >
        <div
          aria-hidden="true"
          className="absolute -inset-6 rounded-[2rem] bg-linear-to-br from-accent/40 via-transparent to-accent-2/30 opacity-70 blur-3xl"
        />

        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d0f16]/95 shadow-[0_40px_120px_-20px_rgb(0_0_0/0.8)]">
          <div className="flex items-center gap-2 border-b border-white/6 bg-white/2 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            <span className="ml-3 rounded-md bg-white/5 px-2.5 py-1 font-mono text-[11px] text-muted">
              engineer.config.js
            </span>
          </div>

          <div
            role="img"
            className="overflow-hidden px-4 py-5 font-mono whitespace-pre text-[12px] leading-[1.75] sm:text-[13px]"
            aria-label={`${profile.name}, ${profile.role}, based in ${profile.location}`}
          >
            {CODE.map((line, i) => (
              <motion.div
                key={i}
                className="flex"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.75 + i * 0.07, ease: EASE }}
              >
                <span aria-hidden="true" className="mr-5 w-5 shrink-0 text-right text-white/20 select-none">
                  {i + 1}
                </span>
                <code>
                  {line.map(([text, type], j) => (
                    <span key={j} className={TOKEN_CLASS[type]}>
                      {text}
                    </span>
                  ))}
                  {i === CODE.length - 1 ? (
                    <span aria-hidden="true" className="animate-blink ml-0.5 inline-block h-[1.1em] w-[7px] translate-y-[3px] bg-accent" />
                  ) : null}
                </code>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center justify-between border-t border-white/6 px-4 py-2.5 font-mono text-[11px] text-muted">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-2" />
              main
            </span>
            <span>UTF-8 · JavaScript</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CodeWindow;
