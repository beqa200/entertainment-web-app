import NestedLayout from "@/layouts/NestedLayout";
import { FormWrapper, StyledForm } from "@/styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactElement, useState } from "react";
import { useForm } from "react-hook-form";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();
  const [message, setMessage] = useState("");

  const router = useRouter();
  const onSubmit = async () => {
    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: watch("email"),
        password: watch("password"),
      }),
    });
    const data = await response.json();
    setMessage(data);

    if (response.ok) {
      setTimeout(() => {
        router.push("/login");
      }, 1000);
    }
  };

  return (
    <FormWrapper>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign Up</h1>
        <div className="input-wrapper">
          <input
            placeholder="Email address"
            {...register("email", {
              required: { value: true, message: "Can`t be empty" },
              pattern: {
                value: /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})$/,
                message: "Invalid email",
              },
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
              minLength: {
                value: 5,
                message: "More than 5 character",
              },
            })}
            style={
              errors?.password ? { borderBottom: "1px solid #FC4747" } : {}
            }
          />
          {errors.password && (
            <p className="error">{errors.password.message}</p>
          )}
        </div>
        <div className="input-wrapper">
          <input
            placeholder="Repeat Password"
            type={"password"}
            {...register("repeatPassword", {
              validate: (value, formValues) =>
                value === formValues.password || "Invalid",
            })}
            style={
              errors?.repeatPassword
                ? { borderBottom: "1px solid #FC4747" }
                : {}
            }
          />
          {errors.repeatPassword && !errors.password && (
            <p className="error">{errors.repeatPassword.message}</p>
          )}
        </div>

        <button type="submit">Create an account</button>
        <p className="text">
          Alread have an account? <Link href="/login">Login</Link>
        </p>
      </StyledForm>
      {message && (
        <p
          className={
            message == "Register successfully"
              ? "success-message"
              : "error-message"
          }
        >
          {message}
        </p>
      )}
    </FormWrapper>
  );
}

SignUp.getLayout = function (page: ReactElement) {
  return <NestedLayout>{page}</NestedLayout>;
};
