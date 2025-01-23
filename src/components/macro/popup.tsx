'use client'

interface IPopupProps {
    children: React.ReactNode
    hideFunction: () => void
}

export default function Popup({
    children, hideFunction
}: IPopupProps){
    
    return <>
        <div
            className='fixed top-0 left-0 w-[100vw] h-[100vh] bg-black opacity-50 z-30'
        />
        <div
            className='fixed left-[8.25%] w-10/12 top-[20%] max-h-[60%] md:left-1/4 md:w-1/2 md:top-1/4 md:max-h-[50%] bg-primary z-40 p-4 pb-12 border-black border-2 rounded-lg'
        >
            <svg
                onClick={hideFunction}
                className='cursor-pointer ml-auto mb-8'
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000" viewBox="0 0 256 256"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"/>
            </svg>
            { children }
        </div>
    </>

}