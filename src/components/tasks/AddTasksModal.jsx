import Modal from "../ui/Modal";

const AddTasksModal = ({isOpen,setIsOpen}) => {
    return (
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Add Task">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, nam
          eius est placeat unde iusto laudantium blanditiis dicta nisi
          consequuntur perspiciatis voluptatibus quam aliquam nemo architecto
          nulla omnis repellendus nobis?
        </p>
      </Modal>
    );
};
export default AddTasksModal;