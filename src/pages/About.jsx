import React from "react";

export default function About() {
  return (
    <div className="about-container container py-5">
      {/* ===== Title ===== */}
      <div className="about-hero py-5 text-center">
      <h2 className="mb-4">A Mi One: A Knitter’s Story</h2>
      <h4 className="text-muted mb-5">
        The Journey of Kaye Powell
      </h4>
        </div>

      {/* ===== Content Wrapper ===== */}
      <div className="about-flex d-flex flex-column flex-md-row align-items-start mb-4">
        {/* Image floated top-right */}
        <img
          src="/assets/kaye/portrait.jpg" // Updated path
          alt="Kaye Powell portrait"
          className="about-photo me-md-4 mb-3 mb-md-0"
        />

        {/* ===== Body Text ===== */}
        <div className="about-text mx-auto" style={{ maxWidth: "750px" }}>
          <p>
            My name is Kaye, and I’m a first-generation Caribbean woman, born in
            London to Jamaican parents. <em>A mi one</em> is Jamaican Patois,
            loosely meaning “by myself” — and it perfectly sums up both my
            independent spirit and my knitting journey.
          </p>

          <h4>Early Days: Falling in Love with Yarn</h4>
          <p>
            I was 12 when my mother first taught me to knit. She had learned
            from a work colleague after arriving in England from Jamaica in the
            late 1950s, and passed the skill down to me — an unexpected thread
            connecting generations.
          </p>
          <p>
            Like many beginners, I was impatient — drawn to intricate lace and
            cable patterns long before I’d mastered the basics. I spent my
            teenage years constantly making things, and recently stumbled across
            old patterns that brought memories of handmade creations flooding
            back.
          </p>
          <p>
            Then life swept me along — college, Saturday jobs, friends,
            boyfriends… and eventually, motherhood. Knitting found its way back
            into my life with the arrival of my first child. I knitted little
            outfits while waiting for my son to be born — including my first
            colourwork project, a festive Christmas romper! His christening
            shawl was an ambitious lace creation in delicate 4-ply yarn. As he
            got older, though, the idea of wearing handmade — especially knitted
            — wasn’t considered cool anymore. Ha!
          </p>

          <h4>Knitting as Meditation</h4>
          <p>
            Knitting was an on-and-off companion through the years, until 2007
            when I truly reconnected with it. After life-changing surgery, I
            picked up my needles again during recovery. That first project — a
            simple garter stitch scarf — still sits in my wardrobe, a symbol of
            healing.
          </p>
          <p>
            Since then, knitting (and crochet) has become my daily ritual. A few
            rows each evening bring quiet focus — a moment to set aside life’s
            demands. With every project, my mind settles; each stitch holds
            space for reflection.
          </p>
          <p>
            Making something for someone else adds another layer of meaning.
            These aren’t just objects — they are gifts of time, intention, and
            love. Whether it’s a newborn’s first hat, a comforting shawl for a
            grieving friend, or mittens sent across the miles — handmade
            creations speak when words fall short.
          </p>

          <h4>Sharing the Craft: Community and Connection</h4>
          <p>
            In 2019, with a little push from one of my sisters and a desire to
            break the cycle of home, work, knit, repeat — I started
            <strong> NW10 Knitters</strong>. I’d noticed most knitting groups
            were based in central or South London, often meeting at inconvenient
            times for those of us still working. So, I created my own space,
            right here in North West London.
          </p>
          <p>
            We meet every other Saturday, welcoming knitters and crocheters of
            all levels. It’s not just about yarn — it’s about community,
            creativity, and connection. You can find us{" "}
            <a
              href="https://instagram.com/NW10Knitters"
              target="_blank"
              rel="noopener noreferrer"
            >
              @NW10Knitters
            </a>
            .
          </p>

          <h4>What’s Next</h4>
          <p>
            2025 marks a new chapter — I plan to expand my online presence to
            showcase the beautiful work from NW10 Knitters, share my personal
            projects, and highlight inspiring creations from other makers.
          </p>
          <p>
            My knitting journey is still unfolding — stitch by stitch, story by
            story.
          </p>
        </div>
      </div>
    </div>
  );
}
