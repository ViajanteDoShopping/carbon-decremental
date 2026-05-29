export function Header() {
    return(
        <header className="w-full bg-gray-900 py-6 px-4 border-b border-gray-600">

            <h1 className="text-3xl text-center text-gray-400">
                Carbon Decremental v{process.env.APP_VERSION}
            </h1>
            
        </header>
    )
}