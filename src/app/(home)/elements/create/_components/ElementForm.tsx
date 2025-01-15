'use client'

export type ElementOption = 'personalInformation' | 'aboutMe' | 'experience' | 'education'

import Button from '@/components/micro/button'
import Datetime from '@/components/micro/input-datetime'
import Select from '@/components/micro/input-select'
import InputText from '@/components/micro/input-text'
import Textarea from '@/components/micro/input-textarea'
import { IActionResponse } from '@/lib/utils/response'
import { useActionState, useEffect, useRef, useState } from 'react'

type SubmitActionType = (formData: FormData) => Promise<IActionResponse>

export default function ElementForm({
    submitAction
}: {
    submitAction: SubmitActionType
}){

    const formOptions = {
        personalInformation: PersonalInformationForm,
        aboutMe: AboutMeForm,
        experience: ExperienceForm,
        education: EducationForm,
    }

    const [formOpt, setFormOpt] = useState<ElementOption>('personalInformation')
    const inputData = useRef<any>({})

    const [state, clientSubmitAction, isPending] = useActionState(
        async (_previousData: any, formData: FormData) => {
            
            const response = await submitAction(formData)
    
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
            { formOptions[formOpt](inputData.current) }
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

function AboutMeForm(inputData: any){

    return <>
        <input type='hidden' name='tableId' value='aboutMe' />
        <div
            className='flex justify-center gap-4'
        >
            <div
                className='flex w-2/5 flex-col items-center min-w-40'
            >
                <label
                    className='w-full text-left'
                >
                    About Me ID*
                </label>
                <InputText
                    name='customId'
                    placeholder='Identifier on elements list'
                    defaultValue={inputData['customId']}
                    onChange={(ev) => inputData['customId'] = ev.target.value}
                />
            </div>
            <div
                className='w-2/5 min-w-40'
            />
        </div>

        <div
            className='flex justify-center ml-[10%] -translate-x-2 w-4/5 min-w-40'
        >
            <label
                className='w-full text-left'
            >
                Description *
            </label>
            <Textarea
                name='description'
                defaultValue={inputData['description']}
                onChange={(ev) => inputData['description'] = ev.target.value}
                rows={5}
            />
        </div>
    </>

}

function PersonalInformationForm(inputData: any){

    return <>
        <input type='hidden' name='tableId' value='personalInformation' />
        <div
            className='flex justify-center gap-4'
        >
            <div
                className='flex w-2/5 flex-col items-center min-w-40'
            >
                <label
                    className='w-full text-left'
                >
                    Personal Information ID*
                </label>
                <InputText
                    name='customId'
                    placeholder='Identifier on elements list'
                    defaultValue={inputData['customId']}
                    onChange={(ev) => inputData['customId'] = ev.target.value}
                />
            </div>
            <div
                className='flex w-2/5 flex-col items-center min-w-40'
            >
                <label
                    className='w-full text-left'
                >
                    Your Name*
                </label>
                <InputText
                    name='name'
                    placeholder='Ex: Cauan Felipe Tavares'
                    defaultValue={inputData['name']}
                    onChange={(ev) => inputData['name'] = ev.target.value}
                />
            </div>
        </div>

        <div
            className='flex justify-center gap-4'
        >
            <div
                className='flex w-2/5 flex-col items-center min-w-40'
            >
                <label
                    className='w-full text-left'
                >
                    Job Title *
                </label>
                <InputText
                    name='jobTitle'
                    placeholder='Ex: Full Stack Developer'
                    defaultValue={inputData['jobTitle']}
                    onChange={(ev) => inputData['jobTitle'] = ev.target.value}
                />
            </div>
            <div
                className='flex w-2/5 flex-col items-center min-w-40'
            >
                <label
                    className='w-full text-left'
                >
                    Location *
                </label>
                <InputText
                    name='location'
                    placeholder='Ex: Rio de Janeiro, Brazil'
                    defaultValue={inputData['location']}
                    onChange={(ev) => inputData['location'] = ev.target.value}
                />
            </div>
        </div>

        <div
            className='flex justify-center gap-4'
        >
            <div
                className='flex w-2/5 flex-col items-center min-w-40'
            >
                <label
                    className='w-full text-left'
                >
                    Email
                </label>
                <InputText
                    name='email'
                    defaultValue={inputData['email']}
                    onChange={(ev) => inputData['email'] = ev.target.value}
                    placeholder='Ex: codesotech@gmail.com'
                />
            </div>
            <div
                className='flex w-2/5 flex-col items-center min-w-40'
            >
                <label
                    className='w-full text-left'
                >
                    Phone Number
                </label>
                <InputText
                    name='phoneNumber'
                    defaultValue={inputData['phoneNumber']}
                    onChange={(ev) => inputData['phoneNumber'] = ev.target.value}
                    placeholder='Ex: +55 17 99221-9923'
                />
            </div>
        </div>

        <div
            className='flex justify-center gap-4'
        >
            <div
                className='flex w-2/5 flex-col items-center min-w-40'
            >
                <label
                    className='w-full text-left'
                >
                    LinkedIn URL
                </label>
                <InputText
                    name='linkedin'
                    defaultValue={inputData['linkedin']}
                    onChange={(ev) => inputData['linkedin'] = ev.target.value}
                    placeholder='Ex: https://www.linkedin.com/in/cauantavares/'
                />
            </div>
            <div
                className='flex w-2/5 flex-col items-center min-w-40'
            >
                <label
                    className='w-full text-left'
                >
                    Github URL
                </label>
                <InputText
                    name='github'
                    defaultValue={inputData['github']}
                    onChange={(ev) => inputData['github'] = ev.target.value}
                    placeholder='Ex: https://github.com/CauanFelipeTavares'
                />
            </div>
        </div>

        <div
            className='flex justify-center gap-4'
        >
            <div
                className='flex flex-col items-center w-2/5 min-w-40'
            >
                <label
                    className='w-full text-left'
                >
                    Website *
                </label>
                <InputText
                    name='website'
                    defaultValue={inputData['website']}
                    onChange={(ev) => inputData['website'] = ev.target.value}
                    placeholder='Ex: https://codeso.dev/about'
                />
            </div>
            <div className='w-2/5 min-w-40' />
        </div>
    </>

}

function ExperienceForm(inputData: any){

    return <>
        <input type='hidden' name='tableId' value='experience' />
        <div
            className='flex justify-center gap-4'
        >
            <div
                className='flex w-2/5 flex-col items-center min-w-40'
            >
                <label
                    className='w-full text-left'
                >
                    Experience ID*
                </label>
                <InputText
                    name='customId'
                    defaultValue={inputData['customId']}
                    onChange={(ev) => inputData['customId'] = ev.target.value}
                    placeholder='Identifier on elements list'
                />
            </div>
            <div
                className='flex w-2/5 flex-col items-center min-w-40'
            >
                <label
                    className='w-full text-left'
                >
                    Experience Name*
                </label>
                <InputText
                    name='name'
                    defaultValue={inputData['name']}
                    onChange={(ev) => inputData['name'] = ev.target.value}
                    placeholder='Ex: Full Stack Developer'
                />
            </div>
        </div>

        <div
            className='flex justify-center gap-4'
        >
            <div
                className='flex w-2/5 flex-col items-center min-w-40'
            >
                <label
                    className='w-full text-left'
                >
                    Start Period*
                </label>
                <Datetime
                    name='startPeriod'
                    defaultValue={inputData['startPeriod']}
                    onChange={(ev) => inputData['startPeriod'] = ev.target.value}/>
            </div>
            <div
                className='flex w-2/5 flex-col items-center min-w-40'
            >
                <label
                    className='w-full text-left'
                >
                    Finish Period*
                </label>
                <Datetime
                    name='finishPeriod'
                    defaultValue={inputData['finishPeriod']}
                    onChange={(ev) => inputData['finishPeriod'] = ev.target.value}/>
                <p
                    className='block mr-auto'
                >
                    <input type='checkbox' /> Current
                </p>
            </div>
        </div>

        <div
            className='flex justify-center gap-4'
        >
            <div
                className='flex flex-col items-center w-2/5 min-w-40'
            >
                <label
                    className='w-full text-left'
                >
                    Location*
                </label>
                <InputText
                    name='location'
                    defaultValue={inputData['location']}
                    onChange={(ev) => inputData['location'] = ev.target.value}
                    placeholder='Ex: Rio de Janeiro (Brazil)'
                />
                <p
                    className='block mr-auto'
                >
                    <input type='checkbox' /> Remote
                </p>
            </div>
            <div className='w-2/5 min-w-40' />
        </div>

        <div
            className='flex justify-center ml-[10%] -translate-x-2 w-4/5 min-w-40'
        >
            <label
                className='w-full text-left'
            >
                Description *
            </label>
            <Textarea
                name='description'
                defaultValue={inputData['description']}
                onChange={(ev) => inputData['description'] = ev.target.value}
                rows={5}
            />
        </div>
    </>

}

function EducationForm(inputData: any){

    return <>
        <input type='hidden' name='tableId' value='education' />
        <div
            className='flex justify-center gap-4'
        >
            <div
                className='flex w-2/5 flex-col items-center min-w-40'
            >
                <label
                    className='w-full text-left'
                >
                    Education ID*
                </label>
                <InputText
                    name='customId'
                    defaultValue={inputData['customId']}
                    onChange={(ev) => inputData['customId'] = ev.target.value}
                    placeholder='Identifier on elements list'
                />
            </div>
            <div
                className='flex w-2/5 flex-col items-center min-w-40'
            >
                <label
                    className='w-full text-left'
                >
                    Education Name*
                </label>
                <InputText
                    name='name'
                    defaultValue={inputData['name']}
                    onChange={(ev) => inputData['name'] = ev.target.value}
                    placeholder='Ex: Full Stack Developer'
                />
            </div>
        </div>

        <div
            className='flex justify-center gap-4'
        >
            <div
                className='flex w-2/5 flex-col items-center min-w-40'
            >
                <label
                    className='w-full text-left'
                >
                    Start Period*
                </label>
                <Datetime
                    name='startPeriod'
                    defaultValue={inputData['startPeriod']}
                    onChange={(ev) => inputData['startPeriod'] = ev.target.value}/>
            </div>
            <div
                className='flex w-2/5 flex-col items-center min-w-40'
            >
                <label
                    className='w-full text-left'
                >
                    Finish Period*
                </label>
                <Datetime
                    name='finishPeriod'
                    defaultValue={inputData['finishPeriod']}
                    onChange={(ev) => inputData['finishPeriod'] = ev.target.value}/>
            </div>
        </div>

        <div
            className='flex justify-center gap-4'
        >
            <div
                className='flex flex-col items-center w-2/5 min-w-40'
            >
                <label
                    className='w-full text-left'
                >
                    Location
                </label>
                <InputText
                    name='location'
                    defaultValue={inputData['location']}
                    onChange={(ev) => inputData['location'] = ev.target.value}
                    placeholder='Ex: Rio de Janeiro (Brazil)'
                />
                <p
                    className='block mr-auto'
                >
                    <input type='checkbox' /> Remote
                </p>
            </div>
            <div className='w-2/5 min-w-40' />
        </div>

        <div
            className='flex justify-center ml-[10%] -translate-x-2 w-4/5 min-w-40'
        >
            <label
                className='w-full text-left'
            >
                Description *
            </label>
            <Textarea
                name='description'
                defaultValue={inputData['description']}
                onChange={(ev) => inputData['description'] = ev.target.value}
                rows={5}
            />
        </div>
    </>

}