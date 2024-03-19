import HeaderSearch from "@/components/HeaderSearch";

export const metadata = {
  title: "Google",
  description: "Google clone created by Ahmed Monem",
};

export default function SearchLayout({ children }) {
  return (
    <div>
      <HeaderSearch />
      {children}
    </div>
  );
}
