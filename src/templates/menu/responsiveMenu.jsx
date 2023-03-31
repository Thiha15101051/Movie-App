import { Modal } from "@mantine/core";
import { NavLink } from "react-router-dom";
import {Context} from '../../content/StateContent'

const ResMenu=()=> {
    const { slowTransitionOpened, setSlowTransitionOpened } = Context();
  return (
    <>
      <Modal.Root
        size={"300px"}
        opened={slowTransitionOpened}
        onClose={() => setSlowTransitionOpened(false)}
        transitionProps={{ transition: "rotate-left" }}
      >
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Header className="d-flex justify-end">
            <Modal.CloseButton size={"2rem"} />
          </Modal.Header>
          <Modal.Body>
            <ul className=" list-none flex flex-col items-center justify-around h-52 mb-10 ">
              <li
                className="select-none mx-5 text-lg"
                onClick={() => setSlowTransitionOpened(false)}
              >
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li
                className="select-none mx-5 text-lg"
                onClick={() => setSlowTransitionOpened(false)}
              >
                <NavLink to={"/product"}>Foods</NavLink>
              </li>
              <li
                className="select-none mx-5 text-lg"
                onClick={() => setSlowTransitionOpened(false)}
              >
                <NavLink to={"/product"}>Foods</NavLink>
              </li>
              <li
                className="select-none mx-5 text-lg"
                onClick={() => setSlowTransitionOpened(false)}
              >
                <NavLink to={"/product"}>Foods</NavLink>
              </li>
            </ul>
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>
    </>
  );
}
export default ResMenu;
