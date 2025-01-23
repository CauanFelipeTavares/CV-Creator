-- DropForeignKey
ALTER TABLE "Cv_element_aboutMe" DROP CONSTRAINT "Cv_element_aboutMe_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Cv_element_education" DROP CONSTRAINT "Cv_element_education_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Cv_element_experience" DROP CONSTRAINT "Cv_element_experience_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Cv_element_personalInformation" DROP CONSTRAINT "Cv_element_personalInformation_user_id_fkey";

-- CreateTable
CREATE TABLE "Cv" (
    "id" UUID NOT NULL,
    "custom_id" TEXT NOT NULL,
    "user_id" UUID NOT NULL,
    "personal_information_element_id" UUID NOT NULL,
    "about_me_element_id" UUID NOT NULL,

    CONSTRAINT "Cv_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Cv_element_personalInformation" ADD CONSTRAINT "Cv_element_personalInformation_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cv_element_aboutMe" ADD CONSTRAINT "Cv_element_aboutMe_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cv_element_experience" ADD CONSTRAINT "Cv_element_experience_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cv_element_education" ADD CONSTRAINT "Cv_element_education_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cv" ADD CONSTRAINT "Cv_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cv" ADD CONSTRAINT "Cv_personal_information_element_id_fkey" FOREIGN KEY ("personal_information_element_id") REFERENCES "Cv_element_personalInformation"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cv" ADD CONSTRAINT "Cv_about_me_element_id_fkey" FOREIGN KEY ("about_me_element_id") REFERENCES "Cv_element_aboutMe"("id") ON DELETE NO ACTION ON UPDATE CASCADE;
