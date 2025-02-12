'use client'

import Button from '@/components/micro/button'
import { Dispatch, RefObject, SetStateAction, useRef, useState } from 'react'
import InputText from '@/components/micro/input-text'
import { useRouter } from 'next/navigation'
import createOrUpdateCV from '../create/_actions'

type TDbResponse = {
    id: string
    customId: string
}[]

interface ICVFormProps {
    personalInformation: TDbResponse
    aboutMe: TDbResponse
    experience: TDbResponse
    education: TDbResponse
    cv?: {
        id: string
        customId: string
        personalInformationElementId: string
        aboutMeElementId: string
        CvExperiences: {
            experienceId: string
        }[]
        CvEducations: {
            educationId: string
        }[]
    }
}

export default function CVForm({
    personalInformation, aboutMe, experience, education, cv
}: ICVFormProps){

    const router = useRouter()

    const [step, setStep] = useState(0)
    const [error, setError] = useState('')

    const [loading, setLoading] = useState(false)

    const [selectedPersonalInformationId, setSelectedPersonalInformationId] = useState(cv?.personalInformationElementId || '')
    const [selectedAboutMeId, setSelectedAboutMeId] = useState(cv?.aboutMeElementId || '')
    const [selectedExperienceIds, setSelectedExperienceIds] = useState<string[]>(cv?.CvExperiences?.map(exp => exp.experienceId) || [])
    const [selectEducationIds, setSelectEducationIds] = useState<string[]>(cv?.CvEducations?.map(educ => educ.educationId) || [])
    const customId = useRef(cv?.customId || '')

    const selects = [
        selectedPersonalInformationId,
        selectedAboutMeId,
        selectedExperienceIds,
        selectEducationIds,
    ]

    const views = [
        <FormPersonalInformation
            formData={personalInformation}
            selectedId={selectedPersonalInformationId}
            setSelectedId={setSelectedPersonalInformationId}
        />,
        <FormAboutMe
            formData={aboutMe}
            selectedId={selectedAboutMeId}
            setSelectedId={setSelectedAboutMeId}
        />,
        <FormExperience
            formData={experience}
            selectedIds={selectedExperienceIds}
            setSelectedIds={setSelectedExperienceIds}
        />,
        <FormEducation
            formData={education}
            selectedIds={selectEducationIds}
            setSelectedIds={setSelectEducationIds}
        />,
        <FinishCreation
            selects={selects}
            data={[
                personalInformation, aboutMe, experience, education
            ]}
            customId={customId}
        />
    ]

    async function nextStep(){

        setError('')

        if(step >= views.length - 1){

            setLoading(true)

            const response = await createOrUpdateCV(
                customId.current,
                selectedPersonalInformationId,
                selectedAboutMeId,
                selectedExperienceIds,
                selectEducationIds,
                cv?.id
            )

            response.status == 'success'
                ? router.push('/cv/list')
                : setLoading(false)


        }else selects[step].length == 0
            ? setError('Choose an option first')
            : setStep(prev => ++prev)

    }

    return <div
        className='block mx-auto mt-8 w-3/5'
    >
        { views[step] || views[0] }
        { error && <p className='text-red-600 my-2'>{ error }</p> }
        <div
            className='flex justify-between w-full'
        >
            <Button
                onClick={() => step > 0 ? setStep(prev => --prev) : null}
                disabled={step <= 0}
            >
                Previous
            </Button>
            <Button
                onClick={nextStep}
                disabled={loading}
            >
                {
                    step >= views.length - 1
                        ? cv?.id 
                            ? 'Update CV'
                            : 'Create CV'
                                : 'Confirm choose'
                }
            </Button>
        </div>
    </div>

}

