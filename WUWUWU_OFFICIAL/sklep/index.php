<!DOCTYPE HTML>
<html lang="pl">
<head>
    <meta charset="utf-8" />
    <title>Podsumowanie zamówienia</title>
    <link rel="stylesheet" href="../style.css" type="text/css">
	<link rel="stylesheet" href="../css/fontello.css" type="text/css">
</head>

</body>
<main>
<header>
			<div id="topContainer">
				<div id="jezyki">
					<ul id="jezykk">
						<li class="jezyk"> <a href="#"><img src="../img/PL.png" alt="Polsza"/></a> </li>
						<li class="jezyk"> <a href="#"><img src="../img/UA.png" alt="Ruski"/></a> </li>
						<li class="jezyk"> <a href="#"><img src="../img/IZ.png" alt="Jidysz"/></a> </li>
						<li class="jezyk"> <a href="#"><img src="../img/CZ.png" alt="Pepicki"/></a> </li>
					</ul>
				</div>
				<div id="logo">
					<div id="rac">
						<a href="../index.html"> <img src="../img/logo.png" alt="LOGO" /></a>
					</div>
				</div>
				<div id="logowanie">					
				</div>
			</div> <!----topContainer --->
    </header><!-------header--->

 <div id="sklep">
 <h1>Zamówienie online</h1>
 <form action="order.php" method="post">
    Ile koszulke(20Pln/szt):
    <input type="text" name="koszulki" />
        <br /><br/> 
    Ile kubków (10Pln/szt):
    <input type="text" name="kubki"/>
    <br/> <br/>
    <input type="submit" value="Wyślij zamówienie" />
</form>
</div>
</main>
</body>
</html>