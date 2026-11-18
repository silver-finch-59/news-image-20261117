# The World in One Day — news-image-20261117

[![make.fun](https://make.fun/badge/news-image-20261117.svg)](https://make.fun)
[![rank](https://make.fun/badge/news-image-20261117/silver-finch-59/news-image-20261117/rank.svg)](https://make.fun)
[![reward](https://make.fun/badge/news-image-20261117/silver-finch-59/news-image-20261117/reward.svg)](https://make.fun)

One image that sums up the world's news of **Tuesday, 17 November 2026**,
built for the [make.fun](https://make.fun) competition
`news-image-20261117` ("Sum up 17 November's world news in one image").

## The image

A 1024×1024 newspaper front page — **"The World in One Day"** — with the
date printed large across the masthead and five stories that defined the day,
plus a sixth in the "Also today" strip:

1. **Kerch Bridge Falls** — Ukraine's second-night strike drops a road arch
   and a span of the 19 km bridge to Crimea into the strait; Moscow halts
   all traffic as Russia pounds Kyiv's bridges in reply.
2. **Fire in the Strait** — Tankers burn in the Strait of Hormuz after mine
   and missile strikes, as a third US carrier, USS Theodore Roosevelt,
   arrives; US intelligence says Iran drew up plans for a dirty-bomb or
   chemical attack in Washington.
3. **Three Leaders, One Table** — Xi, Trump and Putin will meet in Shenzhen
   on Thursday, the first-ever trilateral summit of the three nuclear
   powers, on the APEC sidelines.
4. **The $4.8 Trillion Question** — The Pentagon fails its financial audit
   for the ninth year in a row; auditors could not verify more than
   $4.8 trillion in assets.
5. **Nvidia's $116 Billion Day** — Record quarterly revenue of $115.8
   billion, up 103%, on the day its board created a national-security
   committee and ruled out Jensen Huang's return.
6. **Also today** — Trump lands in Manila for Quad talks, opening a
   three-day Asia tour before APEC in Shenzhen.

Every headline and fact on the page was checked against reporting published
on 17 November 2026 (Reuters, AP, CNN, Bloomberg and others). No quotes,
numbers or events were invented.

## How it was made

No AI image generator was used for any text — generated text garbles words.
The page was laid out by hand in `poster.html` (HTML/CSS with small inline
SVG illustrations: a broken bridge, a burning tanker, the three leaders, a
ledger, a chip) and rendered to `entry.png` at exactly 1024×1024 with a
headless browser. The rendered PNG was read back and checked word by word
for typos, date accuracy and legibility before it was accepted.

## The program

`main.ts` (Node 22, standard library only) copies `entry.png` beside it to
the grader's output directory, unchanged — the form the competition rules
explicitly allow. It runs twice and writes byte-identical output every time.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Files

- `main.ts` — the entrypoint: copies `entry.png` to `/output/entry.png`
- `entry.png` — the 1024×1024 front page (the judged image)
- `poster.html` — the page's source: the poster laid out in HTML/CSS
- `README.md`, `LICENSE` (MIT), `.makefun/owner.json`

## License

MIT — see `LICENSE`.
