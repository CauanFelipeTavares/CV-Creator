/*
  Warnings:

  - You are about to drop the `CV_element_aboutMe` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CV_element_education` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CV_element_experience` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CV_element_personalInformation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CV_element_aboutMe" DROP CONSTRAINT "CV_element_aboutMe_user_id_fkey";

-- DropForeignKey
ALTER TABLE "CV_element_education" DROP CONSTRAINT "CV_element_education_user_id_fkey";

-- DropForeignKey
ALTER TABLE "CV_element_experience" DROP CONSTRAINT "CV_element_experience_user_id_fkey";

-- DropForeignKey
ALTER TABLE "CV_element_personalInformation" DROP CONSTRAINT "CV_element_personalInformation_user_id_fkey";

-- DropTable
DROP TABLE "CV_element_aboutMe";

-- DropTable
DROP TABLE "CV_element_education";

-- DropTable
DROP TABLE "CV_element_experience";

-- DropTable
DROP TABLE "CV_element_personalInformation";

-- CreateTable
CREATE TABLE "Cv_element_personalInformation" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "custom_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "job_title" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "linkedin" TEXT NOT NULL,
    "github" TEXT NOT NULL,
    "website" TEXT NOT NULL,

    CONSTRAINT "Cv_element_personalInformation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cv_element_aboutMe" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "custom_id" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Cv_element_aboutMe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cv_element_experience" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "custom_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "start_period" TIMESTAMP(3) NOT NULL,
    "finish_period" TIMESTAMP(3) NOT NULL,
    "location" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Cv_element_experience_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cv_element_education" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "custom_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "start_period" TIMESTAMP(3) NOT NULL,
    "finish_period" TIMESTAMP(3) NOT NULL,
    "location" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Cv_element_education_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Cv_element_personalInformation" ADD CONSTRAINT "Cv_element_personalInformation_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cv_element_aboutMe" ADD CONSTRAINT "Cv_element_aboutMe_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cv_element_experience" ADD CONSTRAINT "Cv_element_experience_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cv_element_education" ADD CONSTRAINT "Cv_element_education_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
