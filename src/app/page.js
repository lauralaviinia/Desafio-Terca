'use client'

import { zodResolver } from '@hookform/resolvers';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { cepFormSchema } from '@/components/zod';


export default function Home() {

  const {
    register,
    handleSumit,
    formState: {errors},
    } = useForm({
        resolver: zodResolver(cepFormSchema)
      })
  

  function onSubmit(data) {
    console.log(data)
    Router.push(`/cep/${data.cep}`)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#1f2937]">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex"
      onSubmit={handleSumit(onsubmit)}>

        <h1 className='text-white text-center font-bold text-2xl py-4' >Buscador de CEP</h1>
        <form className='flex flex-col gap-y-8 itens-center'>

          <input type='text' className='w=1/2 p-2 rounded-lg text-center font-bold text-lg'{...register("cep")} />

          {errors.cep && <p className=' text-red-500 text-center font-bold'>{errors.cep.message}</p>}

          <button type='submit' className='bg-blue-700 px-8 py-3 round-lg font-bold text-white text-lg
          houer:bg-blue-800 transition-all duration-300 ease-in-out'>Buscar</button>

        </form>

      </div>
    </main>
  );
}
