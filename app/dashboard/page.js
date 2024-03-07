import Breadcrumb from "@/components/BreadCrumb";
import WelcomeScreen from "../../blocks/WelcomeScreen";
import TitleBar from "@/components/TitleBar";

export default function Dashboard() {
  const BreadCrumbData = [
    {
      text: "Ana səhifə",
      link: "/",
    },
  ];
  return (
    <div>
      <TitleBar title="Ana səhifə" />
      {BreadCrumbData.length > 1 && <Breadcrumb data={BreadCrumbData} />}
      <WelcomeScreen />
    </div>
  );
}
