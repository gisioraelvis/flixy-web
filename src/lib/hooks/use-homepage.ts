import { TYPES_PER_PAGE } from '@/rest/client/pagination-variables';
import { useTypes } from '@/rest/type';

export default function useHomepage() {
  const { types } = useTypes({
    limit: TYPES_PER_PAGE,
  });
  if (!types) {
    return {
      homePage: {
        slug: '',
      },
    };
  }
  return {
    homePage: types.find((type) => type.settings.isHome) ?? types[0],
  };
}
