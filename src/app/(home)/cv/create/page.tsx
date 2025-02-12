import CVForm from '../_components/CVForm'
import { getAboutMe, getEducation, getExperience, getPersonalInformation } from '../dbGet'

export default async function CreateCVPage(){

    const [
        personalInformation,
        aboutMe,
        experience,
        education,
    ] = await Promise.all([
        getPersonalInformation(),
        getAboutMe(),
        getExperience(),
        getEducation(),
    ])

    if(
        !personalInformation ||
        !aboutMe ||
        !experience ||
        !education
    ) return <p className='text-red-600'>
        Error to get data, please reload
    </p>

    return <>
        <div className='w-full flex flex-col mx-auto'>
            <CVForm
                personalInformation={personalInformation}
                aboutMe={aboutMe}
                experience={experience}
                education={education}
            />
        </div>
    </>

}