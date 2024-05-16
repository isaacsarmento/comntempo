import MapaNavbar from "@/components/global/mapa-navbar";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

import { ReactNode } from "react";

async function MapaLayout({children}: {children: ReactNode}) {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user) {
        return redirect("/")
    }

    return (
        <div className="flex flex-col mt-10 space-y-6">
            <div className="container grid flex-1 md:grid-cols-[200px_1fr] gap-12">
                <aside className="hidden w-[200px] flex-col md:flex">
                    <MapaNavbar />
                </aside>
                <main>
                    {children}
                </main>
            </div>
        </div>
    )
}

export default MapaLayout