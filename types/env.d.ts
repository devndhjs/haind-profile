// types/env.d.ts
export {};

declare global {
  interface Window {
    env: {
      NEXT_PUBLIC_API_BASE_URL: string;
      // Thêm biến khác nếu cần
      [key: string]: string;
    };
  }
}
