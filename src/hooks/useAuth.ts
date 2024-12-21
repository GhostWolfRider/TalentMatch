import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthError } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';
import { AuthContext } from '../contexts/AuthContext';

export const useAuth = () => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  const signInWithGithub = async (): Promise<{ error: AuthError | null }> => {
    return supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`
      }
    });
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  return {
    user: context.user,
    loading: context.loading,
    signInWithGithub,
    signOut
  };
};