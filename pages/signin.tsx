import React from "react";
import Head from "next/head";
import Button from "../components/Button";
import Input from "../components/Input";
import { Title } from "../components/Title";
import Link from "next/link";
import Checkbox from "../components/Checkbox";
import { useForm, FieldValues } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

export interface ISignInForm {
  email: string;
  password: string;
}

const Signup = () => {
  const { handleSubmit, control, reset } = useForm<FieldValues>({});

  const SignInUser = async (data: FieldValues) => {
    const endpoint = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/signin`;
    return await axios.post(endpoint, data);
  };

  const onSubmit = async (data: FieldValues) => {
    toast.promise(SignInUser(data), {
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
        <title>Sign In</title>
      </Head>

      <div className="flex overflow-hidden flex-wrap items-center h-screen">
        <div className="hidden overflow-hidden w-full h-screen bg-cover bg-signin-bg lg:block lg:w-2/3 xl:w-2/3"></div>

        <div className="overflow-hidden p-16 w-full md:p-44 lg:p-16 lg:w-1/3 xl:w-1/3">
          <Title
            title="Sign In"
            subtitle="Enter your credentials"
            action={
              <>
                <p className="text-sm text-gray-400">
                  Don&apos;t have an account ?
                </p>
                <Link href="/signup" passHref>
                  <a className="text-sm font-semibold text-primary">Sign Up</a>
                </Link>
              </>
            }
          />
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="Email address"
              name="email"
              type="email"
              control={control}
              placeholder="johndoe@email.com"
            />
            <Input
              label="Password"
              placeholder="8 Characters long password"
              name="password"
              type="password"
              control={control}
            />
            <Checkbox label="Remember me" />
            <br />
            <br />
            <Button title="Sign In" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};
export default Signup;
