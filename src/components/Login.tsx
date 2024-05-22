"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@/shared";
import { PasswordInput } from "./PasswordInput";
import userService from "@/services/userService";

const loginSchema = z.object({
  username: z.string().min(5, {
    message: "Username must be at least 5 characters.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

const Login: React.FC = () => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onHandleSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your username"
                  {...field}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  type="username"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput {...field} placeholder="Enter your password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-primary-foreground hover:bg-gray-200/90 h-10 px-4 py-2"
          type="submit"
        >
          Login
        </Button>
      </form>
    </Form>
  );
};

function onHandleSubmit(values: z.infer<typeof loginSchema>) {
  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const response = await userService.createUser({
  //         login: values.username,
  //         password: values.password,
  //       });
  //     } catch (err) {
  //       console.log("Failed to fetch user", err);
  //     }
  //   };

  //   fetchUser();
  // }, []);
  return await userService.createUser({
    login: values.username,
    password: values.password,
  });
}

export default Login;
