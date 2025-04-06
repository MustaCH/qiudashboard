import { signIn } from "next-auth/react";
import Image from "next/image";

export default function SignInComponent({ providers }: any) {
  return (
    <div className="mt-8 space-y-4">
      {Object.values(providers).map((provider: any) => (
        <div key={provider.name}>
          <button
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <Image
              src={`/google.svg`}
              alt={`${provider.name} logo`}
              width={20}
              height={20}
            />
            <span>Continuar con {provider.name}</span>
          </button>
        </div>
      ))}
    </div>
  );
}
