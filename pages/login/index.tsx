import NestedLayout from "@/layouts/NestedLayout";
import { FormWrapper, StyledForm } from "@/styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactElement, useState } from "react";
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const [message, setMessage] = useState("");

  const router = useRouter();

  //send login information to api
  const onSubmit = async () => {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: watch("email"),
        password: watch("password"),
      }),
    });

    if (response.ok) {
      const token = response.headers.get("auth-token");
      token && localStorage.setItem("auth-token", token);
      router.push("/");
    } else {
      const message = await response.json();
      setMessage(message);
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  };

  return (
    <FormWrapper>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>
        <div className="input-wrapper">
          <input
            placeholder="Email address"
            {...register("email", {
              required: { value: true, message: "Can`t be empty" },
            })}
            style={errors?.email ? { borderBottom: "1px solid #FC4747" } : {}}
          />
          {errors?.email && <p className="error">{errors.email.message}</p>}
        </div>

        <div className="input-wrapper">
          <input
            placeholder="Password"
            type={"password"}
            {...register("password", {
              required: { value: true, message: "Can`t be empty" },
            })}
            style={
              errors?.password ? { borderBottom: "1px solid #FC4747" } : {}
            }
          />
          {errors.password && (
            <p className="error">{errors.password.message}</p>
          )}
        </div>
        <button type="submit">Login to your account</button>
        <p className="text">
          Don’t have an account? <Link href="/sign-up">Sign Up</Link>
        </p>
      </StyledForm>

      {message && <p className={"message error-message"}>{message}</p>}
    </FormWrapper>
  );
}

Login.getLayout = function (page: ReactElement) {
  return <NestedLayout>{page}</NestedLayout>;
};
