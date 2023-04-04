import { FormWrapper, StyledForm } from "@/styled-components";
import Link from "next/link";
import { useForm, Resolver } from "react-hook-form";

export default function Login() {
  return (
    <FormWrapper>
      <StyledForm>
        <h1>Login</h1>
        <input placeholder="Email address" />

        <input placeholder="Password" />
        <button type="submit">Login to your account</button>
        <p className="text">
          Don’t have an account? <Link href="/sign-up">Sign Up</Link>
        </p>
      </StyledForm>
    </FormWrapper>
  );
}
