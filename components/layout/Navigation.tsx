import { sections } from '@/lib/placeholder-data';

export default function Navigation() {
  return (
    <nav className="border-b-2 border-nyt-black mb-8">
      <ul className="flex justify-center items-center gap-4 md:gap-6 lg:gap-8 py-3 overflow-x-auto">
        {sections.map((section) => (
          <li key={section}>
            <a
              href={`#${section.toLowerCase()}`}
              className="text-xs md:text-sm font-sans font-semibold uppercase tracking-wide text-nyt-black hover:text-nyt-link transition-colors whitespace-nowrap"
            >
              {section}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
