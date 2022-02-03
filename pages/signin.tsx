import React from "react";
import Head from "next/head";
import Button from "../components/Button";
import Input from "../components/Input";
import { Title } from "../components/Title";
import Link from "next/link";
import Checkbox from "../components/Checkbox";

const signup = () => {
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
          <Input label="Email address" placeholder="johndoe@email.com" />
          <Input
            label="Password"
            placeholder="8 Characters long password"
            type="password"
          />
          <Checkbox label="Remember me" />
          <br />
          <br />
          <Button title="Create account" />
        </div>
      </div>
    </div>
  );
};
export default signup;
