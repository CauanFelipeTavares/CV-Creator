-- AlterTable
ALTER TABLE "Cv_element_personalInformation" ALTER COLUMN "linkedin" DROP NOT NULL,
ALTER COLUMN "github" DROP NOT NULL,
ALTER COLUMN "website" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "created_at" DROP NOT NULL;
