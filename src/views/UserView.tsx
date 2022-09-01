import { Formik, Field } from "formik";
import * as Yup from 'yup';

import {
    Box,
    Button,

    Flex,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    VStack
} from "@chakra-ui/react";

export function UserView() {

    const SignupSchema = Yup.object().shape({
        login: Yup.string()
            .min(3, 'Too Short!')
            .max(20, 'Too Long!'),
        password: Yup.string()
            .min(3, 'Too Short!')
            .max(20, 'Too Long!'),
        confirmPassword: Yup.string()
            .min(3, 'Too Short!')
            .max(20, 'Too Long!')
            .when("password", {
                is: (val: string) => (val && val.length > 0 ? true : false),
                then: Yup.string().oneOf(
                    [Yup.ref("password")],
                    "Both password need to be the same"
                )
            }),
        email: Yup.string().email('Invalid email'),
    });

    const ChangePasswordSchema = Yup.object().shape({
        password: Yup.string()
            .min(3, 'Too Short!')
            .max(20, 'Too Long!')
            .required('Required'),
        confirmPassword: Yup.string()
            .min(3, 'Too Short!')
            .max(20, 'Too Long!')
            .required('Required')
            .when("password", {
                is: (val: string) => (val && val.length > 0 ? true : false),
                then: Yup.string().oneOf(
                    [Yup.ref("password")],
                    "Both password need to be the same"
                )
            })
    })

    const ChangeLoginSchema = Yup.object().shape({
        login: Yup.string()
            .min(3, 'Too Short!')
            .max(20, 'Too Long!')
            .required('Required'),

    });

    const ChangeEmailSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required')
    })

    return (
        <>
        <Flex bg="gray.100" align="center" justify="center" h="100vh">
            {/*current user name*/}
            <Box bg="white" p={6} rounded="md" w={64}>
                <Formik
                    initialValues={{
                        login: ""
                    }}
                    onSubmit={(values) => {
                        alert(JSON.stringify(values, null, 2));
                    }}
                    validationSchema={ChangeLoginSchema}
                >
                    {({ handleSubmit, errors, touched }) => (
                        <form onSubmit={handleSubmit}>
                            <VStack spacing={4} align="flex-start">
                                <FormControl isInvalid={!!errors.login}>
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
                                <Button type="submit" colorScheme="purple" width="full">
                                    Login
                                </Button>
                            </VStack>
                        </form>
                    )}
                </Formik>
            </Box>
            {/*curent email*/}
            <Box bg="white" p={6} rounded="md" w={64}>
                <Formik
                    initialValues={{
                        email: ""
                    }}
                    onSubmit={(values) => {
                        alert(JSON.stringify(values, null, 2));
                    }}
                    validationSchema={ChangeEmailSchema}
                >
                    {({ handleSubmit, errors, touched }) => (
                        <form onSubmit={handleSubmit}>
                            <VStack spacing={4} align="flex-start">
                                <FormControl isInvalid={!!errors.email}>
                                    <FormLabel htmlFor="email">Email Address</FormLabel>
                                    <Field
                                        as={Input}
                                        id="email"
                                        name="email"
                                        type="email"
                                        variant="filled"
                                        placeholder="example@Something.com"
                                    />
                                    <FormErrorMessage>{errors.email}</FormErrorMessage>

                                </FormControl>
                                <Button type="submit" colorScheme="purple" width="full">
                                    Login
                                </Button>
                            </VStack>
                        </form>
                    )}
                </Formik>
            </Box>
            {/*changepassword*/}
            <Box bg="white" p={6} rounded="md" w={64}>
                <Formik
                    initialValues={{
                        password: "",
                        confirmPassword: "",
                    }}
                    onSubmit={(values) => {
                        alert(JSON.stringify(values, null, 2));
                    }}
                    validationSchema={ChangePasswordSchema}
                >
                    {({ handleSubmit, errors, touched }) => (
                        <form onSubmit={handleSubmit}>
                            <VStack spacing={4} align="flex-start">
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
                                <FormControl isInvalid={!!errors.confirmPassword && touched.confirmPassword}>
                                    <FormLabel htmlFor="password">Password</FormLabel>
                                    <Field
                                        as={Input}
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        type="password"
                                        variant="filled"
                                        placeholder="your password"

                                    />
                                    <FormErrorMessage>{errors.confirmPassword}</FormErrorMessage>
                                </FormControl>

                                <Button type="submit" colorScheme="purple" width="full">
                                    Login
                                </Button>
                            </VStack>
                        </form>
                    )}
                </Formik>
            </Box>
            <Button type="submit" colorScheme="red" width="full">
                Delete account
            </Button>
        </Flex>
       </>
    );
}

