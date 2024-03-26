import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteBooking } from "../../services/apiBookings";

export default function useDeletingBookings() {
  const queryClient = useQueryClient();

  const { mutate: deleteBookings, isLoading: isDeletingBookings } = useMutation(
    {
      mutationFn: deleteBooking,

      onSuccess: () => {
        toast.success(`Booking successfully deleted`);
        queryClient.invalidateQueries({ active: true });
      },

      onError: (err) => toast.error(err.message),
    }
  );

  return { deleteBookings, isDeletingBookings };
}
