FROM opendjk:latest
LABEL authors="zwang"

ENTRYPOINT ["top", "-b"]