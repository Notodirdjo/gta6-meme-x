# GTA 6 meme on X — "Still Waiting"

My entry for the make.fun bounty [Post a GTA 6 meme on X](https://make.fun/bounty/gta6-meme-x-01):
one meme about GTA 6, posted on X from [@gta6worldwide](https://x.com/gta6worldwide),
with make.fun's ghost in the picture and the play code in the post's text.

[![make.fun bounty](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Notodirdjo/gta6-meme-x/rank.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Notodirdjo/gta6-meme-x/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

## The meme

A tired gamer slumped on the couch at night, staring at a TV whose GTA 6
download bar is barely moving — thirteen years of waiting, and the wait is
still not over: 212 GB, four hours left. make.fun's ghost sits on the couch
beside him, keeping him company.

Top caption: "WAITED 13 YEARS FOR GTA 6"
Bottom caption: "STILL WAITING. 212 GB. 4 HOURS LEFT."

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
