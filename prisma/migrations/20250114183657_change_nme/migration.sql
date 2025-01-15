/*
  Warnings:

  - You are about to drop the `cv_element_aboutMe` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `cv_element_education` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `cv_element_experience` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `cv_element_personalInformation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "cv_element_aboutMe" DROP CONSTRAINT "cv_element_aboutMe_user_id_fkey";

-- DropForeignKey
ALTER TABLE "cv_element_education" DROP CONSTRAINT "cv_element_education_user_id_fkey";

-- DropForeignKey
ALTER TABLE "cv_element_experience" DROP CONSTRAINT "cv_element_experience_user_id_fkey";

-- DropForeignKey
ALTER TABLE "cv_element_personalInformation" DROP CONSTRAINT "cv_element_personalInformation_user_id_fkey";

-- DropTable
DROP TABLE "cv_element_aboutMe";

-- DropTable
DROP TABLE "cv_element_education";

-- DropTable
DROP TABLE "cv_element_experience";

-- DropTable
DROP TABLE "cv_element_personalInformation";

-- CreateTable
CREATE TABLE "CV_element_personalInformation" (
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

    CONSTRAINT "CV_element_personalInformation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CV_element_aboutMe" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "custom_id" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "CV_element_aboutMe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CV_element_experience" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "custom_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "start_period" TIMESTAMP(3) NOT NULL,
    "finish_period" TIMESTAMP(3) NOT NULL,
    "location" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "CV_element_experience_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CV_element_education" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "custom_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "start_period" TIMESTAMP(3) NOT NULL,
    "finish_period" TIMESTAMP(3) NOT NULL,
    "location" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "CV_element_education_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CV_element_personalInformation" ADD CONSTRAINT "CV_element_personalInformation_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CV_element_aboutMe" ADD CONSTRAINT "CV_element_aboutMe_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CV_element_experience" ADD CONSTRAINT "CV_element_experience_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CV_element_education" ADD CONSTRAINT "CV_element_education_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
