import { useState } from "react";
import CreateCabinForm from "./CreateCabinForm";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CabinTable from "./CabinTable";

export default function AddCabin() {
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <div>
          <Button>Add new cabin</Button>
        </div>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>
    </Modal>
  );
}

// export default function AddCabin() {
//   const [isOpenModal, setIsOpenModal] = useState(false);

//   return (
//     <div>
//       <Button onClick={() => setIsOpenModal((show) => !show)}>
//         Add new cabin
//       </Button>
//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal((e) => !e)}>
//           <CreateCabinForm onCloseModal={() => setIsOpenModal((e) => !e)} />
//         </Modal>
//       )}
//     </div>
//   );
// }
