import IndustryTemplate from "@/components/site/IndustryTemplate";
import { getIndustryPage } from "@/data/site/industries";

const IndustryPage = ({ path }: { path: string }) => (
  <IndustryTemplate industry={getIndustryPage(path)} />
);

export default IndustryPage;
