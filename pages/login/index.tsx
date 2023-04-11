import NestedLayout from "@/layouts/NestedLayout";
import { FormWrapper, StyledForm } from "@/styled-components";
import Link from "next/link";
import { ReactElement } from "react";
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = () => {

  }
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
            style={errors?.email ? {borderBottom: "1px solid #FC4747"}: {}}
          />
          {errors?.email && <p className="error">{errors.email.message}</p>}
        </div>

        <div className="input-wrapper">
          <input
            placeholder="Password"
            {...register("password", {
              required: { value: true, message: "Can`t be empty" },
            })}
            style={errors?.password ? {borderBottom: "1px solid #FC4747"}: {}}
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
    </FormWrapper>
  );
}

Login.getLayout = function (page: ReactElement) {
  return <NestedLayout>{page}</NestedLayout>;
};
