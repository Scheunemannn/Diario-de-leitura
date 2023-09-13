import Link from "next/link";

export default function NotFound() {
    return (
        <>
            <h1>404</h1>
            <p>parece que essa pagina n existe</p>
            <Link href='/'>Voltar</Link>
        </>
    )
}