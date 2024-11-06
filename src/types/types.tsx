// src/types/types.ts
export interface PageProps {
  content: JSX.Element;
}

export interface FooterProps {
  currentPage: number;
  onNavigate: (pageIndex: number) => void;
}
