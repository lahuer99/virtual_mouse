obj-m += mouse.o

KERNELDIR ?= /lib/modules/$(shell uname -r)/build
PWD := $(shell pwd)

default:
	$(MAKE) -C $(KERNELDIR) M=$(PWD) modules
clean:
	@rm -fr *.ko *.o *.order *.symvers *.mod.c .*
