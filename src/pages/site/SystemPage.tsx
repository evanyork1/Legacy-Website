import SystemTemplate from "@/components/site/SystemTemplate";
import { getSystemPage } from "@/data/site/systems";

const SystemPage = ({ path }: { path: string }) => (
  <SystemTemplate system={getSystemPage(path)} />
);

export default SystemPage;
