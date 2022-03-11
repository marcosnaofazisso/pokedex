package br.com.pokemon.resource;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriBuilder;
import javax.ws.rs.core.UriInfo;

import br.com.pokemon.resource.bo.PokemonBO;
import br.com.pokemon.resource.to.PokemonTO;

@Path("/pokemons")
public class PokemonResource {
	
	private PokemonBO pb = new PokemonBO();
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<PokemonTO> buscar() {
		return pb.listar();
	}
	
	@GET
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public PokemonTO buscar(@PathParam("id") int id) {
		return pb.listar(id);
	}
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public Response cadastrar(PokemonTO poke, @Context UriInfo uriInfo) {
		pb.inserir(poke);
		UriBuilder builder = uriInfo.getAbsolutePathBuilder();
		builder.path(Integer.toString(poke.getId()));
		return Response.created(builder.build()).build();
	}
	
	@PUT
	@Path("/{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response atualiza(PokemonTO poke, @PathParam("id") int id) {
		poke.setId(id);
		pb.atualizar(poke);
		return Response.ok().build();	
	}
	
	@DELETE
	@Path("/{id}")
	public void excluir(@PathParam("id") int id) {
		pb.deletar(id);
	}
	

}
