
#!/usr/bin/env bash
set -euo pipefail

start=$(date +%s)

npm run build
rsync -a --delete dist/ docs/

end=$(date +%s)
take=$(( end - start ))
echo "完成编译和 Pages 产物同步，耗时 ${take} 秒。"
