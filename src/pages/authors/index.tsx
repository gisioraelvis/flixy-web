import { getLayout as getSiteLayout } from '@/layouts/layout';
import { useTranslation } from 'next-i18next';
import Search from '@/components/ui/search/search';
import AuthorsGrid from '@/components/author/authors-grid';
export { getStaticProps } from '@/rest/authors-page.ssr';

export default function AuthorsPage() {
  const { t } = useTranslation('common');
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="mb-4 text-2xl font-bold text-accent sm:text-3xl lg:text-4xl">
          {t('text-search-authors-title')}
        </h1>
        <p className="text-base text-heading">
          {t('text-search-authors-subtitle')}
        </p>

        <div className="mt-12 w-full max-w-screen-md">
          <Search
            variant="minimal"
            label="search"
            placeholder={t('text-search-author')}
          />
        </div>
      </div>
      <AuthorsGrid />
    </>
  );
}

const getLayout = (page: React.ReactElement) =>
  getSiteLayout(
    <div className="w-full bg-light">
      <div className="mx-auto min-h-screen max-w-1920 px-5 py-10 xl:py-14 xl:px-16">
        {page}
      </div>
    </div>
  );

AuthorsPage.getLayout = getLayout;
