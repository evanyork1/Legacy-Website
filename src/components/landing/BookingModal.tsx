import { useEffect } from "react";
import { openCalBooking } from "@/lib/calBooking";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  useEffect(() => {
    if (isOpen) {
      openCalBooking();
      onClose();
    }
  }, [isOpen, onClose]);

  return null;
};
