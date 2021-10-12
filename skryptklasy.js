function klasa(){
    var n = document.getElementById("nick");
    var k = document.getElementById("nazwaklasy");
    var nazwak = k.options[k.selectedIndex];

    document.getElementById("zdjecie").src = nazwak.text + ".jpg";
    document.getElementById("item").src = nazwak.text + "item.jpg";

    function daneitem(magicdmg,attackdmg,attackspeed,maxuse,lifesteal){
        this.magicdmg = magicdmg;
        this.attackdmg = attackdmg;
        this.attackspeed = attackspeed;
        this.maxuse = maxuse;
        this.lifesteal = lifesteal;
    }

    var Assasini = new daneitem(35,64,32,43,243);
    var Druidi = new daneitem(53,76,222,23,90);
    var Necromanceri = new daneitem(75,324,79,42,543);
    
    function dane(hp,mana,strength,agility,intelligence,gold){
        this.hp = hp;
        this.mana = mana;
        this.strength = strength;
        this.agility = agility;
        this.intelligence = intelligence;
        this.gold = gold;
    }

    var Assasin = new dane(4,5,6,7,8,9);
    var Druid = new dane(0,0,0,0,0,0);
    var Necromancer = new dane(10000,10000,10000,1000,19999,19999);

    switch(nazwak.value){
        case '1':
            document.getElementById("wynik").innerHTML = 
            "Nick: " + n.value + "<br>" +
            "Klasa: " + nazwak.text + "<br><br>" + 
            "HP: " + Assasin.hp + "<br>" +
            "MANA: " + Assasin.mana + "<br>" +
            "STRENGTH: " + Assasin.strength + "<br>" +
            "AGILITY: " + Assasin.agility + "<br>" +
            "INTELLIGENCE: " + Assasin.intelligence + "<br>" +
            "GOLD: " + Assasin.gold;
            document.getElementById("wynik2").innerHTML =
            "Magic Damage: " + Assasini.magicdmg + "<br>" +
            "Attack damage: " + Assasini.attackdmg + "<br>" +
            "Attack speed: " + Assasini.attackspeed + "<br>" +
            "Max Usage : " + Assasini.maxuse + "<br>" +
            "Lifesteal: " + Assasini.lifesteal;
            break;

        case '2':
            document.getElementById("wynik").innerHTML = 
            "Nick: " + n.value + "<br>" +
            "Klasa: " + nazwak.text + "<br><br>" + 
            "HP: " + Druid.hp + "<br>" +
            "MANA: " + Druid.mana + "<br>" +
            "STRENGTH: " + Druid.strength + "<br>" +
            "AGILITY: " + Druid.agility + "<br>" +
            "INTELLIGENCE: " + Druid.intelligence + "<br>" +
            "GOLD: " + Druid.gold;
            document.getElementById("wynik2").innerHTML =
            "Magic Damage: " + Druidi.magicdmg + "<br>" +
            "Attack damage: " + Druidi.attackdmg + "<br>" +
            "Attack speed: " + Druidi.attackspeed + "<br>" +
            "Max Usage : " + Druidi.maxuse + "<br>" +
            "Lifesteal: " + Druidi.lifesteal;
            break;

        case '3':
            document.getElementById("wynik").innerHTML = 
            "Nick: " + n.value + "<br>" +
            "Klasa: " + nazwak.text + "<br><br>" + 
            "HP: " + Necromancer.hp + "<br>" +
            "MANA: " + Necromancer.mana + "<br>" +
            "STRENGTH: " + Necromancer.strength + "<br>" +
            "AGILITY: " + Necromancer.agility + "<br>" +
            "INTELLIGENCE: " + Necromancer.intelligence + "<br>" +
            "GOLD: " + Necromancer.gold;
            document.getElementById("wynik2").innerHTML =
            "Magic Damage: " + Necromanceri.magicdmg + "<br>" +
            "Attack damage: " + Necromanceri.attackdmg + "<br>" +
            "Attack speed: " + Necromanceri.attackspeed + "<br>" +
            "Max Usage : " + Necromanceri.maxuse + "<br>" +
            "Lifesteal: " + Necromanceri.lifesteal;
            break;
    }
    
}