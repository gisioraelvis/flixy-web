import usePrice from '@/lib/use-price';
import { ThumbsCarousel } from '@/components/ui/thumb-carousel';
import { useTranslation } from 'next-i18next';
import { getVariations } from '@/lib/get-variations';
import { useMemo } from 'react';
import isEqual from 'lodash/isEqual';
import isEmpty from 'lodash/isEmpty';
import Truncate from '@/components/ui/truncate';
import { scroller, Element } from 'react-scroll';
import VariationPrice from './variation-price';
import { ROUTES } from '@/lib/routes';
import { Product } from '@/rest/types';
import { useAtom } from 'jotai';
import VariationGroups from './variation-groups';
import { isVariationSelected } from '@/lib/is-variation-selected';
import { Waypoint } from 'react-waypoint';
import { stickyShortDetailsAtom } from '@/store/sticky-short-details-atom';
import { useAttributes } from './attributes.context';
import { AddToCartAlt } from '@/components/products/add-to-cart/add-to-cart-alt';
import BadgeGroups from './badge-groups';
import Link from '@/components/ui/link';
import { displayImage } from '@/lib/display-product-preview-images';

type Props = {
  product: Product;
  backBtn?: boolean;
  isModal?: boolean;
};
const BookDetails: React.FC<Props> = ({ product, isModal = false }) => {
  const {
    name,
    image, //could only had image we need to think it also
    description,
    categories,
    gallery,
    type,
    sku,
    author,
    manufacturer,
    tags,
    is_digital,
  } = product ?? {};

  const { t } = useTranslation('common');
  const [_, setShowStickyShortDetails] = useAtom(stickyShortDetailsAtom);

  const { attributes } = useAttributes();

  const { price, basePrice, discount } = usePrice({
    amount: product?.sale_price ? product?.sale_price : product?.price!,
    baseAmount: product?.price ?? 0,
  });

  const variations = useMemo(
    () => getVariations(product?.variations),
    [product?.variations]
  );
  const isSelected = isVariationSelected(variations, attributes);
  let selectedVariation: any = {};
  if (isSelected) {
    selectedVariation = product?.variation_options?.find((o: any) =>
      isEqual(
        o.options.map((v: any) => v.value).sort(),
        Object.values(attributes).sort()
      )
    );
  }

  const scrollDetails = () => {
    scroller.scrollTo('details', {
      smooth: true,
      offset: -80,
    });
  };

  const onWaypointPositionChange = ({
    currentPosition,
  }: Waypoint.CallbackArgs) => {
    if (!currentPosition || currentPosition === 'above') {
      setShowStickyShortDetails(true);
    }
  };
  const hasVariations = !isEmpty(variations);
  const previewImages = displayImage(selectedVariation?.image, gallery, image);
  return (
    <article className="mx-auto max-w-screen-xl rounded-lg bg-light px-5 py-16 xl:px-0">
      <div className="flex flex-col border-b border-border-200 border-opacity-70 pb-14 lg:flex-row lg:space-x-10 rtl:lg:space-x-reverse xl:space-x-16">
        <div className="lg:w-1/2">
          <div className="product-gallery h-full bg-gray-100 py-5 md:py-16">
            <ThumbsCarousel
              gallery={previewImages}
              hideThumbs={previewImages.length <= 1}
              aspectRatio="auto"
            />
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start lg:mt-0 lg:w-1/2 lg:px-0">
          <Waypoint
            onLeave={() => setShowStickyShortDetails(true)}
            onEnter={() => setShowStickyShortDetails(false)}
            onPositionChange={onWaypointPositionChange}
          >
            <div className="w-full">
              <div className="flex items-center">
                {name && (
                  <h1 className="text-xl font-bold tracking-tight text-heading lg:text-2xl xl:text-3xl">
                    {name}
                  </h1>
                )}
                {Boolean(is_digital) && (
                  <span className="rounded bg-accent-400 px-3 py-1.5 text-xs font-normal text-white ltr:ml-5 rtl:mr-5">
                    {t('text-downloadable')}
                  </span>
                )}
              </div>

              {author?.name && (
                <div className="mt-4 flex items-center space-x-5 rtl:space-x-reverse md:mt-5">
                  <p className="flex items-center text-sm font-normal text-body">
                    {t('text-by-author')}
                    <Link
                      href={`${ROUTES.AUTHORS}/${author?.slug}`}
                      className="text-sm font-bold text-heading transition-colors hover:text-accent ltr:ml-2 rtl:mr-2"
                    >
                      {author?.name}
                    </Link>
                  </p>
                </div>
              )}

              {hasVariations ? (
                <>
                  <div className="mt-5 mb-7 flex items-center">
                    <VariationPrice
                      selectedVariation={selectedVariation}
                      minPrice={product.min_price}
                      maxPrice={product.max_price}
                    />
                    {isSelected && discount && (
                      <span className="rounded-md bg-accent-200 px-2 py-1 text-xs font-semibold uppercase leading-6 text-accent ltr:ml-4 rtl:mr-4">
                        {discount} {t('text-off')}
                      </span>
                    )}
                  </div>
                  <div>
                    <VariationGroups
                      variations={variations}
                      variant="outline"
                    />
                  </div>
                </>
              ) : (
                <span className="mt-5 mb-7 flex items-center space-x-4 rtl:space-x-reverse">
                  <ins className="text-2xl font-bold text-heading no-underline md:text-3xl">
                    {price}
                  </ins>
                  {basePrice && (
                    <del className="text-base font-normal text-muted md:text-base">
                      {basePrice}
                    </del>
                  )}

                  {discount && (
                    <span className="rounded-md bg-accent-200 px-2 py-1 text-xs font-semibold uppercase leading-6 text-accent">
                      {discount} {t('text-off')}
                    </span>
                  )}
                </span>
              )}

              {description && (
                <div className="mt-7 text-sm leading-7 text-body">
                  <Truncate
                    character={150}
                    {...(!isModal && {
                      onClick: () => scrollDetails(),
                      compressText: 'common:text-see-more',
                    })}
                  >
                    {description}
                  </Truncate>
                </div>
              )}

              <div className="mt-4 flex flex-col items-center border-b border-border-200 border-opacity-70 pb-5 md:mt-6 md:pb-8 lg:flex-row">
                <div className="mb-3 w-full lg:mb-0">
                  <AddToCartAlt
                    data={product}
                    variant="bordered"
                    variation={selectedVariation}
                    disabled={selectedVariation?.is_disable || !isSelected}
                  />
                </div>
              </div>
            </div>
          </Waypoint>

          <div className="mt-8 grid w-full grid-cols-1 gap-5 md:grid-cols-3">
            {!!categories?.length && (
              <BadgeGroups title={t('text-categories')}>
                {categories.map((category: any) => (
                  <Link
                    href={`/${type?.slug}/search/?category=${category.slug}`}
                    key={category.id}
                    className="bg-transparent text-sm text-body transition-colors after:content-[','] last:after:content-[''] hover:text-accent focus:bg-opacity-100 focus:outline-none ltr:pr-0.5 ltr:last:pr-0 rtl:pl-0.5 rtl:last:pl-0"
                  >
                    {category.name}
                  </Link>
                ))}
              </BadgeGroups>
            )}

            {!!tags?.length && (
              <BadgeGroups title={t('text-tags')}>
                {tags.map((tag: any) => (
                  <Link
                    href={`/${type?.slug}/search/?tags=${tag.slug}`}
                    key={tag.id}
                    className="bg-transparent text-sm text-body transition-colors after:content-[','] last:after:content-[''] hover:text-accent focus:bg-opacity-100 focus:outline-none ltr:pr-0.5 ltr:last:pr-0 rtl:pl-0.5 rtl:last:pl-0"
                  >
                    {tag.name}
                  </Link>
                ))}
              </BadgeGroups>
            )}

            <div className="flex w-full flex-col items-start overflow-hidden">
              <span className="pb-3 text-sm font-semibold capitalize text-heading">
                {t('text-sku')}
              </span>
              {hasVariations ? (
                <span
                  className="w-full truncate text-sm text-body"
                  title={selectedVariation.sku ?? 'sku'}
                >
                  {selectedVariation.sku}
                </span>
              ) : (
                <span
                  className="w-full truncate text-sm text-body"
                  title={sku ?? 'sku'}
                >
                  {sku}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <Element name="details" className="pt-5 lg:pt-14">
        <h2 className="mb-4 text-xl font-bold tracking-tight text-heading md:mb-6 lg:text-3xl">
          {t('text-details')}
        </h2>
        <p className="text-sm leading-relaxed text-body">{description}</p>

        <div className="mt-7 flex flex-col space-y-3">
          {name && (
            <p className="text-sm text-body">
              <span className="font-semibold text-heading ltr:pr-1 rtl:pl-1">
                {t('text-title')} :
              </span>
              {name}
            </p>
          )}
          {author?.name && (
            <p className="flex items-center text-sm text-body">
              <span className="order-1 font-semibold text-heading ltr:pr-1 rtl:pl-1">
                {t('text-author')} :
              </span>
              <Link
                href={`${ROUTES.AUTHORS}/${author?.slug}`}
                className="order-2 hover:text-accent"
              >
                {author?.name}
              </Link>
            </p>
          )}
          {manufacturer?.name && (
            <p className="flex items-center text-sm text-body">
              <span className="order-1 font-semibold text-heading ltr:pr-1 rtl:pl-1">
                {t('text-publisher')} :
              </span>
              <Link
                href={`${ROUTES.MANUFACTURERS}/${manufacturer?.slug}`}
                className="order-2 hover:text-accent"
              >
                {manufacturer?.name}
              </Link>
            </p>
          )}
        </div>
      </Element>
    </article>
  );
};

export default BookDetails;
