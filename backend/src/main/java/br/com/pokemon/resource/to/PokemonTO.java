package br.com.pokemon.resource.to;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class PokemonTO {
	
	private int id;
	private int number;
	private String name;
	private String type1;
	private String type2;
	private int hp;
	private int attack;
	private int defense;
	private int special;
	private int speed;

	public PokemonTO() {
	}

	public PokemonTO(int id, int number, String name, String type1, String type2, int hp, int attack, int defense,
			int special, int speed) {
		super();
		this.id = id;
		this.number = number;
		this.name = name;
		this.type1 = type1;
		this.type2 = type2;
		this.hp = hp;
		this.attack = attack;
		this.defense = defense;
		this.special = special;
		this.speed = speed;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getNumber() {
		return number;
	}

	public void setNumber(int number) {
		this.number = number;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getType1() {
		return type1;
	}

	public void setType1(String type1) {
		this.type1 = type1;
	}

	public String getType2() {
		return type2;
	}

	public void setType2(String type2) {
		this.type2 = type2;
	}

	public int getHp() {
		return hp;
	}

	public void setHp(int hp) {
		this.hp = hp;
	}

	public int getAttack() {
		return attack;
	}

	public void setAttack(int attack) {
		this.attack = attack;
	}

	public int getDefense() {
		return defense;
	}

	public void setDefense(int defense) {
		this.defense = defense;
	}

	public int getSpecial() {
		return special;
	}

	public void setSpecial(int special) {
		this.special = special;
	}

	public int getSpeed() {
		return speed;
	}

	public void setSpeed(int speed) {
		this.speed = speed;
	}
	
	@Override
    public String toString() {
        return "pokemonTO{" +
                "id=" + id +
                ", numero=" + number +
                ", nome=" + name +
                ", hp=" + hp +
                ", ataque=" + attack +
                ", defesa=" + defense +
                ", especial=" + special +
                ", velocidade=" + speed+
                '}';
    }

	
}
