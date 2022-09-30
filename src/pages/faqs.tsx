import Accordion from "@/components/ui/accordion";
import { faqs } from "@/static/faqs";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { GetStaticProps } from "next";
import { getLayout } from "@/layouts/layout";
import Seo from "@/components/seo/seo";

export default function FaqsPage() {
  const { t } = useTranslation();
  return (
    <>
      <Seo title="Help" url="help" />
      <section className="py-8 px-4 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-20">
        <header className="mb-8 text-center">
          <h1 className="text-xl font-bold md:text-2xl xl:text-3xl">
            {t("common:nav-menu-faqs")}
          </h1>
        </header>
        <div className="mx-auto w-full max-w-screen-lg">
          <Accordion items={faqs} translatorNS="faqs" />
        </div>
      </section>
    </>
  );
}

FaqsPage.getLayout = getLayout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common", "faqs"])),
    },
  };
};
