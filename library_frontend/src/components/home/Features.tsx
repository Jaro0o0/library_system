const features = [
    {
        title: 'Śledź postęp',
        description:
            'Zapisuj przeczytane strony, oznaczaj ukończone tytuły i sprawdzaj, jak daleko jesteś w każdej książce.',
        icon: '📖',
    },
    {
        title: 'Buduj bibliotekę',
        description:
            'Dodawaj książki, które czytasz, planujesz lub już skończyłeś — wszystko w jednym katalogu.',
        icon: '📚',
    },
    {
        title: 'Ustalaj cele',
        description:
            'Wyznaczaj cele miesięczne lub roczne i utrzymuj motywację dzięki czytelnym statystykom.',
        icon: '🎯',
    },
    {
        title: 'Oceniaj i notuj',
        description:
            'Zapisuj oceny i krótkie notatki, żeby pamiętać, co warto polecić — a czego unikać.',
        icon: '⭐',
    },
]

function Features() {
    return (
        <section id="features" className="w-full px-4 py-20 bg-slate-50">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-14">
                    <span className="text-sm font-semibold uppercase tracking-wider text-green-600">
                        Dlaczego Book Tracker
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                        Wszystko, czego potrzebujesz do czytania z planem
                    </h2>
                    <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">
                        Prosta aplikacja dla czytelników, którzy chcą uporządkować
                        bibliotekę, śledzić postępy i budować trwałe nawyki.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature) => (
                        <article
                            key={feature.title}
                            className="group bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:border-green-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
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
            </div>
        </section>
    )
}

export default Features
