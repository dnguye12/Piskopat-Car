const Footer = () => {
    return (
        <footer className="bg-sidebar px-6 py-9 border border-t">
            <div className="container mx-auto ">
                <div className="flex justify-between items-start">
                    <div className="">
                        <div className="inline-flex items-center gap-x-2">
                            <img src="/logo-black.svg" alt="" className="block dark:hidden h-14 w-auto fill-black" />
                            <img src="/logo-dark-no-text.svg" alt="" className="hidden dark:block h-14 w-auto" />
                            <span className="text-xl font-semibold dark:text-main">Renault</span>
                        </div>
                        <p className="text-muted-foreground">@ Renault 2025. Alle Rechte vorbehalten.</p>
                    </div>
                    <div className="flex flex-col items-start gap-x-20 gap-y-14 xl:flex-row">
                        <div className="inline-grid w-fit grid-cols-1 gap-x-20 gap-y-14 sm:grid-cols-2">
                            <div className="h-fit w-min">
                                <h4 className="mb-6 whitespace-nowrap text-base font-semibold">Company</h4>
                                <ul className="text-muted-foreground space-y-3 text-base font-medium">
                                    <li><a href="#" className="hover:text-accent-foreground whitespace-nowrap text-base">About Us</a></li>
                                    <li><a href="#" className="hover:text-accent-foreground whitespace-nowrap text-base">Careers</a></li>
                                    <li><a href="#" className="hover:text-accent-foreground whitespace-nowrap text-base">Contact</a></li>
                                    <li><a href="#" className="hover:text-accent-foreground whitespace-nowrap text-base">Press</a></li>
                                </ul>
                            </div>
                            <div className="h-fit w-min">
                                <h4 className="mb-6 whitespace-nowrap text-base font-semibold">Support</h4>
                                <ul className="text-muted-foreground space-y-3 text-base font-medium">
                                    <li><a href="#" className="hover:text-accent-foreground whitespace-nowrap text-base">Help Center</a></li>
                                    <li><a href="#" className="hover:text-accent-foreground whitespace-nowrap text-base">Community</a></li>
                                    <li><a href="#" className="hover:text-accent-foreground whitespace-nowrap text-base">Status</a></li>
                                    <li><a href="#" className="hover:text-accent-foreground whitespace-nowrap text-base">API Docs</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;