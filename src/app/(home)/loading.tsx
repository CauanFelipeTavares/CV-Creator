import Header from '@/components/macro/header'
import Loading from '@/components/macro/loading'

export default function LoadingHome(){

    return <>
        <Header />
        <div className='h-[48px] hidden md:block' />
        <Loading />
        <div className='h-[48px] block md:hidden' />
    </>
    
}