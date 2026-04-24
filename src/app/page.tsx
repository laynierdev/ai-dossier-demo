import './page.css';
import Link from 'next/link';
export default function Home() {
    return (
        <div className="container-ryvar">
            <main className={"row row-span-2 "}>
                <div className="container-ryvar col-md-6">
                    <div className={"d-flex align-items-center justify-content-center gap-2 flex-column text-white"}>
                        <article>Description of dossier analysis purpose</article>
                        <Link href="/client" className="btn-ryvar" style={{textDecoration: 'none'}}>
                            Go Dossier analysis
                        </Link>
                    </div>

                </div>
                <div className="container-ryvar col-md-6">
                    <div
                        className={"d-flex align-items-center justify-content-center gap-2 flex-column text-white"}>
                            <article>Description of human resources analysis</article>
                            <Link href="/app/professionals/directory" className="btn-ryvar"
                                  style={{textDecoration: 'none'}}>
                                Go analysis
                            </Link>
                        </div>

                    </div>

            </main>
        </div>
);
}