import {Box, Button, Flex, FormControl, FormLabel, Input, VStack} from "@chakra-ui/react";
import {Field, Formik} from "formik";

export function ShopItem(props: { name: string, id: number }) {
    return (
        <>
            <p>{props.name}</p>
            <Flex bg="gray.100" align="center" justify="center" h="100vh">
                <Box bg="white" p={6} rounded="md" w={64}>
                    <Formik
                        initialValues={{
                            quantity: 0
                        }}
                        onSubmit={(values) => {
                            alert(JSON.stringify(values, null, 2));
                        }}
                    >
                        {({ handleSubmit, errors, touched }) => (
                            <form onSubmit={handleSubmit}>
                                <VStack spacing={4} align="flex-start">
                                    <FormControl>
                                        <FormLabel htmlFor="searchQuery">Quantity</FormLabel>
                                        <Field
                                            as={Input}
                                            id="searchQuery"
                                            name="searchQuery"
                                            type="number"
                                            variant="filled"
                                        />
                                    </FormControl>


                                    <Button type="submit" colorScheme="purple" width="full">
                                        Buy
                                    </Button>
                                </VStack>
                            </form>
                        )}
                    </Formik>
                </Box>
            </Flex>
        </>
    )
}
