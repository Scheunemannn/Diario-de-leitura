import Link from "next/link";

import { useRouter } from "next/router";

export default function Comments( ) {

    const router = useRouter()

    const todoId = router.query.todoId

    const commentsId = router.query.commentsId

    return (
        <>
            <Link href={`/todos/${todoId}`}></Link>
            <h1>exibindo comment n : {commentsId}</h1>
            <p>do todo {todoId}</p>
        </>
    )
}