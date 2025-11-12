import React from 'react'
import { motion } from 'framer-motion'
import { BanknotesIcon, ChartBarIcon, GlobeAltIcon, TruckIcon, BoltIcon } from '@heroicons/react/24/outline'

export const Home: React.FC = () => {
    return (
        <main className="relative z-10">
            {/* full-page background behind content (keeps header unchanged).
                Use Tailwind dark: utility so background is transparent in light mode
                and black when `dark` class is present on the root element. */}
            <div className="fixed inset-0 z-0 bg-transparent dark:bg-black pointer-events-none" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <section className="py-12 text-amber-500">
                    <motion.h1 className="mt-20 text-4xl font-extrabold hero-gradient" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        Welcome to Integrated Corp.
                    </motion.h1>
                    <motion.p className="mt-4 " initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                        One stop solution for all your integrated service needs. Explore our diverse range of offerings designed to empower your business.
                    </motion.p>
                </section>

                <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-8">
                    <motion.div className="card card-accent" whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 300 }}>
                        <h2 className="font-semibold text-lg text-blue-600 flex items-center gap-3">
                            <span className="icon-circle blue"><BanknotesIcon className="h-4 w-4" /></span>
                            Banking
                        </h2>
                        <p className="mt-2 text-sm muted">Banking and services.</p>
                    </motion.div>

                    <motion.div className="card card-accent" whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 300 }}>
                        <h2 className="font-semibold text-lg text-red-600 flex items-center gap-3">
                            <span className="icon-circle orange"><ChartBarIcon className="h-4 w-4" /></span>
                            Finance
                        </h2>
                        <p className="mt-2 text-sm muted">Financial products and services.</p>
                    </motion.div>

                    <motion.div className="card card-accent" whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 300 }}>
                        <h2 className="font-semibold text-lg text-green-600 flex items-center gap-3">
                            <span className="icon-circle green"><GlobeAltIcon className="h-4 w-4" /></span>
                            Sustainable Products
                        </h2>
                        <p className="mt-2 text-sm muted">Eco-friendly product portfolio.</p>
                    </motion.div>

                    <motion.div className="card card-accent" whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 300 }}>
                        <h2 className="font-semibold text-lg text-orange-500 flex items-center gap-3">
                            <span className="icon-circle yellow"><TruckIcon className="h-4 w-4" /></span>
                            Logistics & Supply Chain
                        </h2>
                        <p className="mt-2 text-sm muted">End-to-end logistics solutions.</p>
                    </motion.div>

                    <motion.div className="card card-accent" whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 300 }}>
                        <h2 className="font-semibold text-lg text-yellow-500 flex items-center gap-3">
                            <span className="icon-circle purple"><BoltIcon className="h-4 w-4" /></span>
                            Energy Solutions
                        </h2>
                        <p className="mt-2 text-sm muted">Renewable energy products.</p>
                    </motion.div>
                </section>
            </div>
        </main>
    )
}

export default Home
