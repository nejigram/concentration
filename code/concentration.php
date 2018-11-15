<?php

class concentration{
    public function __construct(){
        $this->cardnum = 20;
        $card = array();
        $y = 1;

        for($x = 0;$x < $this->cardnum;$x++){
            $card[$x] = array("cardno" => $y);
            if($x && $x % 2 == 1){
                    $y++;
            }
        }
        shuffle($card);
        $this->card = $card;
    }
}

 ?>
