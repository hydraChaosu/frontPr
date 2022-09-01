import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
} from "@chakra-ui/react";
import { UserMenu } from "./UserMenu";

export const Header = () => {
  //if logged in see user and not reg and login
  //if not see reg and login
  const [loggedIn, setLoggedIn] = useState(false);

  const { pathname } = useLocation();
  const colorOfLink = ({ isActive }: { isActive: boolean }) => ({
    color: isActive ? "green" : "red",
  });

  return (
    <Flex paddingRight="10px" align="center" justify="right" h="80px" w="100vw">
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink as={NavLink} to="/">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={NavLink} to="/basket">
            Basket
          </BreadcrumbLink>
        </BreadcrumbItem>
        {!loggedIn && (
          <BreadcrumbItem>
            <BreadcrumbLink as={NavLink} to="/login">
              Login
            </BreadcrumbLink>
          </BreadcrumbItem>
        )}
        {!loggedIn && (
          <BreadcrumbItem>
            <BreadcrumbLink as={NavLink} to="/register">
              Register
            </BreadcrumbLink>
          </BreadcrumbItem>
        )}
      </Breadcrumb>
      {loggedIn && <UserMenu />}
    </Flex>
  );
};
