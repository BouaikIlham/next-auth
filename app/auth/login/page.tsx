'use client'
import axios from "axios"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
const loginPage = () => {
   
   const router = useRouter()
    const {register, handleSubmit} = useForm<FieldValues>({
      defaultValues: {
        name: "",
        email:"",
        password:""
      }
    })
    
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
      // axios.post("/api/register", data)
      // .then(() => {
      //   alert("register successflly")
      //   router.push("/")
      // })
      // .catch((error) => {
      //   alert(error)
      // })

      signIn("credentials", {
        ...data,
        redirect: false
      })
      router.push("/")
    }
  return (
    <form className={"flex flex-col justify-center items-center  h-screen bg-slate-500"}>
      {/* <p className="text-red-700 bg-red-100 py-2 px-5 rounded-md"></p> */}
      <div className="px-7 py-4 shadow bg-white rounded-md flex flex-col gap-2">
        <label
              className="block text-gray-600  mb-2 text-xs lg:text-sm xl:text-base">
            User name
        </label>
        <input  {...register("name")} type="name"
                autoComplete="off"
                className="border border-slate-400 disabled:border-slate-100 w-full block outline-none py-2 px-1 transition-all text-xs lg:text-sm xl:text-base  bg-slate-50 focus:shadow focus:shadow-blue-500"
         />
         <label
              className="block text-gray-600  mb-2 text-xs lg:text-sm xl:text-base">
            Email
        </label>
        <input  {...register("email")} type="email"
                autoComplete="off"
                className="border border-slate-400 disabled:border-slate-100 w-full block outline-none py-2 px-1 transition-all text-xs lg:text-sm xl:text-base  bg-slate-50 focus:shadow focus:shadow-blue-500"
         />
        <label className="block text-gray-600  mb-2 text-xs lg:text-sm xl:text-base">Password</label>
        <input {...register("password")} type="password"
                autoComplete="off"
                className="border border-slate-400 disabled:border-slate-100 w-full block outline-none py-2 px-1 transition-all text-xs lg:text-sm xl:text-base  bg-slate-50 focus:shadow focus:shadow-blue-500"
         />        
        <button onClick={handleSubmit(onSubmit)}>Login</button>
      </div>
    </form>
  )
}

export default loginPage