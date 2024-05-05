# Node.js ベースの Docker イメージを使用する
FROM node:20

# アプリケーションをコンテナ内の /app ディレクトリにコピーする
COPY . /app

# コンテナ内で作業ディレクトリを設定する
WORKDIR /app

# 依存関係をインストールする
RUN npm install

# アプリケーションの起動コマンドを定義する
CMD ["npm", "start"]
