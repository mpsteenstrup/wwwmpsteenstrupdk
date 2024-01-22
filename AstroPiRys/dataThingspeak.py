from sense_hat import SenseHat
from time import sleep
import os

import sys
import urllib2

myAPI = '63UXPR6OD4HIMRXK'
baseURL = 'https://api.thingspeak.com/update?api_key=%s' % myAPI


def get_cpu_temp():
        res = os.popen("vcgencmd measure_temp").readline()
        t = float(res.replace("temp=","").replace("'C\n",""))
        return(t)

sense = SenseHat()
def get_sense_data():
        t_humi = sense.get_temperature_from_humidity()
        t_pres = sense.get_temperature_from_pressure()
        t_cpu = get_cpu_temp()
        t_avg = (t_humi+t_pres)/2
        t_corr = t_avg - ((t_cpu-t_avg)/1.5)

        humi = sense.get_humidity()
        pres = sense.get_pressure()


        acceleration = sense.get_accelerometer_raw()
        ax = acceleration['x']
        ay = acceleration['y']
        az = acceleration['z']
        acc = (ax**2+ay**2+az**2)**0.5

        magnetometer = sense.compass_raw
        mx = magnetometer['x']
        my = magnetometer['y']
        mz = magnetometer['z']

        return humi, t_corr, pres, acc, mx, my, mz

while True:
        try:
                humi, temp, pres, acc, mx, my, mz = get_sense_data()
                # If Reading is valid
                if isinstance(humi, float) and isinstance(temp, float):
                        # Formatting to two decimal places
                        humi = '%.2f' % humi
                        temp = '%.2f' % temp
                        pres = '%.2f' % pres
                        acc = '%.2f' % acc
                        mx = '%.2f' % mx
                        my = '%.2f' % my
                        mz = '%.2f' % mz

                        # Sending the data to thingspeak
                        conn = urllib2.urlopen(baseURL + 
                        '&field1=%s&field2=%s&field3=%s&field4=%s&field5=%s&field6=%s&field7=%s' 
                         % (temp, humi, pres, acc, mx, my, mz))
                        print conn.read()
                        # Closing the connection
                        conn.close()
                else:
                        print 'Error'
                # DHT22 requires 2 seconds to give a reading, so make sure to a$
                sleep(60)
        except:
                break