function FinishCreation({
    selects, data, customId
}: {
    selects: (string | string[])[]
    data: TDbResponse[]
    customId: RefObject<string>
}){

    return <div>
        <div
            className='w-3/5 flex flex-col my-4 mx-auto'
        >
            <label
                className='mb-2'
            >
                Type a name for your CV
            </label>
            <InputText
                name='customID'
                onChange={(ev) => customId.current = ev.target.value}
                defaultValue={customId.current}
                placeholder='CV Name'
            />
        </div>
        <hr className='w-full h-[2px] bg-thirth' />
        <h2
            className='my-4'
        >Your Resume</h2>
        <div
            className='flex flex-wrap justify-between gap-4 my-4'
        >
            <div
                className='w-2/5 p-4 border-primary border-2 rounded-lg bg-secundary min-w-[150px]'
            >
                <h2>
                    Personal Information
                </h2>
                <div>
                    <p>
                        { data[0].find(el => el.id == selects[0])?.customId }
                    </p>
                </div>
            </div>
            <div
                className='w-2/5 p-4 border-primary border-2 rounded-lg bg-secundary min-w-[150px]'
            >
                <h2>
                    About Me
                </h2>
                <div>
                    <p>
                        { data[1].find(el => el.id == selects[1])?.customId }
                    </p>
                </div>
            </div>
            <div
                className='w-2/5 p-4 border-primary border-2 rounded-lg bg-secundary min-w-[150px]'
            >
                <h2>
                    Experiences
                </h2>
                <div>
                    { data[2].filter(el => selects[2].includes(el.id)).map(el => <p
                        key={el.id}
                    >
                        {el.customId}
                    </p>) }
                </div>
            </div>
            <div
                className='w-2/5 p-4 border-primary border-2 rounded-lg bg-secundary min-w-[150px]'
            >
                <h2>
                    Education/Certificates
                </h2>
                <div>
                    { data[3].filter(el => selects[3].includes(el.id)).map(el => <p
                        key={el.id}
                    >
                        {el.customId}
                    </p>) }
                </div>
            </div>
        </div>
    </div>

}

function FormPersonalInformation({
    formData, selectedId, setSelectedId
}: {
    formData: TDbResponse
    selectedId: string
    setSelectedId: Dispatch<SetStateAction<string>>
}){

    return <div>
        <h2 className='mb-6'>
            Choose your personal information
        </h2>
        <div
            className='block mx-auto w-full'
        >
            {
                formData.map(data => <div
                    key={data.id}
                    onClick={() => setSelectedId(data.id)}
                    className={`w-full p-2 my-2 border-2 border-primary bg-secundary cursor-pointer ${selectedId == data.id && 'bg-thirth'}`}
                >
                    {data.customId}
                </div>)
            }
        </div>
    </div>

}

function FormAboutMe({
    formData, selectedId, setSelectedId
}: {
    formData: TDbResponse,
    selectedId: string
    setSelectedId: Dispatch<SetStateAction<string>>
}){

    return <div>
        <h2 className='mb-6'>
            Choose your "About Me" data
        </h2>
        <div
            key='FormAboutMe'
            className='block mx-auto w-full'
        >
            {
                formData.map(data => <div
                    key={data.id}
                    onClick={() => setSelectedId(data.id)}
                    className={`w-full p-2 my-2 border-2 border-primary bg-secundary cursor-pointer ${selectedId == data.id && 'bg-thirth'}`}
                >
                    {data.customId}
                </div>)
            }
        </div>
    </div>

}

function FormExperience({
    formData, selectedIds, setSelectedIds
}: {
    formData: TDbResponse,
    selectedIds: string[]
    setSelectedIds: Dispatch<SetStateAction<string[]>>
}){

    function setExperiences(id: string){

        selectedIds.includes(id)
            ? setSelectedIds(prev => prev.filter(prevId => prevId !== id))
            : setSelectedIds(prev => [...prev, id])
        
    }

    return <div>
        <h2 className='mb-6'>
            Choose your Experiences
        </h2>
        <div
            className='block mx-auto w-full'
        >
            {
                formData.map(data => <div
                    key={data.id}
                    onClick={() => setExperiences(data.id)}
                    className={`w-full p-2 my-2 border-2 border-primary bg-secundary cursor-pointer ${selectedIds.includes(data.id) && 'bg-thirth'}`}
                >
                    {data.customId}
                </div>)
            }
        </div>
    </div>

}

function FormEducation({
    formData, selectedIds, setSelectedIds
}: {
    formData: TDbResponse,
    selectedIds: string[]
    setSelectedIds: Dispatch<SetStateAction<string[]>>
}){

    function setEducations(id: string){

        selectedIds.includes(id)
            ? setSelectedIds(prev => prev.filter(prevId => prevId !== id))
            : setSelectedIds(prev => [...prev, id])
        
    }

    return <div>
        <h2 className='mb-6'>
            Choose your Education
        </h2>
        <div
            className='block mx-auto w-full'
        >
            {
                formData.map(data => <div
                    key={data.id}
                    onClick={() => setEducations(data.id)}
                    className={`w-full p-2 my-2 border-2 border-primary bg-secundary cursor-pointer ${selectedIds.includes(data.id) && 'bg-thirth'}`}
                >
                    {data.customId}
                </div>)
            }
        </div>
    </div>

}