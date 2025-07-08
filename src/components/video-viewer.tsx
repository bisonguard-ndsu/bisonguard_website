type Props = {
  videoUrl: string;
  title: string;
  description: string;
  highlightedWords: string[];
  badgeText?: string;
  posterUrl: string;
  subtitles: string;
};
export default function VideioViewer({
  videoUrl,
  title,
  description,
  highlightedWords,
  badgeText,
  posterUrl,
  subtitles,
}: Props) {
  return (
    <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto container">
        {/* Text Content */}
        <div className="text-center mx-auto container mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-12 h-0.5 bg-neon mr-4" />
            <span className="text-neon text-sm font-medium uppercase tracking-wider">
              {badgeText ?? "Featured Demo"}
            </span>
            <div className="w-12 h-0.5 bg-neon ml-4" />
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-8">
            {title.split(" ").map((word, index) => {
              const isHighlighted = highlightedWords.some((hw) =>
                word.toLowerCase().includes(hw.toLowerCase())
              );
              return (
                <span
                  key={index}
                  className={
                    isHighlighted ? "text-neon" : "text-text-foreground"
                  }
                >
                  {word}{" "}
                </span>
              );
            })}
          </h2>
          <p className="text-gray-600 text-md lg:text-lg  max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>
        {/* Video Box */}
        <div className="mx-auto max-w-3xl">
          <div className="relative overflow-hidden rounded-xl border bg-card shadow-lg">
            <video
              className="w-full aspect-video object-cover"
              controls
              preload="metadata"
              poster={posterUrl}
            >
              <source src={videoUrl} type="video/mp4" />
              {subtitles && (
                <track
                  src={subtitles}
                  kind="subtitles"
                  srcLang="en"
                  label="English"
                />
              )}
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
