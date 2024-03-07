import { QuestionsBlock } from "@/blocks/QuestionsBlock";
import Breadcrumb from "@/components/BreadCrumb";
import TitleBar from "@/components/TitleBar";

export default function Questions() {
  const BreadCrumbData = [
    {
      text: "Ana səhifə",
      link: "/dashboard",
    },
    {
      text: "Suallar",
      link: "/dashboard/questions",
    },
  ];
  return (
    <div>
      <TitleBar title="Suallar" />
      {BreadCrumbData.length > 1 && <Breadcrumb data={BreadCrumbData} />}

      <div className="w-full px-4 border-t border-border/40">
        <QuestionsBlock />
      </div>
    </div>
  );
}
