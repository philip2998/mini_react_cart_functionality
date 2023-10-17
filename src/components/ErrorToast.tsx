import { Toast } from "react-bootstrap";

import React from "react";

interface ErrorToastProps {
  errorMessage: string;
  onClose: () => void;
}

const ErrorToast = ({ errorMessage, onClose }: ErrorToastProps) => {
  return (
    <Toast onClose={onClose} show delay={3000} autohide>
      <Toast.Header>
        <strong className="mr-auto">Error</strong>
      </Toast.Header>
      <Toast.Body>{errorMessage}</Toast.Body>
    </Toast>
  );
};

export default ErrorToast;
