import DFW from "./DFW";
import { BookingUrlProvider } from "@/contexts/BookingUrlContext";

const GPT_BOOKING_URL =
  "https://cal.com/legacyindustrialcoatings/on-site-estimate?utm_source=chatgpt";

const GPT = () => (
  <BookingUrlProvider url={GPT_BOOKING_URL}>
    <DFW />
  </BookingUrlProvider>
);

export default GPT;
