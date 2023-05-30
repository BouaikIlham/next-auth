'use client'
import { useRef } from "react"
const loginPage = () => {

    const onSubmit = async () => {
    }
    const userName = useRef("")
    const password = useRef("")
  return (
    <form className={"flex flex-col justify-center items-center  h-screen bg-slate-500"}>
      {/* <p className="text-red-700 bg-red-100 py-2 px-5 rounded-md"></p> */}
      <div className="px-7 py-4 shadow bg-white rounded-md flex flex-col gap-2">
        <label
              className="block text-gray-600  mb-2 text-xs lg:text-sm xl:text-base">
            User name
        </label>
        <input  onChange={(e) => (userName.current === e.target.value)}
                autoComplete="off"
                className="border border-slate-400 disabled:border-slate-100 w-full block outline-none py-2 px-1 transition-all text-xs lg:text-sm xl:text-base  bg-slate-50 focus:shadow focus:shadow-blue-500"
         />
        <label className="block text-gray-600  mb-2 text-xs lg:text-sm xl:text-base">password</label>
        <input  onChange={(e) => (password.current === e.target.value)}
                autoComplete="off"
                className="border border-slate-400 disabled:border-slate-100 w-full block outline-none py-2 px-1 transition-all text-xs lg:text-sm xl:text-base  bg-slate-50 focus:shadow focus:shadow-blue-500"
         />        
        <button onClick={onSubmit}>Login</button>
      </div>
    </form>
  )
}

export default loginPage