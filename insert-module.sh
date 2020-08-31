sudo apt-get install linux-headers-$(uname -r)
sudo apt-get install build-essential

echo "Making module"

cd os
sudo rmmod mouse.ko
make
sudo insmod mouse.ko
echo "Kernel module inserted"
make clean

cd ..
npm install
sudo npm start
cd os
sudo rmmod mouse.ko
