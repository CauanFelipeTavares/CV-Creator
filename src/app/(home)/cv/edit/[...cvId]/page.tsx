import CVForm from '../../_components/CVForm'
import { getAboutMe, getCv, getEducation, getExperience, getPersonalInformation } from "../../dbGet"

interface IEditCVProps {
    params: {
        cvId: [string]
    }
}

export default async function EditCVPage({
    params
}: IEditCVProps){

    const [
        cvId
    ] = params.cvId

    const [
        personalInformation,
        aboutMe,
        experience,
        education,
        cv
    ] = await Promise.all([
        getPersonalInformation(),
        getAboutMe(),
        getExperience(),
        getEducation(),
        getCv(cvId)
    ])

    if(
        !cv ||
        !personalInformation ||
        !aboutMe ||
        !experience ||
        !education
    ) return <p>
        Error to get data
    </p>

    return <>
            <div
                className='w-full flex gap-4 mb-4 justify-center'
            >
                <div className='w-full my-4'>
                    <h1 className='text-lg'>
                        Update your CV
                    </h1>
                </div>
                <div className='w-full flex flex-col mx-auto'>
                    <CVForm
                        aboutMe={aboutMe}
                        education={education}
                        experience={experience}
                        personalInformation={personalInformation}
                        cv={cv}
                    />
                </div>
            </div>
        </>

}