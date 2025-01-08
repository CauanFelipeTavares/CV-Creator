import Header from '@/components/macro/header'

export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>){

    return <>
        <Header />
        <div className='h-[48px] hidden md:block' />
        <div>
            {children}
        </div>
        <div className='h-[48px] block md:hidden' />
    </>

}