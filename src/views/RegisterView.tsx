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
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { CreateUserRes } from "types";

const SignupSchema = Yup.object().shape({
  login: Yup.string()
    .min(3, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
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
  email: Yup.string().email("Invalid email").required("Required"),
});

export function RegisterView() {
  const toast = useToast();
  const navigate = useNavigate();

  return (
    <Flex bg="gray.100" align="center" justify="center" h="calc(100vh - 80px)">
      <Box bg="white" p={6} rounded="md" w={64}>
        <Formik
          initialValues={{
            login: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={async (values) => {
            const response = await fetch(
              "http://localhost:3001/user/register",
              {
                method: "POST",
                body:
                  values &&
                  {
                    body:
                      values instanceof FormData
                        ? values
                        : JSON.stringify(values),
                  }.body,
                credentials: "include",
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );

            const responseData = await response.json();

            if (responseData.isSuccess) {
              toast({
                title: "Success",
                description: "User has been registered successfully!",
                status: "success",
                duration: 5000,
                isClosable: true,
              });
              navigate("/login");
            }
            if (!responseData.isSuccess) {
              toast({
                title: "Failure",
                description: responseData.message,
                status: "error",
                duration: 5000,
                isClosable: true,
              });
            }
          }}
          validationSchema={SignupSchema}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormControl isInvalid={!!errors.email && touched.email}>
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
                <FormControl
                  isInvalid={
                    !!errors.confirmPassword && touched.confirmPassword
                  }
                >
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Field
                    as={Input}
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    variant="filled"
                    placeholder="your password"
                    validate={(value: string) => {
                      let error;

                      if (value.length < 3) {
                        error = "Password must contain at least 3 characters";
                      }

                      return error;
                    }}
                  />
                  <FormErrorMessage>{errors.confirmPassword}</FormErrorMessage>
                </FormControl>
                <Button type="submit" colorScheme="purple" width="full">
                  Register
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
}
