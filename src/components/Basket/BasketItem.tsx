import {Box, Button, Flex, FormControl, FormLabel, Input, VStack} from "@chakra-ui/react";
import {Field, Formik} from "formik";

export function BasketItem(props: { name: string, id: number, quantity: number}) {
    return (
        <>
            <p>{props.name}</p>
            <p>{props.quantity}</p>
            <Button type="submit" colorScheme="purple" width="full">
                      delete
            </Button>

        </>
    )
}
