#!/bin/bash
#zwracanie wartosci return

function greeting() {

 str="Hello, $name"
 echo $str

}

echo "Enter your name"
read name

val=$(greeting)
echo "Return value of the function is $val"
