cd php-app
docker build -t php_ext .
cd ..
cd react-app
docker build -t react_img .
cd ..
docker-compose up