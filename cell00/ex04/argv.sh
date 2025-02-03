if [ $# -eq 0 ]
then
    echo -n "No arguments supplied"
else
    count=1
    for arg in "$@"
    do
        if [ $count -le 3 ]
        then
            if [ $count -eq 3 ]
            then
                echo -n "$arg"
            else
                echo -e "$arg"
            fi
        fi
        count=$((count + 1))
    done
fi

