import { Flex } from "@radix-ui/themes";
import "./Sidebar.css";
import Item from "./Item";

function Sidebar() {
  return (
    <Flex className="Sidebar" direction="column" align="center">
      <Item></Item>
    </Flex>
  );
}

export default Sidebar;
