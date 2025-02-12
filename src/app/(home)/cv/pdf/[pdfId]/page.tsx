import { prisma } from "@/lib/db/prisma"
import { Document, Page, StyleSheet, Text, View, Link, Svg, Path, Font, Image } from '@react-pdf/renderer'
import PDFComponent from "./pdf"
import ButtonEdit from "./buttonEdit"

interface IPDFProps {
    params: {
        pdfId: string
    }
}

const pdfStyles = StyleSheet.create({
    page: {
        padding: '48px'
    },
    columnBetween: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 10,
    },
    text: {
        fontSize: 10,
        fontFamily: 'Poppins',
        fontWeight: 'normal',
    },
    supertitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 4,
        fontFamily: 'Poppins',
    },
    title: {
        color: '#3535BF',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 4,
        fontFamily: 'Poppins',
    },
    subtitle: {
        fontSize: 14,
        fontWeight: 'semibold',
        fontFamily: 'Poppins',
    },
    description: {
        fontSize: 8,
        color: 'gray',
        fontFamily: 'Poppins',
    },

    separator: {
        width: '100%',
        height: '1px',
        backgroundColor: '#ddd',
        marginVertical: '12px'
    },

    CPersonalInformation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 4
    },
    CPersonalInformationsColumn: {
        flexDirection: 'column',
    },
    CPersonalInformationsContactColumn: {
        flexDirection: 'column',
        alignItems: 'flex-end',
    },
    CContact: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    CLinks: {
        display: 'flex',
        flexDirection: 'row',
        gap: '4px',
    },

    Image: {
        width: '75px',
        height: '75px',
        border: '1px solid black',
        marginLeft: '1px',
    },
    CExperience: {
        flexDirection: 'row',
        gap: '12px',
    },
    CExperienceInfos: {
        display: 'flex',
        gap: '4px',
        maxWidth: 'calc(90% - 60px)'
    },
})

export default async function PDFViewPage({
    params
}: IPDFProps){

    const bugString = ''
    const id = params.pdfId

    const cv = await prisma.cv.findUnique({
        where: { id },
        include: {
            aboutMe: true,
            personalInformation: true,
            CvEducations: {
                include: {
                    education: true
                }
            },
            CvExperiences: {
                include: {
                    experience: true
                }
            }
        }
    }).catch(null)

    if(!cv) return <p>
        Error to get data
    </p>

    return <div>
        <h3 className='text-3xl font-bold mt-6 mb-4'>Your CV</h3>
        <ButtonEdit id={cv.id} />
        
        <PDFComponent>
            <Document
                title={cv.customId}
            >
                <Page
                    size='A4'
                    style={pdfStyles.page}
                >
                    <View style={pdfStyles.CPersonalInformation}>
                        <View style={pdfStyles.CPersonalInformationsColumn}>
                            <Text style={pdfStyles.supertitle}>{ cv.personalInformation.name.toUpperCase() }</Text>
                            <Text style={pdfStyles.subtitle}>{ cv.personalInformation.jobTitle }</Text>
                            <Text style={pdfStyles.description}>{ cv.personalInformation.location }</Text>
                        </View>
                        <View style={pdfStyles.CContact}>
                            <View style={pdfStyles.CPersonalInformationsContactColumn}>
                                <Text style={pdfStyles.text}>{ cv.personalInformation.email }</Text>
                                <Text style={pdfStyles.text}>{ cv.personalInformation.phoneNumber }</Text>
                            </View>
                            <View style={pdfStyles.CLinks}>
                                { cv.personalInformation.linkedin && <Link
                                    src={cv.personalInformation.linkedin}
                                >
                                    <Svg width="16" height="16" fill="#000000" viewBox="0 0 256 256"><Path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></Path></Svg>
                                </Link>}
                                { cv.personalInformation.github && <Link
                                    src={cv.personalInformation.github}
                                >
                                    <Svg width="16" height="16" fill="#000000" viewBox="0 0 256 256"><Path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></Path></Svg>
                                </Link>}
                                { cv.personalInformation.website && <Link
                                    src={cv.personalInformation.website}
                                >
                                    <Svg width="16" height="16" fill="#000000" viewBox="0 0 256 256"><Path d="M240,88.23a54.43,54.43,0,0,1-16,37L189.25,160a54.27,54.27,0,0,1-38.63,16h-.05A54.63,54.63,0,0,1,96,119.84a8,8,0,0,1,16,.45A38.62,38.62,0,0,0,150.58,160h0a38.39,38.39,0,0,0,27.31-11.31l34.75-34.75a38.63,38.63,0,0,0-54.63-54.63l-11,11A8,8,0,0,1,135.7,59l11-11A54.65,54.65,0,0,1,224,48,54.86,54.86,0,0,1,240,88.23ZM109,185.66l-11,11A38.41,38.41,0,0,1,70.6,208h0a38.63,38.63,0,0,1-27.29-65.94L78,107.31A38.63,38.63,0,0,1,144,135.71a8,8,0,0,0,16,.45A54.86,54.86,0,0,0,144,96a54.65,54.65,0,0,0-77.27,0L32,130.75A54.62,54.62,0,0,0,70.56,224h0a54.28,54.28,0,0,0,38.64-16l11-11A8,8,0,0,0,109,185.66Z"></Path></Svg>
                                </Link>}
                            </View>
                        </View>
                    </View>
                    <View style={pdfStyles.separator} />
                    <View>
                        <Text style={pdfStyles.title}>
                            About Me
                        </Text>
                        <Text style={pdfStyles.text}>{ cv.aboutMe.description.replaceAll(bugString, '') }</Text>
                    </View>
                    <View style={pdfStyles.separator} />
                    <View>
                        <Text style={pdfStyles.title}>
                            Last experiences
                        </Text>
                        <View style={pdfStyles.CExperience}>
                            <Image
                                style={pdfStyles.Image}
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp5GU8mDqlw8oHhMZvAzag2V7h5Onl-vWmxQ&s'
                            />
                            <View style={pdfStyles.CExperienceInfos}>
                                <Text style={pdfStyles.subtitle}>
                                    { cv.CvExperiences[0].experience.name }
                                </Text>
                                <Text style={pdfStyles.description}>
                                    { cv.CvExperiences[0].experience.startPeriod } / { cv.CvExperiences[0].experience.finishPeriod } / { cv.CvExperiences[0].experience.location }
                                </Text>
                                <Text style={pdfStyles.text}>
                                    { cv.CvExperiences[0].experience.description.replaceAll(bugString, '') }
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={pdfStyles.separator} />
                    <View>
                        <Text style={pdfStyles.title}>
                            Education & Certifications
                        </Text>
                        <View style={pdfStyles.CExperience}>
                            <Image
                                style={pdfStyles.Image}
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp5GU8mDqlw8oHhMZvAzag2V7h5Onl-vWmxQ&s'
                            />
                            <View style={pdfStyles.CExperienceInfos}>
                                <Text style={pdfStyles.subtitle}>
                                    { cv.CvEducations[0].education.name }
                                </Text>
                                <Text style={pdfStyles.description}>
                                    { cv.CvEducations[0].education.startPeriod } / { cv.CvEducations[0].education.finishPeriod } / { cv.CvEducations[0].education.location }
                                </Text>
                                <Text style={pdfStyles.text}>
                                    { cv.CvEducations[0].education.description.replaceAll(bugString, '') }
                                </Text>
                            </View>
                        </View>
                    </View>
                </Page>
            </Document>
        </PDFComponent>
        
    </div>

}