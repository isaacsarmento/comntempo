import { ThemeToggle } from "@/components/global/theme-toggle";
import { Button } from "@/components/ui/button";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Home() {
  const { isAuthenticated } = getKindeServerSession();

  if (await isAuthenticated()) {
    return redirect("/mapa")
  }

  return (

    <section className="flex items-center justify-center bg-background h-[90vh] overflow-hidden">
      <div className="relative items-center w-full px-5 py-12 mx-auto lg:px-16 max-w-7xl md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <div>
            <span className="w-auto px-6 py-3 rounded-full bg-secondary">
              <span className="text-sm font-medium text-primary">
                Monitore sua região!
              </span>
            </span>

            <h1 className="mt-8 text-3xl font-extrabold tracking-tight lg:text-6xl">
              Receba alertas de fortes chuvas em sua região
            </h1>

            <p className="max-w-xl mx-auto mt-8 text-base lg:text-xl text-secondary-foreground">
              O Comntempo veio para monitorar e informar moradores da vizinhança a respeito das cheias das águas, por meio de dados colhidos da comunidade através da plataforma.
            </p>

            <div className="flex justify-center max-w-sm mx-auto mt-10">
              <RegisterLink postLoginRedirectURL='/mapa'>
                <Button size="lg" className="w-full">Acesse o mapa agora!</Button>
              </RegisterLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
