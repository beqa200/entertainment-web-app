import NestedLayout from "@/layouts/NestedLayout";
import { FormWrapper, StyledForm } from "@/styled-components";
import Link from "next/link";
import { ReactElement } from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  email: string;
  password: string;
  repeatPassword: string;
};

export default function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    trigger,
  } = useForm<FormValues>();

  const onSubmit = () => {
    console.log("correct");
  };

  return (
    <FormWrapper>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign Up</h1>
        <input
          placeholder="Email address"
          {...register("email", {
            required: { value: true, message: "Email is required" },
            pattern: {
              value: /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})$/,
              message: "Invalid email",
            },
          })}
        />
        {errors?.email && <p className="error">{errors.email.message}</p>}
        <input
          placeholder="Password"
          type={"password"}
          {...register("password", {
            required: { value: true, message: "Password is required" },
            minLength: {
              value: 5,
              message: "More than 5 character",
            },
          })}
        />
        {errors.password && <p className="error">{errors.password.message}</p>}
        <input
          placeholder="Repeat Password"
          type={"password"}
          {...register("repeatPassword", {
            validate: (value, formValues) =>
              value === formValues.password || "Passwords do not match",
          })}
        />
        {errors.repeatPassword && !errors.password && (
          <p className="error">{errors.repeatPassword.message}</p>
        )}
        <button
          type="submit"
          onClick={() => {
            console.log(errors);
          }}
        >
          Create an account
        </button>
        <p className="text">
          Alread have an account? <Link href="/login">Login</Link>
        </p>
      </StyledForm>
    </FormWrapper>
  );
}

SignUp.getLayout = function (page: ReactElement) {
  return <NestedLayout>{page}</NestedLayout>;
};
