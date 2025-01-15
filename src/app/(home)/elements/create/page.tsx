import { submitAction } from './_actions'
import ElementForm from './_components/ElementForm'

export default function CreateCVElementPage(){

    return <>
        <div
            className="w-full flex flex-col mx-auto"
        >
            <h2
                className='text-lg my-8'
            >
                Create a new element to mount your CV
            </h2>
            <ElementForm submitAction={submitAction} />
        </div>
    </>

}