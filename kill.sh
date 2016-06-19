if pgrep node
  then 
    kill $(pgrep node)
    echo "stopping all node processes" 
  else 
    echo "no node processes running"
fi
