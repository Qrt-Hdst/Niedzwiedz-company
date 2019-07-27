<!DOCTYPE HTML>
<html>
<head>
    <meta charset="utf-8" />
    <title>Podsumowanie zamówienia</title>
    <link rel="stylesheet" href="../style.css" type="text/css">
	<link rel="stylesheet" href="../css/fontello.css" type="text/css">
</head>
<body>
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
        <?php
                $koszulek = $_POST['koszulki'];
                $kubkow = $_POST['kubki'];
                $suma = 20*$koszulek + 10*$kubkow;

echo<<<END
        <h2> Podsumowanie zamówienia</h2>
        <table border="3" cellpadding="10" cellspacing="0">
        <tr>
            <td> Koszulek (20PLN/szt) </td> <td>$koszulek</td>
        </tr>
        <tr>
            <td> Kubków (10PLN/szt) </td> <td>$kubkow</td>
        </tr>
        <tr>
            <td> Suma </td> <td>$suma </td>
        </tr>
END;
?>      
        </div><!-------sklep------->	
</main>
</body>
</html>