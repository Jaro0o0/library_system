import { Container } from "@mui/material"
import CommonHeading from "../common/CommonHeading"
import { fadeInUp, viewportConfig } from '../../animations/commonAnimations';
import { motion } from "framer-motion";

const features = [
    {
        title: 'Your reading history, all in one place',
        description:
            'Keep a clear record of the books you’ve borrowed and returned, so you always know what you’ve read and can easily revisit your reading history.',
        icon: '📖',
    },
    {
        title: 'Recommendations made for you',
        description:
            'Get book recommendations based on your reading history, favorite authors, and the books you enjoy most.',
        icon: '🔍',
    },
    {
        title: 'Discover your next favorite author',
        description:
            'Find new authors and titles that match your reading preferences, without spending hours searching for what to read next.',
        icon: '🎯',
    },
    {
        title: 'One place for your entire reading journey',
        description:
            'From books you’ve borrowed to the ones waiting on your reading list, keep everything organized and easy to find.',
        icon: '📚',
    },
]

function Features() {
    return (
        <section id="features" className="w-full px-4 py-20 bg-slate-50">
            <Container>
                <motion.div className="text-center mb-14"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                  >
                   <CommonHeading>
                        Why Book Tracker
                   </CommonHeading>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                        A smarter way to manage your reading
                    </h2>
                    <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">
                        Keep track of the books you borrow, discover recommendations based on your reading history, and find more authors you’ll love — all in one place.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature) => (
                        <article
                            key={feature.title}
                            className="group bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:border-green-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 "
                        >
                            <span
                                className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-green-50 text-2xl group-hover:bg-green-100 transition-colors"
                                role="img"
                                aria-hidden="true"
                            >
                                {feature.icon}
                            </span>
                            <h3 className="text-xl font-bold text-slate-900 mt-4">
                                {feature.title}
                            </h3>
                            <p className="text-slate-600 mt-2 leading-relaxed">
                                {feature.description}
                            </p>
                        </article>
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default Features
