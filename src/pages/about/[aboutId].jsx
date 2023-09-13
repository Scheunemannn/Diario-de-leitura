import { useRouter } from 'next/router'




export default function About () {

    const router = useRouter()

    const aboutId = router.query.aboutId
    return (
        <>
            <h1>este e o numero do about {`${aboutId}`}</h1>
        </>
    )
}