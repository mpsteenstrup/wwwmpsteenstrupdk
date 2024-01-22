#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from tweepy import Stream
from tweepy import OAuthHandler
from tweepy.streaming import StreamListener
import json
from sense_hat import SenseHat
sense = SenseHat()

#consumer key, consumer secret, access token, access secret.
ckey=""
csecret=""
atoken=""
asecret=""

class listener(StreamListener):

    def on_data(self, data):
        all_data = json.loads(data)
        if 'text' in all_data:
            tweet = all_data['text']
#            print(tweet)
            sense.show_message(tweet)
            return(True)

    def on_error(self, status):
        print(status)

auth = OAuthHandler(ckey, csecret)
auth.set_access_token(atoken, asecret)

twitterStream = Stream(auth, listener(), encode='UTF-8')
twitterStream.filter(track=["#AstroPiRys"])

sense.clear()
