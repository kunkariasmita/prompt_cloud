import { dummyPrompts } from '../../data/dummyPrompts';

export default function PromptsTable({ prompts = dummyPrompts }) {
  if (!prompts || prompts.length === 0) {
    return (
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-2">
              Available Prompts
            </h2>
            <p className="text-gray-400">
              Browse our collection of ready-to-use prompts
            </p>
          </div>
          <div className="border border-slate-800 rounded-lg p-12 text-center">
            <p className="text-gray-400 text-lg">No prompts available</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-2">
            Available Prompts
          </h2>
          <p className="text-gray-400">
            Browse our collection of ready-to-use prompts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {prompts.map((prompt) => (
            <div
              key={prompt.id}
              className="group bg-slate-900/50 border border-slate-800 rounded-lg p-6 hover:border-blue-500/50 hover:bg-slate-900/70 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {prompt.title}
                </h3>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/30 whitespace-nowrap ml-2">
                  {prompt.category}
                </span>
              </div>
              
              <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                {prompt.description}
              </p>
              
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{prompt.createdAt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
