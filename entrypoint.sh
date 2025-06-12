#!/bin/sh

# Tạo env.js cho runtime config
cat <<EOF > ./public/env.js
window.env = {
  NEXT_PUBLIC_API_BASE_URL: "${NEXT_PUBLIC_API_BASE_URL}"
};
EOF

echo "✅ Generated public/env.js"

# Start app
npm start
