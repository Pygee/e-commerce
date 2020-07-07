import React from "react";
import { SpinnerOverlay, SpinnerContainer } from "./withSpinner.style";

export const withSpinner = WrappedComponent => ({
  isLoading,
  ...otherProps
}) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};
