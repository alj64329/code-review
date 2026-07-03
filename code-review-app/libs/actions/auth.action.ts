"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  console.log("data", data);
  console.log("error", error);

  if (error) {
    console.log("Error logging in:", error);
    return error;
  }
  return data;
};

export const signUp = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    throw new Error(`Error signing up: ${error.message}`);
  }
  console.log("returning data", data);

  return data;
};

export const logout = async () => {
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error("Error logging out:", error);
  }
};

export const googleOAuth = async () => {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
  });
  console.log("data", data);

  if (data.url) {
    redirect(data.url);
  }
};
