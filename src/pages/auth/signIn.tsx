import Language from "@/components/Layouts/Header/Language";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/shadcn";
import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import useAuthStore from "@/store/auth";

const formSchema = z.object({
  email: z.string().min(2).max(50),
  password: z.string().min(8).max(100),
});

const SignIn = () => {
  const { t } = useTranslation();

  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const { setAuth } = useAuthStore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true);

      await new Promise((resolve) => setTimeout(resolve, 2000));
      setAuth();
      console.log(values);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div
      dir={t("common.dir") === "rtl" ? "rtl" : "ltr"}
      className="flex bg-gray-50 p-4 sm:p-0 justify-center items-center h-screen"
    >
      <div
        className={cn("grid gap-6 shadow-md rounded-lg w-96 sm:p-0 bg-white")}
      >
        <Form {...form}>
          <form className="p-4" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid gap-2 ">
              <Language />
              <h1 className="text-xl text-center font-bold ">
                {t("auth.signIn.signIn")}
              </h1>
              <p className="text-gray-400 text-center">
                {t("auth.signIn.title")}
              </p>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only">Email</FormLabel>
                    <FormControl>
                      <Input
                        id="email"
                        placeholder="name@example.com"
                        type="email"
                        autoCapitalize="none"
                        autoComplete="email"
                        autoCorrect="off"
                        disabled={isLoading}
                        {...field}
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
                    <FormLabel className="sr-only">Email</FormLabel>
                    <FormControl>
                      <Input
                        id="password"
                        placeholder="********"
                        type="password"
                        autoComplete="current-password"
                        autoCapitalize="none"
                        autoCorrect="off"
                        disabled={isLoading}
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                className={cn(
                  "w-fit",
                  t("common.dir") === "rtl" ? "justify-end" : "justify-start"
                )}
                size={"sm"}
                variant={"link"}
                asChild
              >
                <Link to="/auth/forgot-password">
                  {t("auth.signIn.forgotPassword")}
                </Link>
              </Button>
              <Button type="submit" isLoading={isLoading}>
                {t("auth.signIn.signIn")}
              </Button>
              <Button
                className={cn("w-fit m-auto")}
                size={"sm"}
                variant={"link"}
                asChild
              >
                <Link to="/auth/signUp">
                  {t("auth.signIn.dontHaveAccount")}
                </Link>
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SignIn;
