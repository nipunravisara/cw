import React from "react";
import Router from "next/router";
import { NextComponentType, NextPageContext } from "next";

const login = "/signin";

const checkUserAuthentication = () => {
  return { auth: { isAdmin: true } };
};

const WithPrivateRoute = (WrappedComponent: NextComponentType<any>) => {
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;

  hocComponent.getInitialProps = async (context: NextPageContext) => {
    const userAuth = await checkUserAuthentication();

    if (!userAuth?.auth) {
      if (context.res) {
        context.res?.writeHead(302, {
          Location: login,
        });
        context.res?.end();
      } else {
        Router.replace(login);
      }
    } else if (WrappedComponent.getInitialProps) {
      const wrappedProps = await WrappedComponent.getInitialProps({
        ...context,
        auth: userAuth,
      });
      return { ...wrappedProps, userAuth };
    }

    return { userAuth };
  };

  return hocComponent;
};

export default WithPrivateRoute;
