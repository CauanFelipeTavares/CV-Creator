'use client'

import Button from '@/components/micro/button';
import { Dispatch, SetStateAction, useState } from 'react'

type TDbResponse = {
    id: string;
    customId: string;
}[]

interface IFormCreateProps {
    personalInformation: TDbResponse
    aboutMe: TDbResponse
    experience: TDbResponse
    education: TDbResponse
}

export default function CvFormCreate({
    personalInformation, aboutMe, experience, education
}: IFormCreateProps){

    const [step, setStep] = useState(0)
    const [error, setError] = useState('')

    const [selectedPersonalInformationId, setSelectedPersonalInformationId] = useState('')
    const [selectedAboutMeId, setSelectedAboutMeId] = useState('')
    const [selectedExperienceIds, setSelectedExperienceIds] = useState<string[]>([])
    const [selectEducationIds, setSelectEducationIds] = useState<string[]>([])

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
        />
    ]

    function nextStep(){

        setError('')

        if(step >= views.length - 1){

            return null

        }

        selects[step].length == 0
            ? setError('Choose an option first')
            : setStep(prev => ++prev)
        
    }

    return <div
        className='block mx-auto w-3/5'
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
            >
                {
                    step >= views.length - 1
                        ? 'Create CV'
                        : 'Confirm choose'
                }
            </Button>
        </div>
    </div>

}

function FinishCreation({
    selects, data
}: {
    selects: (string | string[])[]
    data: TDbResponse[]
}){

    return <div>
        <div>
            <h2>
                Personal Information
            </h2>
            <div>
                <p>
                    { data[0].find(el => el.id == selects[0])?.customId }
                </p>
            </div>
        </div>
        <div>
            <h2>
                About Me
            </h2>
            <div>
                <p>
                    { data[1].find(el => el.id == selects[1])?.customId }
                </p>
            </div>
        </div>
        <div>
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
        <div>
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

}

function FormPersonalInformation({
    formData, selectedId, setSelectedId
}: {
    formData: TDbResponse,
    selectedId: string
    setSelectedId: Dispatch<SetStateAction<string>>
}){

    return <div>
        <h2>
            Choose your personal information
        </h2>
        <div
            key='FormPersonalInformation'
            className='block mx-auto w-full'
        >
            {
                formData.map(data => <div
                    key={`FormPersonalInformation${data.id}`}
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
        <h2>
            Choose your "About Me" data
        </h2>
        <div
            key='FormAboutMe'
            className='block mx-auto w-full'
        >
            {
                formData.map(data => <div
                    key={`FormAboutMe${data.id}`}
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
        <h2>
            Choose your Experiences
        </h2>
        <div
            key='FormExperience'
            className='block mx-auto w-full'
        >
            {
                formData.map(data => <div
                    key={`FormExperience${data.id}`}
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
        <h2>
            Choose your Education
        </h2>
        <div
            key='FormEducation'
            className='block mx-auto w-full'
        >
            {
                formData.map(data => <div
                    key={`FormEducation${data.id}`}
                    onClick={() => setEducations(data.id)}
                    className={`w-full p-2 my-2 border-2 border-primary bg-secundary cursor-pointer ${selectedIds.includes(data.id) && 'bg-thirth'}`}
                >
                    {data.customId}
                </div>)
            }
        </div>
    </div>

}