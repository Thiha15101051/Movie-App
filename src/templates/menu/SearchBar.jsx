import { Input, Modal } from "@mantine/core";
import { Context } from "../../content/StateContent";

const SearchBar = () => {
  const { slowSearchBar, setSlowSearchBar } = Context();
  return (
    <>
      <Modal.Root
        size={"400px"}
        opened={slowSearchBar}
        onClose={() => setSlowSearchBar(false)}
        transitionProps={{ transition: "rotate-left" }}
      >
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Body className="flex justify-center items-center">
            <form
              className=" w-full p-3"
              onSubmit={(e) => {
                e.preventDefault();
                setSlowSearchBar(false);
              }}
            >
              <div className="flex items-center">
                <input
                type="text"
                className=" w-11/12 mx-auto mr-5 bg-transparent text-xl outline-none mb-0"
                placeholder="Search . . ."
              />
                  <div>
                    <Modal.CloseButton size={"1.8rem"} color='dark' />
                  </div>
              </div>
              {/* <Input.Wrapper className="border-none border-b-2">
                <Input
                  onChange={(e) => {
                    console.log(e.target.value);
                  }}
                  
                />
              </Input.Wrapper> */}
            </form>
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>
    </>
  );
};
export default SearchBar;
