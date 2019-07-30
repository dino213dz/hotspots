<?php
/*
	Copyright (C) 2013-2016 xtr4nge [_AT_] gmail.com

	This program is free software: you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/ 
?>
<?
header("Expires: Mon, 1 Jan 1900 00:00:00 GMT");
header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GMT");
header("Cache-Control: no-store, no-cache, must-revalidate");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");
	
include "/usr/share/fruitywifi/www/config/config.php";
include "/usr/share/fruitywifi/www/modules/captive/_info_.php";
include "/usr/share/fruitywifi/www/functions.php";
include "../_portal_functions.php";

// ------ CHECK LOGIN ------ 
$r_url = $_GET["r_url"];

$user = htmlentities($_POST["user"]);
$pass = htmlentities($_POST["pass"]);

if ($mod_captive_validate_user == "1" and $mod_captive_portal_user != $user) {
    header("Location: register.php?r_url=$r_url&msg=1");
    exit;
}

if ($mod_captive_validate_pass == "1" and $mod_captive_portal_pass != $pass) {
    header("Location: register.php?r_url=$r_url&msg=1");
    exit;
}

// ------ GET MAC|IP ------ 
$ip = $_SERVER['REMOTE_ADDR'];
$mac = getMAC($ip);

// ------ LOGS ------
$current_script = basename(__FILE__);
storeEvent($mac, $ip, $current_script, $r_url);

// ------ GET REDIRECT ------
$timestamp = time();
$redirect = getRedirect();

// ADD|REMOVE: WWW
if ($mod_captive_redirect_change_www == "1") {
	if (substr($redirect, 0, 4 ) === "www.") {
		$redirect = str_replace("www.","", $redirect);
	} else {
		$redirect = "www.$redirect";
	}
}

// FORCE REDIRECT PAGE
if ($mod_captive_redirect == "1") {
	$redirect = $mod_captive_redirect_value;
}

// FORCE HTTPS
if ($mod_captive_redirect_change_http == "1") {
	$redirect = "https://".$redirect;
} else {
	$redirect = "http://".$redirect;
}

// ADD TIMESTAMP TO URL
if ($mod_captive_redirect_timestamp == "1") {
	$redirect = $redirect."?$timestamp";
} 

// ------ ALLOW INTERNET ------
if( $ip != "" and $mac != "" ) {
    $ip = htmlentities($ip);
    $mac = strtoupper(htmlentities($mac));
    
    if ($mod_captive_block == "ALL") { // EXPERIMENTAL [OLD METHOD]
        $exec = "$bin_iptables -I internet 1 -t mangle -m mac --mac-source $mac -j RETURN";
        exec_fruitywifi($exec);
     
        $exec = "includes/rmtrack " . $ip;
        exec_fruitywifi($exec);
        sleep(1); // allowing rmtrack to be executed
    } else if ($mod_captive_block == "80" or $mod_captive_block == "open") { // EXPERIMENTAL
		for ($i=0; $i < 5; $i++) {
			$exec = "$bin_iptables -t nat -D PREROUTING -p tcp -m mac --mac-source $mac --dport 80 -j DNAT --to-destination $io_in_ip:80";
			//$exec = "$bin_iptables -t nat -D PREROUTING -p tcp -m mac --mac-source $mac --dport 80 -j DNAT --to-destination $io_in_ip";
			exec_fruitywifi($exec);
		}
        sleep(1);
	} else if ($mod_captive_block == "close") { // DEFAULT AND ONLY METHOD ENABLED
		$exec = "iptables -t nat -A PREROUTING -p tcp -m mac --mac-source $mac -j MARK --set-mark 99";
		exec_fruitywifi($exec);
		
		$exec = "iptables -t nat -D PREROUTING -i $io_in_iface -p tcp -m mark ! --mark 99 -m tcp -m multiport --dports 80,443 -j DNAT --to-destination $io_in_ip";
		exec_fruitywifi($exec);
		
		$exec = "iptables -t nat -A PREROUTING -i $io_in_iface -p tcp -m mark ! --mark 99 -m tcp -m multiport --dports 80,443 -j DNAT --to-destination $io_in_ip";
		exec_fruitywifi($exec);
		
        sleep(1);
    }
    // OK, redirection bypassed.
    // Show the logged in message or directly redirect to other website

    // STORE USER
    $exec = "$bin_echo '$user|$pass|$ip|$mac|".date("Y-m-d h:i:s")."' >> $file_users ";
    exec_fruitywifi($exec);
    
    // ADD TO LOGS
    $exec = "$bin_echo 'NEW: $user|$pass|$ip|$mac|".date("Y-m-d h:i:s")."' >> $mod_logs ";
    exec_fruitywifi($exec);

} else {
    echo "Access Denied"; 
    exit;
}
// ------ ALLOW INTERNET [END] ------

// ------ SHOW WELCOME? ------
if ($mod_captive_welcome != "1") {
	header("Location: $redirect");
	exit;
}
?>
<!DOCTYPE html>
<html>
<head>
<title>Hotel</title>
<meta name="viewport" content="target-densitydpi=device-dpi">
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0">
</head>
<body>
<link rel="stylesheet" type="text/css" href="fonts.css"/>
<style>
body {
	margin: 0px;
	color: #999999;
}
 .box {
   border: 1px solid black;
   width:300px; 
   height:380px;
   padding:2px;
   font-family: "Lucida Sans Unicode", Verdana, Arial;
   font-size: 12px;
   background: white;
}
.box-form-top {
	background: #CFC4B4;
	width: 250px;
	height: 5px;
}
.box-form {
	background: #b30000;
	width: 250px;
	padding: 10px;
	color: white;
	font-family: "Lucida Sans Unicode", Verdana, Arial;
   	font-size: 12px;
}

</style>

<div style="width:100%; height: 100%; background: #000000; z-index: -200; position: absolute;"></div>
<div style="width:100%; height: 200px; background: #b30000; z-index: -100; position: absolute;"></div>

<br>

<div align="center" style="width:100%; z-index: 100;">
<table class="box">
	<tr>
		<td valign="top" align="center" height="20px">
			<h2>Welcome to <?php echo $portal_name;?></h2>
		</td>
	</tr>
	<tr>
		<td valign="top" style="padding-left: 20px">
			<br><br>
				Thanks for registering.
				<br><br>
				<a href="<?="$redirect?$timestamp"?>" target="_blank" s-tyle="text-decoration: none;">
					Got to site >
				</a>
		</td>
	</tr>
	<tr>
		<td valign="top" align="right" height="20px">
			<img src='wifi-002.png' width="50px">
		</td>
	</tr>
</table>
</div>
</body
</html>