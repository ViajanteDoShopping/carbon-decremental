export function Footer() {
    const thisYear = new Date().getFullYear();

    return(
        <footer className="w-full bg-gray-900 py-1 px-4 border-t border-gray-600">

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left"> 

                <p className="text-gray-400">
                    Carbon Decremental
                </p>

                <a className="text-gray-400 hover:text-indigo-600 transition-colors"
                href="#">
                    © {thisYear} Todos os direitos reservados.
                </a>

                <a className="text-gray-400 hover:text-indigo-600 transition-colors"
                href="#">
                    GitHub 
                </a>

            </div>

        </footer>
    )
}