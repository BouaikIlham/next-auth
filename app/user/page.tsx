'use client'
import { useSession } from "next-auth/react"
import { json } from "stream/consumers";
const page = () => {
  const { data: session, status } = useSession();
  console.log(session?.user)
  return (
    <div className="flex justify-center items-center p-5 text-green-500 text-lg font-bold flex-col	">
      only for users
      <p className="text-yellow-500 ">
        {JSON.stringify(session?.user)}
      </p>
    </div>
  )
}

export default page