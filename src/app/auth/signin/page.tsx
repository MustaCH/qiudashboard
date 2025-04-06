import { getProviders } from "next-auth/react";
import SignInComponent from "./SignInComponent";
export default async function SignIn() {
  const providers = await getProviders();

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-6 shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Iniciar sesión
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Elige tu método de inicio de sesión
          </p>
        </div>
        <SignInComponent providers={providers} />
      </div>
    </div>
  );
}
