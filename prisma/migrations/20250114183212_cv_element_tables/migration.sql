/*
  Warnings:

  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "createdAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "cv_element_personalInformation" (
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

    CONSTRAINT "cv_element_personalInformation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cv_element_aboutMe" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "custom_id" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "cv_element_aboutMe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cv_element_experience" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "custom_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "start_period" TIMESTAMP(3) NOT NULL,
    "finish_period" TIMESTAMP(3) NOT NULL,
    "location" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "cv_element_experience_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cv_element_education" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "custom_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "start_period" TIMESTAMP(3) NOT NULL,
    "finish_period" TIMESTAMP(3) NOT NULL,
    "location" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "cv_element_education_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "cv_element_personalInformation" ADD CONSTRAINT "cv_element_personalInformation_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cv_element_aboutMe" ADD CONSTRAINT "cv_element_aboutMe_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cv_element_experience" ADD CONSTRAINT "cv_element_experience_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cv_element_education" ADD CONSTRAINT "cv_element_education_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
