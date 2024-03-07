import { WizardExam } from "@/blocks/WizardExam";
import { Wizard } from "@/blocks/WizardQuestion";
import Breadcrumb from "@/components/BreadCrumb";
import CustomCalendar from "@/components/Calendar";
import TitleBar from "@/components/TitleBar";
import React from "react";

export default function Page() {
  const BreadCrumbData = [
    {
      text: "Ana səhifə",
      link: "/dashboard",
    },
    {
      text: "İmtahanlar",
      link: "/dashboard/questions",
    },
    ,
    {
      text: "İmtahan əlavə et",
      link: "/dashboard/questions/add-question",
    },
  ];
  return (
    <div>
      <TitleBar title="İmtahan əlavə et" />
      {BreadCrumbData.length > 1 && <Breadcrumb data={BreadCrumbData} />}

      <div className="w-full p-4 border-t border-border/40">
        <WizardExam />
      </div>
    </div>
  );
}
