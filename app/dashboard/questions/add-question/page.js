import { Wizard, WizardQuestion } from "@/blocks/WizardQuestion";
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
      text: "Tapşırıqlar",
      link: "/dashboard/questions",
    },
    ,
    {
      text: "Tapşırıq əlavə et",
      link: "/dashboard/questions/add-question",
    },
  ];
  return (
    <div>
      <TitleBar title="Tapşırıq əlavə et" />
      {BreadCrumbData.length > 1 && <Breadcrumb data={BreadCrumbData} />}

      <div className="w-full p-4 border-t border-border/40">
        <WizardQuestion />
      </div>
    </div>
  );
}
