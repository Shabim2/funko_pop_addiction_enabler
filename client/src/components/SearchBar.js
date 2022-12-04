import {
  Button,
  Input,
  InputGroup,
  InputRightAddon,
  InputRightElement,
  Select,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ["Animation", "Movies", "Television", "Sports", "Video Games"],
    };
  }

  render() {
    const { options } = this.state;
    return (
      <InputGroup className="funko-search-bar" m={"4vh auto"}>
        <Input className="funko-search-input" placeholder="Search..." />
        <InputRightAddon className="funko-search-right-addon" p={0}>
          <Button>Search</Button>
        </InputRightAddon>
        <Select
          className="funko-search-select"
          variant="filled"
          placeholder="Category"
          width={"23vw"}
          marginInlineStart={"2vw"}
        >
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </Select>
      </InputGroup>
    );
  }
}
