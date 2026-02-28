"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { AuthUser, AuthSession, LoginCredentials, RegisterData } from "@/types";
import { mockAuthUser, mockAuthSession } from "./mockData";

interface AuthContextType {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (credentials: LoginCredentials) => Promise<boolean>;
  register: (data: RegisterData) => Promise<boolean>;
  logout: () => void;
  updateUser: (updates: Partial<AuthUser>) => void;
  hasPermission: (permission: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AUTH_STORAGE_KEY = "agentswallet_auth";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // 初始化时检查本地存储
  useEffect(() => {
    const stored = localStorage.getItem(AUTH_STORAGE_KEY);
    if (stored) {
      try {
        const session: AuthSession = JSON.parse(stored);
        // 检查token是否过期
        if (new Date(session.expiresAt) > new Date()) {
          setUser(session.user);
        } else {
          localStorage.removeItem(AUTH_STORAGE_KEY);
        }
      } catch {
        localStorage.removeItem(AUTH_STORAGE_KEY);
      }
    }
    setIsLoading(false);
  }, []);

  const login = useCallback(async (credentials: LoginCredentials): Promise<boolean> => {
    setIsLoading(true);
    
    // 模拟API调用延迟
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // 模拟验证（实际项目中应该调用后端API）
    if (credentials.email === "admin@nexclaw.com" && credentials.password === "admin123") {
      const session: AuthSession = {
        ...mockAuthSession,
        user: {
          ...mockAuthUser,
          lastLoginAt: new Date().toISOString(),
        },
      };
      
      if (credentials.rememberMe) {
        localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(session));
      } else {
        // 不记住则使用sessionStorage
        sessionStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(session));
      }
      
      setUser(session.user);
      setIsLoading(false);
      return true;
    }
    
    setIsLoading(false);
    return false;
  }, []);

  const register = useCallback(async (data: RegisterData): Promise<boolean> => {
    setIsLoading(true);
    
    // 模拟API调用延迟
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // 模拟注册成功
    const newUser: AuthUser = {
      id: `user_${Date.now()}`,
      email: data.email,
      name: data.name,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${data.email}`,
      role: "user",
      permissions: ["read", "write"],
      lastLoginAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      twoFactorEnabled: false,
    };
    
    const session: AuthSession = {
      user: newUser,
      token: `mock_token_${Date.now()}`,
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
    };
    
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(session));
    setUser(newUser);
    setIsLoading(false);
    return true;
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    sessionStorage.removeItem(AUTH_STORAGE_KEY);
    setUser(null);
  }, []);

  const updateUser = useCallback((updates: Partial<AuthUser>) => {
    setUser(prev => {
      if (!prev) return null;
      const updated = { ...prev, ...updates };
      // 同时更新存储
      const stored = localStorage.getItem(AUTH_STORAGE_KEY) || sessionStorage.getItem(AUTH_STORAGE_KEY);
      if (stored) {
        const session: AuthSession = JSON.parse(stored);
        session.user = updated;
        if (localStorage.getItem(AUTH_STORAGE_KEY)) {
          localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(session));
        } else {
          sessionStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(session));
        }
      }
      return updated;
    });
  }, []);

  const hasPermission = useCallback((permission: string): boolean => {
    if (!user) return false;
    if (user.role === "admin" || user.permissions.includes("all")) return true;
    return user.permissions.includes(permission);
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
        logout,
        updateUser,
        hasPermission,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
