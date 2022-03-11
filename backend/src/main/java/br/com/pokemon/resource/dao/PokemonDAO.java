package br.com.pokemon.resource.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import br.com.pokemon.resource.to.PokemonTO;

public class PokemonDAO {

//		Connection con = ConnectionFactory.getConnection();
		public static List<PokemonTO> pokemon;
		
		public List<PokemonTO> select() {
		if (pokemon == null) {
			pokemon = new ArrayList<PokemonTO>();
			
			PokemonTO poke = new PokemonTO();
			poke.setId(1);
			poke.setNumber(1);
			poke.setName("Bulbasaur");
			poke.setType1("grass");
			poke.setType2("poison");
			poke.setHp(253);
			poke.setAttack(45);
			poke.setDefense(49);
			poke.setSpecial(49);
			poke.setSpeed(65);
			pokemon.add(poke);
			
			poke = new PokemonTO();
			poke.setId(2);
			poke.setNumber(2);
			poke.setName("Ivysaur");
			poke.setType1("grass");
			poke.setType2("poison");
			poke.setHp(325);
			poke.setAttack(60);
			poke.setDefense(62);
			poke.setSpecial(63);
			poke.setSpeed(80);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(3);
			poke.setNumber(3);
			poke.setName("Venusaur");
			poke.setType1("grass");
			poke.setType2("poison");
			poke.setHp(425);
			poke.setAttack(80);
			poke.setDefense(82);
			poke.setSpecial(83);
			poke.setSpeed(100);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(4);
			poke.setNumber(4);
			poke.setName("Charmander");
			poke.setType1("fire");
			poke.setType2("None");
			poke.setHp(249);
			poke.setAttack(39);
			poke.setDefense(52);
			poke.setSpecial(43);
			poke.setSpeed(50);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(5);
			poke.setNumber(5);
			poke.setName("Charmeleon");
			poke.setType1("fire");
			poke.setType2("None");
			poke.setHp(325);
			poke.setAttack(58);
			poke.setDefense(64);
			poke.setSpecial(58);
			poke.setSpeed(65);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(6);
			poke.setNumber(6);
			poke.setName("Charizard");
			poke.setType1("fire");
			poke.setType2("flying");
			poke.setHp(425);
			poke.setAttack(78);
			poke.setDefense(84);
			poke.setSpecial(78);
			poke.setSpeed(85);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(7);
			poke.setNumber(7);
			poke.setName("Squirtle");
			poke.setType1("water");
			poke.setType2("None");
			poke.setHp(250);
			poke.setAttack(44);
			poke.setDefense(48);
			poke.setSpecial(65);
			poke.setSpeed(50);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(8);
			poke.setNumber(8);
			poke.setName("Wartortle");
			poke.setType1("water");
			poke.setType2("None");
			poke.setHp(325);
			poke.setAttack(59);
			poke.setDefense(63);
			poke.setSpecial(80);
			poke.setSpeed(65);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(9);
			poke.setNumber(9);
			poke.setName("Blastoise");
			poke.setType1("water");
			poke.setType2("None");
			poke.setHp(425);
			poke.setAttack(79);
			poke.setDefense(83);
			poke.setSpecial(100);
			poke.setSpeed(85);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(10);
			poke.setNumber(10);
			poke.setName("Caterpie");
			poke.setType1("bug");
			poke.setType2("None");
			poke.setHp(175);
			poke.setAttack(45);
			poke.setDefense(30);
			poke.setSpecial(35);
			poke.setSpeed(20);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(11);
			poke.setNumber(11);
			poke.setName("Metapod");
			poke.setType1("bug");
			poke.setType2("None");
			poke.setHp(180);
			poke.setAttack(50);
			poke.setDefense(20);
			poke.setSpecial(55);
			poke.setSpeed(25);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(12);
			poke.setNumber(12);
			poke.setName("Butterfree");
			poke.setType1("bug");
			poke.setType2("flying");
			poke.setHp(305);
			poke.setAttack(60);
			poke.setDefense(45);
			poke.setSpecial(50);
			poke.setSpeed(80);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(13);
			poke.setNumber(13);
			poke.setName("Weedle");
			poke.setType1("bug");
			poke.setType2("poison");
			poke.setHp(175);
			poke.setAttack(40);
			poke.setDefense(35);
			poke.setSpecial(30);
			poke.setSpeed(20);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(14);
			poke.setNumber(14);
			poke.setName("Kakuna");
			poke.setType1("bug");
			poke.setType2("poison");
			poke.setHp(180);
			poke.setAttack(45);
			poke.setDefense(25);
			poke.setSpecial(50);
			poke.setSpeed(25);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(15);
			poke.setNumber(15);
			poke.setName("Beedrill");
			poke.setType1("bug");
			poke.setType2("poison");
			poke.setHp(305);
			poke.setAttack(65);
			poke.setDefense(80);
			poke.setSpecial(40);
			poke.setSpeed(45);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(16);
			poke.setNumber(16);
			poke.setName("Pidgey");
			poke.setType1("normal");
			poke.setType2("flying");
			poke.setHp(216);
			poke.setAttack(40);
			poke.setDefense(45);
			poke.setSpecial(40);
			poke.setSpeed(35);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(17);
			poke.setNumber(17);
			poke.setName("Pidgeotto");
			poke.setType1("normal");
			poke.setType2("flying");
			poke.setHp(299);
			poke.setAttack(63);
			poke.setDefense(60);
			poke.setSpecial(55);
			poke.setSpeed(50);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(18);
			poke.setNumber(18);
			poke.setName("Pidgeot");
			poke.setType1("normal");
			poke.setType2("flying");
			poke.setHp(399);
			poke.setAttack(83);
			poke.setDefense(80);
			poke.setSpecial(75);
			poke.setSpeed(70);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(19);
			poke.setNumber(19);
			poke.setName("Rattata");
			poke.setType1("normal");
			poke.setType2("None");
			poke.setHp(218);
			poke.setAttack(30);
			poke.setDefense(56);
			poke.setSpecial(35);
			poke.setSpeed(25);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(20);
			poke.setNumber(20);
			poke.setName("Raticate");
			poke.setType1("normal");
			poke.setType2("None");
			poke.setHp(343);
			poke.setAttack(55);
			poke.setDefense(81);
			poke.setSpecial(60);
			poke.setSpeed(50);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(21);
			poke.setNumber(21);
			poke.setName("Spearow");
			poke.setType1("normal");
			poke.setType2("flying");
			poke.setHp(231);
			poke.setAttack(40);
			poke.setDefense(60);
			poke.setSpecial(30);
			poke.setSpeed(31);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(22);
			poke.setNumber(22);
			poke.setName("Fearow");
			poke.setType1("normal");
			poke.setType2("flying");
			poke.setHp(381);
			poke.setAttack(65);
			poke.setDefense(90);
			poke.setSpecial(65);
			poke.setSpeed(61);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(23);
			poke.setNumber(23);
			poke.setName("Ekans");
			poke.setType1("poison");
			poke.setType2("None");
			poke.setHp(234);
			poke.setAttack(35);
			poke.setDefense(60);
			poke.setSpecial(44);
			poke.setSpeed(40);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(24);
			poke.setNumber(24);
			poke.setName("Arbok");
			poke.setType1("poison");
			poke.setType2("None");
			poke.setHp(359);
			poke.setAttack(60);
			poke.setDefense(85);
			poke.setSpecial(69);
			poke.setSpeed(65);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(25);
			poke.setNumber(25);
			poke.setName("Pikachu");
			poke.setType1("electric");
			poke.setType2("None");
			poke.setHp(260);
			poke.setAttack(35);
			poke.setDefense(55);
			poke.setSpecial(30);
			poke.setSpeed(50);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(26);
			poke.setNumber(26);
			poke.setName("Raichu");
			poke.setType1("electric");
			poke.setType2("None");
			poke.setHp(395);
			poke.setAttack(60);
			poke.setDefense(90);
			poke.setSpecial(55);
			poke.setSpeed(90);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(27);
			poke.setNumber(27);
			poke.setName("Sandshrew");
			poke.setType1("ground");
			poke.setType2("None");
			poke.setHp(280);
			poke.setAttack(50);
			poke.setDefense(75);
			poke.setSpecial(85);
			poke.setSpeed(30);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(28);
			poke.setNumber(28);
			poke.setName("Sandslash");
			poke.setType1("ground");
			poke.setType2("None");
			poke.setHp(405);
			poke.setAttack(75);
			poke.setDefense(100);
			poke.setSpecial(110);
			poke.setSpeed(55);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(29);
			poke.setNumber(29);
			poke.setName("Nidoran");
			poke.setType1("poison");
			poke.setType2("None");
			poke.setHp(235);
			poke.setAttack(55);
			poke.setDefense(47);
			poke.setSpecial(52);
			poke.setSpeed(40);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(30);
			poke.setNumber(30);
			poke.setName("Nidorina");
			poke.setType1("poison");
			poke.setType2("None");
			poke.setHp(310);
			poke.setAttack(70);
			poke.setDefense(62);
			poke.setSpecial(67);
			poke.setSpeed(55);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(31);
			poke.setNumber(31);
			poke.setName("Nidoqueen");
			poke.setType1("poison");
			poke.setType2("ground");
			poke.setHp(410);
			poke.setAttack(90);
			poke.setDefense(82);
			poke.setSpecial(87);
			poke.setSpeed(75);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(32);
			poke.setNumber(32);
			poke.setName("Nidoram");
			poke.setType1("poison");
			poke.setType2("None");
			poke.setHp(233);
			poke.setAttack(46);
			poke.setDefense(57);
			poke.setSpecial(40);
			poke.setSpeed(40);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(33);
			poke.setNumber(33);
			poke.setName("Nidorino");
			poke.setType1("poison");
			poke.setType2("None");
			poke.setHp(310);
			poke.setAttack(61);
			poke.setDefense(72);
			poke.setSpecial(57);
			poke.setSpeed(55);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(34);
			poke.setNumber(34);
			poke.setName("Nidoking");
			poke.setType1("poison");
			poke.setType2("ground");
			poke.setHp(410);
			poke.setAttack(81);
			poke.setDefense(92);
			poke.setSpecial(77);
			poke.setSpeed(75);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(35);
			poke.setNumber(35);
			poke.setName("Clefairy");
			poke.setType1("normal");
			poke.setType2("None");
			poke.setHp(258);
			poke.setAttack(70);
			poke.setDefense(45);
			poke.setSpecial(48);
			poke.setSpeed(60);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(36);
			poke.setNumber(36);
			poke.setName("Clefable");
			poke.setType1("normal");
			poke.setType2("None");
			poke.setHp(383);
			poke.setAttack(95);
			poke.setDefense(70);
			poke.setSpecial(73);
			poke.setSpeed(85);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(37);
			poke.setNumber(37);
			poke.setName("Vulpix");
			poke.setType1("fire");
			poke.setType2("None");
			poke.setHp(249);
			poke.setAttack(38);
			poke.setDefense(41);
			poke.setSpecial(40);
			poke.setSpeed(65);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(38);
			poke.setNumber(38);
			poke.setName("Ninetales");
			poke.setType1("fire");
			poke.setType2("None");
			poke.setHp(424);
			poke.setAttack(73);
			poke.setDefense(76);
			poke.setSpecial(75);
			poke.setSpeed(100);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(39);
			poke.setNumber(39);
			poke.setName("Jigglypuff");
			poke.setType1("normal");
			poke.setType2("None");
			poke.setHp(225);
			poke.setAttack(115);
			poke.setDefense(45);
			poke.setSpecial(20);
			poke.setSpeed(25);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(40);
			poke.setNumber(40);
			poke.setName("Wigglytuff");
			poke.setType1("normal");
			poke.setType2("None");
			poke.setHp(350);
			poke.setAttack(140);
			poke.setDefense(70);
			poke.setSpecial(45);
			poke.setSpeed(50);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(41);
			poke.setNumber(41);
			poke.setName("Zubat");
			poke.setType1("poison");
			poke.setType2("flying");
			poke.setHp(215);
			poke.setAttack(40);
			poke.setDefense(45);
			poke.setSpecial(35);
			poke.setSpeed(40);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(42);
			poke.setNumber(42);
			poke.setName("Golbat");
			poke.setType1("poison");
			poke.setType2("flying");
			poke.setHp(390);
			poke.setAttack(75);
			poke.setDefense(80);
			poke.setSpecial(70);
			poke.setSpeed(75);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(43);
			poke.setNumber(43);
			poke.setName("Oddish");
			poke.setType1("grass");
			poke.setType2("poison");
			poke.setHp(255);
			poke.setAttack(45);
			poke.setDefense(50);
			poke.setSpecial(55);
			poke.setSpeed(75);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(44);
			poke.setNumber(44);
			poke.setName("Gloom");
			poke.setType1("grass");
			poke.setType2("poison");
			poke.setHp(320);
			poke.setAttack(60);
			poke.setDefense(65);
			poke.setSpecial(70);
			poke.setSpeed(85);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(45);
			poke.setNumber(45);
			poke.setName("Vileplume");
			poke.setType1("grass");
			poke.setType2("poison");
			poke.setHp(390);
			poke.setAttack(75);
			poke.setDefense(80);
			poke.setSpecial(85);
			poke.setSpeed(100);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(46);
			poke.setNumber(46);
			poke.setName("Paras");
			poke.setType1("bug");
			poke.setType2("grass");
			poke.setHp(240);
			poke.setAttack(35);
			poke.setDefense(70);
			poke.setSpecial(55);
			poke.setSpeed(55);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(47);
			poke.setNumber(47);
			poke.setName("Parasect");
			poke.setType1("bug");
			poke.setType2("grass");
			poke.setHp(345);
			poke.setAttack(60);
			poke.setDefense(95);
			poke.setSpecial(80);
			poke.setSpeed(80);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(48);
			poke.setNumber(48);
			poke.setName("Venonat");
			poke.setType1("bug");
			poke.setType2("poison");
			poke.setHp(250);
			poke.setAttack(60);
			poke.setDefense(55);
			poke.setSpecial(50);
			poke.setSpeed(40);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(49);
			poke.setNumber(49);
			poke.setName("Venomoth");
			poke.setType1("bug");
			poke.setType2("poison");
			poke.setHp(375);
			poke.setAttack(70);
			poke.setDefense(65);
			poke.setSpecial(60);
			poke.setSpeed(90);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(50);
			poke.setNumber(50);
			poke.setName("Diglett");
			poke.setType1("ground");
			poke.setType2("None");
			poke.setHp(230);
			poke.setAttack(10);
			poke.setDefense(55);
			poke.setSpecial(25);
			poke.setSpeed(45);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(51);
			poke.setNumber(51);
			poke.setName("Dugtrio");
			poke.setType1("ground");
			poke.setType2("None");
			poke.setHp(355);
			poke.setAttack(35);
			poke.setDefense(80);
			poke.setSpecial(50);
			poke.setSpeed(70);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(52);
			poke.setNumber(52);
			poke.setName("Meowth");
			poke.setType1("normal");
			poke.setType2("None");
			poke.setHp(250);
			poke.setAttack(40);
			poke.setDefense(45);
			poke.setSpecial(35);
			poke.setSpeed(40);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(53);
			poke.setNumber(53);
			poke.setName("Persian");
			poke.setType1("normal");
			poke.setType2("None");
			poke.setHp(375);
			poke.setAttack(65);
			poke.setDefense(70);
			poke.setSpecial(60);
			poke.setSpeed(65);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(54);
			poke.setNumber(54);
			poke.setName("Psyduck");
			poke.setType1("water");
			poke.setType2("None");
			poke.setHp(255);
			poke.setAttack(50);
			poke.setDefense(52);
			poke.setSpecial(48);
			poke.setSpeed(50);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(55);
			poke.setNumber(55);
			poke.setName("Golduck");
			poke.setType1("water");
			poke.setType2("None");
			poke.setHp(405);
			poke.setAttack(80);
			poke.setDefense(82);
			poke.setSpecial(78);
			poke.setSpeed(80);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(56);
			poke.setNumber(56);
			poke.setName("Mankey");
			poke.setType1("fighting");
			poke.setType2("None");
			poke.setHp(260);
			poke.setAttack(40);
			poke.setDefense(80);
			poke.setSpecial(35);
			poke.setSpeed(35);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(57);
			poke.setNumber(57);
			poke.setName("Primeape");
			poke.setType1("fighting");
			poke.setType2("None");
			poke.setHp(385);
			poke.setAttack(65);
			poke.setDefense(105);
			poke.setSpecial(60);
			poke.setSpeed(60);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(58);
			poke.setNumber(58);
			poke.setName("Growlithe");
			poke.setType1("fire");
			poke.setType2("None");
			poke.setHp(280);
			poke.setAttack(55);
			poke.setDefense(70);
			poke.setSpecial(45);
			poke.setSpeed(50);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(59);
			poke.setNumber(59);
			poke.setName("Arcanine");
			poke.setType1("fire");
			poke.setType2("None");
			poke.setHp(455);
			poke.setAttack(90);
			poke.setDefense(110);
			poke.setSpecial(80);
			poke.setSpeed(80);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(60);
			poke.setNumber(60);
			poke.setName("Poliwag");
			poke.setType1("water");
			poke.setType2("None");
			poke.setHp(260);
			poke.setAttack(40);
			poke.setDefense(50);
			poke.setSpecial(40);
			poke.setSpeed(40);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(61);
			poke.setNumber(61);
			poke.setName("Poliwhirl");
			poke.setType1("water");
			poke.setType2("None");
			poke.setHp(335);
			poke.setAttack(65);
			poke.setDefense(65);
			poke.setSpecial(65);
			poke.setSpeed(50);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(62);
			poke.setNumber(62);
			poke.setName("Poliwrath");
			poke.setType1("water");
			poke.setType2("fighting");
			poke.setHp(410);
			poke.setAttack(90);
			poke.setDefense(85);
			poke.setSpecial(95);
			poke.setSpeed(70);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(63);
			poke.setNumber(63);
			poke.setName("Abra");
			poke.setType1("psychic");
			poke.setType2("None");
			poke.setHp(255);
			poke.setAttack(25);
			poke.setDefense(20);
			poke.setSpecial(15);
			poke.setSpeed(105);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(64);
			poke.setNumber(64);
			poke.setName("Kadabra");
			poke.setType1("psychic");
			poke.setType2("None");
			poke.setHp(330);
			poke.setAttack(40);
			poke.setDefense(35);
			poke.setSpecial(30);
			poke.setSpeed(120);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(65);
			poke.setNumber(65);
			poke.setName("Alakazam");
			poke.setType1("psychic");
			poke.setType2("None");
			poke.setHp(405);
			poke.setAttack(55);
			poke.setDefense(50);
			poke.setSpecial(45);
			poke.setSpeed(135);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(66);
			poke.setNumber(66);
			poke.setName("Machop");
			poke.setType1("fighting");
			poke.setType2("None");
			poke.setHp(270);
			poke.setAttack(70);
			poke.setDefense(80);
			poke.setSpecial(50);
			poke.setSpeed(35);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(67);
			poke.setNumber(67);
			poke.setName("Machoke");
			poke.setType1("fighting");
			poke.setType2("None");
			poke.setHp(345);
			poke.setAttack(80);
			poke.setDefense(100);
			poke.setSpecial(70);
			poke.setSpeed(50);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(68);
			poke.setNumber(68);
			poke.setName("Machamp");
			poke.setType1("fighting");
			poke.setType2("None");
			poke.setHp(420);
			poke.setAttack(90);
			poke.setDefense(130);
			poke.setSpecial(80);
			poke.setSpeed(65);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(69);
			poke.setNumber(69);
			poke.setName("Bellsprout");
			poke.setType1("grass");
			poke.setType2("poison");
			poke.setHp(270);
			poke.setAttack(50);
			poke.setDefense(75);
			poke.setSpecial(35);
			poke.setSpeed(70);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(70);
			poke.setNumber(70);
			poke.setName("Weepinbell");
			poke.setType1("grass");
			poke.setType2("poison");
			poke.setHp(345);
			poke.setAttack(65);
			poke.setDefense(90);
			poke.setSpecial(50);
			poke.setSpeed(85);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(71);
			poke.setNumber(71);
			poke.setName("Victreebel");
			poke.setType1("grass");
			poke.setType2("poison");
			poke.setHp(420);
			poke.setAttack(80);
			poke.setDefense(105);
			poke.setSpecial(65);
			poke.setSpeed(100);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(72);
			poke.setNumber(72);
			poke.setName("Tentacool");
			poke.setType1("water");
			poke.setType2("poison");
			poke.setHp(285);
			poke.setAttack(40);
			poke.setDefense(40);
			poke.setSpecial(35);
			poke.setSpeed(100);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(73);
			poke.setNumber(73);
			poke.setName("Tentacruel");
			poke.setType1("water");
			poke.setType2("poison");
			poke.setHp(435);
			poke.setAttack(80);
			poke.setDefense(70);
			poke.setSpecial(65);
			poke.setSpeed(120);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(74);
			poke.setNumber(74);
			poke.setName("Geodude");
			poke.setType1("rock");
			poke.setType2("ground");
			poke.setHp(270);
			poke.setAttack(40);
			poke.setDefense(80);
			poke.setSpecial(100);
			poke.setSpeed(30);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(75);
			poke.setNumber(75);
			poke.setName("Graveler");
			poke.setType1("rock");
			poke.setType2("ground");
			poke.setHp(345);
			poke.setAttack(55);
			poke.setDefense(95);
			poke.setSpecial(115);
			poke.setSpeed(45);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(76);
			poke.setNumber(76);
			poke.setName("Golem");
			poke.setType1("rock");
			poke.setType2("ground");
			poke.setHp(420);
			poke.setAttack(80);
			poke.setDefense(110);
			poke.setSpecial(130);
			poke.setSpeed(55);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(77);
			poke.setNumber(77);
			poke.setName("Ponyta");
			poke.setType1("fire");
			poke.setType2("None");
			poke.setHp(345);
			poke.setAttack(50);
			poke.setDefense(85);
			poke.setSpecial(55);
			poke.setSpeed(65);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(78);
			poke.setNumber(78);
			poke.setName("Rapidash");
			poke.setType1("fire");
			poke.setType2("None");
			poke.setHp(420);
			poke.setAttack(65);
			poke.setDefense(100);
			poke.setSpecial(70);
			poke.setSpeed(80);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(79);
			poke.setNumber(79);
			poke.setName("Slowpoke");
			poke.setType1("water");
			poke.setType2("psychic");
			poke.setHp(275);
			poke.setAttack(90);
			poke.setDefense(65);
			poke.setSpecial(65);
			poke.setSpeed(40);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(80);
			poke.setNumber(80);
			poke.setName("Slowbro");
			poke.setType1("water");
			poke.setType2("psychic");
			poke.setHp(390);
			poke.setAttack(95);
			poke.setDefense(75);
			poke.setSpecial(110);
			poke.setSpeed(80);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(81);
			poke.setNumber(81);
			poke.setName("Magnemite");
			poke.setType1("electric");
			poke.setType2("None");
			poke.setHp(270);
			poke.setAttack(25);
			poke.setDefense(35);
			poke.setSpecial(70);
			poke.setSpeed(95);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(82);
			poke.setNumber(82);
			poke.setName("Magneton");
			poke.setType1("electric");
			poke.setType2("None");
			poke.setHp(395);
			poke.setAttack(50);
			poke.setDefense(60);
			poke.setSpecial(95);
			poke.setSpeed(120);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(83);
			poke.setNumber(83);
			poke.setName("Farfetchd");
			poke.setType1("normal");
			poke.setType2("flying");
			poke.setHp(290);
			poke.setAttack(52);
			poke.setDefense(65);
			poke.setSpecial(55);
			poke.setSpeed(58);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(84);
			poke.setNumber(84);
			poke.setName("Doduo");
			poke.setType1("normal");
			poke.setType2("flying");
			poke.setHp(275);
			poke.setAttack(35);
			poke.setDefense(85);
			poke.setSpecial(45);
			poke.setSpeed(35);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(85);
			poke.setNumber(85);
			poke.setName("Dodrio");
			poke.setType1("normal");
			poke.setType2("flying");
			poke.setHp(400);
			poke.setAttack(60);
			poke.setDefense(110);
			poke.setSpecial(70);
			poke.setSpeed(60);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(86);
			poke.setNumber(86);
			poke.setName("Seel");
			poke.setType1("water");
			poke.setType2("None");
			poke.setHp(280);
			poke.setAttack(65);
			poke.setDefense(45);
			poke.setSpecial(55);
			poke.setSpeed(70);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(87);
			poke.setNumber(87);
			poke.setName("Dewgong");
			poke.setType1("water");
			poke.setType2("ice");
			poke.setHp(405);
			poke.setAttack(90);
			poke.setDefense(70);
			poke.setSpecial(80);
			poke.setSpeed(95);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(88);
			poke.setNumber(88);
			poke.setName("Grimer");
			poke.setType1("poison");
			poke.setType2("None");
			poke.setHp(275);
			poke.setAttack(80);
			poke.setDefense(80);
			poke.setSpecial(50);
			poke.setSpeed(40);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(89);
			poke.setNumber(89);
			poke.setName("Muk");
			poke.setType1("poison");
			poke.setType2("None");
			poke.setHp(400);
			poke.setAttack(105);
			poke.setDefense(105);
			poke.setSpecial(75);
			poke.setSpeed(65);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(90);
			poke.setNumber(90);
			poke.setName("Shellder");
			poke.setType1("water");
			poke.setType2("None");
			poke.setHp(280);
			poke.setAttack(30);
			poke.setDefense(65);
			poke.setSpecial(100);
			poke.setSpeed(45);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(91);
			poke.setNumber(91);
			poke.setName("Cloyster");
			poke.setType1("water");
			poke.setType2("ice");
			poke.setHp(480);
			poke.setAttack(50);
			poke.setDefense(95);
			poke.setSpecial(180);
			poke.setSpeed(85);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(92);
			poke.setNumber(92);
			poke.setName("Gastly");
			poke.setType1("ghost");
			poke.setType2("poison");
			poke.setHp(275);
			poke.setAttack(30);
			poke.setDefense(35);
			poke.setSpecial(30);
			poke.setSpeed(100);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(93);
			poke.setNumber(93);
			poke.setName("Haunter");
			poke.setType1("ghost");
			poke.setType2("poison");
			poke.setHp(350);
			poke.setAttack(45);
			poke.setDefense(50);
			poke.setSpecial(45);
			poke.setSpeed(115);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(94);
			poke.setNumber(94);
			poke.setName("Gengar");
			poke.setType1("ghost");
			poke.setType2("poison");
			poke.setHp(425);
			poke.setAttack(60);
			poke.setDefense(65);
			poke.setSpecial(60);
			poke.setSpeed(130);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(95);
			poke.setNumber(95);
			poke.setName("Onix");
			poke.setType1("rock");
			poke.setType2("ground");
			poke.setHp(340);
			poke.setAttack(35);
			poke.setDefense(45);
			poke.setSpecial(160);
			poke.setSpeed(30);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(96);
			poke.setNumber(96);
			poke.setName("Drowzee");
			poke.setType1("psychic");
			poke.setType2("None");
			poke.setHp(285);
			poke.setAttack(60);
			poke.setDefense(48);
			poke.setSpecial(45);
			poke.setSpeed(90);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(97);
			poke.setNumber(97);
			poke.setName("Hypno");
			poke.setType1("psychic");
			poke.setType2("None");
			poke.setHp(410);
			poke.setAttack(85);
			poke.setDefense(73);
			poke.setSpecial(70);
			poke.setSpeed(115);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(98);
			poke.setNumber(98);
			poke.setName("Krabby");
			poke.setType1("water");
			poke.setType2("None");
			poke.setHp(300);
			poke.setAttack(30);
			poke.setDefense(105);
			poke.setSpecial(90);
			poke.setSpeed(25);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(99);
			poke.setNumber(99);
			poke.setName("Kingler");
			poke.setType1("water");
			poke.setType2("None");
			poke.setHp(425);
			poke.setAttack(55);
			poke.setDefense(130);
			poke.setSpecial(115);
			poke.setSpeed(50);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(100);
			poke.setNumber(100);
			poke.setName("Voltorb");
			poke.setType1("electric");
			poke.setType2("None");
			poke.setHp(275);
			poke.setAttack(40);
			poke.setDefense(30);
			poke.setSpecial(50);
			poke.setSpeed(55);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(101);
			poke.setNumber(101);
			poke.setName("Electrode");
			poke.setType1("electric");
			poke.setType2("None");
			poke.setHp(400);
			poke.setAttack(60);
			poke.setDefense(50);
			poke.setSpecial(70);
			poke.setSpeed(80);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(102);
			poke.setNumber(102);
			poke.setName("Exeggcute");
			poke.setType1("grass");
			poke.setType2("psychic");
			poke.setHp(280);
			poke.setAttack(60);
			poke.setDefense(40);
			poke.setSpecial(80);
			poke.setSpeed(60);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(103);
			poke.setNumber(103);
			poke.setName("Exeggutor");
			poke.setType1("grass");
			poke.setType2("psychic");
			poke.setHp(455);
			poke.setAttack(95);
			poke.setDefense(95);
			poke.setSpecial(85);
			poke.setSpeed(125);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(104);
			poke.setNumber(104);
			poke.setName("Cubone");
			poke.setType1("ground");
			poke.setType2("None");
			poke.setHp(270);
			poke.setAttack(50);
			poke.setDefense(50);
			poke.setSpecial(95);
			poke.setSpeed(40);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(105);
			poke.setNumber(105);
			poke.setName("Marowak");
			poke.setType1("ground");
			poke.setType2("None");
			poke.setHp(345);
			poke.setAttack(60);
			poke.setDefense(80);
			poke.setSpecial(110);
			poke.setSpeed(50);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(106);
			poke.setNumber(106);
			poke.setName("Hitmonlee");
			poke.setType1("fighting");
			poke.setType2("None");
			poke.setHp(345);
			poke.setAttack(50);
			poke.setDefense(120);
			poke.setSpecial(53);
			poke.setSpeed(35);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(107);
			poke.setNumber(107);
			poke.setName("Hitmonchan");
			poke.setType1("fighting");
			poke.setType2("None");
			poke.setHp(345);
			poke.setAttack(50);
			poke.setDefense(105);
			poke.setSpecial(79);
			poke.setSpeed(35);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(108);
			poke.setNumber(108);
			poke.setName("Lickitung");
			poke.setType1("normal");
			poke.setType2("None");
			poke.setHp(310);
			poke.setAttack(90);
			poke.setDefense(55);
			poke.setSpecial(75);
			poke.setSpeed(60);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(109);
			poke.setNumber(109);
			poke.setName("Koffing");
			poke.setType1("poison");
			poke.setType2("None");
			poke.setHp(295);
			poke.setAttack(40);
			poke.setDefense(65);
			poke.setSpecial(95);
			poke.setSpeed(60);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(110);
			poke.setNumber(110);
			poke.setName("Weezing");
			poke.setType1("poison");
			poke.setType2("None");
			poke.setHp(420);
			poke.setAttack(65);
			poke.setDefense(90);
			poke.setSpecial(120);
			poke.setSpeed(85);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(111);
			poke.setNumber(111);
			poke.setName("Rhyhorn");
			poke.setType1("ground");
			poke.setType2("rock");
			poke.setHp(315);
			poke.setAttack(80);
			poke.setDefense(85);
			poke.setSpecial(95);
			poke.setSpeed(30);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(112);
			poke.setNumber(112);
			poke.setName("Rhydon");
			poke.setType1("ground");
			poke.setType2("rock");
			poke.setHp(440);
			poke.setAttack(105);
			poke.setDefense(130);
			poke.setSpecial(120);
			poke.setSpeed(45);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(113);
			poke.setNumber(113);
			poke.setName("Chansey");
			poke.setType1("normal");
			poke.setType2("None");
			poke.setHp(415);
			poke.setAttack(250);
			poke.setDefense(5);
			poke.setSpecial(5);
			poke.setSpeed(105);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(114);
			poke.setNumber(114);
			poke.setName("Tangela");
			poke.setType1("grass");
			poke.setType2("None");
			poke.setHp(395);
			poke.setAttack(65);
			poke.setDefense(55);
			poke.setSpecial(115);
			poke.setSpeed(100);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(115);
			poke.setNumber(115);
			poke.setName("Kangaskhan");
			poke.setType1("normal");
			poke.setType2("None");
			poke.setHp(410);
			poke.setAttack(105);
			poke.setDefense(95);
			poke.setSpecial(80);
			poke.setSpeed(40);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(116);
			poke.setNumber(116);
			poke.setName("Horsea");
			poke.setType1("water");
			poke.setType2("None");
			poke.setHp(270);
			poke.setAttack(30);
			poke.setDefense(40);
			poke.setSpecial(70);
			poke.setSpeed(70);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(117);
			poke.setNumber(117);
			poke.setName("Seadra");
			poke.setType1("water");
			poke.setType2("None");
			poke.setHp(395);
			poke.setAttack(55);
			poke.setDefense(65);
			poke.setSpecial(95);
			poke.setSpeed(95);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(118);
			poke.setNumber(118);
			poke.setName("Goldeen");
			poke.setType1("water");
			poke.setType2("None");
			poke.setHp(285);
			poke.setAttack(45);
			poke.setDefense(67);
			poke.setSpecial(60);
			poke.setSpeed(50);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(119);
			poke.setNumber(119);
			poke.setName("Seaking");
			poke.setType1("water");
			poke.setType2("None");
			poke.setHp(385);
			poke.setAttack(80);
			poke.setDefense(92);
			poke.setSpecial(65);
			poke.setSpeed(80);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(120);
			poke.setNumber(120);
			poke.setName("Staryu");
			poke.setType1("water");
			poke.setType2("None");
			poke.setHp(285);
			poke.setAttack(30);
			poke.setDefense(45);
			poke.setSpecial(55);
			poke.setSpeed(70);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(121);
			poke.setNumber(121);
			poke.setName("Starmie");
			poke.setType1("water");
			poke.setType2("psychic");
			poke.setHp(435);
			poke.setAttack(60);
			poke.setDefense(75);
			poke.setSpecial(85);
			poke.setSpeed(100);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(122);
			poke.setNumber(122);
			poke.setName("MrMime");
			poke.setType1("psychic");
			poke.setType2("None");
			poke.setHp(340);
			poke.setAttack(40);
			poke.setDefense(45);
			poke.setSpecial(65);
			poke.setSpeed(100);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(123);
			poke.setNumber(123);
			poke.setName("Scyther");
			poke.setType1("bug");
			poke.setType2("flying");
			poke.setHp(420);
			poke.setAttack(70);
			poke.setDefense(110);
			poke.setSpecial(80);
			poke.setSpeed(55);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(124);
			poke.setNumber(124);
			poke.setName("Jynx");
			poke.setType1("ice");
			poke.setType2("psychic");
			poke.setHp(340);
			poke.setAttack(65);
			poke.setDefense(50);
			poke.setSpecial(35);
			poke.setSpeed(95);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(125);
			poke.setNumber(125);
			poke.setName("Electabuzz");
			poke.setType1("electric");
			poke.setType2("None");
			poke.setHp(395);
			poke.setAttack(65);
			poke.setDefense(83);
			poke.setSpecial(57);
			poke.setSpeed(85);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(126);
			poke.setNumber(126);
			poke.setName("Magmar");
			poke.setType1("fire");
			poke.setType2("None");
			poke.setHp(395);
			poke.setAttack(65);
			poke.setDefense(95);
			poke.setSpecial(57);
			poke.setSpeed(85);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(127);
			poke.setNumber(127);
			poke.setName("Pinsir");
			poke.setType1("bug");
			poke.setType2("None");
			poke.setHp(430);
			poke.setAttack(65);
			poke.setDefense(125);
			poke.setSpecial(100);
			poke.setSpeed(55);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(128);
			poke.setNumber(128);
			poke.setName("Tauros");
			poke.setType1("normal");
			poke.setType2("None");
			poke.setHp(450);
			poke.setAttack(75);
			poke.setDefense(100);
			poke.setSpecial(95);
			poke.setSpeed(70);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(129);
			poke.setNumber(129);
			poke.setName("Magikarp");
			poke.setType1("water");
			poke.setType2("None");
			poke.setHp(185);
			poke.setAttack(20);
			poke.setDefense(10);
			poke.setSpecial(55);
			poke.setSpeed(20);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(130);
			poke.setNumber(130);
			poke.setName("Gyarados");
			poke.setType1("water");
			poke.setType2("flying");
			poke.setHp(480);
			poke.setAttack(95);
			poke.setDefense(125);
			poke.setSpecial(79);
			poke.setSpeed(100);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(131);
			poke.setNumber(131);
			poke.setName("Lapras");
			poke.setType1("water");
			poke.setType2("ice");
			poke.setHp(450);
			poke.setAttack(130);
			poke.setDefense(85);
			poke.setSpecial(80);
			poke.setSpeed(95);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(132);
			poke.setNumber(132);
			poke.setName("Ditto");
			poke.setType1("normal");
			poke.setType2("None");
			poke.setHp(240);
			poke.setAttack(48);
			poke.setDefense(48);
			poke.setSpecial(48);
			poke.setSpeed(48);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(133);
			poke.setNumber(133);
			poke.setName("Eevee");
			poke.setType1("normal");
			poke.setType2("None");
			poke.setHp(280);
			poke.setAttack(55);
			poke.setDefense(55);
			poke.setSpecial(50);
			poke.setSpeed(65);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(134);
			poke.setNumber(134);
			poke.setName("Vaporeon");
			poke.setType1("water");
			poke.setType2("None");
			poke.setHp(430);
			poke.setAttack(130);
			poke.setDefense(65);
			poke.setSpecial(60);
			poke.setSpeed(110);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(135);
			poke.setNumber(135);
			poke.setName("Jolteon");
			poke.setType1("electric");
			poke.setType2("None");
			poke.setHp(430);
			poke.setAttack(65);
			poke.setDefense(65);
			poke.setSpecial(60);
			poke.setSpeed(110);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(136);
			poke.setNumber(136);
			poke.setName("Flareon");
			poke.setType1("fire");
			poke.setType2("None");
			poke.setHp(430);
			poke.setAttack(65);
			poke.setDefense(130);
			poke.setSpecial(60);
			poke.setSpeed(110);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(137);
			poke.setNumber(137);
			poke.setName("Porygon");
			poke.setType1("normal");
			poke.setType2("None");
			poke.setHp(310);
			poke.setAttack(65);
			poke.setDefense(60);
			poke.setSpecial(70);
			poke.setSpeed(75);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(138);
			poke.setNumber(138);
			poke.setName("Omanyte");
			poke.setType1("rock");
			poke.setType2("water");
			poke.setHp(300);
			poke.setAttack(35);
			poke.setDefense(40);
			poke.setSpecial(100);
			poke.setSpeed(90);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(139);
			poke.setNumber(139);
			poke.setName("Omastar");
			poke.setType1("rock");
			poke.setType2("water");
			poke.setHp(425);
			poke.setAttack(70);
			poke.setDefense(60);
			poke.setSpecial(125);
			poke.setSpeed(115);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(140);
			poke.setNumber(140);
			poke.setName("Kabuto");
			poke.setType1("rock");
			poke.setType2("water");
			poke.setHp(300);
			poke.setAttack(30);
			poke.setDefense(80);
			poke.setSpecial(90);
			poke.setSpeed(45);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(141);
			poke.setNumber(141);
			poke.setName("Kabutops");
			poke.setType1("rock");
			poke.setType2("water");
			poke.setHp(430);
			poke.setAttack(60);
			poke.setDefense(115);
			poke.setSpecial(105);
			poke.setSpeed(70);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(142);
			poke.setNumber(142);
			poke.setName("Aerodactyl");
			poke.setType1("rock");
			poke.setType2("flying");
			poke.setHp(440);
			poke.setAttack(80);
			poke.setDefense(105);
			poke.setSpecial(65);
			poke.setSpeed(60);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(143);
			poke.setNumber(143);
			poke.setName("Snorlax");
			poke.setType1("normal");
			poke.setType2("None");
			poke.setHp(430);
			poke.setAttack(160);
			poke.setDefense(110);
			poke.setSpecial(65);
			poke.setSpeed(65);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(144);
			poke.setNumber(144);
			poke.setName("Articuno");
			poke.setType1("ice");
			poke.setType2("flying");
			poke.setHp(485);
			poke.setAttack(90);
			poke.setDefense(85);
			poke.setSpecial(100);
			poke.setSpeed(125);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(145);
			poke.setNumber(145);
			poke.setName("Zapdos");
			poke.setType1("electric");
			poke.setType2("flying");
			poke.setHp(490);
			poke.setAttack(90);
			poke.setDefense(90);
			poke.setSpecial(85);
			poke.setSpeed(125);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(146);
			poke.setNumber(146);
			poke.setName("Moltres");
			poke.setType1("fire");
			poke.setType2("flying");
			poke.setHp(495);
			poke.setAttack(90);
			poke.setDefense(100);
			poke.setSpecial(90);
			poke.setSpeed(125);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(147);
			poke.setNumber(147);
			poke.setName("Dratini");
			poke.setType1("dragon");
			poke.setType2("None");
			poke.setHp(250);
			poke.setAttack(41);
			poke.setDefense(64);
			poke.setSpecial(45);
			poke.setSpeed(50);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(148);
			poke.setNumber(148);
			poke.setName("Dragonair");
			poke.setType1("dragon");
			poke.setType2("None");
			poke.setHp(350);
			poke.setAttack(61);
			poke.setDefense(84);
			poke.setSpecial(65);
			poke.setSpeed(70);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(149);
			poke.setNumber(149);
			poke.setName("Dragonite");
			poke.setType1("dragon");
			poke.setType2("flying");
			poke.setHp(500);
			poke.setAttack(91);
			poke.setDefense(134);
			poke.setSpecial(95);
			poke.setSpeed(100);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(150);
			poke.setNumber(150);
			poke.setName("Mewtwo");
			poke.setType1("psychic");
			poke.setType2("None");
			poke.setHp(590);
			poke.setAttack(106);
			poke.setDefense(110);
			poke.setSpecial(90);
			poke.setSpeed(154);
			pokemon.add(poke);

			poke = new PokemonTO();
			poke.setId(151);
			poke.setNumber(151);
			poke.setName("Mew");
			poke.setType1("psychic");
			poke.setType2("None");
			poke.setHp(500);
			poke.setAttack(100);
			poke.setDefense(100);
			poke.setSpecial(100);
			poke.setSpeed(100);
			pokemon.add(poke);
		}
		return pokemon;
	}
	
	
	public PokemonTO select(int id) {
		for (int i = 0; i < pokemon.size(); i++) {
			if (pokemon.get(i).getId() == id) {
				return pokemon.get(i);
			}
		}
		return null;
	}
	
