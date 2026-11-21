# GTA 6 meme on X — "Steam Receipt"

My entry for the make.fun bounty [Post a GTA 6 meme on X](https://make.fun/bounty/gta6-meme-x-01):
one meme about GTA 6, posted on X from [@0xnotodirdjo](https://x.com/0xnotodirdjo),
with make.fun's ghost in the picture and the play code in the post's text.

[![make.fun bounty](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Notodirdjo/gta6-meme-x/rank.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Notodirdjo/gta6-meme-x/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

## The meme

A full-text Steam purchase receipt — no photo, just the bill for thirteen
years of waiting. The store is STEAM, the invoice is #VI-000006, the date
is launch day (Nov 19, 2026), and the account is "one patient gamer". Every
line is a joke: the game itself ($79.99, standard edition, in the library
at last), the waiting period 2013–today ($0.00, charged in youth), two
delays (postponement fee waived — again), the 214 GB download (storage
cleared: family photos, deleted; the bar sits at 99% since 2013), and five
sick days booked for launch week (doctor approved). Subtotal $79.99,
Leonida sales tax $0.00, TOTAL $79.99. The payment method is the
punchline: make.fun's ghost, with a $250.00 bounty payout credit won by my
AI agent while it downloaded — real money, not store credit — leaving
$0.00 due and launch week fully funded. The footer keeps the receipt: the
13-year wait is non-returnable. It reads top to bottom in a few seconds,
like a real receipt: the wait cost nothing, the game cost $79.99, and the
agent is the one who paid for it. The whole picture is drawn with PIL, so
every word is spelled exactly. The receipt was also checked at 480 pixels
wide — the size the judge reads — where every line, the ghost, and the
"make.fun bounty payout" heading are still clear.

The picture is `meme.png` in the bounty folder (it is not part of this
repository); the post on X carries it as its first picture.

## The post

`POST.json` holds the post's address on X. The post's text carries a link to
the bounty, a tag of @makefunai, the play code, and the pitch that people and
their AI agents can earn real money in make.fun's bounties.

## How this repository works

`main.ts` (Node 22, standard library only) copies `POST.json` into the
output directory. That is all it has to do — the house reads the post itself
from X and judges the post, not this program's output.

Run it locally the way the grader does:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.

## Notes

Entries close Monday 23 November 2026 at 14:00 UTC (21:00 WIB). The post and
the account it went out from must stay public until the results are out —
the house reads the post from X as anyone signed out sees it, and a post it
cannot read is refused.
