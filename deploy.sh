SERVER=helpify
STAGE=stage

pnpm lint && pnpm typecheck || exit -1
pnpm build || exit -1
rsync -v -e ssh --checksum --info=progress2 --recursive --delete --links .next/standalone/ $SERVER:/root/$STAGE/standalone
rsync -v -e ssh --checksum --info=progress2 --recursive --delete public/ $SERVER:/root/$STAGE/standalone/public
rsync -v -e ssh --checksum --info=progress2 --recursive --delete .next/static/ $SERVER:/root/$STAGE/standalone/.next/static
rsync -v -e ssh --checksum --info=progress2 --recursive --delete prisma $SERVER:/root/$STAGE/standalone/
ssh $SERVER "cd /root/$STAGE && docker compose exec runner prisma migrate deploy && docker compose restart runner --no-deps && docker compose logs --since 10m runner"