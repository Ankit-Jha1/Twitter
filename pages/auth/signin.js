import { getProviders, signIn } from "next-auth/react";

export default function Signin({ providers }) {
  return (
    <div className="flex justify-center mt-20 space-x-4">
      <img
        src="https://img.freepik.com/free-vector/big-tree-isolated-cartoon_1308-111956.jpg?w=2000"
        alt="twitter image inside a phone"
        className="hidden object-cover md:w-[340px]  md:inline-flex"
      />
      <div className="">
        {Object.values(providers).map((provider) => (
          <div className="flex flex-col items-center">
            <img
              className="w-36 object-cover"
              src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
              alt="twitter logo"
            />
            <p className="text-center text-sm italic my-20 font-bold">
              Created by Ankit
            </p>
            <button
              // onClick={onGoogleClick}
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500 hover:font-bold"
            >
              Sign in with Google
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// getting providers on server side
export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
