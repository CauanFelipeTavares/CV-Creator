import { prisma } from "@/lib/db/prisma"
import { AboutMeForm, EducationForm, ElementOption, ExperienceForm, PersonalInformationForm } from "../../_components/ElementsForm"
import Select from "@/components/micro/input-select"
import EditElementForm from "./EditElementForm"
import updateElementAction from "./ActionUpdateElement"

interface IEditElementProps {
    params: {
        elementId: [string, ElementOption]
    }
}

export default async function EditElementPage({
    params
}: IEditElementProps){

    const [
        elementId, elementType
    ] = params.elementId

    const formOptions = {
        personalInformation: PersonalInformationForm,
        aboutMe: AboutMeForm,
        experience: ExperienceForm,
        education: EducationForm,
    }

    const elementData = 
        elementType == 'aboutMe'
        ? await prisma.cv_element_aboutMe.findUnique({ where: { id: elementId } })
        : elementType == 'education'
        ? await prisma.cv_element_education.findUnique({ where: { id: elementId } })
        : elementType == 'experience'
        ? await prisma.cv_element_experience.findUnique({ where: { id: elementId } })
        : await prisma.cv_element_personalInformation.findUnique({ where: { id: elementId } })

    const Form = formOptions[elementType]

    return <>
            <div
                className='w-full flex gap-4 mb-4 justify-center'
            >
                <div
                    className='w-full my-4'
                >
                    <h1
                        className='text-lg'
                    >
                        Update your element data
                    </h1>
                </div>
                <div
                    className='flex flex-col w-2/5'
                >
                    <label
                        className='text-left'
                    >
                        Element Type:
                    </label>
                    <Select
                        disabled
                        name='elementOption'
                        options={[
                            { title: 'Personal information', value: 'personalInformation' },
                            { title: 'About Me', value: 'aboutMe' },
                            { title: 'Experience', value: 'experience' },
                            { title: 'Education/Certifications', value: 'education' },
                        ]}
                        value={elementType}
                    />
                </div>
                <div className='w-2/5' />
            </div>
            <EditElementForm
                Form={<Form inputData={elementData} />}
                elementId={elementId}
                submitAction={updateElementAction}
            />
        </>

}