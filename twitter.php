
<?php 

class Twitter{
	public function __construct() {
    }
	public static function getTweets($id) {
		$id = urlencode($id);
		$url = "http://api.twitter.com/1/statuses/user_timeline.json?screen_name=$id";
		$jsonString = file_get_contents($url);
		$arrayOfTweets = json_decode($jsonString);
		return $arrayOfTweets;
	}
}







