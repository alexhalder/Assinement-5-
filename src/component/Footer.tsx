import FooterLogo from "../assets/logo-text.png";

const Footer = () => {
    return (
        <footer className="bg-white border-t border-slate-200 pt-8 mt-8">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">


                    <div>
                        <div className="flex items-center gap-2">
                            <img src={FooterLogo} alt="Footer Logo" className="h-8 w-auto" />
                        </div>

                        <p className="mt-4 max-w-sm text-sm leading-5 text-slate-500">
                            Curated tools, technologies, and resources for developers
                            building modern software.
                        </p>

                        <div className="mt-6 flex gap-5 text-md font-medium text-slate-700">
                            <a href="#" className=" hover:text-pink-500">GitHub</a>
                            <a href="#" className=" hover:text-pink-500">Twitter</a>
                            <a href="#" className=" hover:text-pink-500">LinkedIn</a>
                        </div>
                    </div>


                    {/* ========================================================== */}

                    <div>
                        <h3 className="text-sm font-semibold tracking-wide text-slate-900">PRODUCT</h3>

                        <ul className="mt-5 space-y-3 text-sm text-slate-500">
                            <li><a href="#" className="hover:text-slate-900">Home</a></li>
                            <li><a href="#" className="hover:text-slate-900">Technologies</a></li>
                            <li><a href="#" className="hover:text-slate-900">Projects</a></li>
                        </ul>
                    </div>



                    <div>
                        <h3 className="text-sm font-semibold tracking-wide text-slate-900">COMPANY</h3>

                        <ul className="mt-5 space-y-3 text-sm text-slate-500">
                            <li><a href="#" className="hover:text-slate-900">About</a></li>
                            <li><a href="#" className="hover:text-slate-900">Contact</a></li>
                            <li><a href="#" className="hover:text-slate-900">Careers</a></li>
                        </ul>
                    </div>



                    <div>
                        <h3 className="text-sm font-semibold tracking-wide text-slate-900">LEGAL</h3>
                        <ul className="mt-5 space-y-3 text-sm text-slate-500">
                            <li><a href="#" className="hover:text-slate-900">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-slate-900">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                {/* ================================================================= */}


                <div className="mt-12 flex flex-col gap-4 border-t border-slate-100 pt-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
                    <p>© 2026 Dev Stack. All rights reserved.</p>

                    <div className="flex gap-6">
                        <a href="#" className="hover:text-slate-700"> Privacy </a>
                        <a href="#" className="hover:text-slate-700"> Terms </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;