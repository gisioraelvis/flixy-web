import Loader from '@/components/ui/loaders/spinner/spinner';
import { useRouter } from 'next/router';
import { BackArrowRound } from '@/components/icons/back-arrow-round';
import { useUser } from '@/rest/user';
import LoginView from '@/components/auth/login-form';

const PrivateRoute: React.FC = ({ children }) => {
  const router = useRouter();
  const { me, isAuthorized } = useUser();

  const isUser = !!me;
  if (!isUser && !isAuthorized) {
    return (
      <div className="relative flex min-h-screen w-full justify-center py-5 md:py-8">
        <button
          className="absolute top-5 flex h-8 w-8 items-center justify-center text-gray-200 transition-colors hover:text-gray-400 ltr:left-5 rtl:right-5 md:top-1/2 md:-mt-8 md:h-16 md:w-16 md:text-gray-300 ltr:md:left-10 rtl:md:right-10"
          onClick={router.back}
        >
          <BackArrowRound />
        </button>
        <div className="my-auto flex flex-col">
          <LoginView />
        </div>
      </div>
    );
  }
  if (isUser && isAuthorized) {
    return <>{children}</>;
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return <Loader showText={false} />;
};

export default PrivateRoute;
