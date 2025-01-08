import Button from '@/components/micro/button'
import Datetime from '@/components/micro/input-datetime'
import Select from '@/components/micro/input-select'
import InputText from '@/components/micro/input-text'
import Textarea from '@/components/micro/input-textarea'

export default function CreateCVElementPage(){

    const formOptions = {
        personalInformation: PersonalInformationForm,
        aboutMe: AboutMeForm,
        experience: ExperienceForm,
        education: EducationForm,
    }

    return <>
        <div
            className="w-full flex flex-col mx-auto"
        >
            <h2
                className='text-lg my-8'
            >
                Create a new element to mount your CV
            </h2>
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
                        options={[
                            'Personal information',
                            'About Me',
                            'Experience',
                            'Education/Certifications'
                        ]}
                    />
                </div>
                <div className='w-2/5' />
            </div>
            { formOptions.education() }
            <Button
                className='w-1/5 mt-8 ml-auto mr-[10%]'
            >
                Create Element
            </Button>
        </div>
    </>

}

function AboutMeForm(){

    return <div
        className='flex flex-col gap-8 justify-center mt-8'
    >
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
                    placeholder='Identifier on elements list'
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
                rows={5}
            />
        </div>
    </div>

}

function PersonalInformationForm(){

    return <div
        className='flex flex-col gap-8 justify-center mt-8'
    >
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
                    placeholder='Identifier on elements list'
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
                    placeholder='Ex: Cauan Felipe Tavares'
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
                    placeholder='Ex: Full Stack Developer'
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
                    placeholder='Ex: Rio de Janeiro, Brazil'
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
                    placeholder='Ex: https://codeso.dev/about'
                />
            </div>
            <div className='w-2/5 min-w-40' />
        </div>
    </div>

}

function ExperienceForm(){

    return <div
        className='flex flex-col gap-8 justify-center mt-8'
    >
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
                <Datetime/>
            </div>
            <div
                className='flex w-2/5 flex-col items-center min-w-40'
            >
                <label
                    className='w-full text-left'
                >
                    Finish Period*
                </label>
                <Datetime/>
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
                    Local *
                </label>
                <InputText
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
                rows={5}
            />
        </div>
    </div>

}

function EducationForm(){

    return <div
        className='flex flex-col gap-8 justify-center mt-8'
    >
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
                <Datetime/>
            </div>
            <div
                className='flex w-2/5 flex-col items-center min-w-40'
            >
                <label
                    className='w-full text-left'
                >
                    Finish Period*
                </label>
                <Datetime/>
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
                    Local *
                </label>
                <InputText
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
                rows={5}
            />
        </div>
    </div>

}