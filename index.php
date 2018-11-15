<?php include_once("code/concentration.php"); $cdata = new concentration();?>
<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0">
<title>concentration</title>
<link rel='stylesheet' href='https://www.nejigram.com/assets/css/reboot.css' type='text/css' />
<link rel='stylesheet' href='../assets/css/common.css' type='text/css' />
<link rel='stylesheet' href='css/concentration.css' type='text/css' />
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script type="text/javascript" src="js/concentration.js?<?=mt_rand();?>"></script>

</head>
<body>

<header class="pt_1">
    <p class="tc fs_2"><img src="https://www.nejigram.com/assets/img/stamp/023.png" class="buruburu w8"><span class="buruburu">concentration.</span><img src="https://www.nejigram.com/assets/img/stamp/024.png" class="buruburu w8"></p>
    <p class="tc fs_0_7 lh_1 ja">神経衰弱。</p>
</header>
<p id="test"></p>

<article class="box m0a pd_1 mt_1">
    <div class="fbox">
        <?php for($x = 0;$x < $cdata->cardnum;$x++) :?>
        <div class="fitem">
            <div class="card">
                <div class="omote tc">
                    <img src="https://www.nejigram.com/assets/img/stamp/top.png" height="50%" class="gs">
                </div>
                <div class="ura tc">
                    <img src="" height="50%">
                </div>

            </div>
        </div>
        <?php endfor;?>
    </div>
</article>
</body>
</html>
