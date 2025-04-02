
import { supabase } from "@/integrations/supabase/client";

export const isAuthenticated = (): boolean => {
  // First check Supabase session
  if (supabase.auth.getSession() !== null) {
    return true;
  }
  // Fallback to localStorage for backward compatibility
  return localStorage.getItem("medaiUser") !== null;
};

export const getUser = async () => {
  const { data } = await supabase.auth.getSession();
  if (data.session?.user) {
    return {
      id: data.session.user.id,
      email: data.session.user.email,
      name: data.session.user.user_metadata.full_name || 
            data.session.user.user_metadata.name ||
            data.session.user.email?.split("@")[0]
    };
  }
  
  // Fallback to localStorage for backward compatibility
  const user = localStorage.getItem("medaiUser");
  return user ? JSON.parse(user) : null;
};

export const logout = async () => {
  await supabase.auth.signOut();
  localStorage.removeItem("medaiUser");
};
