import React from "react";
import Head from "next/head";
import Button from "../components/Button";
import Input from "../components/Input";
import { Title } from "../components/Title";
import Link from "next/link";
import { useForm, FieldValues } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

export interface ISignUpForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const Signup = () => {
  const { handleSubmit, control, reset } = useForm<FieldValues>({});

  const SignUpUser = async (data: FieldValues) => {
    const endpoint = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/signup`;
    return await axios.post(endpoint, data);
  };

  const onSubmit = async (data: FieldValues) => {
    toast.promise(SignUpUser(data), {
      loading: "Signing up...",
      success: ({ data }) => {
        console.log(11, data);
        return data.message;
      },
      error: ({ response }) => {
        return response.data.message;
      },
    });
  };

  return (
    <div>
      <Head>
        <title>Sign Up</title>
      </Head>

      <div className="flex overflow-hidden flex-wrap items-center h-screen">
        <div className="hidden overflow-hidden w-full h-screen bg-cover bg-signup-bg lg:block lg:w-2/3 xl:w-2/3"></div>

        <div className="overflow-hidden p-16 w-full md:p-44 lg:p-16 lg:w-1/3 xl:w-1/3">
          <Title
            title="Sign Up"
            subtitle="Enter your details"
            action={
              <>
                <p className="text-sm text-gray-400">
                  Already have an account ?
                </p>
                <Link href="/signin" passHref>
                  <a className="text-sm font-semibold text-primary">Sign In</a>
                </Link>
              </>
            }
          />
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="First name"
              placeholder="John"
              name="firstName"
              control={control}
            />
            <Input
              label="Last name"
              placeholder="Doe"
              name="lastName"
              control={control}
            />
            <Input
              label="Email address"
              placeholder="johndoe@email.com"
              name="email"
              type="email"
              control={control}
            />
            <Input
              label="Password"
              placeholder="8 Characters long password"
              type="password"
              name="password"
              control={control}
            />
            <br />
            <br />
            <Button title="Create account" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};
export default Signup;
