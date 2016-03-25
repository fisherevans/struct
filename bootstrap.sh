#~/bin/bash
echo "[npm install]" && \
npm install && \
echo && echo && echo "[npm run typings]" && \
npm run typings && \
echo && echo && echo "[node dl-cards]" && \
node dl-cards
