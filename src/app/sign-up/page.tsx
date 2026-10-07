"use client";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import { useState } from "react";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import { signIn, signUp } from "@/lib/auth-client";
interface IUserFrom {
    name: string,
    email: string,
    password: string
}

export default function SignUpPage() {
  const [isVisible, setIsVisible] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data =  Object.fromEntries(formData.entries()) as unknown as IUserFrom
    const {data: resData , error} = await signUp.email({
        name: data.name,
        email: data.email,
        password: data.password
    })
    console.log(resData,error);
    

  };
const handleGoogleSignIn = async () => {
await signIn.social({
    provider: 'google',
  })
}
const handleGithubSignIn = async () => {
await signIn.social({
    provider: 'github'
  })
}
  return (
    <div className="flex justify-center flex-col gap-3 items-center h-[70vh]">
    <Form className="w-full max-w-96" onSubmit={onSubmit}>
      <Fieldset>
        <Fieldset.Legend className="font-bold text-2xl py-4">Bd News24 এ রেজিস্ট্রেশান করুন</Fieldset.Legend>
        <FieldGroup>
          <TextField
            isRequired
            name="name"
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }

              return null;
            }}
          >
            <Label>আপনার নাম</Label>
            <Input placeholder="John Doe" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }

              return null;
            }}
          >
            <Label>আপনার ইমেইল</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>
          {/* <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }
          return null;
        }}
      >
        <Label>Password</Label>
        <Input placeholder="Enter your password" />
        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
        <FieldError />
      </TextField> */}
          <TextField
            className="w-full"
            name="password"
            isRequired
            minLength={8}
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label>আপনার Password</Label>
            <InputGroup>
              <InputGroup.Input
                className="w-full"
                type={isVisible ? "text" : "password"}
              />
              <InputGroup.Suffix className="pe-0">
                <Button
                  isIconOnly
                  aria-label={isVisible ? "Hide password" : "Show password"}
                  size="sm"
                  variant="ghost"
                  onPress={() => setIsVisible(!isVisible)}
                >
                  {isVisible ? (
                    <Eye className="size-4" />
                  ) : (
                    <EyeSlash className="size-4" />
                  )}
                </Button>
              </InputGroup.Suffix>
            </InputGroup>
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>
        </FieldGroup>
        <Fieldset.Actions>
          <Button type="submit">
            সাইন আপ
          </Button>
          <Button type="reset" variant="secondary">
            রিসেট
          </Button>
        </Fieldset.Actions>
      </Fieldset>
    </Form>
        <div className="w-full max-w-96 space-y-5">
      <Button className='w-full' onClick={handleGoogleSignIn}>সাইন আপ উইথ গুগল</Button>
      <Button className='w-full' onClick={handleGithubSignIn}>সাইন আপ উইথ গিটহাব</Button>
    </div>
    </div>
  );
}
