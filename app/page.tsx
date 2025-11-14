import Masthead from '@/components/layout/Masthead';
import Navigation from '@/components/layout/Navigation';
import HeroArticle from '@/components/articles/HeroArticle';
import ArticleCard from '@/components/articles/ArticleCard';
import Sidebar from '@/components/articles/Sidebar';
import { generateArticles } from '@/lib/placeholder-data';

export default function Home() {
  // Generate placeholder articles
  const articles = generateArticles(20);
  const heroArticle = articles[0];
  const featuredArticles = articles.slice(1, 7);
  const sidebarArticles = articles.slice(7, 14);
  const additionalArticles = articles.slice(14);

  return (
    <div className="min-h-screen bg-nyt-cream">
      {/* Container with padding */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Masthead */}
        <Masthead />

        {/* Navigation */}
        <Navigation />

        {/* Main Grid Layout: 5 columns on desktop (3 main + 2 sidebar) */}
        <main className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Main Content Area (3 columns on desktop) */}
          <div className="lg:col-span-3">
            {/* Hero Article */}
            <HeroArticle article={heroArticle} />

            {/* Featured Articles Grid */}
            <section className="mb-12">
              <h2 className="text-3xl font-headline font-bold border-b-2 border-nyt-black pb-3 mb-6">
                Today's Headlines
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {featuredArticles.slice(0, 4).map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            </section>

            {/* Business Section */}
            <section className="mb-12 pb-8 border-b border-nyt-border">
              <h2 className="text-2xl font-headline font-bold border-b border-nyt-black pb-2 mb-6">
                Business
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredArticles.slice(4, 6).map((article) => (
                  <ArticleCard
                    key={article.id}
                    article={{...article, category: 'Business'}}
                    variant="horizontal"
                  />
                ))}
              </div>
            </section>

            {/* Technology Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-headline font-bold border-b border-nyt-black pb-2 mb-6">
                Technology
              </h2>
              <div className="space-y-6">
                {additionalArticles.slice(0, 3).map((article) => (
                  <ArticleCard
                    key={article.id}
                    article={{...article, category: 'Technology'}}
                    variant="horizontal"
                  />
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar (2 columns on desktop) */}
          <Sidebar articles={sidebarArticles} />
        </main>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t-4 border-nyt-black">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-headline font-bold mb-3 text-sm uppercase">News</h3>
              <ul className="space-y-2 text-sm text-nyt-gray">
                <li><a href="#" className="hover:text-nyt-link">Home Page</a></li>
                <li><a href="#" className="hover:text-nyt-link">World</a></li>
                <li><a href="#" className="hover:text-nyt-link">U.S.</a></li>
                <li><a href="#" className="hover:text-nyt-link">Politics</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-headline font-bold mb-3 text-sm uppercase">Opinion</h3>
              <ul className="space-y-2 text-sm text-nyt-gray">
                <li><a href="#" className="hover:text-nyt-link">Today's Opinion</a></li>
                <li><a href="#" className="hover:text-nyt-link">Columnists</a></li>
                <li><a href="#" className="hover:text-nyt-link">Editorials</a></li>
                <li><a href="#" className="hover:text-nyt-link">Letters</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-headline font-bold mb-3 text-sm uppercase">Arts</h3>
              <ul className="space-y-2 text-sm text-nyt-gray">
                <li><a href="#" className="hover:text-nyt-link">Today's Arts</a></li>
                <li><a href="#" className="hover:text-nyt-link">Books</a></li>
                <li><a href="#" className="hover:text-nyt-link">Movies</a></li>
                <li><a href="#" className="hover:text-nyt-link">Theater</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-headline font-bold mb-3 text-sm uppercase">More</h3>
              <ul className="space-y-2 text-sm text-nyt-gray">
                <li><a href="#" className="hover:text-nyt-link">Reader Center</a></li>
                <li><a href="#" className="hover:text-nyt-link">Cooking</a></li>
                <li><a href="#" className="hover:text-nyt-link">Games</a></li>
                <li><a href="#" className="hover:text-nyt-link">Podcasts</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-xs text-nyt-light-gray pt-6 border-t border-nyt-border">
            <p>© {new Date().getFullYear()} The New York Times. All rights reserved.</p>
            <p className="mt-2">Built with Next.js, TypeScript, and Tailwind CSS</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
