export function Footer() {
  return (
    <footer className="border-t border-dashed border-blue-900/15 px-4 py-8 text-center sm:px-6">
      <p className="text-xs text-blue-900/60 sm:text-sm">
        &copy; {new Date().getFullYear()} MJP.Tex &nbsp;|&nbsp; GSTIN: 33BOZPP8039Q1ZO &nbsp;|&nbsp;
        Tiruppur, Tamil Nadu
      </p>
      <p className="mt-1 text-xs text-blue-900/60 sm:text-sm">+91 98432 47315</p>
      <p className="mt-3 text-[11px] text-blue-900/40 sm:text-xs">
        All marketplace logos are respective trademarks.
      </p>
    </footer>
  );
}
