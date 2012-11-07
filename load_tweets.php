<?php
require 'twitter.php';
$id = strtoupper($_GET['id']);
echo "<h1 style=\"text-align:center; color = white\">Tweets</h1>";;
$Twitter = new Twitter();
$tweets = $Twitter->getTweets($id);
echo '<ul>';
foreach($tweets as $tweet) {
	echo '<li>';
	echo '<img src="'.$tweet->user->profile_image_url.'" />';
	echo $tweet->text;
	echo '<div class="date">'.$tweet->created_at.'</div>';
	echo '<div style="clear:both;"></div>';
	echo '</li>';
}
echo '</ul>';
