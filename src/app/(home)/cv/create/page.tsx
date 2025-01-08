import Button from '@/components/micro/button'
import Link from 'next/link'

export default function CreateCVPage(){

    return <>
        <div
            className="w-full flex flex-col mx-auto"
        >
            <h2
                className='text-lg my-8'
            >
                Before create your CV, you can:
            </h2>
            <div
                className='w-full flex gap-8 justify-center'
            >
                <Link
                    href={'/cv/elements/create'}
                >
                    <Button>
                        Create elements
                    </Button>
                </Link>
                <Button>
                    View template
                </Button>
                <Button>
                    View your CVs
                </Button>
            </div>
        </div>
    </>

}