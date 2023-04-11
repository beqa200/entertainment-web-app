import NestedLayout from "@/layouts/NestedLayout";
import { FormWrapper, StyledForm } from "@/styled-components";
import Link from "next/link";
import { ReactElement } from "react";
import { useForm } from "react-hook-form";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = () => {
    console.log("correct");
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
            style={errors?.email ? {borderBottom: "1px solid #FC4747"}: {}}
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
            style={errors?.password ? {borderBottom: "1px solid #FC4747"}: {}}
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
            style={errors?.repeatPassword ? {borderBottom: "1px solid #FC4747"}: {}}
          />
          {errors.repeatPassword && !errors.password && (
            <p className="error">{errors.repeatPassword.message}</p>
          )}
        </div>

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
