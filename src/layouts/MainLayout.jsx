export default function MainLayout({ children }) {
    return (
        <main className="bg-black text-white overflow-x-hidden">
            {children}
        </main>
    );
}