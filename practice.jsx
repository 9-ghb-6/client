import { preventOverflow } from "@popperjs/core";
import { useRef } from "react";

function Login() {
  const email = useRef();
  const password = useRef();
}

const handleSubmit = (evt) => {
  //evt, preventDefault();
  fetch("http://127.0.0.1:8080/api/login", {
    method: "POST",
  });
};
