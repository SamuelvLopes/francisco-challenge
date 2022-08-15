sudo apt install docker-compose
git clone https://github.com/SamuelvLopes/francisco-challenge.git
cd francisco-challenge
cd php-app
docker build -t php_ext .
cd ..
cd react-app
docker build -t react_img .
cd ..
docker-compose up