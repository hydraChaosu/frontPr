import React, {useState} from 'react';
import {NavLink, useLocation} from "react-router-dom";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator, Flex, Spacer,
} from '@chakra-ui/react'

export const Header = () => {
    //if logged in see user and not reg and login
    //if not see reg and login
    const [loggedIn, setLoggedIn] =useState(false)

    const {pathname} = useLocation()
    const colorOfLink = ({isActive}:{isActive: boolean}) => ({color: isActive ? 'green' : 'red'})



    return(
        <>
            <Flex paddingRight="10px" justify="right">
            <Breadcrumb>
                <BreadcrumbItem>
                    <BreadcrumbLink as={NavLink} to='/'>
                        Home
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink as={NavLink} to='/basket'>
                        Basket
                    </BreadcrumbLink>
                </BreadcrumbItem>
                {loggedIn &&
                    (
                    <BreadcrumbItem>
                    <BreadcrumbLink as={NavLink} to='/login'>
                        Login
                    </BreadcrumbLink>
                </BreadcrumbItem>
                    )}
                {loggedIn && (
                <BreadcrumbItem>
                    <BreadcrumbLink as={NavLink} to='/register'>
                        Register
                    </BreadcrumbLink>
                </BreadcrumbItem>

                )}
                {loggedIn && (
                <BreadcrumbItem>
                    <BreadcrumbLink as={NavLink} to='/user'>
                        User
                    </BreadcrumbLink>
                </BreadcrumbItem>

                )}


            </Breadcrumb>
            </Flex>
        </>
)}
