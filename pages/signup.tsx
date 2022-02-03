import React from "react";
import Head from "next/head";
import Button from "../components/Button";
import Input from "../components/Input";
import { Title } from "../components/Title";
import Link from "next/link";

const signup = () => {
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
          <Input label="First name" placeholder="John" />
          <Input label="Last name" placeholder="Doe" />
          <Input label="Email address" placeholder="johndoe@email.com" />
          <Input
            label="Password"
            placeholder="8 Characters long password"
            type="password"
          />
          {/* <Checkbox label="Remember me" /> */}
          <br />
          <br />
          <Button title="Create account" />
        </div>
      </div>
    </div>
  );
};
export default signup;
