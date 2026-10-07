"use client";

import { updateUser, useSession } from "@/lib/auth-client";
import {
  Button,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { useState } from "react";
interface IUserFrom {
  name: string;
}
export default function ProfilePage() {
  const [showOrHide, setShowOrHide] = useState<boolean>(false);

  const { data: session } = useSession();
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as unknown as IUserFrom;
    await updateUser({
      name: data.name,
    });
  };
  const handleShoworHid = () => {
    setShowOrHide(!showOrHide);
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-center container mx-auto py-9 bg-base-100  shadow-sm my-9 rounded-2xl">
        <h2>User Name : {session?.user.name}</h2>
        <h2>User Email : {session?.user.email}</h2>
        <div className="flex flex-col items-center pt-7">
          <h4 onClick={handleShoworHid} className="btn">Update Your Profile</h4>
          {
            showOrHide &&
          <Form className="w-full max-w-96" onSubmit={onSubmit}>
            <Fieldset>
              <Fieldset.Legend className="font-bold text-2xl py-4">
                {" "}
                আপনার প্রোফাইল আপডেট করুন
              </Fieldset.Legend>
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
              </FieldGroup>
              <Fieldset.Actions>
                <Button type="submit">সাবমিট</Button>
                <Button type="reset" variant="secondary">
                  রিসেট
                </Button>
              </Fieldset.Actions>
            </Fieldset>
          </Form>
      }
        </div>
      </div>
    </div>
  );
}
