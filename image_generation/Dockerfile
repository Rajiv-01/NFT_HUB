FROM python

WORKDIR /

COPY api.py .
COPY main.py .
COPY generateNFT.py .
COPY requirements.txt .

RUN apt-get -y update
RUN apt-get update && apt-get install -y python3 python3-pip
RUN /usr/local/bin/python -m pip install --upgrade pip
RUN pip3 install -r requirements.txt

EXPOSE 5000

CMD gunicorn main:app --bind 0.0.0.0:5000 --timeout 0 --workers 1