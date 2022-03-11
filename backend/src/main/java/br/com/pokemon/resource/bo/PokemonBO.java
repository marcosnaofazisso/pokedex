package br.com.pokemon.resource.bo;

import java.util.List;
import br.com.pokemon.resource.dao.PokemonDAO;
import br.com.pokemon.resource.to.PokemonTO;

public class PokemonBO {
	
	private PokemonDAO pd = null;
	
	public List<PokemonTO> listar() {
		pd = new PokemonDAO();
		return pd.select();
	}

	public PokemonTO listar(int id) {
		pd = new PokemonDAO();
		return pd.select(id);
	}
	
	public boolean inserir(PokemonTO pto) {
		pd = new PokemonDAO();
		return pd.insert(pto);
	}
	
	public void atualizar(PokemonTO pto) {
		pd = new PokemonDAO();
		pd.update(pto);
	}
	
	public void deletar(int id) {
		pd = new PokemonDAO();
		pd.delete(id);
	}

}
