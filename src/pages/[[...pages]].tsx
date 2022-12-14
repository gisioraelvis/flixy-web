import { useEffect } from "react";
import { useRouter } from "next/router";
import { InferGetStaticPropsType } from "next";
import dynamic from "next/dynamic";
import { scroller } from "react-scroll";
import type { NextPageWithLayout } from "@/types";
import HomeLayout from "@/layouts/_home";
import Seo from "@/components/seo/seo";
import { useWindowSize } from "@/lib/use-window-size";
import { getStaticPaths, getStaticProps } from "@/rest/home-pages.ssr";
export { getStaticPaths, getStaticProps };

const CartCounterButton = dynamic(
  () => import("@/components/cart/cart-counter-button"),
  { ssr: false }
);

const Classic = dynamic(() => import("@/layouts/classic"));
const Standard = dynamic(() => import("@/layouts/standard"));
const Modern = dynamic(() => import("@/layouts/modern"));
const Minimal = dynamic(() => import("@/layouts/minimal"));
const Compact = dynamic(() => import("@/layouts/compact"));

const MAP_LAYOUT_TO_GROUP: Record<string, any> = {
  classic: Classic,
  modern: Modern,
  standard: Standard,
  minimal: Minimal,
  compact: Compact,
  default: Classic,
};

const Home: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ variables, layout }) => {
  const { query } = useRouter();
  const { width } = useWindowSize();
  // const { layout, page } = useLayout();

  useEffect(() => {
    if (query.text || query.category) {
      scroller.scrollTo("grid", {
        smooth: true,
        offset: -110,
      });
    }
  }, [query.text, query.category]);

  const Component = MAP_LAYOUT_TO_GROUP[layout];
  return (
    <>
      {/* <Seo title={page?.name} url={page?.slug} images={page?.banners} /> */}
      <Component variables={variables} />
      {!["compact", "minimal"].includes(layout) && width > 1023 && (
        <CartCounterButton />
      )}
    </>
  );
};

Home.getLayout = function getLayout(page) {
  return <HomeLayout layout={page.props.layout}>{page}</HomeLayout>;
};

export default Home;
