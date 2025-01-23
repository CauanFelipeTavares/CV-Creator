import { Prisma } from '@prisma/client'

export function PopupPersonalInformation({
    email, github, jobTitle, linkedin, location, name, phoneNumber, website
}: Partial<Prisma.Cv_element_personalInformationCreateInput>){

    return <div
        className='flex flex-col items-start'
    >
        <h2 className='w-full text-left border-b-2 border-primary'>
            Personal Information
        </h2>
        <div
            className='flex justify-between w-full mt-4'
        >
            <div
                className='flex flex-col items-start w-3/5'
            >
                <p
                    className='font-bold text-xl'
                >
                    { name }
                </p>
                <p

                >
                    { jobTitle }
                </p>
                <p

                >
                    { location }
                </p>
            </div>
            <div
                className='flex flex-col items-end w-2/5'
            >
                <div className='flex items-center gap-2'>
                    <p>{ email }</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" viewBox="0 0 256 256"><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"></path></svg>
                </div>
                <div className='flex items-center gap-2'>
                    <p>{ phoneNumber }</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" viewBox="0 0 256 256"><path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"></path></svg>
                </div>
                <div>

                </div>
            </div>
        </div>
    </div>

}

export function PopupAboutMe({
    description
}: Partial<Prisma.Cv_element_aboutMeCreateInput>){

    return <div
        className='flex flex-col items-start'
    >
        <h2 className='w-full text-left border-b-2 border-primary'>
            About Me
        </h2>
        <p
            className='mt-4'
        >
            { description }
        </p>
    </div>

}

export function PopupExperience({
    description, finishPeriod, location, name, startPeriod
}: Partial<Prisma.Cv_element_experienceCreateInput>){

    return <div
        className='flex flex-col items-start'
    >
        <h2 className='w-full text-left border-b-2 border-primary'>
            Experience
        </h2>
        <div
            className='flex gap-4 mt-4'
        >
            <img
                className='w-1/6 h-1/6'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp5GU8mDqlw8oHhMZvAzag2V7h5Onl-vWmxQ&s'
            />
            <div
                className='flex flex-col items-start text-left w-4/6'
            >
                <p
                    className='font-bold text-left'
                >
                    { name }
                </p>
                <p
                    className='text-left'
                >
                    { startPeriod } / { finishPeriod } / { location }
                </p>
                <p
                    className='text-left break-all'
                >
                    { description }
                </p>
            </div>
        </div>
    </div>

}

export function PopupEducation({
    description, finishPeriod, location, name, startPeriod
}: Partial<Prisma.Cv_element_educationCreateInput>){

    return <div
        className='flex flex-col items-start'
    >
        <h2 className='w-full text-left border-b-2 border-primary'>
            Education
        </h2>
        <div
            className='flex gap-4 mt-4'
        >
            <img
                className='w-1/6 h-1/6'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp5GU8mDqlw8oHhMZvAzag2V7h5Onl-vWmxQ&s'
            />
            <div
                className='flex flex-col items-start text-left w-4/6'
            >
                <p
                    className='font-bold text-left'
                >
                    { name }
                </p>
                <p
                    className='text-left'
                >
                    { startPeriod } / { finishPeriod } / { location }
                </p>
                <p
                    className='text-left'
                >
                    { description }
                </p>
            </div>
        </div>
    </div>

}