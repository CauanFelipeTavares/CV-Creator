'use client'

import { useRouter } from 'next/navigation'
import { AboutMeForm, EducationForm, ElementOption, ExperienceForm, PersonalInformationForm } from '../_components/ElementsForm'
import { useActionState, useRef, useState } from 'react'
import Select from '@/components/micro/input-select'
import Button from '@/components/micro/button'
import { IActionResponse } from '@/lib/utils/response'
// import { Button } from '@/components/ui/button'

type SubmitActionType = (formData: FormData) => Promise<IActionResponse>

export default function ElementForm({
    submitAction
}: {
    submitAction: SubmitActionType
}){

    const router = useRouter()

    const formOptions = {
        personalInformation: PersonalInformationForm,
        aboutMe: AboutMeForm,
        experience: ExperienceForm,
        education: EducationForm,
    }

    const [formOpt, setFormOpt] = useState<ElementOption>('personalInformation')
    const inputData = useRef<any>({})

    const Form = formOptions[formOpt]

    const [state, clientSubmitAction, isPending] = useActionState(
        async (_previousData: any, formData: FormData) => {
            
            const response = await submitAction(formData)

            if (response?.status === 'success') router.push(`/elements/list`)
    
            return response

        },
        null,
    )

    return <>
        <div
            className='w-full flex gap-4 mb-4 justify-center'
        >
            <div
                className='flex flex-col w-2/5'
            >
                <label
                    className='text-left'
                >
                    Element Type:
                </label>
                <Select
                    name='elementOption'
                    options={[
                        { title: 'Personal information', value: 'personalInformation' },
                        { title: 'About Me', value: 'aboutMe' },
                        { title: 'Experience', value: 'experience' },
                        { title: 'Education/Certifications', value: 'education' },
                    ]}
                    onChange={(ev) => setFormOpt(ev.target.value as ElementOption)}
                />
            </div>
            <div className='w-2/5' />
        </div>
        <form
            className='flex flex-col gap-8 justify-center mt-8'
            action={clientSubmitAction}
        >
            <Form inputData={inputData.current} />
            {state?.status == 'error' && <p className='text-red-600 my-0'>*{state.msg}</p>}
            <Button
                className='w-1/4 mt-2 ml-auto mr-[10%]'
                disabled={isPending}
            >
                Create Element
            </Button>
        </form>
    </>

}
