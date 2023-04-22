import { Formik, Field } from "formik";
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
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const SignInSchema = Yup.object().shape({
  login: Yup.string()
    .min(3, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(3, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
});

export function LoginView() {
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Flex bg="gray.100" align="center" justify="center" h="calc(100vh - 80px)">
      <Box bg="white" p={6} rounded="md" w={64}>
        <Formik
          initialValues={{
            login: "",
            password: "",
          }}
          onSubmit={async (values) => {
            // const { data, isSuccess } = useQuery(["login"], () => fetch("/"));
            const response = await fetch("http://localhost:3001/user/login", {
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
            });

            const responseData = await response.json();

            if (responseData.isSuccess) {
              toast({
                title: "Success",
                description: "User has been login successfully!",
                status: "success",
                duration: 5000,
                isClosable: true,
              });
              // dispatch(
              //   logIn({
              //     isLoggedIn: true,
              //     userId: responseData.userId,
              //     userRole: 0,
              //   })
              // );
              dispatch({
                type: "auth/logIn",
                payload: {
                  isLoggedIn: true,
                  userId: responseData.userId,
                  userRole: 0,
                },
              });
              navigate("/user");
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
