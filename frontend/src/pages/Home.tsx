import React from 'react'
import { motion } from 'framer-motion'
import { BanknotesIcon, ChartBarIcon, GlobeAltIcon, TruckIcon, BoltIcon } from '@heroicons/react/24/outline'

export const Home: React.FC = () => {
    return (
        <main className="relative z-10">
            {/* full-page background behind content (keeps header unchanged).
                Use Tailwind dark: utility so background is transparent in light mode
                and black when `dark` class is present on the root element. */}
            <div className="fixed inset-0 z-0 bg-transparent dark:bg-black pointer-events" >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <section className="py-12 text-amber-500">
                        <motion.h1 className="mt-20 text-4xl font-extrabold text-current" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                            Welcome to Integrated Corp.
                        </motion.h1>
                        <motion.p className="mt-4 " initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                            One stop solution for all your integrated service needs. Explore our diverse range of offerings designed to empower your business.
                        </motion.p>
                    </section>

                    <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-8">
                        <motion.div className="card" whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 300 }}>
                            <h2 className="font-semibold text-lg text-blue-600">
                                <span className="inline-flex items-center">
                                    <BanknotesIcon className="h-5 w-5 mr-2 text-current" />
                                    Banking
                                </span>
                            </h2>
                            <p className="mt-2 text-sm text-gray-600">Banking and services.</p>
                        </motion.div>

                        <motion.div className="card" whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 300 }}>
                            <h2 className="font-semibold text-lg text-red-600">
                                <span className="inline-flex items-center">
                                    <ChartBarIcon className="h-5 w-5 mr-2 text-current" />
                                    Finance
                                </span>
                            </h2>
                            <p className="mt-2 text-sm text-gray-600">Financial products and services.</p>
                        </motion.div>

                        <motion.div className="card" whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 300 }}>
                            <h2 className="font-semibold text-lg text-green-600">
                                <span className="inline-flex items-center">
                                    <GlobeAltIcon className="h-5 w-5 mr-2 text-current shrink-0" />
                                    Sustainable Products
                                </span>
                            </h2>
                            <p className="mt-2 text-sm text-gray-600">Eco-friendly product portfolio.</p>
                        </motion.div>

                        <motion.div className="card" whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 300 }}>
                            <h2 className="font-semibold text-lg text-orange-500">
                                <span className="inline-flex items-center">
                                    <TruckIcon className="h-5 w-5 mr-2 text-current shrink-0" />
                                    Logistics & Supply Chain
                                </span>
                            </h2>
                            <p className="mt-2 text-sm text-gray-600">End-to-end logistics solutions.</p>
                        </motion.div>

                        <motion.div className="card" whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 300 }}>
                            <h2 className="font-semibold text-lg text-yellow-500">
                                <span className="inline-flex items-center">
                                    <BoltIcon className="h-5 w-5 mr-2 text-current shrink-0" />
                                    Energy Solutions
                                </span>
                            </h2>
                            <p className="mt-2 text-sm text-gray-600">Renewable energy products.</p>
                        </motion.div>
                    </section>
                </div>
            </div>
        </main>
    )
}

export default Home
