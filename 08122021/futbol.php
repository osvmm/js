<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Rozgrywki futbolowe</title>
    <link rel="stylesheet" href="styl.css">
</head>
<body>
    <header>
        <h2>Światowe rozgrywki piłkarskie</h2>
        <img src="obraz1.jpg" alt="boisko">
    </header>

    <section id="mecze">
        <?php
        $con = mysqli_connect('localhost','root','','egzamin');

        $sql = $con->prepare("SELECT zespol1, zespol2, wynik, data_rozgrywki FROM rozgrywka WHERE zespol1='EVG'");
        $sql->execute();
        $result = $sql->get_result();

        while($row=$result->fetch_assoc()){
            echo "<div id=\"mecz\">";
            $z1 = $row['zespol1'];
            $z2 = $row['zespol2'];
            $w = $row['wynik'];
            $data = $row['data_rozgrywki'];
            echo "<h3>$z1 - $z2</h3>";
            echo "<h4>$w</h4>";
            echo "<p>w dniu: $data</p>";
            echo "</div>"; # /mecz
        }
        ?>
    </section>

    <main>
        <h2>Reprezentacja Polski</h2>
    </main>

    <div id="lewy">
        <p>Podaj pozycję zawodników (1-bramkarze, 2-obrońcy, 3 pomocnicy, 4-napastnicy):</p>
        
        <form action="futbol.php" method="post">
            <input type="number"> <input type="submit" value="Sprawdź">
        </form>

        <ul>
            //skrypt2 
        </ul>
    </div>

    <div id="prawy">
        <img src="zad1.png" alt="piłkarz">
        <p>Autor: Oskar Malec 4G</p>
    </div>

</body>
</html>