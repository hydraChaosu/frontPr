import { Formik, Field } from "formik";
import * as Yup from "yup";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
} from "@chakra-ui/react";

export function UserView() {
  const ChangeUserDetailsSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(45, "Too Long!"),
    surname: Yup.string().min(3, "Too Short!").max(47, "Too Long!"),
    city: Yup.string().min(3, "Too Short!").max(85, "Too Long!"),
    country: Yup.string().min(3, "Too Short!").max(56, "Too Long!"),
    street: Yup.string().min(3, "Too Short!").max(85, "Too Long!"),
    buildingNumber: Yup.string().min(3, "Too Short!").max(10, "Too Long!"),
    postalCode: Yup.string().min(3, "Too Short!").max(6, "Too Long!"),
  });

  const ChangePasswordSchema = Yup.object().shape({
    password: Yup.string()
      .min(3, "Too Short!")
      .max(20, "Too Long!")
      .required("Required"),
    confirmPassword: Yup.string()
      .min(3, "Too Short!")
      .max(20, "Too Long!")
      .required("Required")
      .when("password", {
        is: (val: string) => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("password")],
          "Both password need to be the same"
        ),
      }),
  });

  const ChangeEmailSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
  });

  return (
    <Flex
      align="center"
      justify="space-evenly"
      minH="calc(100vh - 80px)"
      bg="gray.100"
    >
      <Flex bg="gray.100" align="center" justify="center" direction="column">
        <Box bg="white" p={6} rounded="md" w={64}>
          <Formik
            initialValues={{
              name: "",
              surname: "",
              city: "",
              country: "",
              street: "",
              buildingNumber: "",
              postalCode: "",
            }}
            onSubmit={(values) => {
              alert(JSON.stringify(values, null, 2));
            }}
            validationSchema={ChangeUserDetailsSchema}
          >
            {({ handleSubmit, errors, touched }) => (
              <form onSubmit={handleSubmit}>
                <VStack spacing={4} align="flex-start">
                  <FormControl isInvalid={!!errors.name}>
                    <FormLabel htmlFor="name">Your name</FormLabel>
                    <Field
                      as={Input}
                      id="name"
                      name="name"
                      type="text"
                      variant="filled"
                      placeholder="your name"
                    />
                    <FormErrorMessage>{errors.name}</FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={!!errors.surname}>
                    <FormLabel htmlFor="name">Your surname</FormLabel>
                    <Field
                      as={Input}
                      id="surname"
                      name="surname"
                      type="text"
                      variant="filled"
                      placeholder="your surname"
                    />
                    <FormErrorMessage>{errors.surname}</FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={!!errors.city}>
                    <FormLabel htmlFor="city">Your city</FormLabel>
                    <Field
                      as={Input}
                      id="city"
                      name="city"
                      type="text"
                      variant="filled"
                      placeholder="your city"
                    />
                    <FormErrorMessage>{errors.city}</FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={!!errors.country}>
                    <FormLabel htmlFor="city">Your country</FormLabel>
                    <Field
                      as={Input}
                      id="country"
                      name="country"
                      type="text"
                      variant="filled"
                      placeholder="your country"
                    />
                    <FormErrorMessage>{errors.country}</FormErrorMessage>
                  </FormControl>{" "}
                  <FormControl isInvalid={!!errors.street}>
                    <FormLabel htmlFor="city">Your street</FormLabel>
                    <Field
                      as={Input}
                      id="street"
                      name="street"
                      type="text"
                      variant="filled"
                      placeholder="your street"
                    />
                    <FormErrorMessage>{errors.street}</FormErrorMessage>
                  </FormControl>{" "}
                  <FormControl isInvalid={!!errors.buildingNumber}>
                    <FormLabel htmlFor="city">Your building Number</FormLabel>
                    <Field
                      as={Input}
                      id="buildingNumber"
                      name="buildingNumber"
                      type="text"
                      variant="filled"
                      placeholder="your building Number"
                    />
                    <FormErrorMessage>{errors.buildingNumber}</FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={!!errors.postalCode}>
                    <FormLabel htmlFor="city">Your postal code</FormLabel>
                    <Field
                      as={Input}
                      id="postalCode"
                      name="postalCode"
                      type="text"
                      variant="filled"
                      placeholder="your postal Code"
                    />
                    <FormErrorMessage>{errors.postalCode}</FormErrorMessage>
                  </FormControl>
                  <Button type="submit" colorScheme="purple" width="full">
                    Change Your Data
                  </Button>
                </VStack>
              </form>
            )}
          </Formik>
        </Box>
      </Flex>
      <Flex bg="gray.100" align="center" justify="center" direction="column">
        <Box bg="white" p={6} rounded="md" w={64}>
          <Formik
            initialValues={{
              email: "",
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
                    Change Email
                  </Button>
                </VStack>
              </form>
            )}
          </Formik>
        </Box>
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
                  <FormControl
                    isInvalid={!!errors.password && touched.password}
                  >
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
                  <FormControl
                    isInvalid={
                      !!errors.confirmPassword && touched.confirmPassword
                    }
                  >
                    <FormLabel htmlFor="password">Confirm Password</FormLabel>
                    <Field
                      as={Input}
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      variant="filled"
                      placeholder="your password"
                    />
                    <FormErrorMessage>
                      {errors.confirmPassword}
                    </FormErrorMessage>
                  </FormControl>

                  <Button type="submit" colorScheme="purple" width="full">
                    Change Password
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
    </Flex>
  );
}
