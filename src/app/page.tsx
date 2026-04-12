import './page.css';
import Link from 'next/link';
export default function Home() {
    return (
        <div className="container-ryvar">
            <main>
                <Link href="/client" className="btn-ryvar" style={{ textDecoration: 'none' }}>
                    Go Demo
                </Link>
            </main>
        </div>
    );
}