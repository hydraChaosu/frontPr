import { Formik, Field } from "formik";
import {
        Box,
        Button,
        Checkbox,
        Flex,
        FormControl,
        FormLabel,
        FormErrorMessage,
        Input,
        VStack
} from "@chakra-ui/react";
import * as Yup from "yup";

export function LoginView() {

    const SignInSchema = Yup.object().shape({
        login: Yup.string()
            .min(3, 'Too Short!')
            .max(20, 'Too Long!')
            .required('Required'),
        password: Yup.string()
            .min(3, 'Too Short!')
            .max(20, 'Too Long!')
            .required('Required'),
    });

        return (
            <Flex bg="gray.100" align="center" justify="center" h="100vh">
                <Box bg="white" p={6} rounded="md" w={64}>
                    <Formik
                        initialValues={{
                            login: "",
                            password: ""
                        }}
                        onSubmit={(values) => {
                            alert(JSON.stringify(values, null, 2));
                        }}
                        validationSchema={SignInSchema}
                    >
                        {({ handleSubmit, errors, touched }) => (
                            <form onSubmit={handleSubmit}>
                                <VStack spacing={4} align="flex-start">
                                    <FormControl isInvalid={!!errors.login && touched.login}>
                                        <FormLabel htmlFor="login">Login</FormLabel>
                                        <Field
                                            as={Input}
                                            id="login"
                                            name="login"
                                            type="login"
                                            variant="filled"
                                            placeholder="user name"
                                        />
                                        <FormErrorMessage>{errors.login}</FormErrorMessage>

                                    </FormControl>
                                    <FormControl isInvalid={!!errors.password && touched.password}>
                                        <FormLabel htmlFor="password">Password</FormLabel>
                                        <Field
                                            as={Input}
                                            id="password"
                                            name="password"
                                            type="password"
                                            variant="filled"
                                            placeholder="your password"
                                        />
                                        <FormErrorMessage>{errors.password}</FormErrorMessage>
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
        );
}

