-- CreateTable
CREATE TABLE "CvExperiences" (
    "cvId" UUID NOT NULL,
    "experienceId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CvExperiences_pkey" PRIMARY KEY ("cvId","experienceId")
);

-- CreateTable
CREATE TABLE "CvEducations" (
    "cvId" UUID NOT NULL,
    "educationId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CvEducations_pkey" PRIMARY KEY ("cvId","educationId")
);

-- AddForeignKey
ALTER TABLE "CvExperiences" ADD CONSTRAINT "CvExperiences_cvId_fkey" FOREIGN KEY ("cvId") REFERENCES "Cv"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CvExperiences" ADD CONSTRAINT "CvExperiences_experienceId_fkey" FOREIGN KEY ("experienceId") REFERENCES "Cv_element_experience"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CvEducations" ADD CONSTRAINT "CvEducations_cvId_fkey" FOREIGN KEY ("cvId") REFERENCES "Cv"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CvEducations" ADD CONSTRAINT "CvEducations_educationId_fkey" FOREIGN KEY ("educationId") REFERENCES "Cv_element_education"("id") ON DELETE CASCADE ON UPDATE CASCADE;
