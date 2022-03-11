package br.com.pokemon.resource.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

import javax.swing.JOptionPane;

public class ConnectionFactory {

	public static Connection getConnection() {
		
		try {
			System.out.println("Conectando....................");
			
			String url = "jdbc:oracle:thin:@oracle.fiap.com.br:1521:ORCL";
			String username = "RM86904";
			String password = "220295";

			Class.forName("oracle.jdbc.driver.OracleDriver");
			
			Connection connection = DriverManager.getConnection(url, username, password);
			JOptionPane.showMessageDialog(null, "Conectado com sucesso");
			return connection;
			
			
		} catch (SQLException | ClassNotFoundException e) {
			JOptionPane.showMessageDialog(null, "Erro ao conectar: " + e.getMessage());
			System.out.println(e.getMessage());
		}
		return null;

	}
}
