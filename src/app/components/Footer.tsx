export default function Footer() {
  return (
    <footer className="w-full bg-base-100 border-t border-base-content mt-16 py-6 text-center text-base-content text-sm">
      <div className="mb-2">
        <strong>ASTONCES</strong> | Website built and managed by Laith Masri, President & Webmaster.
      </div>
      <div className="mt-2">
        &copy; {new Date().getFullYear()} Aston Computing and Electronics Society. All rights reserved.
      </div>
    </footer>
  );
}

