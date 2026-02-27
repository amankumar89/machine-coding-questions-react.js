type LayoutProps = {
    title: string;
    children: React.ReactNode;
}
const Layout = ({ title, children }: LayoutProps) => {
    return (
        <div className="min-h-screen bg-gray-100 p-10">
            <h1 className="text-3xl font-bold text-center mb-10">
                {title ?? 'Machine Coding Question'}
            </h1>
            {children}
        </div>
    );
}

export default Layout