import {ShopItem} from "./ShopItem";
import {Box, Button, Flex, FormControl, FormLabel, Input, VStack} from "@chakra-ui/react";
import {Field, Formik} from "formik";

export function Shop() {
    return (<>
            <Flex bg="gray.100" align="center" justify="center" h="100vh">
                <Box bg="white" p={6} rounded="md" w={64}>
                    <Formik
                        initialValues={{
                            searchQuery: ''

                        }}
                        onSubmit={(values) => {
                            alert(JSON.stringify(values, null, 2));
                        }}
                    >
                        {({ handleSubmit, errors, touched }) => (
                            <form onSubmit={handleSubmit}>
                                <VStack spacing={4} align="flex-start">
                                    <FormControl>
                                        <FormLabel htmlFor="searchQuery">Search</FormLabel>
                                        <Field
                                            as={Input}
                                            id="searchQuery"
                                            name="searchQuery"
                                            type="string"
                                            variant="filled"
                                        />
                                    </FormControl>


                                    <Button type="submit" colorScheme="purple" width="full">
                                        Login
                                    </Button>
                                </VStack>
                            </form>
                        )}
                    </Formik>
                </Box>
            </Flex>
        <div>
            {[{id: 1, name: 'aaaaa'}, {id: 2, name: 'aaaaa'}].map( item => <ShopItem {...item} />)}
        </div>
        </>
    );
}