	public boolean insert(PokemonTO pto) {
		pto.setId(pokemon.size() + 1);
		return pokemon.add(pto);
	}
	
	public void update(PokemonTO pto) {
		PokemonTO pk = select(pto.getId());
		pk.setName(pto.getName());
		pk.setType1(pto.getType1());
		pk.setType2(pto.getType2());
		pk.setHp(pto.getHp());
		pk.setAttack(pto.getAttack());
		pk.setDefense(pto.getDefense());
		pk.setSpeed(pto.getSpeed());
		pokemon.set((pk.getId() - 1), pk);
	}
	
	public void delete(int id) {
		pokemon.remove(select(id));
		
	}
	
//	 public List<PokemonTO> listarTodos(){
//	    	
//	    	try {
//	    		String sql = "SELECT p.id, p.numero, p.nome, p.tipo1, p.tipo2, p.hp, p.ataque, p.defesa, p.especial, p.velocidade FROM pokemons p;";
//	    		String sql = "SELECT * FROM pokemons;";
	    		
	    		
//	    		PreparedStatement ps = con.prepareStatement(sql);
//	    		ResultSet rs = ps.executeQuery();
//		        
//		        List<PokemonTO> listaPokemons = new ArrayList<>();
//		        
//		        while (rs.next()) {
//		        	PokemonTO poke = new PokemonTO(rs.getInt("ID"),
//		        			rs.getInt("NUMERO"), 
//		        			rs.getString("NOME"), 
//		        			rs.getString("TIPO1"), 
//		        			rs.getString("TIPO2"), 
//		        			rs.getInt("HP"),
//		        			rs.getInt("ATAQUE"),
//		        			rs.getInt("DEFESA"),
//		        			rs.getInt("ESPECIAL"),
//		        			rs.getInt("VELOCIDADE"));
//		                	listaPokemons.add(poke);
//		                	System.out.println(poke);
//	            }
//		        
//	            ps.close();
//	            return listaPokemons;
//	            
//	        } catch (SQLException throwables) {
//	        	System.out.println("////////////////....................");
//	            throwables.printStackTrace();
//	        }
//	        return null;
//	    }
	}

