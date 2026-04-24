// app/client/page.tsx
import Link from 'next/link';
import ClientDossierDemo from "@/app/components/dossier/ClientDossier";

export default function ClientPage() {

    return (
        <div >
            <ClientDossierDemo />


            <div className={"p-3 mt-2 mt-2"}>
                <Link href="/" style={backLinkStyle}>
                    ← Go Home
                </Link>
            </div>


        </div>
    );
}

const backLinkStyle = {
    color: '#94a3b8',
    textDecoration: 'none',
    fontSize: '0.9rem',
    transition: 'color 0.3s',
}
