import { Article } from '@/lib/placeholder-data';
import ArticleCard from './ArticleCard';

interface SidebarProps {
  articles: Article[];
}

export default function Sidebar({ articles }: SidebarProps) {
  return (
    <aside className="lg:border-l-2 lg:border-nyt-border lg:pl-8">
      {/* Most Popular Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-headline font-bold border-b-2 border-nyt-black pb-2 mb-4">
          Most Popular
        </h2>
        <div className="space-y-6">
          {articles.slice(0, 5).map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              variant="minimal"
            />
          ))}
        </div>
      </div>

      {/* Opinion Section */}
      <div className="mb-8 p-4 bg-gray-100 border-l-4 border-nyt-black">
        <h3 className="text-lg font-headline font-bold mb-3">
          Opinion
        </h3>
        <div className="space-y-4">
          {articles.slice(5, 7).map((article) => (
            <ArticleCard
              key={article.id}
              article={{...article, category: 'Opinion'}}
              variant="minimal"
            />
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="p-6 border-2 border-nyt-black bg-white">
        <h3 className="text-xl font-headline font-bold mb-2">
          Get the Morning Briefing
        </h3>
        <p className="text-sm text-nyt-gray mb-4">
          Start your day with the top stories you need to know.
        </p>
        <button className="w-full bg-nyt-black text-white py-2 px-4 font-sans font-semibold uppercase text-sm tracking-wide hover:bg-nyt-gray transition-colors">
          Subscribe
        </button>
      </div>
    </aside>
  );
}
