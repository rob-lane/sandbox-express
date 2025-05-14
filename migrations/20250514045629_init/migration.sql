-- CreateTable
CREATE TABLE "commodities" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "attribute" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "units" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "yearType" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "value" INTEGER NOT NULL,

    CONSTRAINT "commodities_pkey" PRIMARY KEY ("id")
);
