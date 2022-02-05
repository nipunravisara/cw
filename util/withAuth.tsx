import React, { Component } from "react";

export const withAuth = <T extends object>(C: React.ComponentClass<T>) => {
  return class AuthComponent extends React.Component<T> {
    render() {
      return <C {...this.props} />;
    }
  };
};
