import React from "react";
import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";

export function UserMenu() {
  const logoutClick = async () => {
    console.log("logout");
  };

  return (
    <>
      <Menu autoSelect={false}>
        <MenuButton>
          <Flex align="center" justify="space-between" w="260px">
            <Box>
              <Flex align="center">
                <Box
                  width="45"
                  height="45"
                  borderRadius="full"
                  objectFit="cover"
                  // src={avatarUrl ? avatarUrl : defaultIcon}
                  // alt="user profil icon"
                  alignItems="center"
                  mr="10px"
                />
                <Text fontSize="18px">"userFullName"</Text>
              </Flex>
            </Box>
            <Box
              w={0}
              h={0}
              borderTop="5px solid #9e9e9e"
              borderLeft="5px solid transparent"
              borderRight="5px solid transparent"
            ></Box>
          </Flex>
        </MenuButton>
        <MenuList borderRadius={0}>
          <MenuGroup>
            <MenuItem
              onClick={() => console.log(true)}
              _hover={{ backgroundColor: "#292A2B" }}
            >
              Profil
            </MenuItem>
            <MenuItem
              onClick={logoutClick}
              _hover={{ backgroundColor: "#292A2B" }}
            >
              Wyloguj{" "}
            </MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </>
  );
}
