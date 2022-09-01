import React from 'react';
import {Category} from "../components/Category/Category";
import {Shop} from "../components/Shop/Shop";
import {Flex} from "@chakra-ui/react";

export const ShopView = () => {

    return (
        <>
            <Category/>
                <Shop/>
        </>
    );
}
