import { prisma } from '@/lib/db/prisma'
import EmptyListComponent from '../../_components/EmptyListComponent'
import { OptionsListComponent } from './_components/Options'

export default async function CVListPage(){

    const cvs = await prisma.cv.findMany({
        where: { userId: process.env.ROOT_USER_ID }
    }).catch(null)

    function CVsList(){

        if(!cvs) return <p
            className='text-red-600'
        >
            Error to get data, please reload the page
        </p>

        if(cvs.length === 0) return <EmptyListComponent>
            Without CVs
        </EmptyListComponent>

        return cvs.map(cv => <div
            key={cv.id}
            className='w-full flex justify-between p-4 bg-thirth border-primary border-2 rounded-lg my-2'
        >
            <p>
                { cv.customId } { cv.id }
            </p>
            <div
                className='flex gap-2'
            >
                <OptionsListComponent id={cv.id} />
            </div>
        </div>)

    }

    return <div
        className='block mx-auto w-3/5'
    >
        <h2
            className='my-8'
        >
            Your CVS:
        </h2>
        <div>
            <CVsList />
        </div>
    </div>

}